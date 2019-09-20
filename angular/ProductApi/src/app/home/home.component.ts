import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Product } from '../product/Entities/Product';
import { Router } from '@angular/router';
import { ProductService } from '../product/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  title="Products";
  searchText="";
  products: Product[]
  imgHeight=100
  imgWidth=100
  constructor(private appservice: ProductService,private router: Router) { }

  ngOnInit() {
this.getProducts();
// this.getProduct();
// console.log(this.test_product)
  }
ngAfterViewInit(){
  setTimeout(()=>this.getProducts(),200);
}
  editProduct(id):void{
    this.router.navigate(['editproduct',id]);
    }

    deleteProduct(id):void{
      this.router.navigate(['deleteproduct',id]);
    }

    getProducts(){
      this.appservice.getProducts().subscribe(data=>{
        this.products=data;
      })
    }

    getDetails(id){

      this.router.navigate(['getproduct',id]);
    }

}
