import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OrdreFabrication } from 'src/app/demo/api/ordreFabrication';
import { OrdreFabricationService } from 'src/app/demo/service/ordreFabrication.service';
import { RejectedPiece } from 'src/app/demo/api/rejectedPiece';
import { RejectedPieceService } from 'src/app/demo/service/rejectedPiece.service';

@Component({
    templateUrl: './rejectedPiece.component.html',
    providers: [MessageService, ConfirmationService]
})
export class RejectedPieceComponent implements OnInit {

    rejectedPieceDialog: boolean = false;
    rejectedPiece: RejectedPiece = {};
    submitted: boolean = false;
    rowsPerPageOptions = [5, 10, 20];
    dataArray: any=[];
    newrejectedPiece !:RejectedPiece;
    cols: any[] = [];

    constructor(private rejectedPieceService: RejectedPieceService, private messageService: MessageService) { 
    }

    ngOnInit() {
        this.newrejectedPiece = new RejectedPiece();
        this.getAll()
    }
    openNew() {
        this.rejectedPiece = {};
        this.submitted = false;
        this.rejectedPieceDialog = true;
    }
    hideDialog() {
        this.rejectedPieceDialog = false;
        this.submitted = false;
    }
    getAll(){
        this.rejectedPieceService.getAllRejectedPiece().subscribe(data => {
            this.dataArray = data;
            console.log(this.dataArray)})
    }
    saveOperation(){
        this.newrejectedPiece.type = this.dataArray.type
      
        console.log(this.newrejectedPiece)
        this.rejectedPieceService.addRejectedPiece(this.newrejectedPiece).subscribe(
            data=>this.getAll()
        )
        this.rejectedPieceDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Added', life: 3000 });
    }
}
