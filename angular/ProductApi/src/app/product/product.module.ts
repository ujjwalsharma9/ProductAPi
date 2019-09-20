import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductComponent } from './add-product.component';
import { DeleteProductComponent } from './delete-product.component';
import { EditProductComponent } from './edit-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Routes , RouterModule} from '@angular/router';
import { GetProductComponent } from './get-product.component';


const routes: Routes = [
  {path:'addproduct',component:AddProductComponent},
  {path:'editproduct/:id',component:EditProductComponent},
  {path:'deleteproduct/:id',component:DeleteProductComponent},
  {path:'getproduct/:id',component:GetProductComponent}
];

@NgModule({
  declarations: [AddProductComponent, DeleteProductComponent, EditProductComponent, GetProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ProductModule { }
