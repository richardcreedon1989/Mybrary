const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

// router.get('/test', (req, res) => {
//   res.send('Hello World 123')
// })

module.exports = router