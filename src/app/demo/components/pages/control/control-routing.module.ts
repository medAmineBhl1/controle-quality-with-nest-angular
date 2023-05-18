import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ControlComponent } from './control.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ControlComponent }
	])],
	exports: [RouterModule]
})
export class ControlRoutingModule { }
