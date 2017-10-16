import React from 'react'
import { initStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'
import Layout from '../components/Layout'
import Search from '../components/Search'

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
                {searchStyle()}
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

const searchStyle = () =>
    <style jsx>{`
    .style_div_p {
          padding: 0.833rem 1.25rem;
    }
     .search-hot-title {
          padding: 0.833rem 1.25rem 0 1.25rem;
          font-size: 1.2rem;
          i {
            color: #646464;
          }
          span {
            margin-left: 0.5rem;
            color: #646464;
          }
        }
    `}</style>