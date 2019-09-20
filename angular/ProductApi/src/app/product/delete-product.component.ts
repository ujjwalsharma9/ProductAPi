import { Component, OnInit } from '@angular/core';
import { Product } from './Entities/Product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit{


  constructor(private route:ActivatedRoute, private productservice:ProductService,private router: Router) { }

  productidtodelete: any;
  producttodelete;
  imgHeight=100;
  imgWidth=100;

  ngOnInit() {
        this.route.params.subscribe((data)=>{
          this.productidtodelete=data.id;
        });
   
        this.productservice.getProduct(this.productidtodelete).subscribe(data=>{
          this.producttodelete=data;
        })

  }



deleteProduct(){
  
  this.productservice.deleteProduct(this.productidtodelete).subscribe(data=>{
    this.router.navigate(['home']);
  })
   
  }


}
