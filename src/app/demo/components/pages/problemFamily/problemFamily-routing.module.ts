import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProblemFamilyComponent } from './problemFamily.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ProblemFamilyComponent}
	])],
	exports: [RouterModule]
})
export class ProblemFamilyRoutingModule { }
