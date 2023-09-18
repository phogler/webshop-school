"use client";

import { useAppSelector } from "@/store/hooks";
import { useState } from "react";
import CartDetails from "./CartDetails";
import { HiShoppingCart } from "react-icons/hi";

const Cart = () => {
    const cart = useAppSelector((state) => state.cart.cart);
    const [cartIsActive, setCartIsActive] = useState<boolean>(true);

    const handleCart = (): void => {
        setCartIsActive(!cartIsActive);
    };

    return (
        <>
            <div
                className="inline-flex items-center gap-2 border  px-4 py-1 cursor-pointer bg-slate-50 hover:bg-slate-100 transition disabled:opacity-80"
                onClick={handleCart}>
                Cart
                <div className=" grid place-items-center -bottom-1 -right-4 h-[25px] w-[25px] border rounded-full text-sm ">
                    {cart.length}
                </div>
                <HiShoppingCart className="text-slate-800" size={22} />
            </div>
            {cart.length > 0 && cartIsActive && <CartDetails />}
        </>
    );
};

export default Cart;
