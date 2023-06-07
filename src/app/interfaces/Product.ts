export interface IProduct {
    _id?: string;
    name: string;
    price: number;
    img?: string
}
export interface IResponse {
    message: string;
    products: IProduct[];
}