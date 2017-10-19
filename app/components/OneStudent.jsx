import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import React, { Component } from 'react';
import { findStudentThunk } from '../reducers/selectedStudent';
import { updateStudentThunk } from '../reducers/student';

export class OneStudent extends Component{
  constructor(props){
    super(props);
    this.state = {name: '', campusId: '', id: '', email: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.findStudentThunk(this.props.ownProps.match.params.id)
    .then(() => {
      this.setState(this.props.selectedStudent);
    });
  }

  handleChange(evt){
    const target = evt.target;
    this.setState({[target.name]: target.value});
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.updateStudentThunk(this.state);
    this.props.history.push(`/student`);
  }

  render(){
    const student = this.props.selectedStudent;
    console.log('selected student: ', student);
    const campuses = this.props.campuses;
    console.log('state is: ', this.state);
    return (!student) ? (<h1>Loading</h1>) : (

      <div className="singlestudent">

        <input
          className="input"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange} />

          <input
          className="input"
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange} />

        <select
          name="campusId"
          value={this.state.campusId}
          onChange={this.handleChange} >

        {campuses.map(campus => (
          <option key={campus.id} value={campus.id}>{campus.name}</option>
        ))}
      </select>

        <NavLink to={`/campus/${student.campus.id}`}>
          <img className="student-image" src={student.campus.image} />
        </NavLink>

        <button type="submit" onClick={this.handleSubmit}>Update Student</button>
      </div>
    );
  }
}

const mapToProps = ({ selectedStudent, campuses }, ownProps) => ({ selectedStudent, campuses, ownProps});
const mapToDispatch = { findStudentThunk, updateStudentThunk };

export default withRouter(connect(mapToProps, mapToDispatch)(OneStudent));
