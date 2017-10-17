import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddCampus from './components/AddCampus';
import AddStudent from './components/AddStudent';
import AllCampus from './components/AllCampus';
import AllStudent from './components/AllStudent';
import Home from './components/Home';
import OneCampus from './components/OneCampus';
import Root from './components/Root';
import StudentList from './components/StudentList';


/* -----------------    COMPONENT     ------------------ */

class Routes extends Component{

  render() {
    return (
      <Router>
        <Root>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/campus' component={AllCampus} />
            <Route path='/campus/:id' component={OneCampus} />
            <Route path='/campus/add' component={AddCampus} />
            <Route exact path='/student' component={AllStudent} />
            <Route path='/student/add' component={AddStudent} />
            <Route component={Home} />
          </Switch>
        </Root>
      </Router>

    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Routes);
