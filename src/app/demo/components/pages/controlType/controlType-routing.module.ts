import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ControlTypeComponent } from './controlType.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ControlTypeComponent }
	])],
	exports: [RouterModule]
})
export class ControlTypeRoutingModule { }
