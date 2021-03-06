import React, { Component } from 'react'



class AddPhoto extends Component{
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    //name属性のname="Link"
    console.log(e.target.elements.Link.value)
    //name属性のname="Description"
    console.log(e.target.elements.Description.value)
    //これを元に変数に格納

    const imageLink = e.target.elements.Link.value
    const description = e.target.elements.Description.value
    const post = {
       id: Number(new Date()),
       description: description,
       imageLink: imageLink
    }

    if(description && imageLink) {
      this.props.startAddingPost(post)
      this.props.onHistory.push('/')
    }
  }

  render(){
    return(
      <div>
         <div className="form">
          <form onSubmit={this.handleSubmit}>
          { /* ここで書いたname属性 name="Link"がhandleSubmit(e)で取れる*/ }
            <input type="text" placeholder="Link" name="Link"/>
            <input type="text" placeholder="Description" name="Description"/>
            <button className="Add-Button">Post</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddPhoto