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
   state = {
     loading: false
   }

   componentDidMount(){
     this.props.startLoadingPost().then(() => {
       this.setState({
         loading: false
       })
     })
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
          </div>
        )}/>
          <Route path="/AddPhoto" render={({history}) => (
            <AddPhoto {...this.props} onHistory={history}/>
          )}/>

          <Route path="/single/:id" render={(params) => (
            <Single loading={this.state.loading} {...this.props}  {...params} />
          )}/>
      </div>
    )
  }
}



export default Main