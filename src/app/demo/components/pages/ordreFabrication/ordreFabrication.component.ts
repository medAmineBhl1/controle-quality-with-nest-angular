import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OrdreFabrication } from 'src/app/demo/api/ordreFabrication';
import { OrdreFabricationService } from 'src/app/demo/service/ordreFabrication.service';

@Component({
    templateUrl: './ordreFabrication.component.html',
    providers: [MessageService, ConfirmationService]
})
export class OrdreFabricationComponent implements OnInit {

    ordreFabricationDialog: boolean = false;
    ordreFabrication: OrdreFabrication = {};
    submitted: boolean = false;
    rowsPerPageOptions = [5, 10, 20];
    dataArray: any=[];
    newOrdreFabrication !:OrdreFabrication;
    cols: any[] = [];

    constructor(private ordreFabricationService: OrdreFabricationService, private messageService: MessageService) { 
    }

    ngOnInit() {
        this.newOrdreFabrication = new OrdreFabrication();
        this.getAll()
    }
    openNew() {
        this.ordreFabrication = {};
        this.submitted = false;
        this.ordreFabricationDialog = true;
    }
    hideDialog() {
        this.ordreFabricationDialog = false;
        this.submitted = false;
    }
    getAll(){
        this.ordreFabricationService.getAllOrdreFabrication().subscribe(data => {
            this.dataArray = data;
            console.log(this.dataArray)})
    }
    saveOperation(){
        this.newOrdreFabrication.gamme = this.dataArray.gamme
        this.newOrdreFabrication.quantite = this.dataArray.quantite
        this.newOrdreFabrication.dateDebutProduction = this.dataArray.dateDebutProduction
        this.newOrdreFabrication.dateFinProduction = this.dataArray.dateFinProduction
        console.log(this.newOrdreFabrication)
        this.ordreFabricationService.addOrdreFabrication(this.newOrdreFabrication).subscribe(
            data=>this.getAll()
        )
        this.ordreFabricationDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Added', life: 3000 });
    }
}
