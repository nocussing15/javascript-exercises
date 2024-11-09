/*# Exercise 11 - Get the Titles!

You are given an array of objects that represent books with an author and a title that looks like this:

```javascript
const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
```

Your job is to write a function that takes the array and returns an array of titles:

```javascript
getTheTitles(books) // ['Book','Book2']
```

## Hints

- You should use a built-in javascript method to do most of the work for you!
*/ 


const getTheTitles = function(bookList) {
    const returnBookLists = bookList.map((book) => {
        return book.title; 
    });
    return returnBookLists; 
};



const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]


console.log(getTheTitles(books)); 


// Do not edit below this line
module.exports = getTheTitles;
