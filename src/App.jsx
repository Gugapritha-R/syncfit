import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './page/Home';
import Fitness from './page/Fitness';
import Nutrition from './page/Nutrition';
import Mindful from './page/Mindful';
import Support from  './page/Support';
import Exercise from './page/fitness/Exercise';
import Bmi from './page/fitness/Bmi';
import Calorie from './page/fitness/Calorie';

const routes=(
  <Router>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/fitness" exact element={<Fitness/>}/>
      <Route path="/nutrition" exact element={<Nutrition/>}/>
      <Route path="/mindful" exact element={<Mindful/>}/>
      <Route path="/support" exact element={<Support/>}/>
      <Route path="/exercise" exact element={<Exercise/>}/>
      <Route path="/bmi" exact element={<Bmi/>}/>
      <Route path="/calorie" exact element={<Calorie/>}/>
    </Routes>
  </Router>
);


const App = () => {
  return (
    <div>{routes}</div>
  )
}

export default App