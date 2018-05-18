//connectの機能とアクセスできるかどうかを確認するためのもの
import Main from'./Main'
import {connect} from 'react-redux'

function mapStateToProps(state){
  return {
    posts: state
  }
}

const App = connect(mapStateToProps)(Main)

export default App