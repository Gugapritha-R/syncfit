import React from 'react';
import Navbar from '../components/Navbar';
import { Card } from 'antd';
import exercise from '../assets/exercise.png';
import bmi from '../assets/bmi.png';
import caloric from '../assets/caloric.png';
import { useNavigate } from 'react-router-dom';

const Fitness = () => {


const navigate=useNavigate();

const exerciseTab=()=>{

  navigate('/exercise');
}


const bmiTab=()=>{

  navigate('/bmi');
}


const calorieTab=()=>{

  navigate('/calorie');
}



  return (
    <div style={{
      backgroundColor: "black",
      minHeight: "100vh", 
      color: "white", 
    }}>
      <Navbar />

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        padding: "120px",
      }}>
        
        <button onClick={exerciseTab} style={{cursor:"pointer"}}>
          <Card style={{ width: 240 }} cover={<img src={exercise} alt="Exercise" />}>
            <Card.Meta title="Exercises" description="Various exercises to stay fit" />
          </Card>
        </button>


        <button onClick={bmiTab} style={{cursor:"pointer"}}>
          <Card style={{ width: 240 }} cover={<img src={bmi} alt="BMI Calculator" />}>
            <Card.Meta title="BMI" description="Body Mass Index Calculator" />
          </Card>
        </button>


        <button onClick={calorieTab} style={{cursor:"pointer"}}>
          <Card style={{ width: 240 }} cover={<img src={caloric} alt="Calorie Needs" />}>
            <Card.Meta title="Calorie Needs" description="Calculate daily caloric needs" />
          </Card>
        </button>

      </div>
    </div>
  );
};

export default Fitness;
