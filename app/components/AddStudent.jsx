import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { addStudentThunk } from '../reducers/student';

export class StudentForm extends Component{
  constructor(props){
    super(props);
    this.state = {name: '', email: '', campusId: '1'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: target.value });
    console.log(event.target, event.target.name, event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('trying to handle student submit with: ', this.state);
    //const target = event.target;
    this.props.addStudentThunk(this.state);
    this.props.history.push('/student');

  }

  render() {
    const campuses = this.props.campuses;
    return (
      <form onSubmit={this.handleSubmit} className="addcampus">
        <h1>Add Campus</h1>
        <label>
          Name:
          <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange} />
        </label>
        <label>
          Campus:
          <select name="campusId" value={this.state.campusId} onChange={this.handleChange}>
            {campuses.map(campus => (
              <option key={campus.id} value={campus.id}>{campus.name}</option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" className="button is-link" />
      </form>
    );
  }

}

const mapToProps = ({campuses}) => ({campuses});
const mapToDispatch = { addStudentThunk };

export default withRouter(connect(mapToProps, mapToDispatch)(StudentForm));
