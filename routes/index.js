const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home', { pageTitle: 'My Websites - Home', content: 'Hello there!' })
  res.end()
})

router.get('/about', (req, res) => {
  res.render('about', { pageTitle: 'My Websites - About', content: 'This is an about page' })
  res.end()
})

router.get('/login', (req, res) => {
  res.render('login', { pageTitle: 'My Websites' })
  res.end()
})

router.get('/register', (req, res) => {
  res.render('register', { pageTitle: 'My Websites' })
  res.end()
})

module.exports = router
