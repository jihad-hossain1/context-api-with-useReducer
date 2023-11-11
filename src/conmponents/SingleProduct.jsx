import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import { ProductState } from "../context/Context";

const SingleProduct = ({ itm, index }) => {
  const {
    state: { cart },
    dispatch,
  } = ProductState();

  return (
    <div className="border border-slate-800 shadow-[0px_0px_15px_rgba(0,0,0,0.25)] p-4 rounded-md">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between gap-4">
          <h4 className="font-semibold flex flex-col gap-2 break-all">
            {itm?.name}
          </h4>
          <div className="w-fit rounded-full px-2 py-1 flex justify-center items-center bg-zinc-900 text-zinc-50">
            {index + 1}
          </div>
        </div>

        <div className="flex flex-col gap-2 ">
          <div className="flex gap-2">
            <span className="font-normal">price: ${itm?.price}</span>
            <span className="font-normal">stock: {itm?.isStock}</span>
          </div>

          <Rating rating={itm?.rating} />
          <div className="">
            {itm?.fast ? (
              <span className="text-green-500">Fast delivery</span>
            ) : (
              "Regular delivery"
            )}
          </div>
        </div>
        <div className="flex flex-col  gap-2">
          {cart.some((p) => p?.id === itm?.id) ? (
            <button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: itm,
                });
              }}
              className="px-2 py-1 border border-pink-600 bg-pink-700 rounded shadow drop-shadow w-fit"
            >
              Remove from cart
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: itm,
                });
              }}
              disabled={!itm.isStock}
              className={`${
                !itm.isStock
                  ? "border  border-indigo-400 bg-indigo-400"
                  : "border  border-indigo-700 bg-indigo-700"
              } px-2 py-1  rounded shadow drop-shadow w-fit`}
            >
              {!itm.isStock ? "out of stock" : "Add to cart"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
