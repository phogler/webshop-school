import Link from "next/link";
import Cart from "./Cart";
import { HiChatAlt2 } from "react-icons/hi";

const Navbar = () => {
    return (
        <header>
            <nav className="flex items-center justify-between border p-2 ">
                <Link className="inline-flex gap-2 items-center" href="/">
                    Marketplace <HiChatAlt2 className="text-slate-800" size={23} />
                </Link>
                <div className="relative inline-flex items-center gap-3">
                    <Cart />
                    {/* <button className="px-5 py-1 border rounded-full hover:bg-slate-50">Login</button> */}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
