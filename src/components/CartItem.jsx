import { useDispatch } from "react-redux";
import { removeItem, editItem } from "../features/cart/cartSlice";
import { formatPrice, generateAmountOptions } from "../utils";

const CartItem = ({ cartItem }) => {
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;
  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col flex-wrap gap-y-4 border-b border-base-300 pb-6 last:border-b-0 sm:flex-row"
    >
      {/* image */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg object-cover sm:h-32 sm:w-32"
      />
      {/* info */}
      <div className="sm:ml-16 sm:w-48">
        {/* title */}
        <h3 className="font-medium capitalize">{title}</h3>
        {/* company */}
        <h4 className="mt-2 text-sm capitalize text-neutral-content">
          {company}
        </h4>
        {/* color */}
        <p className="mt-4 flex items-center gap-x-2 text-sm capitalize">
          color :{" "}
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        {/* amount */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="select-base select select-bordered select-xs mt-2"
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* remove */}
        <button
          className="link-hover link-primary link mt-2 text-sm"
          onClick={removeItemFromTheCart}
        >
          Remove
        </button>
      </div>
      {/* price */}
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
