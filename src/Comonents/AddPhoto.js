import React, { Component } from 'react'



class AddPhoto extends Component{
  render(){
    return(
      <div>
        <h1> this is the page where we will add photos</h1>
         <div className="form">
          <form>
            <input type="text" placeholder="Link"/>
            <input type="text" placeholder="Description"/>
            <button class="Add-Button">Post</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddPhoto