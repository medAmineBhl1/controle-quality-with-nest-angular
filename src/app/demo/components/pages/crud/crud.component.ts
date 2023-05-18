import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
    templateUrl: './crud.component.html',
    providers: [MessageService, ConfirmationService]
})
export class CrudComponent implements OnInit {

    productDialog: boolean = false;
    product: Product = {};
    submitted: boolean = false;
    rowsPerPageOptions = [5, 10, 20];
    dataArray: any=[];
    newProduct !:Product;
    cols: any[] = [];

    constructor(private productService: ProductService, private messageService: MessageService) { 
    }

    ngOnInit() {
        this.newProduct = new Product();
        this.getAll()
    }
    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }
    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }
    getAll(){
        this.productService.getAllProducts().subscribe(data => {
            this.dataArray = data;
            console.log(this.dataArray)})
    }
    saveProduct(){
        this.newProduct.name = this.dataArray.name
        this.newProduct.price = this.dataArray.price
        this.newProduct.category = this.dataArray.category
        console.log(this.newProduct)
        this.productService.addProduct(this.newProduct).subscribe(
            data=>this.getAll()
        )
        this.productDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Added', life: 3000 });
    }
}
