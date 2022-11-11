import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'Home'},
  {path: 'Home', loadChildren: () => import('./Modules/PasswordGenerator/password-generator.module').then(m => m.PasswordGeneratorModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
