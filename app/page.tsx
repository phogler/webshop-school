import ProductDisplay from "./component/display/ProductDisplay";
import CreateProduct from "./component/modal/CreateProduct";

export default function Home() {
    return (
        <main className="relative flex flex-col flex-1">
            <ProductDisplay />
            <CreateProduct />
        </main>
    );
}