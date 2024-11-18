  function averageOfEvenNumbers(arr) {
    // Filter even numbers, then calculate their sum and average
    let evenNumbers = arr.filter(num => num % 2 === 0);
    let sum = evenNumbers.reduce((acc, num) => acc + num, 0);
    return evenNumbers.length > 0 ? sum / evenNumbers.length : 0;
  }
  
  console.log(averageOfEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 4








  function longestWord(arr) {
    return arr.reduce((longest, current) => current.length > longest.length ? current : longest, '');
  }
  
  console.log(longestWord(["apple", "banana", "cherry", "strawberry"])); // Output: "strawberry"













  
  function averagePages(books) {
    let totalPages = books.map(book => book.pages).reduce((acc, pages) => acc + pages, 0);
    return books.length > 0 ? totalPages / books.length : 0;
  }
  
  const books = [
    { title: "Book 1", author: "Author 1", pages: 200 },
    { title: "Book 2", author: "Author 2", pages: 350 },
    { title: "Book 3", author: "Author 3", pages: 150 }
  ];
  
  console.log(averagePages(books)); // Output: 233.33
  




  function countStrings(arr) {
    return arr.reduce((acc, current) => {
      acc[current] = (acc[current] || 0) + 1;
      return acc;
    }, {});
  }
  
  console.log(countStrings(["hello", "world", "hello"])); // Output: { hello: 2, world: 1 }
  








  function countPeopleByCity(people) {
    return people.reduce((acc, person) => {
      acc[person.city] = (acc[person.city] || 0) + 1;
      return acc;
    }, {});
  }
  
  const people = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" }
  ];
  
  console.log(countPeopleByCity(people)); // Output: { "New York": 2, "Chicago": 1 }
  
