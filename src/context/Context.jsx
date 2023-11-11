import { faker } from "@faker-js/faker";
import { createContext, useContext, useReducer } from "react";
import { filterReducer, productReducer } from "./Reducer";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(100)].map(() => ({
    id: faker.string.uuid(),
    name: faker.internet.userName(),
    avatar: faker.image.avatar(),
    isStock: faker.helpers.arrayElement([0, 1, 2, 3, 4, 6, 10, 13, 5]),
    price: faker.datatype.number({ max: 1000 }),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 4]),
    fast: faker.datatype.boolean(),
  }));

  const [state, dispatch] = useReducer(productReducer, {
    products: products,
    cart: [],
  });

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  // console.log(products);
  return (
    <Cart.Provider value={{ state, dispatch, filterDispatch, filterState }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const ProductState = () => {
  return useContext(Cart);
};
