import { Component } from '@angular/core';
import { ProdType } from './prod-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  prod_Data: ProdType[] = [];

  prd_name: string = '';

  asc: boolean = true;

  constructor(private router: Router) {
    this.prod_Data = this.products;
  }

  products: ProdType[] = [
    { id: 1, productName: 'Laptop', price: 1200, category: 'Electronics' },
    { id: 2, productName: 'Smartphone', price: 800, category: 'Electronics' },
    { id: 3, productName: 'Headphones', price: 150, category: 'Electronics' },
    { id: 4, productName: 'Desk', price: 300, category: 'Furniture' },
    { id: 5, productName: 'Chair', price: 100, category: 'Furniture' },
    { id: 6, productName: 'Headphones', price: 100, category: 'Electronics' },
    { id: 7, productName: 'Chair', price: 100, category: 'Furniture' },
    { id: 8, productName: 'Smartphone', price: 800, category: 'Electronics' },
  ];

  // sorting

  sort_price() {
    this.asc = !this.asc;
    this.prod_Data.sort((a, b) => {
      return this.asc ? a.price - b.price : b.price - a.price;
    });
  }

  // filter

  filBy_name() {
    this.prod_Data = this.products.filter((ele) =>
      ele.productName.toLowerCase().includes(this.prd_name.toLowerCase())
    );
  }

  // details

  handle_details(prod: any) {
    this.router.navigate(['/details']);

    localStorage.setItem('prod_details', JSON.stringify(prod));
  }
}
