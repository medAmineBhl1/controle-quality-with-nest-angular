import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from 'src/app/demo/api/product';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<any>('assets/demo/data/products.json')
            .toPromise()
            .then(res => res.data as Product[])
            .then(data => data);
    }

    getAllProducts(){
        return this.http.get('http://localhost:3000/product')
    }
    addProduct(profile:any){
        return this.http.post('http://localhost:3000/product',profile)
      }
    
      deleteProduct(id:any){
        return this.http.delete('http://localhost:3000/product/'+id)
      }
    
      updateProduct(id:string,newprofile:any){
        return this.http.patch('http://localhost:3000/product/'+id,newprofile)
      }
      
      getOneProduct(id:any){
        return this.http.get('http://localhost:3000/product/'+id)
      }
    }

   

  

