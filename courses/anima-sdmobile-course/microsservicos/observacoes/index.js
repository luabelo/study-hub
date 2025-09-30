const express = require('express')
const app = express()
app.use(express.json())

const baseObservacoes = {}
app.post('/lembretes/:id/observacoes', (req, res) => {

})

app.get('/lembretes/:id/observacoes', (req, res) => {

})

const port = 5000
app.listen(port, console.log(`Observações. Porta ${port}.`))