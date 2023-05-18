import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ControlCategoryComponent } from './controlCategory.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ControlCategoryComponent }
	])],
	exports: [RouterModule]
})
export class ControlCategoryRoutingModule { }
