import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class OrdreFabricationService {
    constructor(private http:HttpClient){}

    getAllOrdreFabrication(){
        return this.http.get('http://localhost:3000/ordreFabrication')
    }
    addOrdreFabrication(profile:any){
        return this.http.post('http://localhost:3000/ordreFabrication',profile)
    }
    deleteOrdreFabrication(id:any){
        return this.http.delete('http://localhost:3000/ordreFabrication/'+id)
    }
    updateOrdreFabrication(id:string,newprofile:any){
        return this.http.put('http://localhost:3000/ordreFabrication/'+id,newprofile)
    }
    getOneOrdreFabrication(id:any){
        return this.http.get('http://localhost:3000/operation/'+id)
    }
}