export interface IProduct {
    _id?: string;
    name: string;
    price: number;
    image?: string;
    slug?: string;
    categoryId?: string;
}
export interface IResponse {
    message: string;
    products: IProduct[];
}