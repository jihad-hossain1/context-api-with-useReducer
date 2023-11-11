import React, { useState } from "react";
import Rating from "./Rating";
import { ProductState } from "../context/Context";

const FilterProducts = () => {
  const [toggle, setToggle] = useState(false);
  const {
    filterDispatch,
    filterState: { byStock, byFastDelivery, byRating, sort },
  } = ProductState();

  return (
    <main>
      <div className="flex justify-end md:justify-start">
        <button
          onClick={() => setToggle(!toggle)}
          className="hidden  shadow-md p-2 rounded  border border-zinc-900 md:inline-block mb-2"
        >
          FilterProducts
        </button>
        <button
          onClick={() => setToggle(!toggle)}
          className="md:hidden shadow-md p-2 transition-all duration-300 rounded  border border-zinc-900 inline-block mb-2"
        >
          FilterProducts
        </button>
      </div>
      {toggle && (
        <section className="grid grid-cols-2 md:flex md:flex-row gap-2 mb-4 justify-center">
          <div className="flex gap-2 border w-fit p-2 border-zinc-800">
            <input
              onChange={() =>
                filterDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "lowToHigh",
                })
              }
              checked={sort === "lowToHigh" ? true : false}
              type="radio"
              name="ascending"
              id=""
            />
            <label htmlFor="ascending">ascending</label>
          </div>
          <div className="flex gap-2 border w-fit p-2 border-zinc-800">
            <input
              onChange={() =>
                filterDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "highToLow",
                })
              }
              checked={sort === "highToLow" ? true : false}
              type="radio"
              name="descending"
              id=""
            />
            <label htmlFor="descending">descending</label>
          </div>
          <div className="flex gap-2 border w-fit p-2 border-zinc-800">
            <input
              onChange={() =>
                filterDispatch({
                  type: "FILTER_BY_STOCK",
                })
              }
              checked={byStock}
              type="checkbox"
              name="ascending"
              id=""
            />
            <label htmlFor="ascending">out of stock</label>
          </div>
          <div className="flex gap-2 border w-fit p-2 border-zinc-800">
            <input
              onChange={() =>
                filterDispatch({
                  type: "FILTER_BY_DELIVERY",
                })
              }
              checked={byFastDelivery}
              type="checkbox"
              name="ascending"
              id=""
            />
            <label htmlFor="ascending">fast delivary</label>
          </div>
          <div className="flex gap-2 border w-fit p-2 border-zinc-800">
            <label htmlFor="rating">rating</label>
            <Rating
              rating={byRating}
              onClick={(i) =>
                filterDispatch({ type: "FILTER_BY_RATING", payload: i + 1 })
              }
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className=" border w-fit p-2 border-zinc-800">
            <input
              type="submit"
              onClick={() =>
                filterDispatch({
                  type: "CLEAR_FILTERS",
                })
              }
              className="cursor-pointer bg-zinc-300 text-zinc-900 px-2 rounded"
              value={"clear Filter"}
              id=""
            />
          </div>
        </section>
      )}
    </main>
  );
};

export default FilterProducts;
