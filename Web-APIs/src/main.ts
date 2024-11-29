import { createTodoItem } from "./todos";

const formEl = document.querySelector('.todo-form') as HTMLFormElement;

const togglerEl = document.querySelector('.todo-toggler') as HTMLInputElement;

const inputEl = document.querySelector('.todo-input') as HTMLInputElement;

const listEl = document.querySelector('.todo-list') as HTMLDivElement;

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

togglerEl.addEventListener('click', () => {
  const checkboxEls = listEl.querySelectorAll<HTMLInputElement>('.todo-item-checked');

  for (const checkboxEl of checkboxEls) {
    checkboxEl.checked = togglerEl.checked;
  }
});
