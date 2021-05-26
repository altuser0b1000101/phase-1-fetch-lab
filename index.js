
const imgUrl = "https://anapioficeandfire.com/api/books"

function fetchBooks(){
return fetch(imgUrl)
.then(func => func.json())
.then(json => renderBooks(json))
}
const renderBooks = json => {
let addTitles = document.getElementById("book-list")
}

// const renderBooks = (bookTitle) => {
//   // make div tags
// let div = document.createElement("div")

// }


// const renderBooks = (books) =>

// fetch(imgUrl)
// .then(resp => resp.json())
// .then((data) => (console.log(data)))