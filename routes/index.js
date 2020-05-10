const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    app: {
      name: 'Express Example',
      version: '1.0.0'
    }
  })
  res.end()
})

module.exports = router
