import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteStudentThunk } from '../reducers/student';

export class StudentList extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.deleteStudentThunk(id);
  }

  render(){
    console.log(this.props);
    const students = this.props.students;
    const hideCampus = this.props.hideCampus ? this.props.hideCampus : false;
    return !students ? null : (
      <table className="table">
        <thead>
          <tr>
            <th />
            <th>Name</th>
            {hideCampus ? null : <th>Campus</th> }
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
          <tr key={student.id}>
            <td>
              <Link to={`/student/${student.id}`} className="fa fa-info-circle" />
            </td>
            <td>{student.name}</td>
            {hideCampus ? null : <td>
              <Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link>
              </td> }
            <td><a className="fa fa-envelope" /></td>
            <td><Link to={`/student/${student.id}`} className="fa fa-pencil" /></td>
            <td><a className="fa fa-trash" onClick={() => this.handleClick(student.id)} /></td>
          </tr>
          )
        )}
        <tr>
          <td>
            <Link to="/student/add">
              <i className="fa fa-sm fa-plus" aria-hidden="true" />
            </Link>
          </td>
        </tr>
        </tbody>
      </table>
    );
  }
}

const mapToProps = ( _ , ownProps) => ({ownProps});
const mapToDispatch = {deleteStudentThunk};

export default connect(mapToProps, mapToDispatch)(StudentList);
