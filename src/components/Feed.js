import React, { useState } from 'react';
export default function Feed(){
    const [formData,submitFormData]=useState({
        name:"",
        roll:"",
        feed:""
    })
    const [table,submitTable]=useState([])
    function HandleChange(e){
        const {name,value} = e.target;
        submitFormData({...formData,[name]:value});
    }
    function handleSubmit(){
        submitTable([...table,formData]);
        submitFormData({
            name:"",
            roll:"",
            feed:""
        })
    }
    return(
        <div>
            <div>
            <h1>Feedback</h1>
           <input name="name" type="text"  value={formData.name}  onChange={HandleChange} placeholder="Enter User Name" />
           <br />
           <input  name="roll" type="text" value={formData.roll} onChange={HandleChange} placeholder="Enter User rollno" />
           <br />
           <input  name="feed" type="text" value={formData.feed} onChange={HandleChange} placeholder="Enter User feedback" />
           <br />
           <button onClick={handleSubmit}>Submit</button>
           <table>
           <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rollno</th>
                            <th>Feedback</th>
                        </tr>
            </thead> 
            <tbody>
                        {table.map((key,index)=>(
                        <tr>
                            <td>{key.name}</td>
                            <td>{key.roll}</td>
                            <td>{key.feed}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
        
      </div>
        </div>
    )
}