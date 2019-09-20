import { Component, OnInit } from '@angular/core';
import { Product } from './Entities/Product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  {


  
  producttoadd: Product;

  addProductForm: FormGroup

  constructor(private route:ActivatedRoute, private productservice:ProductService,private router: Router) { }

  ngOnInit() {
   

 
  
    this.producttoadd=new Product();
    console.log(this.producttoadd);

    this.addProductForm=new FormGroup(
      { productID: new FormControl(this.producttoadd.ProductID,[Validators.required]),
        title: new FormControl(this.producttoadd.Title,[Validators.required]),
        price: new FormControl(this.producttoadd.Price),
        color: new FormControl(this.producttoadd.Color),
        instock: new FormControl(this.producttoadd.inStock),
        quantity: new FormControl(this.producttoadd.Quantity),
        expiryDate: new FormControl(this.producttoadd.ExpiryDate),
        rating: new FormControl(this.producttoadd.Rating),
        details: new FormControl(this.producttoadd.Details ),
        imgurl: new FormControl(this.producttoadd.imgUrl)
        

      })
  }


  // setDefault(){
  //   // this.addProductForm.setValue({
  //   //   id: this.producttoadd.Id,
  //   //   name: this.producttoadd.Name,
  //   //   price: this.producttoadd.Price,
  //   //   color: this.producttoadd.Color,
  //   //   instock: this.producttoadd.Instock,
  //   //   quantity: this.producttoadd.Quantity
      
      
  //   // })
  // }


  addProduct(){
  console.log(this.addProductForm.value);


this.productservice.addProduct(this.addProductForm.value).subscribe(data=>{
  this.producttoadd=data;
  console.log(this.producttoadd);
})
   this.router.navigate(['home'])
   }


}
