export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export function createTodoItem(todo: Todo) {

  const divEl = document.createElement('div');
  // divEl.classList.add('todo-item');
  divEl.className = "todo-item";
  divEl.dataset.todoId = String(todo.id);


  // Exercice 1
  // Compléter cette fonction
  // pour qu'elle créée également la checkbox et le bouton moins
  // <div class="todo-item" data-todo-id="1">
  //   <input type="checkbox" class="todo-item-checked">
  //   <span class="todo-item-value">Acheter du pain</span>
  //   <button class="todo-delete">-</button>
  // </div>

  const checkboxEl = document.createElement('input');
  checkboxEl.type = "checkbox";
  checkboxEl.className = "todo-item-checked";
  checkboxEl.checked = todo.completed;

  const spanEl = createTodoSpan(todo.title);

  const buttonEl = document.createElement('button');
  buttonEl.className = "todo-delete";
  buttonEl.innerText = '-';

  divEl.append(checkboxEl, ' ', spanEl, ' ', buttonEl);

  // Exercice 2
  // Ecouter le click du bouton moins
  // et supprimer la balise <div class="todo-item"> parent
  // Regarder dans Element/HTMLElement sur MDN comment supprimer un élément
  // buttonEl.addEventListener('click', () => {
  //   divEl.remove();
  // });

  // Exercice 4
  // Ecouter le double click (dblclick) de spanEl
  // et le remplacer par un <input> prérempli avec la valeur
  // Si on tape sur la touche ENTREE dans cet input
  // revenir à un élément <span>
  // spanEl.addEventListener('dblclick', () => {
  //   spanEl.replaceWith(createTodoInput(spanEl.innerText));
  // });

  // Exercice 5
  // Transformer le code en TypeScript

  return divEl;
}

/**
 * @param {string} title
 */
export function createTodoSpan(title: string) {
  const spanEl = document.createElement('span');
  spanEl.className = 'todo-item-value';
  spanEl.innerText = title;

  return spanEl;
}

/**
 * @param {string} title
 */
export function createTodoInput(title: string) {
  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.className = 'todo-item-value-edit';
  inputEl.value = title;
  setTimeout(() => {
    inputEl.select();
    // inputEl.selectionStart = 0;
    // inputEl.selectionEnd = 3;
  }, 0);

  // inputEl.addEventListener('keyup', (event) => {
  //   if (event.key === 'Enter') {
  //     inputEl.replaceWith(createTodoSpan(inputEl.value));
  //   }
  // });

  return inputEl;
}
