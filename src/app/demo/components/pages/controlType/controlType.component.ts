import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ControlType } from 'src/app/demo/api/controlType';
import { ControlTypeService } from 'src/app/demo/service/controlType.service';

@Component({
    templateUrl: './controlType.component.html',
    providers: [MessageService, ConfirmationService]
})
export class ControlTypeComponent implements OnInit {

    controlTypeDialog: boolean = false;
    controlType: ControlType = {};
    submitted: boolean = false;
    rowsPerPageOptions = [5, 10, 20];
    dataArray: any=[];
    newControlType !:ControlType;
    cols: any[] = [];

    constructor(private controlTypeService: ControlTypeService, private messageService: MessageService) { 
    }

    ngOnInit() {
        this.newControlType = new ControlType();
        this.getAll()
    }
    openNew() {
        this.controlType = {};
        this.submitted = false;
        this.controlTypeDialog = true;
    }
    hideDialog() {
        this.controlTypeDialog = false;
        this.submitted = false;
    }
    getAll(){
        this.controlTypeService.getAllControlType().subscribe(data => {
            this.dataArray = data;
            console.log(this.dataArray)})
    }
    saveOperation(){
        this.newControlType.designation = this.dataArray.designation
       
        this.controlTypeService.addControlType(this.newControlType).subscribe(
            data=>this.getAll()
        )
        this.controlTypeDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Added', life: 3000 });
    }
}
