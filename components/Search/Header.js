import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Head from 'next/head'
import headerStyle from './styles/header.scss'

const Header = (props) => {
        const { currentHot } = props
        return (
            <div className="style_body">
                <Head><style dangerouslySetInnerHTML={{__html: headerStyle}}></style></Head>
                <div className="style_main">
                    <Link href="/">
                        <a className={`style_a`}><img src={`/static/search/back_search.png`} className="style_a_img" /></a>
                    </Link>
                    <div className="style_div_content">
                        <img src={`/static/search/search_1.png`} className="style_div_img" />
                        <input type="text"
                               placeholder="搜索书名"
                               className="style_div_input"
                               value={currentHot}
                               onChange={(event) => {
                                   props.upDateValue(event.target.value)
                               }}
                        />
                    </div>
                    <Link href="/search"><a className={`style_right_a`}>搜索</a></Link>
                </div>
            </div>
        )
}
Header.propTypes = {
    handleClick: PropTypes.func,
    currentHot: PropTypes.string,
    upDateValue: PropTypes.func
}

export default Header