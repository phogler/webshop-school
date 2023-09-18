"use client";
import { Product } from "@/app/typings/Product";
import ProductCard from "../card/ProductCard";
import ProductFilter from "../filter/ProductFilter";
import { useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";

const ProductDisplay = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [categoryQuery, setCategoryQuery] = useState<string>("");

    useEffect(() => {}, [categoryQuery]);

    const products = useAppSelector((state) => state.products.products);

    return (
        <div className="flex flex-col gap-4">
            <ProductFilter
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onCatalogChange={setCategoryQuery}
                categoryQuery={categoryQuery}
            />
            <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products
                    .filter((product: Product) => {
                        const matchesSearch = product.subject.toLowerCase().includes(searchQuery.toLowerCase());
                        const matchesCategory = categoryQuery === "" || product.category === categoryQuery;

                        return matchesSearch && matchesCategory;
                    })
                    .map((product: Product, idx: number) => {
                        return <ProductCard product={product} key={idx} />;
                    })}
            </ul>
        </div>
    );
};

export default ProductDisplay;
