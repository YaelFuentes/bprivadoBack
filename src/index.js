import express from 'express'
import example from './routes/example.js'

const app = express()
app.use(express.json())  // middleware que transforma la req.body a un json

const PORT  = 3000

app.get('/ping', (req, res) => {
  console.log('some pinged here')
  res.send('pong')
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})


////////////////////////////////
app.use('/api/example', example)
////////////////////////////////