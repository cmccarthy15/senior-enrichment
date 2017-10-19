import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import store from '../store';
import { addCampusThunk } from '../reducers/campus';

export class CampusForm extends Component{
  constructor(props){
    super(props);
    this.state = {name: '', image: '', sunside: '', darkside: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    //const target = event.target;
    console.log('handling submit: ', this.state);
    this.props.addCampusThunk(this.state)
    .then( () => {
      this.props.history.push('/campus');
    });
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit} className="addcampus">
        <h1>Add Campus</h1>
        <label>
          Campus Name:
          <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange} />
        </label>
        <label>
          Image Link:
          <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleChange} />
        </label>
        <label>
          Sunside Description:
          <input
              type="text"
              name="sunside"
              value={this.state.sunside}
              placeholder="What are the positive aspects of this sign?"
              onChange={this.handleChange} />
        </label>
        <label>
          Darkside Description:
          <input
              type="text"
              name="darkside"
              value={this.state.darkside}
              placeholder="What is the darkside of this sign?"
              onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" className="button is-link" />
      </form>
    );
  }

}

const mapToProps = null;
const mapToDispatch = { addCampusThunk };

export default withRouter(connect(mapToProps, mapToDispatch)(CampusForm));
