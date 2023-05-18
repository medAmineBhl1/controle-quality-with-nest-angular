import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Controleur } from 'src/app/demo/api/controleur';
import { ControleurService } from 'src/app/demo/service/controleur.service';


@Component({
    templateUrl: './controleur.component.html',
    providers: [MessageService, ConfirmationService]
})
export class ControleurComponent implements OnInit {

    controleurDialog: boolean = false;
    controleur: Controleur = {};
    submitted: boolean = false;
    rowsPerPageOptions = [5, 10, 20];
    dataArray: any=[];
    newControleur !:Controleur;
    cols: any[] = [];

    constructor(private controleurService: ControleurService, private messageService: MessageService) { 
    }

    ngOnInit() {
        this.newControleur = new Controleur();
        this.getAll()
    }
    openNew() {
        this.controleur = {};
        this.submitted = false;
        this.controleurDialog = true;
    }
    hideDialog() {
        this.controleurDialog = false;
        this.submitted = false;
    }
    getAll(){
        this.controleurService.getAllControleur().subscribe(data => {
            this.dataArray = data;
            console.log(this.dataArray)})
    }
    saveOperation(){
        this.newControleur.name = this.dataArray.name
        this.newControleur.age = this.dataArray.age
        this.newControleur.phone = this.dataArray.phone
        this.controleurService.addControleur(this.newControleur).subscribe(
            data=>this.getAll()
        )
        this.controleurDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Added', life: 3000 });
    }
}
