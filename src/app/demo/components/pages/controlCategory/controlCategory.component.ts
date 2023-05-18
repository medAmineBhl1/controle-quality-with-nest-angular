import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ControlCategory } from 'src/app/demo/api/controlCategory';
import { ControlCategoryService } from 'src/app/demo/service/controlCategory.service';

@Component({
    templateUrl: './controlCategory.component.html',
    providers: [MessageService, ConfirmationService]
})
export class ControlCategoryComponent implements OnInit {

    controlCategoryDialog: boolean = false;
    controlCategory: ControlCategory = {};
    submitted: boolean = false;
    rowsPerPageOptions = [5, 10, 20];
    dataArray: any=[];
    newControlCategory !:ControlCategory;
    cols: any[] = [];

    constructor(private controlCategoryService: ControlCategoryService, private messageService: MessageService) { 
    }

    ngOnInit() {
        this.newControlCategory = new ControlCategory();
        this.getAll()
    }
    openNew() {
        this.controlCategory = {};
        this.submitted = false;
        this.controlCategoryDialog = true;
    }
    hideDialog() {
        this.controlCategoryDialog = false;
        this.submitted = false;
    }
    getAll(){
        this.controlCategoryService.getAllControlCategory().subscribe(data => {
            this.dataArray = data;
            console.log(this.dataArray)})
    }
    saveOperation(){
        this.newControlCategory.designation = this.dataArray.designation
       
        this.controlCategoryService.addControlCategory(this.newControlCategory).subscribe(
            data=>this.getAll()
        )
        this.controlCategoryDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Added', life: 3000 });
    }
}
