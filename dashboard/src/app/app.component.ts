import { Component } from '@angular/core';
import { ProdType } from './prod-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



   products:  ProdType[] =  [
    { id: 1, productName: 'Laptop', price: 1200, category: 'Electronics' },
    { id: 2, productName: 'Smartphone', price: 800, category: 'Electronics' },
    { id: 3, productName: 'Headphones', price: 150, category: 'Electronics' },
    { id: 4, productName: 'Desk', price: 300, category: 'Furniture' },
    { id: 5, productName: 'Chair', price: 100, category: 'Furniture' },
  ];
  


}
