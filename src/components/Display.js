import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Display() {
  const location = useLocation();
  const { uname, age, rollno, clas, message } = location.state || {};

  return (
    <div>
      <h1>Feedback Details</h1>
      <table border="1">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Age</th>
            <th>Roll No</th>
            <th>Class</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{uname}</td>
            <td>{age}</td>
            <td>{rollno}</td>
            <td>{clas}</td>
            <td>{message}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}