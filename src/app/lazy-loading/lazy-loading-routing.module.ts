import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading.component';

const routes: Routes = [{ path: '', component: LazyLoadingComponent }]; //aqui esta definido a rota onde tem o componenteLazyLoadingComponent

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
