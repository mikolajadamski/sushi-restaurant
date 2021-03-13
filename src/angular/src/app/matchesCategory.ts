import { Pipe, PipeTransform } from '@angular/core';
import { Category } from './categoy';
import { Product } from './product';

@Pipe({
    name: 'matchesCategory'
})
export class MatchesCategoryPipe implements PipeTransform {
    transform(items: Array<Product>, category: Category): Array<Product> {
        return items.filter(product => product.category.name === category.name);
    }
}