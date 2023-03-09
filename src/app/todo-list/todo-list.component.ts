import { Component, OnInit } from '@angular/core'; 
import { IHotel } from './todo-list';
 
@Component({ 
  selector: 'app-todo-list', 
  templateUrl : './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodolistComponent implements OnInit{ 

  public listTitle = 'Ma Todo List';  

  public test = "Coucou";

  public hotels: IHotel[]  = [
      {
            "hotelId": 1,
            "hotelName": "Buea sweet life",
            "description": "Belle vue au bord de la mer",
            "price": 230.5,
            "imageUrl": "assets/img/hotel-room.jpg",
            //"rating": 3.5
      },
      {
            "hotelId": 2,
            "hotelName": "Marakech",
            "description": "Profitez de la vue sur les montagnes",
            "price": 145.5,
            "imageUrl": "assets/img/the-interior.jpg",
            //"rating": 5
      },
      {
            "hotelId": 3,
            "hotelName": "Abudja new look palace",
            "description": "Séjour complet avec service de voitures",
            "price": 120.12,
            "imageUrl": "assets/img/indoors.jpg",
            //"rating": 4
      },
      {
            "hotelId": 4,
            "hotelName": "Cape town city",
            "description": "Magnifique cadre pour votre séjour",
            "price": 135.12,
            "imageUrl": "assets/img/window.jpg",
            //"rating": 2.5
      }
  ];

  public showBadge!: boolean;

  public hotelFilter = 'mot';

  ngOnInit(): void {
      console.log('mon cycle fonctionne')
  }

  public toogleIsNewBadge() : void{
    this.showBadge = !this.showBadge
  }
}