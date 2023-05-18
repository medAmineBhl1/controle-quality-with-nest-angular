import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EmployeurService } from 'src/app/demo/service/employeur.service';
import { Employeur } from 'src/app/demo/api/employeur';
import { Control } from 'src/app/demo/api/control';
import { ControlService } from 'src/app/demo/service/control.service';

@Component({
    templateUrl: './control.component.html',
    providers: [MessageService, ConfirmationService]
})
export class ControlComponent implements OnInit {

    controlDialog: boolean = false;
    control: Control = {};
    submitted: boolean = false;
    rowsPerPageOptions = [5, 10, 20];
    dataArray: any=[];
    newControl !:Control;
    cols: any[] = [];

    constructor(private controlService: ControlService, private messageService: MessageService) { 
    }

    ngOnInit() {
        this.newControl = new Control();
        this.getAll()
    }
    openNew() {
        this.control = {};
        this.submitted = false;
        this.controlDialog = true;
    }
    hideDialog() {
        this.controlDialog = false;
        this.submitted = false;
    }
    getAll(){
        this.controlService.getAllControl().subscribe(data => {
            this.dataArray = data;
            console.log(this.dataArray)})
    }
    saveOperation(){
        this.newControl.designation = this.dataArray.designation
        this.newControl.article = this.dataArray.article
        this.newControl.paquet = this.dataArray.paquet
        this.controlService.addControl(this.newControl).subscribe(
            data=>this.getAll()
        )
        this.controlDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Added', life: 3000 });
    }
}
