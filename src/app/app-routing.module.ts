import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "formulaire", loadChildren: () => import('./complex-form/module/complex-form/complex-form.module').then(mod => mod.ComplexFormModule)
  },
  {
    path: "home", loadChildren: () => import('./pages/module/pages-module/pages-module.module').then(mod => mod.PagesModuleModule)
  }, {
    path: "profil", loadChildren: () => import('./pages/component/profil/profil.module').then(mod => mod.ProfilModule)
  },

  {
    path: '**', redirectTo: "formulaire"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
