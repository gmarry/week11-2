// Получаем ссылки на необходимые элементы DOM и записываем их в переменные
const taskInput = document.getElementById("taskInput"); // Поле ввода задачи
const addButton = document.getElementById("addButton"); // Кнопка "Добавить"
const taskList = document.getElementById("taskList"); // Список задач

// Функция для создания новой задачи и добавления ее в список
function createTask() {
  // Создаем новый элемент списка
  const newTask = document.createElement("li");
  // Присваиваем текст из поля ввода в качестве содержимого новой задачи
  newTask.textContent = taskInput.value;
  // Добавляем новую задачу в список
  taskList.appendChild(newTask);
  // Очищаем поле ввода после добавления задачи
  taskInput.value = "";
}

// Функция для отметки задачи как выполненной
function checkTask(event) {
  // Проверяем, что кликнули на элемент списка (тег LI)
  if (event.target.tagName === "LI") {
    // Переключаем состояние выполнения задачи, добавляя или удаляя класс у элемента списка
    event.target.classList.toggle("completed");
  }
}

// Добавляем функцию-обработчик к событию клика на кнопку "Добавить"
addButton.addEventListener("click", createTask);
// Добавляем функцию-обработчик к событию клика на список задач
taskList.addEventListener("click", checkTask);
