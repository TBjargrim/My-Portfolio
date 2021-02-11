import React, { useState, useEffect, useRef } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Burger from './Components/Burger';
import Menu from './Components/Menu';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

// Themeprovider is a wrapping compunent, uses the Context API to make our theme varibles available to the whole component tree
import { ThemeProvider } from 'styled-components';
import { theme } from './Styles/theme';
import { AnimatePresence } from 'framer-motion';




const GlobalStyle = createGlobalStyle`
* {
      margin: 0;
      font-family: 'Roboto', sans-serif;
      background-color:black;

}
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; */
    height: 100vh;

  }
`

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)){
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown',listener);
    return() => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref,handler],
  );
};


function App() {
  const [name, setName] = useState();
  const [open, setOpen] = useState(false);
  const node = useRef();
  // const location = useLocation();
  useOnClickOutside(node, () => setOpen(false));



  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div>
          <div ref={node}>
          <Burger open={open} setOpen={setOpen}/>
          <Menu open={open} setOpen={setOpen}/>
          </div>
      <AnimatePresence exitBeforeEnter>
            <Switch>
              {/* location={location} key={location.pathname} */}
          <Route path='/about'> <About /> </Route>
          <Route path='/projects'> <Projects /> </Route>
          <Route path='/contact'> <Contact name={name} setName={setName} /> </Route>
          <Route path='/'> <Home /> </Route>
        </Switch>
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider >
  );
}

export default App;
