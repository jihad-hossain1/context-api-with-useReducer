import React, { useEffect, useState } from "react";
import { ProductState } from "../../context/Context";
import SingleCartItem from "../../conmponents/cart/SingleCartItem";
import NoItemFound from "../../conmponents/NoItemFound/NoItemFound";

const Carts = () => {
  const {
    state: { cart },
    dispatch,
  } = ProductState();

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart?.reduce((acc, curr) => acc + parseFloat(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <main className="max-w-screen-xl mx-auto px-2">
      <h4 className="sm:text-xl md:text-3xl font-semibold md:font-bold text-center py-4">
        Carts items
      </h4>
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-3">
        <section className="bg-gray-dark/75 shadow-[0px_0px_6px_rgba(0,0,0,0.25)]  w-full lg:w-[70%] flex flex-col gap-4 p-4">
          {cart?.length > 0 ? (
            cart?.map((item, index) => (
              <SingleCartItem key={index} index={index} item={item} />
            ))
          ) : (
            <>
              <NoItemFound />
            </>
          )}
        </section>
        <section className="  border border-zinc-800 bg-zinc-800 lg:min-h-screen w-full lg:w-[30%] p-4">
          <aside className="">
            <h4 className="text-center underline ">Summary</h4>
            <div className="flex flex-col gap-3">
              <h4>subtotal ({cart?.length || 0}) items</h4>
              <h4>Total Price: ${total}</h4>
            </div>
            <div className=" mt-20">
              <button
                disabled={cart?.length === 0}
                className="px-5 py-3 w-full border border-zinc-800 bg-indigo-600 rounded shadow-md hover:bg-indigo-700 transition-all duration-300 "
              >
                Proceed to Checkout
              </button>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
};

export default Carts;
