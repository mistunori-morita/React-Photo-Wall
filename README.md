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


### concatについて
`https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat`

- concat() メソッドは、配列に他の配列や値をつないでできた新しい配列を返します。

```js
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```
- メモ


### Redux dev Tools
- https://github.com/zalmoxisus/redux-devtools-extension#usage

- 1.1 Basic store
```js
//具体的例
const store = createStore(rooteReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//これでRedux-devtoolsが読み込まれる
```


### firebase設定
- npm install firebase
- firebaseダッシュボード、新規プロジェクト作成、ルールの変更（全てtrue）、ウェブアプリの追加
- clud FireStoreと間違えないように注意（リアルタイムデータベースポチッとおしたあと）


### 完成図
![PC](images/wall.gif "1")