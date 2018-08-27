export default{
  Query: {
    allCts: async (parent, args, { Cat }) => {
      const cats = await Cat.find();
      return cats.map((x) => {
        x._id = x._id.toString();
        return x;
      });
    },
  },

};
