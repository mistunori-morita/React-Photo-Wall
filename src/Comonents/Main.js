import React, { Component } from 'react'
import Title from './Title'
import photowall from './PhotoWall'
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removePost} from '../redux/actions'
import Single from './Single'

class Main extends Component {
  constructor(){
    super()
   }

   state = {
     loading: false
   }



   componentDidMount(){
     this.props.startLoadingPost()
     this.props.startLoadingcomments()
   }

  render() {
    
    return (
      <div>
        <h1>
          <Link to="/"> PhotoWall</Link>
        </h1>
        <Route exact path="/" render={() => (
          <div>
            <PhotoWall {...this.props} />
            {/* <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/> */}
          </div>
        )}/>
          <Route path="/AddPhoto" render={({history}) => (
            <AddPhoto {...this.props} onHistory={history}/>
          )}/>

          <Route path="/single/:id" render={(params) => (
            <Single  loading={this.state.loading} {...this.props}  {...params} />
          )}/>
      </div>
    )
  }
}



export default Main