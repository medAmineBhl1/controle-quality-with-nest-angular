import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OrdreFabrication } from 'src/app/demo/api/ordreFabrication';
import { OrdreFabricationService } from 'src/app/demo/service/ordreFabrication.service';
import { Problem } from 'src/app/demo/api/problem';
import { ProblemService } from 'src/app/demo/service/problem.service';

@Component({
    templateUrl: './problem.component.html',
    providers: [MessageService, ConfirmationService]
})
export class ProblemComponent implements OnInit {

    problemDialog: boolean = false;
    problem: Problem = {};
    submitted: boolean = false;
    rowsPerPageOptions = [5, 10, 20];
    dataArray: any=[];
    newProblem !:Problem;
    cols: any[] = [];

    constructor(private problemService: ProblemService, private messageService: MessageService) { 
    }

    ngOnInit() {
        this.newProblem = new Problem();
        this.getAll()
    }
    openNew() {
        this.problem = {};
        this.submitted = false;
        this.problemDialog = true;
    }
    hideDialog() {
        this.problemDialog = false;
        this.submitted = false;
    }
    getAll(){
        this.problemService.getAllProblem().subscribe(data => {
            this.dataArray = data;
            console.log(this.dataArray)})
    }
    saveOperation(){
        this.newProblem.code = this.dataArray.code
        this.newProblem.designation = this.dataArray.designation
        this.newProblem.barcode = this.dataArray.barcode
        this.newProblem.type = this.dataArray.type
        console.log(this.newProblem)
        this.problemService.addProblem(this.newProblem).subscribe(
            data=>this.getAll()
        )
        this.problemDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Problem Added', life: 3000 });
    }
}
