import { ICategory } from "./Category";

export interface IProduct {
    _id?: string;
    name: string;
    price: number;
    image?: string;
 desc?:string;
    categoryId?: string;
    category?: ICategory// Thêm thuộc tính category
}
export interface IResponse {
    message: string;
    products: IProduct[];
}