import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './Header'
import HotSearch from './HotSearch'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentHot: ''
        }
        this.hotClick = this.hotClick.bind(this)
        this.upDateValue = this.upDateValue.bind(this)
    }
    upDateValue(value) {
        this.setState({currentHot: value})
    }
    hotClick(text) {
        this.setState(() => { return {currentHot: text} })
    }
    render () {
        const { currentHot } = this.state
        const { hotData=[] } = this.props
        return (
            <div style={{height: '100vh'}}>
                <Header currentHot={currentHot}
                        upDateValue={this.upDateValue}
                />
                <div>
                    <p className="search-hot-title">
                        <i className="fa fa-fire"></i>
                        <span>热门搜索</span>
                    </p>
                    <p className="style_div_p">
                        {
                            hotData.map((elem, index) =>
                                <HotSearch
                                    key={index}
                                    hotText={elem.text}
                                    hotClick={() => this.hotClick(elem.text)}
                                    currentHot={currentHot}
                                />
                            )
                        }
                    </p>
                </div>
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
            </div>
        )
    }
}

const mapStateToProps = ({ hotData }) => ({ hotData })

const mapDispatchToProps = (dispatch) => {
    return {
    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)