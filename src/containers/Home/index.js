import React, { Component } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

class Home extends Component {

  componentDidMount() {
    this.props.getHomeList()
  }

  render() {
    const { newsList = [] } = this.props
    return <div>
      <Header />
      <div onClick={() => { alert('11') }}>
        click
      </div>
      <ul>
        {
          newsList.map(item => {
            return <li key={item.id}>{item.title}</li>
          })
        }
      </ul>
    </div>
  }
}

Home.loadData = (store) => {
  // 获取服务端渲染需要的数据
  return store.dispatch(getHomeList())
}

const mapStateToProps = state => ({
  newsList: state.home.newsList
})

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)