import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-get-product',
  templateUrl: './get-product.component.html',
  styleUrls: ['./get-product.component.css']
})
export class GetProductComponent implements OnInit {


  constructor(private route:ActivatedRoute, private productservice:ProductService,private router: Router) { }

  productidtoshow: any;
  producttoshow;
  imgHeight=100;
  imgWidth=100;

  ngOnInit() {
        this.route.params.subscribe((data)=>{
          this.productidtoshow=data.id;
        });
   
        this.productservice.getProduct(this.productidtoshow).subscribe(data=>{
          this.producttoshow=data;
        })

  }

  goHome(){
    this.router.navigate(['home']);
  }
}
