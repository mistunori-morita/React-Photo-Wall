import {database} from '../database/config'

export function startAddingPost(post){
  return (dispatch) => {
    return database.ref('posts').update({[post.id]: post}).then(() =>{
      dispatch(addPost(post))
    }).catch((error) =>{
      console.log(error)
    })
  }
}

//remove
export function removePost(index){
  return {
    type: 'REMOVE_POST',
    index
  }
}

///adding post

export function addPost(post){
  return {
    type: 'ADD_POST',
    post
  }
}

export function addComment(comment, postId){
  return{
    type: 'ADD_COMMENT',
    comment,
    postId
  }
}