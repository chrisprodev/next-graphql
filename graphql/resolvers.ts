const books = [
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

export const resolvers = {
  Query: {
    books: () => books,
  },
};
