import React from 'react';
import { Link } from 'react-router-dom';

export default function StudentList(props){
  return (
    <div className="studentlist">
      <div className="studentlist-bar">
        <h3>#</h3>
        <h3>Name</h3>
        <h3>Campus</h3>
        <h3>Contact</h3>
        <h3>Edit</h3>
      </div>
      {// map across all the students in props, the last two will be symbols
      }
      <li className="student-item">
        <p>1</p>
        <p>Micah</p>
        <p>Swarthmore</p>
        <p>Contact</p>
        <p>Edit</p>
    </li>
    </div>
  );
}
