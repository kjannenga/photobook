import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Front from './Front'
import Middle from './Middle'
import Single from './Single'






export default React.createClass({

 render() {
    return (
      <Router>
      <div>

      <Route exact={true} path="/" component={Front} />
      <Route path="/middle/:middleAlbum" component={Middle} />
      <Route path="/single/:singleImg" component={Single} />
    
        
        
      </div>
      </Router>
     
    )
  }
}) 