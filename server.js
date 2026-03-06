const express = require('express')
const app = express()
app.use(express.json())

let goals = []
let nextId = 1

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.get('/goals', (_req, res) => {
  res.json(goals)
})

app.get('/goals/:id', (req, res) => {
  const goal = goals.find(g => g.id === parseInt(req.params.id))
  if (!goal) return res.status(404).json({ error: 'non trouvé' })
  res.json(goal)
})

app.post('/goals', (req, res) => {
  if (!req.body.title) return res.status(400).json({ error: 'title obligatoire' })
  const goal = { id: nextId++, title: req.body.title, status: 'En cours' }
  goals.push(goal)
  res.status(201).json(goal)
})

app.put('/goals/:id', (req, res) => {
  const goal = goals.find(g => g.id === parseInt(req.params.id))
  if (!goal) return res.status(404).json({ error: 'non trouvé' })
  if (!req.body.title) return res.status(400).json({ error: 'title obligatoire' })
  goal.title = req.body.title
  goal.status = req.body.status
  res.json(goal)
})

app.delete('/goals/:id', (req, res) => {
  const index = goals.findIndex(g => g.id === parseInt(req.params.id))
  if (index === -1) return res.status(404).json({ error: 'non trouvé' })
  goals.splice(index, 1)
  res.json({ message: 'supprimé' })
})

app.listen(3000, () => console.log('API sur http://localhost:3000'))
module.exports = app
