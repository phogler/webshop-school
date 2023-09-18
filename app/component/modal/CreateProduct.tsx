"use client";
import { CategoryType, Product } from "@/app/typings/Product";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeProductModal, toggleProductModal } from "@/store/modal/modalSlice";
import { useState } from "react";
import { addNewProduct } from "@/store/products/productsSlice";

const CreateProduct = () => {
    const [category, setCategory] = useState<CategoryType>("home");
    const [subject, setSubject] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const productModalIsActive = useAppSelector((state) => state.modal.productModalIsActive);

    const dispatch = useAppDispatch();

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newProduct: Product = {
            id: crypto.randomUUID(),
            category,
            subject,
            description,
        };

        dispatch(addNewProduct(newProduct));
        dispatch(toggleProductModal());
    };

    const handleProductModal = (): void => {
        dispatch(closeProductModal());
    };

    return (
        <form
            className={`${
                productModalIsActive ? "block" : "hidden"
            } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
            onSubmit={handleFormSubmit}>
            <div className="flex flex-col  w-[500px] border p-3 bg-slate-50">
                <div className="flex justify-between pb-4 border-b">
                    Create New Product
                    <button onClick={handleProductModal} type="button">
                        Close
                    </button>
                </div>
                <div>
                    <div className="mt-4 flex flex-col gap-2">
                        <label htmlFor="subject">Subject:</label>
                        <input
                            className="py-1 px-3 border"
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value as CategoryType)}
                            required
                        />
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <label htmlFor="category">Category:</label>
                        <select
                            className="p-2 bg-white border cursor-pointer"
                            name="category"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value as CategoryType)}>
                            <option value="home">Home</option>
                            <option value="electronics">Electronics</option>
                            <option value="clothing">Clothing</option>
                        </select>
                    </div>
                    <div className="flex-1 mt-4 flex flex-col gap-2">
                        <label htmlFor="category">Description:</label>
                        <textarea
                            className="p-3 border h-full"
                            name="textarea"
                            id="textarea"
                            value={description}
                            onChange={(e) => setDescription(e.target.value as CategoryType)}
                            required
                        />
                    </div>
                </div>
                <button className="py-[6px] mt-4 bg-slate-50 w-full border hover:bg-slate-100" type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default CreateProduct;
