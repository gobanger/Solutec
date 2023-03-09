import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core'; 
 
@Component({ 
 selector: 'app-root', 
 templateUrl: './app.component.html', 
 styleUrls: ['./app.component.css'] 
}) 
export class AppComponent { 
 title = 'sandbox'; 
}

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
