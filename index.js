import express from 'express'
const app = express()
const port = 3030

app.get('/', (req, res) => {
  console.log('GET request')
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log('POST request')
  console.log('req', req.body)
  res.json({
    success: true
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
