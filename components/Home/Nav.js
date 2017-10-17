import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import * as con from '/utils/const'
import navStyle from './styles/nav.scss'

const navImage = {
    [con.NAV_IMAGE_1]: '/static/home/nsyjr.png',
    [con.NAV_IMAGE_2]: '/static/home/nlswx.png',
    [con.NAV_IMAGE_3]: '/static/home/nflwx.png',
    [con.NAV_IMAGE_4]: '/static/home/nyysj.png',
    [con.NAV_IMAGE_5]: '/static/home/nxxjs.png',
    [con.NAV_IMAGE_6]: '/static/home/nyssj.png',
    [con.NAV_IMAGE_7]: '/static/home/nyyjs.png',
    [con.NAV_IMAGE_8]: '/static/home/nydjk.png',
    [con.NAV_IMAGE_9]: '/static/home/nother.png'
}
const Nav = (props) => {
    const { title, img, index, handleClick } = props
    return [
        <Head key={`NavHead`}><style dangerouslySetInnerHTML={{__html: navStyle}}></style></Head>,
        <li className="style_li" onClick={handleClick} key={`NavLi`}>
            <img src={navImage[index+1]} className="style_img" />
            <span className="style_span">{title}</span>
        </li>
    ]
}
Nav.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    index: PropTypes.number,
    handleClick: PropTypes.func
}
export default Nav