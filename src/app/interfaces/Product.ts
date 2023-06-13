export interface IProduct {
    _id?: string;
    name: string;
    price: number;
    image?: string;
 desc?:string;
    categoryId?: string;
}
export interface IResponse {
    message: string;
    products: IProduct[];
}