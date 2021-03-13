import { Category } from "./categoy";

export interface Product {
    id: number,
    name: string,
    ingredients: string,
    price: number,
    category: Category
}