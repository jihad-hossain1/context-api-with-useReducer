import React, { useState } from "react";
import { ProductState } from "../context/Context";
import { IoTrashSharp } from "react-icons/io5";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const {
    state: { cart },
    dispatch,
    filterDispatch,
  } = ProductState();

  return (
    <div className="w-full py-3 bg-slate-700 my-2 px-4 flex justify-between items-center">
      <div>
        <button>eCommerce</button>
      </div>
      <div>
        <input
          placeholder="search your items"
          type="text"
          className="focus:outline-none p-2 rounded bg-slate-700 border border-indigo-500"
          onChange={(e) => {
            filterDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            });
          }}
        />
      </div>
      <ul className="flex justify-end relative">
        <li
          onClick={() => setToggle(!toggle)}
          className="cursor-pointer flex items-center gap-3"
        >
          <span className="hidden md:block pb-1 text-orange-500 text-xl ">
            total item on cart:
          </span>
          <span className="bg-orange-400 text-zinc-50 flex items-center justify-center px-2 rounded w-fit">
            {cart?.length || 0}
          </span>
        </li>
        {toggle && (
          <li className="absolute bg-slate-600  mt-8 ">
            <div className="flex flex-col gap-2 py-4 min-w-[150px]">
              {cart?.length > 0 ? (
                cart?.map((itm) => (
                  <div
                    key={itm.id}
                    className=" border border-zinc-500 w-full px-4 py-2 hover:bg-slate-700"
                  >
                    <div className="flex justify-between gap-4">
                      <div>
                        <p className="text-xs">{itm?.name} </p>
                        <h4 className="text-xs">${itm?.price}</h4>
                      </div>
                      <button
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: itm,
                          });
                        }}
                      >
                        <IoTrashSharp className="text-red-500 text-xl" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center">cart is empty</div>
              )}
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Nav;
