import React, { useState, useContext } from 'react';
import { MyContext } from '../Mycontext';
export default function Profile(){
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
    const { table } = useContext(MyContext);
    return(
        <div>
            
        </div>
    )
}  