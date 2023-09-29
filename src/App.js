import {TextField,Stack} from '@mui/material';
import { Button } from '@mui/material';
import './App.css';
import React ,{useState} from 'react';
import img1 from './467-4676815_our-mission-is-to-provide-healthy-lifestyle-options-removebg-preview.png'


function App() {
  
    const[age,setAge]=useState()
    const[weight,setWeight]=useState("")
    const[height,setHeight]=useState("")
    const[bmi,setBmi]=useState()
    const[msg,setMsg]=useState()


    
      const handleReset=()=>{
       window.location.reload()
  
      }

     
    


    
    const handleCalculate=(e)=>{
      e.preventDefault()

      if(weight==="" || height===""){
        alert("Please enter your Age,Weight and Height")
      }
  
      else if(bmi<18.5){
        setMsg("You are Underweight")
      }
      else if(bmi>=18.5 && bmi<=24.9){
        setMsg("You are Healthy")
      }
      else if (bmi>=25 && bmi<= 29.9) {
        setMsg("Overweight");
      }
      else if( bmi>= 29.9){
        setMsg("You are Obese,please seek for medication")
      }
      else{
        let bmiFormula=((weight/height/height)*10000)
        setBmi(bmiFormula.toFixed(2))
      }

    }



    
  return (
    <div style={{ height: '100vh' }} className="main d-flex justify-content-center align-items-center bg-dark p-5">
    <div style={{width:'35%'}}className='data-field  rounded p-5 shadow'>
    <h1 className='d-flex justify-content-center'>BMI Calculator</h1> 
  <form onSubmit={(e)=>handleCalculate(e)}>
      <div className='mb-3'>
           <h5>Age:</h5>
           <TextField className='w-100' id="outlined-basic" label="Enter Your Age" variant="outlined" type="number" value={age} onChange={(e)=>setAge(e.target.value)} name='Age'/>
      </div>
     
      <div className='mb-3'>
        <h5>Weight:</h5>
           <TextField className='w-100' id="outlined-basic" label="Enter Your Weight (kg)" variant="outlined" type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} name='Weight' />
      </div>
      
      <div className='mb-3'>
        <h5>Height:</h5>
           <TextField className='w-100' id="outlined-basic" label="Enter Your Height (cm)" variant="outlined" type="number" value={height} onChange={(e)=>setHeight(e.target.value)} name='Height'/>
      </div>
     
        
      <Stack direction="row" spacing={2}>
          <Button type='submit'  className='calculate' variant="contained" >Calculate</Button>
          <Button  style={{width:'200px',height:'40px'}} className='reload bg-dark text-light' variant="outlined" onClick={handleReset}>Reload</Button>
      </Stack>
      <div className='result mt-3'>
        <h4>Your BMI :{bmi}</h4>
        <p className='p-msg'>{msg}</p>
      </div>
  </form>
 
    </div>
  
    <div style={{width:'27%'}}className='bmi-details p-5'>
    <h4> Calculate Your Body Mass Index</h4>
    Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.
      <div><img style={{width:'150px'}} src={img1} alt=""/></div>
    <h4>BMI Categories </h4>
    <p>Underweight = Less than 18.5 <br/>
      Normal weight = 18.5 – 24.9 <br/>
      Overweight = 25 – 29.9 <br/>
      Obesity = BMI of 30 or greater</p>
    </div>
    </div>
  );
}

export default App;
