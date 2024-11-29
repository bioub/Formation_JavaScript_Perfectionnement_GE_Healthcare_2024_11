const todos = [
  {
    id: 1,
    title: 'ABC',
    completed: true,
  },
  {
    id: 2,
    title: 'DEF',
    completed: false,
  },
  {
    id: 3,
    title: 'XYZ',
    completed: false,
  }
];

const express = require('express');
const cors = require('cors');

const app = express();

// Autorise les requêtes cross-origin
app.use(cors());

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', express.json(), (req, res) => {
  const todo = req.body;
  todo.id = todos.at(-1).id + 1;

  todos.push(todo);

  res.json(todo);
});

// Exercice 4
// Compléter le code suivant
app.delete('/todos/:id', (req, res) => {
  const id = Number(req.params.id);

  // Rechercher la todo avec la variable id
  // la supprimer du tableau

  // écrire dans la réponse HTTP en JSON
  // la todo qui vient d'être supprimée
});

app.listen(3000, () => {
  console.log(`Server started http://localhost:3000`);
});
