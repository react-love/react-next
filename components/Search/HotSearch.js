import React from 'react'
import PropTypes from 'prop-types'
const HotSearch = (props) => {
    const { hotText, hotClick, currentHot } = props
    return (
        <a className={`style_span`}
           onClick={hotClick}
           style={{color: currentHot === hotText ? '#398cee' : ''}}
        >
            {hotText}
            <style jsx>{`
            .style_span {
              display: inline-block;
              background: #f4f4f4;
              padding: 0.41667rem 0.833rem;
              margin-right: 1rem;
              margin-bottom: 0.833rem;
              color: #444;
              font-size: 1rem;
            }`}</style>
        </a>
    )
}
HotSearch.propTypes = {
    hotText: PropTypes.string,
    hotClick: PropTypes.func,
    currentHot: PropTypes.string
}
export default HotSearch