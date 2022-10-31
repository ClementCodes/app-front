import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponoentComponent } from '../../component/pages-componoent/pages-componoent.component';
import { HomeResolver } from '../../resolver/home.resolver';


const routes: Routes = [{

  path: "", component: PagesComponoentComponent, resolve: { user: HomeResolver }
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesModuleRoutingModule { }
