import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErroComponent} from './erro/erro.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: 'too', component: ErroComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
