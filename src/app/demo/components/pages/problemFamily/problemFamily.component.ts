import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OrdreFabrication } from 'src/app/demo/api/ordreFabrication';
import { OrdreFabricationService } from 'src/app/demo/service/ordreFabrication.service';
import { Problem } from 'src/app/demo/api/problem';
import { ProblemService } from 'src/app/demo/service/problem.service';
import { ProblemFamily } from 'src/app/demo/api/problemFamily';
import { ProblemFamilyService } from 'src/app/demo/service/problemFamily.service';

@Component({
    templateUrl: './problemFamily.component.html',
    providers: [MessageService, ConfirmationService]
})
export class ProblemFamilyComponent implements OnInit {

    problemFamilyDialog: boolean = false;
    problemFamily: ProblemFamily = {};
    submitted: boolean = false;
    rowsPerPageOptions = [5, 10, 20];
    dataArray: any=[];
    newProblemFamily !:ProblemFamily;
    cols: any[] = [];

    constructor(private problemFamilyService: ProblemFamilyService, private messageService: MessageService) { 
    }

    ngOnInit() {
        this.newProblemFamily = new ProblemFamily();
        this.getAll()
    }
    openNew() {
        this.problemFamily = {};
        this.submitted = false;
        this.problemFamilyDialog = true;
    }
    hideDialog() {
        this.problemFamilyDialog = false;
        this.submitted = false;
    }
    getAll(){
        this.problemFamilyService.getAllProblemFamily().subscribe(data => {
            this.dataArray = data;
            console.log(this.dataArray)})
    }
    saveOperation(){
        this.newProblemFamily.code = this.dataArray.code
        this.newProblemFamily.designation = this.dataArray.designation
        console.log(this.newProblemFamily)
        this.problemFamilyService.addProblemFamily(this.newProblemFamily).subscribe(
            data=>this.getAll()
        )
        this.problemFamilyDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Problem Added', life: 3000 });
    }
}
