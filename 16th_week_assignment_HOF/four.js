const books = [
        {
            title: "The Fault in Our Stars", 
            author: "John Green", 
            year: 2012
        },
        {
            title: "The Help", 
            author: "Kathryn Stockett", 
            year: 2009
        },
        {
            title: "Gone Girl", 
            author: "Gillian Flynn", 
            year: 2012
        },
        {
            title: "The Alchemist", 
            author: "Paulo Coelho", 
            year: 1988
        },
        {
            title: "The Immortal Life of Henrietta Lacks", 
            author: "Rebecca Skloot", 
            year: 2010
        },    
];

const filterBook = books.filter((book) => {
    return book.year >= 2010;
})

const final = filterBook.map((book) => {
    return {
        ...book,author : book.author.toUpperCase(),
    }
})

console.log(final);


