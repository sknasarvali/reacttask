import React from 'react';
import './App.css';
import './bootstrap/bootstrap.min.css';
import manpic from './man.svg';
import data from './data/data.json';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Profilepath from './Profile';

function App() {

  return (
    <BrowserRouter>
      <Route exact path='/' component={Resume}/>
      <Route exact path='/profile' component={Profilepath}/>
      
    </BrowserRouter>
  );
}

let Resume=()=>{
    let profile=data.profiles;
    let index;
  return(
    <div className="row mt-5 justify-content-center" >
      {profile.map((values)=>(
        <div className="col-lg-4 col-md-4 col-sm-10" key={index} >
        <div className="card ml-5">
          <div className="card-body text-center">
          <img src={manpic} className="logo" alt="manpic"></img>
          <h1> {values.list.name}</h1>
          <h5> {values.list.role}</h5>
          <h5> {values.list.address}</h5>
          <Link to={{pathname:'/profile',data:{id:index}}} className="btn btn-success">View Profile</Link>
        </div>
        
          </div>
          </div>
        
        
      
      ))}
    
    </div>
  );
}

export default App;
