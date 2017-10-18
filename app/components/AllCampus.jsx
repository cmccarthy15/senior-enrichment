import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { deleteCampusThunk } from '../reducers/campus';


class AllCampus extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.deleteCampusThunk(id);
  }

  render(){
    const campuses = this.props.campuses;
    return (
      <div className="allcampuscomp">
        <div className="titlerow">
          <h2 className="title is-2">All Campuses</h2>
          <Link to="/campus/add">
            <i className="fa fa-sm fa-plus" aria-hidden="true" />
          </Link>
        </div>
        <div className="campuses row">
          {campuses.map(campus => (
            <div className="box" key={campus.id}>
              <NavLink to={`/campus/${campus.id}`} className="campus">
                <img src={campus.image} />
              </NavLink>
              <div className="row">
                <NavLink to={`/campus/${campus.id}`} className="campus">
                  <h2>{campus.name}</h2>
                </NavLink>
                <i onClick={() => this.handleClick(campus.id)} name={campus.id} className="delete" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapToProps = () => ({campuses}) => ({campuses});
const mapToDispatch = { deleteCampusThunk };

export default connect(mapToProps, mapToDispatch)(AllCampus);
