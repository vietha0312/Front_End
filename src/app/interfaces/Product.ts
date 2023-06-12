export interface IProduct {
    _id?: string;
    name: string;
    price: number;
    image?: string;
    category?: string; 
}
export interface IResponse {
    message: string;
    products: IProduct[];
}