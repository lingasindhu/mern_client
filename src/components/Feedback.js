import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Feedback() {
  const [uname, setUname] = useState('');
  const [age, setAge] = useState('');
  const [rollno, setRollno] = useState('');
  const [clas, setClas] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/display', { state: { uname, age, rollno, clas, message } });
  };

  return (
    <div>
      <h1>Feedback</h1>
      <input value={uname} onChange={(e) => setUname(e.target.value)} placeholder="Enter User Name" />
      <br />
      <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter age" />
      <br />
      <input value={rollno} onChange={(e) => setRollno(e.target.value)} placeholder="Enter Rollno" />
      <br />
      <input value={clas} onChange={(e) => setClas(e.target.value)} placeholder="Enter clas" />
      <br />
      <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter message" />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
   );
}