export interface Book{
    id:number,
    title:string,
    author: string,
    publicationYear:number,

}
export const books:Book[]=[
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publicationYear: 1925
      },
      {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publicationYear: 1960
      },
      {
        id: 3,
        title: "1984",
        author: "George Orwell",
        publicationYear: 1949
      },
      {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publicationYear: 1813
      },
      {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publicationYear: 1951
      },
      {
        id: 6,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        publicationYear: 1937
      },
      {
        id: 7,
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        publicationYear: 1953
      },
      {
        id: 8,
        title: "Moby Dick",
        author: "Herman Melville",
        publicationYear: 1851
      },
      {
        id: 9,
        title: "War and Peace",
        author: "Leo Tolstoy",
        publicationYear: 1869
      },
      {
        id: 10,
        title: "The Odyssey",
        author: "Homer",
        publicationYear: -800
      }
]