import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Feedback from './components/Feedback';
import Display from './components/Display';
import TodoList from './components/Todo';
import Feed from './components/Feed';
import { MyProvider } from './Mycontext'; // Ensure the correct path

const root = document.getElementById('root');
const VirtualRoot = ReactDOM.createRoot(root);

VirtualRoot.render(
  <MyProvider>
    <Router>
      <div>
        <Header/>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/display" element={<Display />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  </MyProvider>
);