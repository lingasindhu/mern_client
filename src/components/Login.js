import React, { useState, useContext } from 'react';
import { MyContext } from '../Mycontext';
import index from '../index.css';
export default function Login() {
    const [uname, setUname] = useState("");
    const [pass, setPass] = useState("");
    const [userr,setUserr]=useState("");
    const { table } = useContext(MyContext);

    function handleSubmit() {
        const user = table.find(user => user.name === uname && user.pass === pass);
        setUserr(user)
        if (user) {
            alert("Login Successful");
        } else {
            alert("Invalid credentials");
        }
    }

    return (
        <div>
            <div className="flex-inline max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-10">
            <div class="text-blue-500 font-bold  text-center justify-center text-2xl"><h1>Login</h1></div>
            <div class=" "> Username: <div class=" m-3  justify-center  "> <input class="border-solid"
                value={uname}
                onChange={(e) => setUname(e.target.value)}
                placeholder="Enter User Name"
            /></div></div>
            <br />
            <div>Password:</div> <div class="text-center m-3 flex   w-2"><input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Enter Password"
            /></div>
            <br />
           <div  className="bg-green-500  text-center hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"><button onClick={handleSubmit}>Submit</button></div> 
            </div>
        </div>
    );
}
