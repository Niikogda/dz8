// # Критерії прийому

// - Створено репозиторій `js-hw-07`
// - При здачі домашньої роботи є посилання на вихідні файли в репозиторії
// - Кожне завдання виконано в окремому файлі з ім'ям `task-номер_завдання.js`.
//   Використовуй `<script type="module">` щоб закрити код завдання в окремій
//   області видимості і уникнути конфліктів імен ідентифікаторів.
// - Імена змінних зрозумілі, описові
// - Код відформатований за допомогою Prettier

// # Завдання 1

// Розстав відсутні `this` в методах об'єкта `account`.

const account = {
    owner: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["order-1", "order-2", "order-3"],
    changeDiscount(value) {
      this.discount = value; 
    },
    showOrders() {
      return this.orders; 
    },
    addOrder(cost, order) {
      this.balance -= cost; 
      this.orders.push(order); 
    },
  };
  
  account.changeDiscount(0.15);
  console.log(account.discount); 
  
  console.table(account.showOrders()); 
  
  account.addOrder(5000, "order-4");
  console.log(account.balance); 
  console.table(account.showOrders()); 
  

// # Завдання 2

// Виправ помилки, які будуть в консолі, щоб скрипт запрацював.

const inventory = {
    items: ["Knife", "Gas mask"],
    add(itemName) {
      console.log(`Adding ${itemName} to inventory`);
      this.items.push(itemName);
    },
    remove(itemName) {
      console.log(`Removing ${itemName} from inventory`);
      this.items = this.items.filter((item) => item !== itemName);
    },
  };
  
  const invokeInventoryAction = function (itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    action(itemName);
  };
  
  invokeInventoryAction("Medkit", (itemName) => inventory.add(itemName));
  console.log(inventory.items); 
  
  invokeInventoryAction("Gas mask", (itemName) => inventory.remove(itemName));
  
  console.log(inventory.items); 
  


// # Завдання 3

// Напишіть функцію, яка приймає об'єкт з іменем та віком користувача і повертає рядок, що містить ім'я та повідомлення про те, скільки років їй або йому.

// Використайте деструктуризацію, щоб отримати доступ до імені та віку з переданого об'єкту.
function userInfo({ name, age }) {
    return `${name} має ${age} років.`;
  }
  
  console.log(userInfo({ name: "Марія", age: 28 })); 
  

// # Завдання 4

// Ви отримали об'єкт даних з інформацією про продукти в інтернет-магазині:


const product = {
  id: 1,
  name: "Ноутбук Lenovo IdeaPad 3",
  price: 15000,
  description: "15.6 дюймовий, AMD Ryzen 5, 8 ГБ ОЗУ, 512 ГБ SSD",
  images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  category: "Ноутбуки",
  available: true,
};
```

// Напишіть функцію printProductInfo, яка приймає об'єкт product в якості параметра та друкує в консоль інформацію про цей продукт в наступному форматі:

// 
// Назва: Ноутбук Lenovo IdeaPad 3
// Категорія: Ноутбуки
// Доступність: Так
// Ціна: 15000 грн
// ```

// Реалізуйте цю функцію, використовуючи деструктуризацію для отримання необхідних полів з об'єкту product.
function printProductInfo({ name, category, price, available }) {
    console.log(`Назва: ${name}`);
    console.log(`Категорія: ${category}`);
    console.log(`Доступність: ${available ? "Так" : "Ні"}`);
    console.log(`Ціна: ${price} грн`);
  }
  
  printProductInfo(product);
  

// # Завдання 5

//\* Створіть функцію personInfo, яка приймає об'єкт в якості параметра та виконує деструктуризацію цього об'єкта, витягуючи з нього наступні поля: "name", "age", "email", "city". Потім використайте деструктуризовані значення для створення нового об'єкта з наступними полями: "fullName" (значення поля "name" додане до значення поля "age" через пробіл), "contact" (значення поля "email" додане до значення поля "city" через кому). Функція має повертати цей новий об'єкт.

// \* Маємо наступний об'єкт:


const person = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  city: "New York",
};


function personInfo({ name, age, email, city }) {
  const newObject = {
    fullName: `${name}, ${age}`,
    contact: `${email}, ${city}`,
  };

  return newObject;
}

const result = personInfo(person);
console.log(result);


//\* Маєте отримати результат:
// contact: "john.doe@example.com, New York"
// fullName: "John Doe, 30"
