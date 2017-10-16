import Head from 'next/head'
import layoutStyle from 'styles/index.scss'

export default ({ children, title = 'This is the default title' }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <style dangerouslySetInnerHTML={{__html: layoutStyle}}></style>
        </Head>
        { children }
    </div>
)