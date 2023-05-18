import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EmployeurService {

    constructor(private http:HttpClient){}

    getAllEmployeur(){
        return this.http.get('http://localhost:3000/employeur')
    }

    addEmployeur(profile:any){
        return this.http.post('http://localhost:3000/employeur',profile)
    }

    deleteEmployeur(id:any){
        return this.http.delete('http://localhost:3000/employeur/'+id)
    }

    upadateEmployeur(id:string,newprofile:any){
        return this.http.put('http://localhost:3000/employeur/'+id,newprofile)
    }

    getOneEmployeur(id:any){
        return this.http.get('http://localhost:3000/employeur/'+id)
    }

}