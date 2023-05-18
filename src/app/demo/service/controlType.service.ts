import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ControlTypeService {

    constructor(private http:HttpClient){}

    getAllControlType(){
        return this.http.get('http://localhost:3000/controlType')
    }

    addControlType(profile:any){
        return this.http.post('http://localhost:3000/controlType',profile)
    }

    deleteControlType(id:any){
        return this.http.delete('http://localhost:3000/controlType/'+id)
    }

    upadateControlType(id:string,newprofile:any){
        return this.http.put('http://localhost:3000/controlType/'+id,newprofile)
    }

    getOneControlType(id:any){
        return this.http.get('http://localhost:3000/controlType/'+id)
    }

}