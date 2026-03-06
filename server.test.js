const request = require('supertest')
const app = require('./server')

// Test 1 : cas nominal — lecture de tous les objectifs
test('GET /goals — retourne 200 et un tableau', async () => {
  const res = await request(app).get('/goals')
  expect(res.status).toBe(200)
  expect(Array.isArray(res.body)).toBe(true)
})

// Test 2 : cas nominal — création d'un objectif
test('POST /goals — crée un objectif et retourne 201', async () => {
  const res = await request(app)
    .post('/goals')
    .send({ title: 'Apprendre Express' })
  expect(res.status).toBe(201)
  expect(res.body.title).toBe('Apprendre Express')
})

// Test 3 : cas d'erreur — champ manquant → 400
test('POST /goals — retourne 400 si title manquant', async () => {
  const res = await request(app)
    .post('/goals')
    .send({})
  expect(res.status).toBe(400)
})

// Test 4 : cas d'erreur — ID inexistant → 404
test('GET /goals/9999 — retourne 404 si ID inexistant', async () => {
  const res = await request(app).get('/goals/9999')
  expect(res.status).toBe(404)
})
