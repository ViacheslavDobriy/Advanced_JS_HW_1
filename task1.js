// Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.
// Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator.
// Каждый альбом имеет следующую структуру:
// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }
// Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате:
// Название альбома - Исполнитель (Год выпуска)

const musicCollection = {
  albums: [
    {
      title: "Revival",
      artist: "Eminem",
      year: 2017,
    },
    {
      title: "The Rising Tied",
      artist: "Fort Minor",
      year: 2005,
    },
    {
      title: "Junkyard Jewel",
      artist: "Maya Azucena",
      year: 2007,
    },
    {
      title: "Oh! Pretty Woman",
      artist: "Roy Orbison",
      year: 1964,
    },
  ],
};

musicCollection[Symbol.iterator] = function () {
  return {
    current: 0,
    to: this.albums.length,
    next() {
      return this.current < this.to
        ? { done: false, value: musicCollection.albums[this.current++] }
        : { done: true };
    },
  };
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
