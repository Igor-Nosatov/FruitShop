import { Product } from '../products/product.model';

export class ProductsDataBaseService {

  constructor() { }

  private allProducts: Product[] = [
    new Product(
      'banana',
      1,
      'Бананы',
      'assets/images/1.png',
      10
    ),

    new Product(
      'mandarins',
      2,
      'Мандарины',
      'assets/images/2.png',
      16
    ),
    new Product(
      'yabloki',
      3,
      'Яблоки',
      'assets/images/3.png',
      20
    ),
    new Product(
      'papayia',
      4,
      'Папайя',
      'assets/images/4.png',
      300
    )
  ];

  getDBProducts() {
    return this.allProducts.slice();
  }

}
