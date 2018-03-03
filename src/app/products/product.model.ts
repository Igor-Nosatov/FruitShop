export class Product {
  constructor(
    public type: string,
    public id: number,
    public name: string,
    public imagePath: string,
    public price: number,
    public qty: number = 1
  ) { }
}
