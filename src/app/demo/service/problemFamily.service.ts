import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProblemFamilyService {

    constructor(private http:HttpClient){}

    getAllProblemFamily(){
        return this.http.get('http://localhost:3000/problemFamily')
    }

    addProblemFamily(profile:any){
        return this.http.post('http://localhost:3000/problemFamily',profile)
    }

    deleteProblemFamily(id:any){
        return this.http.delete('http://localhost:3000/problemFamily/'+id)
    }

    upadateProblemFamily(id:string,newprofile:any){
        return this.http.put('http://localhost:3000/problemFamily/'+id,newprofile)
    }

    getOneProblemFamily(id:any){
        return this.http.get('http://localhost:3000/problemFamily/'+id)
    }

}