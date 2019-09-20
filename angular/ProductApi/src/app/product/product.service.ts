import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {tap, catchError, map} from 'rxjs/operators';
import { Product } from './Entities/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl='https://localhost:44392/api/products';
  // apiUrl_GetProduct='https://localhost:44392/api/products/getproduct';
  // apiUrl_PutProduct='https://localhost:44392/api/products/putproduct';
  // apiUrl_PostProduct='https://localhost:44392/api/products/postproduct';
  // apiUrl_DeleteProduct='https://localhost:44392/api/products/deleteproduct';
  
  headers=new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
  
  httpOptions={
    headers:this.headers
  };
    constructor( private http:HttpClient) {}
  
    private handleError(error:any){
      console.error(error);
      return throwError(error)
    }
  
    getProducts():Observable<Product[]>{
      return this.http.get<Product[]>(this.apiUrl).pipe(
        tap(data=>console.log(data)),
        catchError(this.handleError)
      )
    }
  
    getProduct(id):Observable<Product>{
      const url=`${this.apiUrl}/${id}`;
      console.log(url);
      return this.http.get<Product>(url).pipe(
        catchError(this.handleError)
      );
    }

    updateProduct(id,product):Observable<null|Product>{
      const url=`${this.apiUrl}/${id}`;
      return this.http.put<Product>(url,product,this.httpOptions).pipe(
        tap(data=>console.log(data)),
        catchError(this.handleError)
      );
    }

    addProduct(product: Product): Observable<Product>{
      return this.http.post<Product>(this.apiUrl,product,this.httpOptions).pipe(tap(data=> console.log(data)),catchError(this.handleError))
    }


    deleteProduct(id): Observable<Product>{
      const url=`${this.apiUrl}/${id}`;
      return this.http.delete<Product>(url,this.httpOptions).pipe(
        catchError(this.handleError)
      );
    }
  
}
