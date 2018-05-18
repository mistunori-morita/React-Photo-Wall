import React, { Component } from 'react'
import Title from './Title'
import photowall from './PhotoWall'
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

class Main extends Component {
  constructor(){
    super()
   }
  render() {
    console.log(this.props.posts)
    return (
      <div>
        <Route exact path="/" render={() => (
          <div>
            <Title title="photowall" />
            <PhotoWall posts={this.props.posts}/>
            {/* <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/> */}
          </div>
        )}/>
          {/* <Route path="/AddPhoto" render={({history}) => (
            <AddPhoto onAddPhoto={(addedPost) => {
              console.log(addedPost)
              this.addPhoto(addedPost)
              history.push('/')
            }}/>
          )}/> */}
      </div>
    )
  }
}



export default Main