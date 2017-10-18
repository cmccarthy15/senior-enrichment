import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { findCampusThunk } from '../reducers/selectedCampus';
import StudentList from './StudentList';

export class OneCampus extends Component{
  componentDidMount(){
    this.props.findCampusThunk(this.props.ownProps.match.params.id);
  }

  render(){
    const {selectedCampus} = this.props;
    return (!selectedCampus) ? null : (
      <div className="single-campus-page" >
        <h2>{selectedCampus.name}</h2>
        <div className="single-campus row">
          <div className="campus-info column box">
            <img src={selectedCampus.image} />
            <p>{`Sunside: ${selectedCampus.sunside}`}</p>
            <p>{`Darkside: ${selectedCampus.darkside}`}</p>
          </div>
          <div className="student-info box">
            <h5 className="title is-4">Students</h5>
            <StudentList students={selectedCampus.students} hideCampus={true} />

            { /* selectedCampus.students.map(student =>
              (<p key={student.id}>{student.name} <a className="delete" /></p>)
            ) */ }
          </div>
        </div>
      </div>
    );
  }
}

const mapToProps = ({campuses, selectedCampus}, ownProps) => ({campuses, selectedCampus, ownProps});
const mapToDispatch = { findCampusThunk };

export default connect(mapToProps, mapToDispatch)(OneCampus);
