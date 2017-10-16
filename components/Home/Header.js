import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import PropTypes from 'prop-types'
import headerStyle from './styles/header.scss'
const Header = (props) => {
    const { title, imgUrl, linkTo, bgColor, handleClick } = props
    //提供4个接口参数给container做设置，可以不传参。
    return (
        <header className='header' style={bgColor}>
            <Head><style dangerouslySetInnerHTML={{__html: headerStyle}}></style></Head>
            {title}
            <Link>
                <a href={linkTo} className="a_link" onClick={() => handleClick('left')}><img src={imgUrl || false} className="a_img" /></a>
            </Link>
        </header>
    )
}
//严格来说，这些暴露给外部的参数都需要做验证,常用的验证类型为array，bool，func，number，object，string
Header.propTypes = {
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    linkTo: PropTypes.string,
    bgColor: PropTypes.object
}
export default Header