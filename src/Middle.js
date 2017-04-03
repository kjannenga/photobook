import React from 'react'
import {Link} from 'react-router-dom'
import images from './images.json'


const styles = {

 list:{
    listStyle: 'none',
    textAlign:'center',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-around',
    backgroundColor:'#ccc'
  },
  between:{
    padding:25,
    margin:25,
    backgroundColor:'#A9A9A9',
    border:'5px solid black'
  },
  link:{
    color:'black',
    textDecoration:'none'
  }

}




export default React.createClass({


getInitialState(){
  return{
      image:images.filter(middle=>{
       
        return (middle.album) === (this.props.match.params.middleAlbum)
      })
    }
  },
  handleBack(e){
    e.preventDefault()
    this.props.history.goBack()
  },


  render (){
    return(
       <div>


          <h2>Album</h2>

          <button style={styles.backButton} onClick={this.handleBack} >BACK</button>

          <ul style={styles.list}>
          {this.state.image.map(image=>(

            <li style={styles.between} key={'image' + image.id}>
             <Link style={styles.link} to={'/single/' + image.img}>
             <img src={image.mid_photo+ image.img} alt="artsy fartsy" /> <br/>
              {image.tags} <br/> {image.city}, {image.state} </Link></li>
            ))} 
          </ul>
      

      </div>
      
    )
  }
}) 