// interface export

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  featured: boolean;
  category: string;
  publishDate: Date;
  code: string;
}

export enum Category {
  Mobile = 'mobile',
  Tv = 'TV',
  WashingMachine = 'Washing Machine',
  Watch = 'Watch',
}

// class export

// export class Product {
//   id!: Number;
//   name!: string;
//   description!: string;
//   price!: Number;
//   img!: string;
//   featured!: boolean;
//   category!: string;
//   publishedDate!: Date;
//   code!: string;
// }
