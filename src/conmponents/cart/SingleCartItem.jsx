import { BsTrash3 } from "react-icons/bs";
import { ProductState } from "../../context/Context";

const SingleCartItem = ({ item }) => {
  const { dispatch } = ProductState();
  return (
    <div className="flex justify-between border border-zinc-700 p-4 rounded shadow-md">
      <div>
        <h4 className="text-xl font-semibold ">{item?.name}</h4>
        <p className="text-sm">$ {item?.price}</p>
      </div>
      <div className="flex flex-col gap-4">
        <select
          value={item.qty}
          className="bg-zinc-700 rounded p-2"
          onChange={(e) =>
            dispatch({
              type: "CHANGE_CART_QTY",
              payload: {
                id: item.id,
                qty: e.target.value,
              },
            })
          }
        >
          {[...Array(item?.isStock).keys()].map((x) => (
            <option key={x + 1}>{x + 1}</option>
          ))}
        </select>
        <button
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: item,
            })
          }
        >
          <BsTrash3 size={20} />
        </button>
      </div>
    </div>
  );
};

export default SingleCartItem;
