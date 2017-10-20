import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../store';
import StudentList from './StudentList';

class AllStudent extends Component {

  render(){
    const students = this.props.students;
    return (
      <div>
        <div className="titlerow">
          <h2 className="title is-2 allstudents">All Students</h2>
        </div>
        <StudentList students={students} />
      </div>
    );
  }
}

const mapToProps = () => ({students}) => ({students});
const mapToDispatch = null;

export default connect(mapToProps, mapToDispatch)(AllStudent);
