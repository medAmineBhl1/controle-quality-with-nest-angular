import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RejectedPieceComponent } from './rejectedPiece.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: RejectedPieceComponent}
	])],
	exports: [RouterModule]
})
export class RejectedPieceRoutingModule { }
