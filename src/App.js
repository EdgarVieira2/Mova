import React from "react";
import {BrowserRouter as  Router,Route} from 'react-router-dom'
import Paises from "./components/Paises";
import Menu from "./components/NavBar/NavBar"
import Filter from './components/Filtro'
import Country from "./components/Country";


 function App() {
  return (
    <Router>
      <Menu/> 
    <Route exact path="/">
      <Filter/>
      <Paises />
    </Route>
    <Route path='/paises/:name' children={<Country />}>
    </Route>
    </Router>
  );
}
export default App