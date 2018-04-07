import React from 'react'
import PropTypes from 'prop-types'
import 'styles/search/hotSearch.scss'

const HotSearch = (props) => {
    const { hotText, hotClick, currentHot } = props
    return (
        <a className="hot-tag"
           onClick={hotClick}
           style={{color: currentHot === hotText ? '#398cee' : ''}}
        >
            {hotText}
        </a>
    )
}
HotSearch.propTypes = {
    hotText: PropTypes.string,
    hotClick: PropTypes.func,
    currentHot: PropTypes.string
}
export default HotSearch