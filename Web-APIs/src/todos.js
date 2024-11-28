/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 */
export function createTodoItem(todo) {

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

  const spanEl = document.createElement('span');
  spanEl.className = 'todo-item-value';
  spanEl.innerText = todo.title;
  divEl.append(spanEl);

  // Exercice 2
  // Ecouter le click du bouton moins
  // et supprimer la balise <div class="todo-item"> parent
  // Regarder dans Element/HTMLElement sur MDN comment supprimer un élément

  // Exercice 4
  // Ecouter le double click (dblclick) de spanEl
  // et le remplacer par un <input> prérempli avec la valeur
  // Si on tape sur la touche ENTREE dans cet input
  // revenir à un élément <span>

  // Exercice 5
  // Transformer le code en TypeScript

  return divEl;
}
