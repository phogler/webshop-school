"use client";

import { ProductDetailsProps } from "@/app/typings/Product";
import { capitalize } from "@/app/utils/capitalize";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeExistingProduct } from "@/store/products/productsSlice";
import { redirect } from "next/navigation";

import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";

const ProductDetails = ({ productId }: ProductDetailsProps) => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.products);
    const product = products.find((product) => product.id === productId);

    if (!product) redirect("/");

    const handleRemoveProduct = (): void => {
        dispatch(removeExistingProduct(product.id));
    };

    return (
        <div className="flex flex-col ">
            <div className="relative bg-slate-50 border-x border-t h-[200px] p-2">
                <div className="inline-flex gap-1 float-right">
                    <button>
                        <HiPlusCircle size={24} />
                    </button>
                    <button onClick={handleRemoveProduct}>
                        <HiMinusCircle size={24} />
                    </button>
                </div>
            </div>
            <div className="border p-2 flex flex-col gap-2">
                <div className="inline-flex items-center gap-2">
                    Category: <div className="border px-2 py-1 bg-slate-50">{capitalize(product.category)}</div>
                </div>
                <p>Subject: {capitalize(product.subject)}</p>
                <p>Description: {capitalize(product.description)}</p>
            </div>
        </div>
    );
};

export default ProductDetails;
