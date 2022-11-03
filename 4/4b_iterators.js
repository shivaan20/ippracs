//iterators
const favourtieMovies = [
    'Harry Potter',
    'Lord of the Rings',
    'Rush Hour', 
    'Interstellar',
    'Evolution',
  ];
  const iterator = favourtieMovies[Symbol.iterator]();
 
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());