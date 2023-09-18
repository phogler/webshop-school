"use client";

import { capitalize } from "@/app/utils/capitalize";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";

interface SubNavbarProps {
    productId: string;
}

const SubNavbar = ({ productId }: SubNavbarProps) => {
    const product = useAppSelector((state) => state.products.products.find((product) => product.id === productId));
    console.log(product);

    if (!product) return;

    return (
<nav className="flex justify-between p-[0.8rem] border drop-shadow-2xl">
            <Link className="text-pink-800 hover:text-pink-600 transition" href={"/"}>
                {"< Go Back"}
            </Link>
            <span>Subject: {capitalize(product?.subject)}</span>
            <div>{"Go Next >"}</div>
        </nav>
    );
};

export default SubNavbar;
