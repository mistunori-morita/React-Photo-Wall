import React, { Component } from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'

function PhotoWall(props){
  return <div className="PhotoWallWrap">
          <a className="addIcon" onClick={props.onNavigate} href="#AddPhoto">Click Me</a>
          {/* propsで渡ってきたが、main.jsでthisをbindしてないとundefinedになって参照できない */}
          {/* <button className="addIcon" onClick={props.onNavigate}>+</button> */}
          <div className="photoGrid">
            {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
          </div>
        </div>
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall