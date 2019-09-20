import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { Product } from './Entities/Product';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  

  productidtoedit: any;
  
  producttoedit: Product;

  editProductForm: FormGroup

  pobservable;

  constructor(private route:ActivatedRoute, private productservice:ProductService,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((data)=>{
      this.productidtoedit=data.id;
    });

 
  
   this.pobservable=this.productservice.getProduct(this.productidtoedit);

   console.log(this.pobservable);

   this.pobservable.subscribe(data=>{
     this.editProductForm=new FormGroup(
      { productID: new FormControl(data.ProductID),
        title: new FormControl(data.Title,[Validators.required]),
        price: new FormControl(data.Price),
        color: new FormControl(data.Color),
        instock: new FormControl(data.inStock),
        quantity: new FormControl(data.Quantity),
        expiryDate: new FormControl(data.ExpiryDate),
        rating: new FormControl(data.Rating),
        details: new FormControl(data.Details ),
        imgurl: new FormControl(data.imgUrl)

      })
   })
    
   //console.log(this.producttoedit);
  

    // this.editProductForm=new FormGroup(
    //   { productID: new FormControl(this.producttoedit.ProductID),
    //     title: new FormControl(this.producttoedit.Title,[Validators.required]),
    //     price: new FormControl(this.producttoedit.Price),
    //     color: new FormControl(this.producttoedit.Color),
    //     instock: new FormControl(this.producttoedit.inStock),
    //     quantity: new FormControl(this.producttoedit.Quantity),
    //     expiryDate: new FormControl(this.producttoedit.ExpiryDate),
    //     rating: new FormControl(this.producttoedit.Rating),
    //     details: new FormControl(this.producttoedit.Details )

    //   })
  }




  setDefault(){
    // this.editProductForm.setValue({
    //   id: this.producttoedit.Id,
    //   name: this.producttoedit.Name,
    //   price: this.producttoedit.Price,
    //   color: this.producttoedit.Color,
    //   instock: this.producttoedit.Instock,
    //   quantity: this.producttoedit.Quantity
      
      
    // })

    
   this.pobservable.subscribe(data=>{
    this.editProductForm=new FormGroup(
     { productID: new FormControl(data.ProductID),
       title: new FormControl(data.Title,[Validators.required]),
       price: new FormControl(data.Price),
       color: new FormControl(data.Color),
       instock: new FormControl(data.inStock),
       quantity: new FormControl(data.Quantity),
       expiryDate: new FormControl(data.ExpiryDate),
       rating: new FormControl(data.Rating),
       details: new FormControl(data.Details ),
       imgurl: new FormControl(data.imgUrl)

     })
  })
  }


  editProduct(){
 console.log(this.editProductForm.value)
this.productservice.updateProduct(this.productidtoedit,this.editProductForm.value).subscribe(data=>{
  console.log(data);
})

this.router.navigate(['home']);
   
  }

}

