import React,{useState} from 'react'
export default function Todo(){
    const [formData,submitFormData]=useState({time:"",note:""});
    const [tableData,submitTable]=useState([])
    function HandleForm(e){
        const {name,value} = e.target
        submitFormData({...formData,[name]:value});
    }
    function HandleSubmit(){
        submitTable([...tableData,formData]);
        submitFormData({
            time:"",
            note:""
        })

    }    
    return(
     <div>
        <div>
            <h2>Todo List</h2>
            <input name="time" type="time" value={formData.time} onChange={HandleForm} />
            <input name="note" type="text" value={formData.note}   onChange={HandleForm} />
            <button onClick={HandleSubmit}>Submit</button>
            <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Note</th>
                        </tr>
                    </thead>                                                                                            
                    <tbody>
                        {tableData.map((data,index)=>(
                        <tr>
                            <td>{data.time}</td>
                            <td>{data.note}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>

        </div>
     </div>
    )
}