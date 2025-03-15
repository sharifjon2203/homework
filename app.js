import readline from "readline";

import fs from "fs/promises";
import path from "path";

const filePath = path.join(import.meta.dirname, "todos.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ro‘yxatni fayldan yuklash
async function loadTodos() {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    if (err.code === "ENOENT") return []; // Fayl topilmasa, bo‘sh ro‘yxat
    throw err;
  }
}

// Ro‘yxatni faylga saqlash
async function saveTodos(todos) {
  await fs.writeFile(filePath, JSON.stringify(todos, null, 2), "utf8");
}

// Yangi vazifa qo‘shish
async function addTodo() {
  try {
    const task = await rl.question("Vazifani kiriting: ");
    if (task) {
      const todos = await loadTodos();
      todos.push({ id: Date.now(), task, completed: false });
      await saveTodos(todos);
      console.log(`"${task}" vazifasi qo‘shildi`);
    } else {
      console.log("Vazifa kiritilmadi");
    }
  } catch (err) {
    console.error("Vazifa qo‘shishda xato:", err);
  }
}

// Vazifalar ro‘yxatini ko‘rsatish
async function listTodos() {
  const todos = await loadTodos();
  if (todos.length === 0) {
    console.log("Ro‘yxat bo‘sh");
    return;
  }
  todos.forEach((todo, index) => {
    console.log(
      `${index + 1}. [${todo.completed ? "x" : " "}] ${todo.task} (ID: ${todo.id})`,
    );
  });
}

// Vazifani o‘chirish
async function deleteTodo() {
  try {
    const id = await rl.question("O‘chirish uchun ID kiriting: ");
    const idNum = parseInt(id);
    if (isNaN(idNum)) {
      console.log("To‘g‘ri ID kiriting (raqam bo‘lishi kerak)");
      return;
    }
    const todos = await loadTodos();
    const updatedTodos = todos.filter((todo) => todo.id !== idNum);
    if (todos.length === updatedTodos.length) {
      console.log("Bunday ID bilan vazifa topilmadi");
    } else {
      await saveTodos(updatedTodos);
      console.log("Vazifa o‘chirildi");
    }
  } catch (err) {
    console.error("Vazifa o‘chirishda xato:", err);
  }
}

// Vazifani bajarilgan deb belgilash
async function completeTodo() {
  try {
    const id = await rl.question("Bajarilgan vazifa ID’sini kiriting: ");
    const idNum = parseInt(id);
    if (isNaN(idNum)) {
      console.log("To‘g‘ri ID kiriting (raqam bo‘lishi kerak)");
      return;
    }
    const todos = await loadTodos();
    const todo = todos.find((t) => t.id === idNum);
    if (todo) {
      todo.completed = true;
      await saveTodos(todos);
      console.log("Vazifa bajarilgan deb belgilandi");
    } else {
      console.log("Bunday ID bilan vazifa topilmadi");
    }
  } catch (err) {
    console.error("Vazifani belgilashda xato:", err);
  }
}

// Asosiy funksiya: doimiy tsikl
async function main() {
  console.log("Ro‘zg‘or ro‘yxati ilovasiga xush kelibsiz!");
  console.log("Buyruqlar: add, list, delete, complete, exit");

  while (true) {
    const command = await rl.question("Buyruqni kiriting: ");
    console.log(command);
    switch (command.trim().toLowerCase()) {
      case "add":
        await addTodo();
        break;
      case "list":
        await listTodos();
        break;
      case "delete":
        await deleteTodo();
        break;
      case "complete":
        await completeTodo();
        break;
      case "exit":
        rl.close();
        console.log("Xayr!");
        return;
      default:
        console.log("Noma’lum buyruq. Iltimos, to‘g‘ri buyruq kiriting.");
    }
  }
}

// Dasturni ishga tushirish
main().catch((err) => {
  console.error("Xato yuz berdi:", err);
  process.exit(1);
});
