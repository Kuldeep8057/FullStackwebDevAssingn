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

function titleExtract(books,callback){
    const titles = books.map((book) => book.title)
    callback(titles);
}

function  logTitles(titles){
    titles.sort();
    console.log(titles.join(""));
}
titleExtract(books,logTitles);