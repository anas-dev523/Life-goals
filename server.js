const express = require('express')
const Database = require('better-sqlite3')

const app = express()
app.use(express.json())

const db = new Database(process.env.DB_PATH || 'goals.db')
db.exec(`
  CREATE TABLE IF NOT EXISTS goals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'En cours'
  )
`)

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.get('/goals', (_req, res) => {
  res.json(db.prepare('SELECT * FROM goals').all())
})

app.get('/goals/:id', (req, res) => {
  const goal = db.prepare('SELECT * FROM goals WHERE id = ?').get(req.params.id)
  if (!goal) return res.status(404).json({ error: 'non trouvé' })
  res.json(goal)
})

app.post('/goals', (req, res) => {
  if (!req.body.title) return res.status(400).json({ error: 'title obligatoire' })
  const result = db.prepare('INSERT INTO goals (title, status) VALUES (?, ?)').run(req.body.title, 'En cours')
  const goal = db.prepare('SELECT * FROM goals WHERE id = ?').get(result.lastInsertRowid)
  res.status(201).json(goal)
})

app.put('/goals/:id', (req, res) => {
  const goal = db.prepare('SELECT * FROM goals WHERE id = ?').get(req.params.id)
  if (!goal) return res.status(404).json({ error: 'non trouvé' })
  if (!req.body.title) return res.status(400).json({ error: 'title obligatoire' })
  const status = req.body.status || goal.status
  db.prepare('UPDATE goals SET title = ?, status = ? WHERE id = ?').run(req.body.title, status, req.params.id)
  res.json({ ...goal, title: req.body.title, status })
})

app.delete('/goals/:id', (req, res) => {
  const goal = db.prepare('SELECT * FROM goals WHERE id = ?').get(req.params.id)
  if (!goal) return res.status(404).json({ error: 'non trouvé' })
  db.prepare('DELETE FROM goals WHERE id = ?').run(req.params.id)
  res.json({ message: 'supprimé' })
})

if (require.main === module) {
  app.listen(3000, () => console.log('API sur http://localhost:3000'))
}
module.exports = app
