const express = require('express')
const app = express()
const {v4: uuidv4} = require('uuid')
app.use(express.json())

const baseObservacoes = {}
app.post('/lembretes/:id/observacoes', (req, res) => {
    const idObs = uuidv4()
    const {texto} = req.body
    const observacao = {
        id: idObs,
        texto
    }
    const observacoes = baseObservacoes[req.params.id] || []
    observacoes.push(observacao)
    baseObservacoes[req.params.id] = observacoes
    res.status(201).json(observacao)
})

app.get('/lembretes/:id/observacoes', (req, res) => {
    res.json(baseObservacoes[req.params.id] || [])
})

app.delete('/lembretes/:id/observacoes/:idObs', (req, res) => {
    const {id, idObs} = req.params
    const observacoes = baseObservacoes[id] || []
    const indice = observacoes.findIndex(o => o.id === idObs)
    if (indice >= 0) {
        observacoes.splice(indice, 1)
        baseObservacoes[id] = observacoes
        res.status(204).send()
    } else {
        res.status(404).json({mensagem: 'Observação não encontrada.'})
    }
})

const port = 5000
app.listen(port, console.log(`Observações. Porta ${port}.`))