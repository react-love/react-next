import React from 'react'
import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'
import Layout from 'layout/BasicLayout'
import Search from '../components/Search'
import Head from 'next/head'

class SearchPage extends React.Component {
    componentDidMount () {
        //this.timer = this.props.startClock()
    }
    
    componentWillUnmount () {
        //clearInterval(this.timer)
    }
    
    render () {
        return (
            <Layout title={`搜索图书`}>
                <Head><link rel="stylesheet" href="/_next/static/style.css" /></Head>
                <Search />
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

export default withRedux(initStore, null, mapDispatchToProps)(SearchPage)