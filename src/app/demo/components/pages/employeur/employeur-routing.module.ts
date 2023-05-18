import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeurComponent } from './employeur.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: EmployeurComponent }
	])],
	exports: [RouterModule]
})
export class EmployeurRoutingModule { }
