import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ControlService {

    constructor(private http:HttpClient){}

    getAllControl(){
        return this.http.get('http://localhost:3000/control')
    }

    addControl(profile:any){   
        return this.http.post('http://localhost:3000/control',profile)
    }

    deleteControl(id:any){
        return this.http.delete('http://localhost:3000/control/'+id)
    }

    upadateControl(id:string,newprofile:any){
        return this.http.put('http://localhost:3000/control/'+id,newprofile)
    }

    getOneControl(id:any){
        return this.http.get('http://localhost:3000/control/'+id)
    }

}