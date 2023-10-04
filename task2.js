// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
// Необходимо создать систему управления этими заказами, которая позволит:
// Отслеживать, какой повар готовит какое блюдо.
// Записывать, какие блюда заказал каждый клиент.
// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.
// Повара и их специализации:
// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.
// Блюда и их повара:
// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.
// Заказы:
// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const pizzas = ["Margarita", "Pepperoni"];
const sushis = ["Philadelphia", "California"];
const deserts = ["Tiramisu", "Cheesecake"];

const specializations = new Map();
specializations
  .set("Pizza", pizzas)
  .set("Sushi", sushis)
  .set("Desert", deserts);

const chefs = new Map();
chefs
  .set("Виктор", specializations.get("Pizza"))
  .set("Ольга", specializations.get("Sushi"))
  .set("Дмитрий", specializations.get("Desert"));

// Все клиенты описаны ниже
const client0 = {
  id: 0,
  name: "Алексей",
};
const client1 = {
  id: 1,
  name: "Мария",
};
const client2 = {
  id: 2,
  name: "Ирина",
};

// все заказы будут храниться здесь
const orders = new Map();

// Функция регистрации нового заказа по одному блюду
function newOrder(client, dish) {
  if (orders.has(client)) {
    orders.get(client).add(dish);
  } else {
    orders.set(client, new Set().add(dish));
  }
}

newOrder(client0, "Pepperoni");
newOrder(client0, "Tiramisu");
newOrder(client1, "California");
newOrder(client1, "Margarita");
newOrder(client2, "Cheesecake");

// Функция вывода в консоль все заказов сгруппированных по клиентам
function printOrders() {
  for (const order of orders) {
    console.log(`Клиент ${order[0].name} заказал: ${[...order[1]]}`);
  }
}

printOrders();
