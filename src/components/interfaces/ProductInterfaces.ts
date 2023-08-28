export interface IProduct{
    products: { id: number; name: string; image: string }[];
    category: string

}

export interface ICategory{
    name: string;
    image: string;
}