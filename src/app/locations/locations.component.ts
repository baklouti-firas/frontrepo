import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {
  locations: any[] = []; // Déclaration d'un tableau pour stocker les données récupérées

  constructor(private http: HttpClient) {
    this.getLocations(); // Appel de la méthode pour récupérer les données au chargement du composant
  }

  // Méthode pour récupérer les données depuis le backend Spring Boot
  getLocations() {
    this.http.get<any[]>('http://localhost:8080/mock/locations').subscribe(
      (data) => {
        this.locations = data; // Stocke les données récupérées dans le tableau locations
      },
      (error) => {
        console.error(error); // Affiche l'erreur dans la console en cas de problème
      }
    );
  }
}
