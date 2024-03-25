import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  name = 'firas2';


  age = 25;

  img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeX8hD88UtmoW9I2Bed-3_W2NIhHpR2R4p8zVhcoaliQ&s';

  afficher: boolean = false;

  afficherElement: boolean = false;

  basculer() {
    this.afficherElement = !this.afficherElement;
  }

  fruits: string[] = ['Pomme', 'orange', 'kiwi', 'Pomme', 'orange', 'kiwi', 'Pomme', 'orange', 'kiwi'];


  produits: any[] = [

    {
      Nom: 'tv',
      Prix: 2333,
      stock: 30
    },
    {
      Nom: 'tel',
      Prix: 1000,
      stock: 80
    },
    {
      Nom: 'calvier',
      Prix: 50,
      stock: 200
    },
    {
      Nom: 'produitX',
      Prix: 2333,
      stock: 30
    },
    {
      Nom: 'tel',
      Prix: 1000,
      stock: 80
    },
    {
      Nom: 'calvier',
      Prix: 50,
      stock: 200
    }





  ];




}
