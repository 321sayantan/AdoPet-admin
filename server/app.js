import express from 'express'

const app = express()

app.get('/test', (req, res) => {
    res.send('<h1>This is from Test route</h1>')
})

app.listen(8000, () => {
    console.log('Server is running on PORT 8000')
})