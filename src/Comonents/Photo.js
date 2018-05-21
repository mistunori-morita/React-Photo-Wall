import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Photo(props){
  const post = props.post
  return <figure className="figure">
        <Link to={`single/${post.id}`}>
        <img className="photo" src={post.imageLink} alt={post.description}/>
        </Link>
        <figcaption>
          <p>{post.description}</p>
          <div className="btn-container">
            <button className="remove-button" onClick={ () => {
              props.removePost(props.index)
              props.history.push('/')
            }}>Remove</button>
            <Link className="comment-counter" to={`single/${post.id}`}>
              <div className="coment-count">
                {props.comments[post.id] ? props.comments[post.id].length : 0}
              </div>
              < div className = "speech-bubble" > < /div>
            </Link>
          </div>
        </figcaption>
      </figure>
}


Photo.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Photo