import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class OperationService {

    constructor(private http:HttpClient){}

    getAllOperation(){
        return this.http.get('http://localhost:3000/operation')
    }

    addOperation(profile:any){
        return this.http.post('http://localhost:3000/operation',profile)
    }

    deleteOperation(id:any){
        return this.http.delete('http://localhost:3000/operation/'+id)
    }

    upadateOperation(id:string,newprofile:any){
        return this.http.put('http://localhost:3000/operation/'+id,newprofile)
    }

    getOneOperation(id:any){
        return this.http.get('http://localhost:3000/operation/'+id)
    }

}