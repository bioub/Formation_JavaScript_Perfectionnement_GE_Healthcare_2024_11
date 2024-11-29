import { createTodoInput, createTodoItem, createTodoSpan, Todo } from "./todos";

const formEl = document.querySelector(".todo-form") as HTMLFormElement;

const togglerEl = document.querySelector(".todo-toggler") as HTMLInputElement;

const inputEl = document.querySelector(".todo-input") as HTMLInputElement;

const listEl = document.querySelector(".todo-list") as HTMLDivElement;

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  document.querySelector(".todo-error")?.remove();
  inputEl.classList.remove("input-error");

  if (inputEl.value.match(/[%@0-9]/)) {
    // inputEl.style.color = 'red';
    inputEl.classList.add("input-error");

    const errorEl = document.createElement("div");
    errorEl.className = "todo-error";
    errorEl.innerText = "Caractères interdits : %, @ et chiffres";
    formEl.prepend(errorEl);
    return;
  }
  // Exercice 6
  // A l'ajout d'une Todo
  // En utilisant une expression régulière (voir les slides)
  // Interdire les caractères :
  // % @ et les chiffres dans le champ (ne rien faire si ces chars sont présent)
  // Bonus : Afficher une erreur dans un div si les caractères sont présent
  // Bonus : Afficher le champs en rouge si une erreur se produit (CSSOM)
  const newTodo = await postTodo({
    title: inputEl.value,
    completed: false,
  })


  const divEl = createTodoItem(newTodo);

  listEl.append(divEl);
});

// Exercice 3
// Ecouter le click de togglerEl et cocher/décocher
// toutes les checkbox de la liste
// Voir HTMLInputElement pour cocher/décocher

togglerEl.addEventListener("click", () => {
  const checkboxEls =
    listEl.querySelectorAll<HTMLInputElement>(".todo-item-checked");

  for (const checkboxEl of checkboxEls) {
    checkboxEl.checked = togglerEl.checked;
  }
});

// Exercice 7
// En utilisant la technique "Event Delegation",
// Ramener les 3 addEventListener de todos.js ici
// en écoutant sur des éléments qui existent au chargement
// (exemple listEl)
// Indication : les variables divEl, spanEl... n'existent pas ici
// parcourir l'arbre pour retrouver les éléments correspondant
// (en partant de event.target ou event.currentTarget)
// Indication en TS:
// const target = event.target as HTMLElement;

listEl.addEventListener("click", async (event) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains("todo-delete")) {
    const todoItemEl = target.closest(".todo-item") as HTMLDivElement;
    await deleteTodo(todoItemEl.dataset.todoId!);
    todoItemEl.remove();
  }
});

listEl.addEventListener("dblclick", (event) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains("todo-item-value")) {
    target.replaceWith(createTodoInput(target.innerText));
  }
});

listEl.addEventListener("keyup", (event) => {
  const target = event.target as HTMLElement;
  if (
    target.classList.contains("todo-item-value-edit") &&
    event.key === "Enter" &&
    target instanceof HTMLInputElement
  ) {
    target.replaceWith(createTodoSpan(target.value));
  }
});


// Exercice 1
// Démarrer les 2 serveurs (Web-APIs et Node-Serveur) en lançant à chaque fois
// la commande npm run serve:dev

// Utiliser fetch en vous inspirant de l'exemple suivant :
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// Au chargement de la page (ici par exemple),
// envoyer une requête vers GET http://localhost:3000/todos
// transformer la réponse en JSON (res.json())
// et afficher le résultat dans la console dans un premier temps

// Puis avec une boucle for..of boucler sur les todos récupérer
// et appeler createTodoItem en vous inspirant de ce qui a été
// fait dans le listener de submit

async function fetchTodos() {
  const res = await fetch('http://localhost:3000/todos');
  const todos = await res.json();

  for (const todo of todos) {
    const divEl = createTodoItem(todo);
    listEl.append(divEl);
  }
}

fetchTodos();
// Exercice 2
// Ecouter l'événement input de inputEl
// stocker la saisie dans le localStorage et remplir
// le champ avec cette valeur au chargement de la page

inputEl.addEventListener('input', () => {
  localStorage.setItem('todo-input', inputEl.value);
});

inputEl.value = localStorage.getItem('todo-input') ?? '';

// Bonus : Exercice 3
// Au submit du formulaire, envoyer la requête POST http://localhost:3000/todos
// avec la todo transformé en JSON en body de la requête
// et avec l'entête Content-type: application/json
// (voir les exemples de POST et Content-type ici :
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// )

async function postTodo(todo: Omit<Todo, 'id'>) {
  const res = await fetch('http://localhost:3000/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const newTodo = await res.json();
  return newTodo;
}

// Bonus : Exercice 4
// Compléter le code de Node-Serveur pour qu'il supprime les todos sur les requêtes DELETE
// Au clic du bouton moins, envoyer un requete DELETE http://localhost:3000/todos/123
// en remplaçant 123 par l'id de la todo stocké en <div class="todo-item" data-todo-id="123">

async function deleteTodo(id: string) {
  const res = await fetch(`http://localhost:3000/todos/${id}`, {
    method: 'DELETE'
  });
  const oldTodo = await res.json();
  return oldTodo;
}
