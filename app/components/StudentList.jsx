import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { deleteStudentThunk } from '../reducers/student';
import { findCampusThunk } from '../reducers/selectedCampus';

export class StudentList extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.deleteStudentThunk(id);
    if (this.props.hideCampus) { this.props.findCampusThunk(this.props.hideCampus); }
  }

  render(){
    const students = this.props.students;
    const hideCampus = this.props.hideCampus ? this.props.hideCampus : false;
    return !students ? null : (
      <table className="table studentlist">
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
            {hideCampus ? false : <td>
              { student.campus ?
                <Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link>
                : <Link to={`/campus/`}>Not Assigned</Link> }
              </td> }
            <td><a className="fa fa-envelope" href={`mailto:${student.email}`} /></td>
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
const mapToDispatch = {deleteStudentThunk, findCampusThunk};

export default withRouter(connect(mapToProps, mapToDispatch)(StudentList));
