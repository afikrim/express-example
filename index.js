const express = require('express')
const path = require('path')

const indexRouter = require('./routes/index')

const app = express()

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })

app.use(express.static(path.resolve(__dirname, 'public')))

app.use('/api', indexRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
