# bind(this)についての細く
```js
class Main extends Component {
  constructor(){
    super()
    this.state = {
     //条件付きレンダリングの判定のためのstate定義
     screen: 'photos' //photos, addPhoto
    }
    //これをする理由はpropsで渡した時に参照できない そのため、navigate関数、removePhotoもbind(this)をしている　※1
    this.removePhoto = this.removePhoto.bind(this)
    this.navigate = this.navigate.bind(this)
    console.log('constructor');
 }

  ※1 これをしなくてもよくするやり方としてarrow関数がある
  this.removePhoto = this.removePhoto.bind(this)
  this.navigate = this.navigate.bind(this)

//arrow関数で作るとthisの参照が変わって、関数自身をさすのでbindしなくてもよくなる
 navigate = () => {
   this.setState({
     screen: 'addPhoto'
   })
 }
```