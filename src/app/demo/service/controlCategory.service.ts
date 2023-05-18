import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ControlCategoryService {

    constructor(private http:HttpClient){}

    getAllControlCategory(){
        return this.http.get('http://localhost:3000/controlCategory')
    }

    addControlCategory(profile:any){
        return this.http.post('http://localhost:3000/controlCategory',profile)
    }

    deleteControlCategory(id:any){
        return this.http.delete('http://localhost:3000/controlCategory/'+id)
    }

    upadateControlCategory(id:string,newprofile:any){
        return this.http.put('http://localhost:3000/controlCategory/'+id,newprofile)
    }

    getOneControlCategory(id:any){
        return this.http.get('http://localhost:3000/controlCategory/'+id)
    }

}