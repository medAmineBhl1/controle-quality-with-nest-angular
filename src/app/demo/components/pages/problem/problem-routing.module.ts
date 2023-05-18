import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProblemComponent } from './problem.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ProblemComponent}
	])],
	exports: [RouterModule]
})
export class ProblemRoutingModule { }
