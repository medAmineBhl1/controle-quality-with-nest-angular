import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'crud', data: { breadcrumb: 'Crud' }, loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
        { path: 'operation', data: { breadcrumb: 'Operation' }, loadChildren: () => import('./operation/operation.module').then(m => m.OperationModule) },
        { path: 'employeur', data: { breadcrumb: 'Employeur' }, loadChildren: () => import('./employeur/employeur.module').then(m => m.EmployeurModule) },
        { path: 'ordreFabrication', data: { breadcrumb: 'ordreFabrication' }, loadChildren: () => import('./ordreFabrication/ordreFabrication.module').then(m => m.OrdreFabricationModule) },
        { path: 'control', data: { breadcrumb: 'control' }, loadChildren: () => import('./control/control.module').then(m => m.ControlModule) },
        { path: 'controleur', data: { breadcrumb: 'controleur' }, loadChildren: () => import('./controleur/controleur.module').then(m => m.ControleurModule) },
        { path: 'controlType', data: { breadcrumb: 'controlType' }, loadChildren: () => import('./controlType/controlType.module').then(m => m.ControlTypeModule) },
        { path: 'controlCategory', data: { breadcrumb: 'controlCategory' }, loadChildren: () => import('./controlCategory/controlCategory.module').then(m => m.ControlCategoryModule) },
        { path: 'rejectedPiece', data: { breadcrumb: 'rejectedPiece' }, loadChildren: () => import('./rejecetdPiece/rejectedPiece.module').then(m => m.RejectedPieceModule) },
        { path: 'problem', data: { breadcrumb: 'problem' }, loadChildren: () => import('./problem/problem.module').then(m => m.ProblemModule) },
        { path: 'problemFamily', data: { breadcrumb: 'problemFamily' }, loadChildren: () => import('./problemFamily/problemFamily.module').then(m => m.ProblemFamilyModule) }

    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
