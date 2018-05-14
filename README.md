# bind(this)についての補足
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

## React-router
```js
        <Route exact path="/" render={() => (
          <div>
            <Title title="photowall" />
            <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>
          </div>
        )}/>
        //該当するpathでこうかけるが、コンポーネント単位で呼び出す方が簡単
        <Route path="/AddPhoto" render={() => (
          <div>
            <AddPhoto />
          </div>


//こうした方がスッキリできる
 <Route path="/AddPhoto" component={AddPhoto} />
```