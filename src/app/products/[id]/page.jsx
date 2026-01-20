import Image from "next/image";
import React from "react";
import Link from "next/link";
import { getSingleProduct } from "@/actions/server/products";
import { Metadata } from "next";
import CartButton from "@/components/buttons/CartButton";

// Dynamic metadata for product
export async function generateMetadata({ params }) {
  const { id } = await Promise.resolve(params);

  // Fetch product data
  const product = await getSingleProduct(id);

  if (!product || !product.title) {
    return {
      title: "Product Not Found | Hero Kidz Toys",
      description: "Sorry, this product could not be found.",
      openGraph: {
        title: "Product Not Found | Hero Kidz Toys",
        description: "Product not found",
        url: `https://hero-kidz-toys.vercel.app/products/${id}`,
      },
    };
  }

  const productTitle = product.title;
  const productDesc =
    product.description?.slice(0, 155) ||
    "Discover this fun & quality toy product from Hero Kidz Toys.";

  const imageUrl = product.image;

  return {
    title: `${productTitle} | Hero Kidz Toys`,
    description: productDesc,
    metadataBase: new URL("https://hero-kidz-toys.vercel.app"),
    openGraph: {
      title: `${productTitle} | Hero Kidz Toys`,
      description: productDesc,
      url: `https://hero-kidz-toys.vercel.app/products/${id}`,
      siteName: "Hero Kidz Toys",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: productTitle,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${productTitle} | Hero Kidz Toys`,
      description: productDesc,
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://hero-kidz-toys.vercel.app/products/${id}`,
    },
  };
}

const ProductDetails = async ({ params }) => {
  // Await params in case it's a Promise (Next.js 15+)
  const { id } = await Promise.resolve(params);

  if (!id) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-error mb-4">
            ⚠️ Invalid Product ID
          </h1>
          <p className="text-xl text-gray-600 mb-6">No product ID provided.</p>
          <Link href="/products" className="btn btn-primary btn-lg">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const product = await getSingleProduct(id);

  if (!product || !product.title) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-error mb-4">
            ⚠️ Product Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Sorry, we couldn't find the product you're looking for.
          </p>
          <Link href="/products" className="btn btn-primary btn-lg">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/products" className="btn btn-ghost btn-sm mb-6">
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Image Section */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-96 bg-gradient-to-b from-gray-100 to-gray-50 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg border border-gray-200">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className="object-contain p-6"
                priority
              />
              {product.discount > 0 && (
                <div className="badge badge-error absolute top-6 right-6 text-white text-lg py-3 px-4 font-bold">
                  -{product.discount}%
                </div>
              )}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            {/* Title and Bangla */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              {product.bangla && (
                <p className="text-xl text-gray-600 font-medium">
                  {product.bangla}
                </p>
              )}
            </div>

            {/* Rating and Reviews */}
            <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="rating rating-md">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <input
                      key={star}
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-orange-400 cursor-pointer"
                      defaultChecked={star === Math.round(product.ratings || 0)}
                      disabled
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  {product.ratings || 0}
                </span>
              </div>
              <div className="divider divider-horizontal m-0"></div>
              <span className="text-sm text-gray-600">
                {product.reviews || 0} Reviews
              </span>
              <div className="divider divider-horizontal m-0"></div>
              <span className="text-sm text-success font-semibold">
                {product.sold || 0} Sold
              </span>
            </div>

            {/* Price Section */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-bold text-primary">
                  $
                  {Math.round(
                    product.price * (1 - (product.discount || 0) / 100),
                  )}
                </span>
                {(product.discount || 0) > 0 && (
                  <span className="text-2xl text-gray-400 line-through">
                    ${product.price}
                  </span>
                )}
              </div>
              {(product.discount || 0) > 0 && (
                <p className="text-sm text-success font-semibold">
                  Save $
                  {product.price -
                    Math.round(
                      product.price * (1 - product.discount / 100),
                    )}{" "}
                  ({product.discount}% off)
                </p>
              )}
            </div>

            {/* Add to Cart and Buy Now */}
            <CartButton product={product}></CartButton>

            {/* Key Features */}
            {product.info && product.info.length > 0 && (
              <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900">
                  ✨ Key Features
                </h3>
                <ul className="space-y-2">
                  {product.info.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="badge badge-primary badge-sm mt-1">
                        ✓
                      </span>
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Description Section */}
        {product.description && (
          <div className="card bg-white shadow-lg mb-8 border border-gray-200">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">
                📖 Product Description
              </h2>
              <div className="prose prose-sm max-w-none text-gray-700 leading-8 whitespace-pre-wrap">
                {product.description}
              </div>
            </div>
          </div>
        )}

        {/* Q&A Section */}
        {product.qna && product.qna.length > 0 && (
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              ❓ Frequently Asked Questions
            </h2>
            <div className="join join-vertical w-full">
              {product.qna.map((item, idx) => (
                <div
                  key={idx}
                  className="collapse collapse-arrow join-item border border-gray-200 bg-white hover:bg-gray-50"
                >
                  <input
                    type="radio"
                    name="qna-accordion"
                    defaultChecked={idx === 0}
                  />
                  <div className="collapse-title text-lg font-semibold text-gray-900 bg-gray-50">
                    {item.question}
                  </div>
                  <div className="collapse-content bg-white text-gray-700">
                    <p className="pt-4 leading-7">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card bg-primary text-primary-content shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body items-center text-center">
              <h3 className="card-title text-lg">📦 Safe Delivery</h3>
              <p className="text-sm">Secure packaging for safe delivery</p>
            </div>
          </div>
          <div className="card bg-secondary text-secondary-content shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body items-center text-center">
              <h3 className="card-title text-lg">💰 Best Price</h3>
              <p className="text-sm">Guaranteed lowest prices</p>
            </div>
          </div>
          <div className="card bg-accent text-accent-content shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body items-center text-center">
              <h3 className="card-title text-lg">✨ Quality Assured</h3>
              <p className="text-sm">All products verified & tested</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
