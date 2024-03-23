import { Component } from '@angular/core';
import { ProdType } from '../prod-type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-pgae',
  templateUrl: './details-pgae.component.html',
  styleUrl: './details-pgae.component.css'
})
export class DetailsPgaeComponent {


  lsdata = JSON.parse(localStorage.getItem("prod_details") || "[]")

  constructor() {
    console.log("lsadta", this.lsdata)
  }



}
