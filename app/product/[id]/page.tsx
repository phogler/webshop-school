import ProductDetails from "@/app/component/details/ProductDetails";
import SubNavbar from "@/app/component/navbar/SubNavbar";

const Page = ({ params }: { params: { id: string } }) => {
    return (
        <main className="flex flex-col gap-2 px-4 xl:px-0">
            <SubNavbar productId={params.id} />
            <ProductDetails productId={params.id} />
        </main>
    );
};

export default Page;
