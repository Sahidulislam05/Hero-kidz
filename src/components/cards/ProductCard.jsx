import Image from "next/image";
import Link from "next/link";
import React from "react";
import CartButton from "../buttons/CartButton";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden border border-gray-100">
      {/* Image Container */}
      <figure className="relative h-48 w-full bg-gradient-to-b from-gray-100 to-gray-50 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="object-contain p-4"
        />
        {product.discount > 0 && (
          <div className="badge badge-error absolute top-4 right-4 text-white">
            -{product.discount}%
          </div>
        )}
      </figure>

      {/* Card Body */}
      <div className="card-body p-5">
        {/* Title */}
        <h2 className="card-title text-lg line-clamp-2 hover:text-primary transition-colors">
          {product.title}
        </h2>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-2 mb-2">
          <div className="rating rating-sm">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                name={`rating-${product.title}`}
                className="mask mask-star-2 bg-orange-400"
                defaultChecked={star === Math.round(product.ratings)}
                disabled
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 font-medium">
            {product.ratings} ({product.reviews} reviews)
          </span>
        </div>

        {/* Sales Count */}
        <p className="text-xs text-gray-500 mb-3">
          <span className="font-semibold text-success">{product.sold}</span>{" "}
          sold
        </p>

        {/* Price Section */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-bold text-primary">
            ${Math.round(product.price * (1 - product.discount / 100))}
          </span>
          {product.discount > 0 && (
            <span className="text-lg text-gray-400 line-through">
              ${product.price}
            </span>
          )}
        </div>

        <CartButton product={{ ...product, _id: product._id.toString() }} />

        {/* Action Buttons */}
        <div className="card-actions gap-2">
          <Link href={`/products/${product._id}`} className="flex-1">
            <button className="btn btn-outline btn-primary btn-sm w-full rounded-lg">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
