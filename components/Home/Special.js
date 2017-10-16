import React from 'react'
import Head from 'next/head'
import specialStyle from './styles/special.scss'
const Special = () => {
    return (
        <div className="style_main">
            <Head><style dangerouslySetInnerHTML={{__html: specialStyle}}></style></Head>
            <div className="style_div">
                <div className="style_left">
                    <img src={`/static/home/zht1.jpg`} className="style_img" />
                </div>
                <div className="style_right">
                    <img src={`/static/home/zht2.jpg`} className="style_img" />
                </div>
            </div>
        </div>
    )
}
export default Special