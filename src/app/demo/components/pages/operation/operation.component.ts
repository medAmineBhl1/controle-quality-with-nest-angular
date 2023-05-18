import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Operation } from 'src/app/demo/api/operation';
import { OperationService } from 'src/app/demo/service/operation.service';

@Component({
    templateUrl: './operation.component.html',
    providers: [MessageService, ConfirmationService]
})
export class OperationComponent implements OnInit {

    operationDialog: boolean = false;
    operation: Product = {};
    submitted: boolean = false;
    rowsPerPageOptions = [5, 10, 20];
    dataArray: any=[];
    newOperation !:Operation;
    cols: any[] = [];

    constructor(private operationService: OperationService, private messageService: MessageService) { 
    }

    ngOnInit() {
        this.newOperation = new Operation();
        this.getAll()
    }
    openNew() {
        this.operation = {};
        this.submitted = false;
        this.operationDialog = true;
    }
    hideDialog() {
        this.operationDialog = false;
        this.submitted = false;
    }
    getAll(){
        this.operationService.getAllOperation().subscribe(data => {
            this.dataArray = data;
            console.log(this.dataArray)})
    }
    saveOperation(){
        this.newOperation.designation = this.dataArray.designation
        this.newOperation.codebar = this.dataArray.codebar
        console.log(this.newOperation)
        this.operationService.addOperation(this.newOperation).subscribe(
            data=>this.getAll()
        )
        this.operationDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Added', life: 3000 });
    }
}
