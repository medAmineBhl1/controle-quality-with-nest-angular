import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class RejectedPieceService {
    constructor(private http:HttpClient){}

    getAllRejectedPiece(){
        return this.http.get('http://localhost:3000/rejectedPiece')
    }
    addRejectedPiece(profile:any){
        return this.http.post('http://localhost:3000/rejectedPiece',profile)
    }
    deleteRejectedPiece(id:any){
        return this.http.delete('http://localhost:3000/rejectedPiece/'+id)
    }
    updateRejectedPiece(id:string,newprofile:any){
        return this.http.put('http://localhost:3000/rejectedPiece/'+id,newprofile)
    }
    getOneRejectedPiece(id:any){
        return this.http.get('http://localhost:3000/rejectedPiece/'+id)
    }
}