import { capitalize } from "@/app/utils/capitalize";
import { removeFromCart } from "@/store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { HiInformationCircle, HiMinusCircle } from "react-icons/hi";
import Link from "next/link";

const CartDetails = () => {
    const cart = useAppSelector((state) => state.cart.cart);
    const dispatch = useAppDispatch();

    const handleRemove = (id: string): void => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className=" flex flex-col gap-2 absolute right-0 top-10 z-10 ">
            {cart.map((item, idx) => {
                return (
                    <div className="inline-flex gap-5 border p-3 bg-slate-50 w-[400px]" key={idx}>
                        <div className="h-min">{idx + 1}.</div>
                        <div className="flex flex-col gap-2 flex-1">
                            <p>Subject: {capitalize(item.subject)}</p>
                            <p>Category: {capitalize(item.category)}</p>
                            <div className="p-2 bg-slate-100 border">
                                Description:
                                <div className="mt-2 w-full">
                                    <p>{capitalize(item.description)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="ml-auto">
                            <div className="inline-flex gap-1">
                                <button className="underline" onClick={() => handleRemove(item.id)}>
                                    <HiMinusCircle className="text-slate-800" size={23} />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CartDetails;
