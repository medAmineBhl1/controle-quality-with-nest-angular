import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {  ControleurComponent } from './controleur.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ControleurComponent }
	])],
	exports: [RouterModule]
})
export class ControleurRoutingModule { }
