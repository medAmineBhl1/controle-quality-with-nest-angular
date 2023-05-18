import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OperationComponent } from './operation.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: OperationComponent }
	])],
	exports: [RouterModule]
})
export class OperationRoutingModule { }
