export type CategoryType = "home" | "electronics" | "clothing"

export interface Product {
    id: string;
    category: CategoryType;
    subject: string;
    description: string;
}

export interface ProductFilterProps {
    searchQuery: string;
    categoryQuery: string;
    onSearchChange: React.Dispatch<React.SetStateAction<string>>;
    onCatalogChange: React.Dispatch<React.SetStateAction<string>>;
}

export interface ProductCardProps {
    product: Product;
}

export interface ProductDetailsProps {
    productId: string;
}
