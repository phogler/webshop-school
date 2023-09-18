"use client";

import { ProductFilterProps } from "@/app/typings/Product";
import { capitalize } from "@/app/utils/capitalize";
import { useAppDispatch } from "@/store/hooks";
import { toggleProductModal } from "@/store/modal/modalSlice";
import { HiPlusCircle, HiCube, HiHome, HiLightningBolt, HiSearchCircle } from "react-icons/hi";

const ProductFilter = ({ searchQuery, categoryQuery, onSearchChange, onCatalogChange }: ProductFilterProps) => {
    const dispatch = useAppDispatch();

    const handleProductModal = (): void => {
        dispatch(toggleProductModal());
    };

    return (
        <>
            <div className="inline-flex items-center gap-4 p-2 border">
                <div className="inline-flex items-center gap-2 w-[45%]">
                    <label className="inline-flex gap-1 items-center cursor-pointer" htmlFor="search">
                        Search <HiSearchCircle className="text-slate-800" size={23} />
                    </label>
                    <input
                        className="w-[100%] bg-slate-50 border py-1 px-2"
                        placeholder="Product search..."
                        type="text"
                        id="search"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>
                <hr className="w-[1px] h-[33px] bg-slate-200" />
                <div className="inline-flex gap-4">
                    <button
                        className="px-3 py-1 border bg-slate-50 hover:bg-slate-100 focus:bg-slate-150 transition inline-flex items-center gap-2"
                        value="home"
                        onClick={(e) => onCatalogChange(e.currentTarget.value)}>
                        Home
                        <HiHome className="text-slate-800" size={20} />
                    </button>
                    <button
                        className="px-3 py-1 border bg-slate-50 hover:bg-slate-100 transition focus:bg-slate-150 inline-flex items-center gap-2 "
                        value="electronics"
                        onClick={(e) => onCatalogChange(e.currentTarget.value)}>
                        Electronics
                        <HiCube className="text-slate-800" size={20} />
                    </button>
                    <button
                        className="px-3 py-1 border bg-slate-50 hover:bg-slate-100 transition focus:bg-slate-150 active:bg-slate-150  inline-flex items-center gap-2"
                        value="clothing"
                        onClick={(e) => onCatalogChange(e.currentTarget.value)}>
                        Clothing
                        <HiLightningBolt className="text-slate-800" size={20} />
                    </button>
                </div>

                <button
                    className="ml-auto border px-4 py-1  bg-slate-50 border-solid hover:bg-slate-100 transition inline-flex gap-2 items-center whitespace-nowrap"
                    onClick={handleProductModal}>
                    Create New Product <HiPlusCircle className="text-slate-800" size={22} />
                </button>
            </div>
            <div className="inline-flex gap-2 ">
                <div className="inline-flex gap-2">
                    {searchQuery.length > 1 && <div>Search: {capitalize(searchQuery)}</div>}
                    {categoryQuery && (
                        <div className="inline-flex gap-2">
                            <div>Category: {capitalize(categoryQuery)}</div>
                            <button className="text-pink-800 hover:text-pink-600 transition" onClick={(e) => onCatalogChange("")}>
                                Reset Filter
                            </button>
                        </div>
                    )}
                </div>
                <div></div>
            </div>
        </>
    );
};

export default ProductFilter;
