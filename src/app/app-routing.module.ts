import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeDeroulanteComponent } from './liste-deroulante/liste-deroulante.component';
import { TodolistComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path : 'listeHotel', component : TodolistComponent},
  {path : 'liste-deroulante', component : ListeDeroulanteComponent},
  {path : 'home', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
