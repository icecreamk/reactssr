import React from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'

const Home = (props) => {

  return <div>
    <Header />
    <div onClick={() => { alert('11') }}>
      click
    </div>
    {props.name}
  </div>
}

const mapStateToProps = state => ({
  name: state.name
})

export default connect(mapStateToProps, null)(Home)