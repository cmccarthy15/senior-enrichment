import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddCampus from './components/AddCampus';
import AddStudent from './components/AddStudent';
import AllCampus from './components/AllCampus';
import AllStudent from './components/AllStudent';
import Home from './components/Home';
import OneCampus from './components/OneCampus';
import OneStudent from './components/OneStudent';
import Root from './components/Root';
import { getStudentsThunk } from './reducers/student';
import { getCampusesThunk } from './reducers/campus';


/* -----------------    COMPONENT     ------------------ */

class Routes extends Component{

  componentDidMount(){
    console.log(this.props);
    this.props.getStudentsThunk();
    this.props.getCampusesThunk();
  }

  render() {
    return (
      <Router>
        <Root>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/campus' component={AllCampus} />
            <Route path='/campus/add' component={AddCampus} />
            <Route path='/campus/:id' component={OneCampus} />
            <Route exact path='/student' component={AllStudent} />
            <Route path='/student/add' component={AddStudent} />
            <Route path='/student/:id' component={OneStudent} />
            <Route component={Home} />
          </Switch>
        </Root>
      </Router>

    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;
const mapDispatch = { getStudentsThunk, getCampusesThunk };

export default connect(mapProps, mapDispatch)(Routes);
