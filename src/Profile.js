import React from 'react';
import manpic from './man.svg';

import data from './data/data.json';


function Profilepath(props) {
        let info=data.profiles[props.location.data.id]
        
  return (
    <div className="container">
        <div className="row justify-content-center">
        <div className=" card col-lg-3 col-md-3 col-sm-8 col-xs-12">
            <div className="card-body text-center">
                 <img src={manpic} className="logo" alt="manpic"></img>
                    <h1> {info.list.name}</h1>
                    <h5> {info.list.role}</h5>
                    <h5> {info.list.address}</h5>
            </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-8 col-xs-12">
        <div className="card-body text-center">
                
                    <h3>Career Objective:</h3>{info.list.career}
                    <h3>Education Qualification:</h3>{info.list.career}
                    <table>
                        <tr>
                            <th>S.NO</th>
                            <th>College</th>
                            <th>Branch</th>
                        </tr>
                        <tr>
                            <td>{info.list.table.sno}</td>
                            <td>{info.list.table.college}</td>
                            <td>{info.list.table.branch}</td>
                        </tr>
                    </table>

                    <h3>Skills:</h3>{info.list.skills}
                    <h3>Hobbies:</h3>{info.list.hobbies}
                    <h3>Declaration:</h3>{info.list.declaration}

        </div>
        </div>
        </div>
    </div>
  );
}



export default Profilepath;

