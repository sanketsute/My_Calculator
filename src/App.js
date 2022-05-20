import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Demo from './Demo';
import Add from "./Add";
import Substract from "./Substract";
import Multiply from "./Multiply";
import Divide from "./Divide"

function App() {
  const [inputs,setInputs]=useState({first:"",second:"",third:"Add"});
  const [bool,setbool]=useState(false);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    setbool(false);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setbool(true);
    
    
  }
  return (<div className='container'> 
  <form onSubmit={handleSubmit}>
  <div className="form-group form-control-lg">
  <input placeholder='first Number' name='first' onChange={handleChange} value={inputs.first}/></div>
  <div className="form-group form-control-lg">
  <input placeholder='second Number' name='second' onChange={handleChange} value={inputs.second}/></div>
  <select name="third" value={inputs.third} onChange={handleChange}>
        <option value="Add">Add</option>
        <option value="Substract">Substract</option>
        <option value="Multiply">Multiply</option>
        <option value ="Divide">Divide</option>

      </select>
      <input className='btn btn-light' type="submit" />
  
  </form>
  
  {(bool) &&((inputs.third=="Add")&&<Add  x={inputs.first} y={inputs.second}/>)}
  {(bool)&&((inputs.third=="Substract")&&<Substract  x={inputs.first} y={inputs.second}/>)}
  {(bool)&&((inputs.third=="Multiply")&&<Multiply  x={inputs.first} y={inputs.second}/>)}
  {(bool)&&((inputs.third=="Divide")&&<Divide  x={inputs.first} y={inputs.second}/>)}
  </div>)
   
}

export default App;
