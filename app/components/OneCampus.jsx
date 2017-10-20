import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import React, { Component } from 'react';
import { findCampusThunk } from '../reducers/selectedCampus';
import { updateCampusThunk } from '../reducers/campus';
import StudentList from './StudentList';

export class OneCampus extends Component{
  constructor(props){
    super(props);
    this.state = {name: '', image: '', id: '', sunside: '', darkside: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.findCampusThunk(this.props.ownProps.match.params.id)
    .then(() => { this.setState(this.props.selectedCampus); });
  }

  handleChange(evt){
    const target = evt.target;
    this.setState({[target.name]: target.value});
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.updateCampusThunk(this.state);
    this.props.history.push(`/campus`);
  }

  render(){
    const {selectedCampus} = this.props;
    const campus = this.state;
    return (!selectedCampus) ? null : (
      <div className="single-campus-page" >


        <div className="single-campus row">
          <div className="campus-info column box">
            <input
            className="title is-4"
            type="text"
            name="name"
            value={campus.name}
            onChange={this.handleChange} />

            <img src={selectedCampus.image} />

            <h1>Sunside</h1>
            <textarea
            className="textarea"
            type="text"
            name="sunside"
            value={campus.sunside}
            onChange={this.handleChange} />

            <h1>Darkside</h1>
            <textarea
            className="textarea"
            type="text"
            name="darkside"
            value={campus.darkside}
            onChange={this.handleChange} />
            <button type="submit" onClick={this.handleSubmit}>Update Campus</button>
          </div>

          <div className="student-info box">
            <h5 className="title is-4">Students</h5>
            <StudentList students={selectedCampus.students} hideCampus={selectedCampus.id} />
          </div>
        </div>
      </div>
    );
  }

}

const mapToProps = ({campuses, selectedCampus}, ownProps) => ({campuses, selectedCampus, ownProps});
const mapToDispatch = { findCampusThunk, updateCampusThunk };

export default withRouter(connect(mapToProps, mapToDispatch)(OneCampus));
