const uid = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

let books = [
  {
    id: "9a5s2f187ed2f",
    title: "Justice League of America",
  },
  {
    id: "8ds4g5e8s1dfg",
    title: "New Avengers",
  },
  {
    id: "8ew141f8ds3d1",
    title: "Amazing Spider-Man",
  },
];

interface argsInterface {
  title: string;
}

export const resolvers = {
  Query: {
    books: () => books,
  },

  Mutation: {
    addBook(_: undefined, args: argsInterface) {
      const newBook = {
        id: uid() + uid(),
        title: args.title,
      };
      books.push({ id: newBook.id, title: newBook.title });

      return newBook;
    },
  },
};
