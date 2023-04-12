import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todo-list/todo-list.component';
import { ReplaceComa } from './shared/pipes/replace-coma';
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';
import { TestYanisComponent } from './test-yanis/test-yanis.component';
import { ListeDeroulanteComponent } from './liste-deroulante/liste-deroulante.component';
import { HomeComponent } from './home/home.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ReplaceComa,
    StarRatingComponent,
    TestYanisComponent,
    ListeDeroulanteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
