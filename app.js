const books = require("./data/books.json");
const express = require("express")
const app = express()
const port = 3000

books.filter(book => book.year > 1900)

//1
app.get("/all",(req,res) => {
    res.status(200).json(books);
})

//2
app.get("/first",(req,res) => {
    res.status(200).json(books[0]);
})

//3
app.get("/last",(req,res) => {
    res.status(200).json(books[books.length-1]);
})

//4
app.get("/middle",(req,res) => {
    res.status(200).json(books[50]);
})

//5
app.get("/author/dante-alighieri",(req,res) => {
    let book = books.find(book => book.author === "Dante Alighieri");
    res.status(200).json(book.title);
})

//6
app.get("/country/charles-dickens",(req,res) => {
    let book = books.find(book => book.author === "Charles Dickens");
    res.status(200).json(book.country);
})

//7
app.get("/year&pages/cervantes",(req,res) => {
    let book = books.find(book => book.author === "Miguel de Cervantes");
    res.status(200).json({year:book.year, pages:book.pages});
})

//8
app.get("/country/count/spain",(req,res) => {
    let book = books.filter(book => book.country === "Spain");
    res.status(200).json(book.length);
})

//9
app.get("/country/at-least/germany",(req,res) => {
    let book = books.find(book => book.country === "Germany");
    res.status(200).json(book.country.includes("Germany"));
})

//10
app.get("/pages/all-greater/200",(req,res) => {
    let book = books.find(book => book.pages > 200);
    res.status(200).json(books.includes(book.pages));
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})