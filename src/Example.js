// Example.js
import React from 'react';
import { MyProvider } from "./Mycontext"; // Ensure the correct path
import Register from './components/Register';
import Login from './components/Login';
import Profile from './Profile';

export default function Example() {
    return (
        <MyProvider>
            <Register />
            <Login />
            <Profile />
        </MyProvider>
    );
}
