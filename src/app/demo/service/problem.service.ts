import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProblemService {

    constructor(private http:HttpClient){}

    getAllProblem(){
        return this.http.get('http://localhost:3000/problem')
    }

    addProblem(profile:any){
        return this.http.post('http://localhost:3000/problem',profile)
    }

    deleteProblem(id:any){
        return this.http.delete('http://localhost:3000/problem/'+id)
    }

    upadateProblem(id:string,newprofile:any){
        return this.http.put('http://localhost:3000/problem/'+id,newprofile)
    }

    getOneProblem(id:any){
        return this.http.get('http://localhost:3000/problem/'+id)
    }

}