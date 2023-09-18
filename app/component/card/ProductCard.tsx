"use client";

import { Product, ProductCardProps } from "@/app/typings/Product";
import { capitalize } from "@/app/utils/capitalize";
import { addToCart, removeFromCart } from "@/store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeExistingProduct } from "@/store/products/productsSlice";
import Link from "next/link";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";

const ProductCard = ({ product }: ProductCardProps) => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cart.cart);

    const handleAddToCart = (): void => {
        dispatch(addToCart(product));
    };

    const handleRemoveFromProducts = (): void => {
        dispatch(removeExistingProduct(product.id));
        dispatch(removeFromCart(product.id));
    };

    const productExistInCart = cart.find((item) => item.id === product.id);

    return (
        <div className={`flex flex-col border  whitespace-pre-wrap h-[300px] p-2`}>
            <div className="relative bg-slate-50 flex-1 p-2 border ">
                <div className="absolute right-3 top-3 inline-flex gap-1 ">
                    <button className="text-slate-800" onClick={handleAddToCart} disabled={productExistInCart as any}>
                        <HiPlusCircle className={`${productExistInCart ? "hidden" : "block"} text-slate-800`} size={24} />
                    </button>
                    <button className="disabled:opacity-50" onClick={handleRemoveFromProducts}>
                        <HiMinusCircle className="text-slate-800 " size={24} />
                    </button>
                </div>
                <div className="absolute bottom-4 flex flex-col  justify-between">
                    <div className="mb-2">
                        <p>Subject: {capitalize(product.subject)}</p>
                    </div>
                    <div className="inline-flex items-center gap-2 ">
                        Category:
                        <div className="px-2 py-1 border">{capitalize(product.category)}</div>
                    </div>
                </div>
            </div>
            <Link href={`/product/${product.id}`}>
                <div className="mt-2 flex flex-col gap-2">
                    <p>Description: </p>
                    <div className="border p-2 bg-slate-50">
                        <p>{capitalize(product.description)}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
