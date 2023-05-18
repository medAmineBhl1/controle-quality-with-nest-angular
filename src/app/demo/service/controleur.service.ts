import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ControleurService {

    constructor(private http:HttpClient){}

    getAllControleur(){
        return this.http.get('http://localhost:3000/controleur')
    }

    addControleur(profile:any){
        return this.http.post('http://localhost:3000/controleur',profile)
    }

    deleteControleur(id:any){
        return this.http.delete('http://localhost:3000/controleur/'+id)
    }

    upadateControleur(id:string,newprofile:any){
        return this.http.put('http://localhost:3000/controleur/'+id,newprofile)
    }

    getOneControleur(id:any){
        return this.http.get('http://localhost:3000/controleur/'+id)
    }

}