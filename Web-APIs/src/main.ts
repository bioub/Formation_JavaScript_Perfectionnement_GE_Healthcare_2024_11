import { createTodoInput, createTodoItem, createTodoSpan } from "./todos";

const formEl = document.querySelector(".todo-form") as HTMLFormElement;

const togglerEl = document.querySelector(".todo-toggler") as HTMLInputElement;

const inputEl = document.querySelector(".todo-input") as HTMLInputElement;

const listEl = document.querySelector(".todo-list") as HTMLDivElement;

formEl.addEventListener("submit", (event) => {
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

listEl.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains("todo-delete")) {
    target.closest(".todo-item")?.remove();
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
