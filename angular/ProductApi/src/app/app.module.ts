import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductModule } from './product/product.module';
import { ProductFilterPipe } from './product/productfilter.pipe';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductFilterPipe,
    LoginComponent,
    PageNotFoundComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // InMemoryWebApiModule.forRoot(ProductsInMemDataService),
    ProductModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // ProductInMemDataService
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
