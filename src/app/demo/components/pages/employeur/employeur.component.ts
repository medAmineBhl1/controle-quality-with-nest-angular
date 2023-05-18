import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Operation } from 'src/app/demo/api/operation';
import { OperationService } from 'src/app/demo/service/operation.service';
import { EmployeurService } from 'src/app/demo/service/employeur.service';
import { Employeur } from 'src/app/demo/api/employeur';

@Component({
    templateUrl: './employeur.component.html',
    providers: [MessageService, ConfirmationService]
})
export class EmployeurComponent implements OnInit {

    employeurDialog: boolean = false;
    employeur: Product = {};
    submitted: boolean = false;
    rowsPerPageOptions = [5, 10, 20];
    dataArray: any=[];
    newEmployeur !:Employeur;
    cols: any[] = [];

    constructor(private employeurService: EmployeurService, private messageService: MessageService) { 
    }

    ngOnInit() {
        this.newEmployeur = new Employeur();
        this.getAll()
    }
    openNew() {
        this.employeur = {};
        this.submitted = false;
        this.employeurDialog = true;
    }
    hideDialog() {
        this.employeurDialog = false;
        this.submitted = false;
    }
    getAll(){
        this.employeurService.getAllEmployeur().subscribe(data => {
            this.dataArray = data;
            console.log(this.dataArray)})
    }
    saveOperation(){
        this.newEmployeur.name = this.dataArray.name
        this.newEmployeur.age = this.dataArray.age
        this.newEmployeur.phone = this.dataArray.phone
        console.log(this.newEmployeur)
        this.employeurService.addEmployeur(this.newEmployeur).subscribe(
            data=>this.getAll()
        )
        this.employeurDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Added', life: 3000 });
    }
}
