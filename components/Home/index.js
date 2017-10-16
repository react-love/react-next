import Link from 'next/link'
import { connect } from 'react-redux'
import Header from './Header'

export default connect(state => state)(() => {
    let bgClass = { background: '#00bb9c' }
    return (
        <div>
            <Header
                title="react-redux架构"
                linkTo="/search"
                bgColor={bgClass}
                imgUrl={`/static/home/search.svg`}
            />
        </div>
    )
})