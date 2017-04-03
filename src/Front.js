import React from 'react'
import {Link} from 'react-router-dom'







export default React.createClass({


  render (){
    return(
       <div>
          <h2>Album</h2>

          
          <div>
            <div><Link to={'/middle/' + 'album 1'}>Album 1</Link></div>
            <div><Link to={'/middle/' + 'album 2'}>Album 2</Link></div>
            <div><Link to={'/middle/' + 'album 3'}>Album 3</Link></div>
            <div><Link to={'/middle/' + 'album 4'}>Album 4</Link></div>
            <div><Link to={'/middle/' + 'album 5'}>Album 5</Link></div>
            <div><Link to={'/middle/' + 'album 6'}>Album 6</Link></div>
          </div>
            

           
          
      

      </div>

      
    )

  }
}) 