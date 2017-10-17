import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './Header'
import Nav from './Nav'
import Special from './Special'
import { getNav } from '/redux/store'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        const { navMain=[] } = this.props
        if (navMain.length == 0) {
            this.props.getNav()
        }
    }
    render() {
        let bgClass = { background: '#00bb9c' }
        const  { navMain=[] } = this.props
        return (
            <div>
                <Header
                    title="react-next服务端渲染"
                    linkTo="/search"
                    bgColor={bgClass}
                    imgUrl={`/static/home/search.svg`}
                />
                <div className="style_div">
                    <ul className="style_ul">
                        {
                            navMain.map((elem, index) => {
                                return (
                                    <Nav
                                        key={index}
                                        title={elem.text}
                                        index={index}
                                        handleClick={() => this.handleClick()}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
                <Special />
            </div>
        )
    }
}
const mapStateToProps = ({ navMain }) => ({ navMain })

const mapDispatchToProps = (dispatch) => {
    return {
        getNav: bindActionCreators(getNav, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)