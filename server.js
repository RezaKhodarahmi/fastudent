// server.js

const { createServer } = require('https')
const { parse } = require('url')
const { readFileSync } = require('fs')
const next = require('next')

import ReactGA from 'react-ga4';
ReactGA.initialize('G-HVW076GTCV');

useEffect(() => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
}, []);

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const httpsOptions = {
  key: readFileSync('/etc/ssl/private/fanavaran.key'),
  cert: readFileSync('/etc/ssl/certs/fanavaran.crt')
}

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(443, err => {
    if (err) throw err
    console.log('> Ready on https://fanavaran.ca')
  })
})
