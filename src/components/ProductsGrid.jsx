import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollars = formatPrice(price);

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card w-full shadow-xl transition duration-300 hover:shadow-2xl"
          >
            <figure className="p-4">
              <img
                src={image}
                alt={title}
                className="h-64 w-full rounded-xl object-cover md:h-48"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{dollars}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
