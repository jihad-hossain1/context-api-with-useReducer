// import { it } from "@faker-js/faker";
import FilterProducts from "./conmponents/FilterProducts";
import Nav from "./conmponents/Nav";
import SingleProduct from "./conmponents/SingleProduct";
import { ProductState } from "./context/Context";

const App = () => {
  const {
    state: { products },
    filterState: { byStock, byFastDelivery, byRating, sort, searchQuery },
  } = ProductState();
  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((itm) => itm.isStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((itm) => itm.fast);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((itm) => itm.rating >= byRating);
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((itm) =>
        itm.name.toLowerCase().includes(searchQuery)
      );
    }
    return sortedProducts;
  };
  return (
    <div className="bg-gray-dark  text-gray-light   px-2 py-4 w-full">
      <div className="max-w-screen-xl m-auto min-h-screen">
        <Nav />
        <div className="flex items-center justify-between">
          <div>Total: {products?.length}</div>
          <FilterProducts />
        </div>
        <div className=" grid sm:grid-cols-2 md:grid lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {products &&
            transformProducts()?.map((itm, index) => (
              <SingleProduct key={index} itm={itm} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
