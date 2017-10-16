const express = require('express')
const next = require('next')
const compression = require('compression')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
    const server = express()
    server.use(compression()) //gzip
    
    server.get('/search', (req, res) => {
        return app.render(req, res, '/search', req.query)
    })
    
    server.get('*', (req, res) => {
        return handle(req, res)
    })
    
    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})