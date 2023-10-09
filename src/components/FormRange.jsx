import { useState } from "react";
import { formatPrice } from "../utils";

const FormRange = ({ label, name, size = "", price }) => {
  const step = 1_000;
  const maxPrice = 100_000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        step={step}
        className={`range range-primary ${size}`}
      />
      <div className="mt-2 flex w-full justify-between px-2 text-xs">
        <span className="textarea-md font-bold">0</span>
        <span className="textarea-md font-bold">
          Max : {formatPrice(maxPrice)}
        </span>
      </div>
    </div>
  );
};

export default FormRange;
