import React from 'react'
import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'
import Layout from 'layout/BasicLayout'
import Home from '../components/Home'
import Head from 'next/head'

class App extends React.Component {
    componentDidMount () {

    }
    
    componentWillUnmount () {
        //clearInterval(this.timer)
    }
    
    render () {
        return (
            <Layout title={`图书商城`}>
                <Head><link rel="stylesheet" href="/_next/static/style.css" /></Head>
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

export default withRedux(initStore, null, mapDispatchToProps)(App)