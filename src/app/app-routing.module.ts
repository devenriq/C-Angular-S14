import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClaseComponent } from './pages/clase/clase.component';

const routes: Routes = [
  {path: 'home', component: ClaseComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
