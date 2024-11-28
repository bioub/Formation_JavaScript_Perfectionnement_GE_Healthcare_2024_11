import { createTodoItem } from "./todos";

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todo-form')

/** @type {HTMLInputElement} */
const togglerEl = document.querySelector('.todo-toggler')

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todo-input')

/** @type {HTMLDivElement} */
const listEl = document.querySelector('.todo-list')

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const divEl = createTodoItem({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  listEl.append(divEl);
});

// Exercice 3
// Ecouter le click de togglerEl et cocher/décocher
// toutes les checkbox de la liste
// Voir HTMLInputElement pour cocher/décocher
