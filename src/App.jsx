import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './page/Home';
import Fitness from './page/Fitness';
import Nutrition from './page/Nutrition';
import Mindful from './page/Mindful';
import Support from  './page/Support';

const routes=(
  <Router>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/fitness" exact element={<Fitness/>}/>
      <Route path="/nutrition" exact element={<Nutrition/>}/>
      <Route path="/mindful" exact element={<Mindful/>}/>
      <Route path="/support" exact element={<Support/>}/>
    </Routes>
  </Router>
);


const App = () => {
  return (
    <div>{routes}</div>
  )
}

export default App