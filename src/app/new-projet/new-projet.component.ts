import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Annee {
  id: number;
  anneeScolaire: string;
}

@Component({
  selector: 'app-new-projet',
  templateUrl: './new-projet.component.html',
  styleUrls: ['./new-projet.component.css'],
})
export class NewProjetComponent {
  formData: any = {}; // Replace with your desired form data structure
  anneeOptions: Annee[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchAnneeOptions();
  }

  fetchAnneeOptions() {
    this.http
      .get<Annee[]>('http://127.0.0.1:8000/api/annees') // Replace with your API endpoint
      .subscribe(
        (response) => {
          this.anneeOptions = response;
          console.log('Annee options:', this.anneeOptions);
        },
        (error) => {
          console.error('Error fetching annee options:', error);
        }
      );
  }

  onSubmit() {
    /* console.log(typeof parseInt(this.formData.anneeId));
    this.http
      .post('http://127.0.0.1:8000/api/projet/new', {
        nom: this.formData.nom,
        anneeId: parseInt(this.formData.anneeId),
      })
      .subscribe(
        (response) => {
          console.log('Success:', response);
          // Perform additional success logic if needed
        },
        (error) => {
          console.error('Error:', error);
          // Perform additional error handling if needed
        }
      ); */
    console.log(typeof parseInt(this.formData.anneeId));
    this.http
      .post('http://127.0.0.1:8000/api/projet/new', {
        nom: this.formData.nom,
        anneeId: parseInt(this.formData.anneeId),
      })
      .subscribe(
        (response) => {
          console.log('Success:', response);
          // Perform additional success logic if needed
        },
        (error) => {
          console.error('Error:', error);
          // Perform additional error handling if needed
        }
      );
  }
}
