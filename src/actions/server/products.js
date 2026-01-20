"use server";

import { ObjectId } from "mongodb";
const { dbConnect, collections } = require("@/lib/dbConnect");

export const getProducts = async () => {
  try {
    const productsCollection = await dbConnect(collections.PRODUCTS);
    const products = await productsCollection.find().toArray();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getSingleProduct = async (id) => {
  // Check if id exists and is a valid string
  if (!id || typeof id !== "string" || id.length !== 24) {
    return {};
  }
  try {
    const productsCollection = await dbConnect(collections.PRODUCTS);
    const query = { _id: new ObjectId(id) };
    const product = await productsCollection.findOne(query);
    
    if (!product) {
      return {};
    }
    
    return { ...product, _id: product._id.toString() };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {};
  }
};
