let books = [{
    title : "air"
    ,author : "Adam"
    ,npages : 100
    ,availablity : true}
    ,{
       title : "north"
    ,author : "sara"
    ,npages : 293
    ,availablity : false 
    },{
        title : "sky"
    ,author : "Ahmed"
    ,npages : 926
    ,availablity : true
    },{
        title : "dream"
    ,author : "Ali"
    ,npages : 50
    ,availablity : false
    },{
        title : "math"
    ,author : "nora"
    ,npages : 93
    ,availablity : true
    }]

    /* 1*/
    for ( i = 0; i < books.length; i++) {
  console.log(books[i].title);
  console.log(books[i].author);
  console.log(books[i].npages);

}
   /* 2 */

function borrowBook(title, borrowerName) {
    for ( i = 0; i < books.length; i++) {
      if (books[i].title == title) {
        if (books[i].availablity) {
          books[i].availablity = false;
          books[i].borrower = borrowerName;
          console.log(title + " book borrowed by " + borrowerName);
        } else {
          console.log(title + "book is not available for borrowing");
        }
        return;
      }
    }
  }
  borrowBook("air", "hibah");

  /* 3 */

function returnBook(title) {
    for (var i = 0; i < books.length; i++) {
      if (books[i].title == title) {
        if (books[i].borrower) {
          delete books[i].borrower;
          books[i].availablity = true;
          console.log(title + " is avaliable now");
        } else {
          console.log(title + " was never borrowed");
        }
        return;
      }
    }
  }
returnBook("north");

/* 4 */
/* done testing */


/* 5 */

for ( i = 0; i < books.length; i++) {
    console.log(books[i].title);
    console.log(books[i].author);
    console.log(books[i].npages);
    if (books.borrower) {
        console.log(`Borrower: ${book.borrower}`);
      }
  }

/* 5 */

function addBook(newBook) {
    books.push(newBook);
  }

  let newBook = {
    title: "The book",
    author: "Jj",
    npages: 222,
    availablity : true
  };

/* 6 */

function searchBook(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
  
    return books.filter(book => {
      const { title, author, borrower } = book;
      return (
        title.toLowerCase().includes(searchTerm) ||
        author.toLowerCase().includes(searchTerm) ||
        (borrower && borrower.toLowerCase().includes(searchTerm))
      );
    });
  }

  let searchTerm1 = "adam";
  let results1 = searchBook(searchTerm1);
  console.log(results1);
