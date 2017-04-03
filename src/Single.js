import React from 'react'
import images from './images.json'



const styles = {
  backButton:{
    position:'absolute',
    top:10,
    left:10,
  },
  list:{
    listStyle: 'none',
    textAlign:'center',
    backgroundColor:'#A9A9A9',
    margin:0,
    padding: 10
  },
  image:{
  	textAlign:'center',
  	border:'10px solid black',
  },
  imageContainer:{
  	textAlign:'center',
  	backgroundColor: '#ccc',
  	padding:25,
  	positon:'relative',
  	margin:0

  }
}






export default React.createClass({
  getInitialState(){
    return{
      image:images.filter(single=>{
        return Number(single.img) === Number(this.props.match.params.singleImg)
      })[0]
    }

  },
  handleBack(e){
    e.preventDefault()
    this.props.history.goBack()
  },


  render(){
    var image = this.state.image
    return(
      <div>
        <div style={styles.imageContainer}> 
          <button style={styles.backButton} onClick={this.handleBack} >BACK</button>
          <img style={styles.image} src={image.lrg_photo + image.img} alt="artsy fartsy" />
        </div>
        <ul style={styles.list}>
          <li > {image.tags} </li>
          <hr width="40%"/>
          <li>{image.city}, {image.state}</li>
          <hr width="40%"/>
          <li>{image.date}</li>

        </ul>



      </div>
    )
  }
})