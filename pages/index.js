import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'
import Layout from '../components/Layout'
import Home from '../components/Home'

class Counter extends React.Component {
    componentDidMount () {
        //this.timer = this.props.startClock()
    }
    
    componentWillUnmount () {
        //clearInterval(this.timer)
    }
    
    render () {
        return (
            <Layout title={`图书商城`}>
                <Home />
            </Layout>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //addCount: bindActionCreators(addCount, dispatch),
        //startClock: bindActionCreators(startClock, dispatch)
    }
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)