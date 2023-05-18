import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrdreFabricationComponent } from './ordreFabrication.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: OrdreFabricationComponent}
	])],
	exports: [RouterModule]
})
export class OrdreFabricationRoutingModule { }
