import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import PropTypes from 'prop-types'
import headerStyle from './styles/header.scss'

const Header = (props) => {
    const { title, imgUrl, linkTo, bgColor, handleClick } = props
    return (
        <header className='header' style={bgColor}>
            <Head><style dangerouslySetInnerHTML={{__html: headerStyle}}></style></Head>
            {title}
            <Link href={linkTo}>
                <a className="a_link" onClick={() => handleClick('left')}><img src={imgUrl || false} className="a_img" /></a>
            </Link>
        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    linkTo: PropTypes.string,
    bgColor: PropTypes.object
}
export default Header