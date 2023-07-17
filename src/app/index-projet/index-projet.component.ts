// index-projet.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index-projet',
  templateUrl: './index-projet.component.html',
  styleUrls: ['./index-projet.component.css'],
})
export class IndexProjetComponent {
  projets: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProjet();
  }

  fetchProjet() {
    this.http.get<any[]>('http://127.0.0.1:8000/api/projet').subscribe(
      (data) => {
        this.projets = data;
        console.log(this.projets);
      },
      (error) => {
        console.error('An error occurred while fetching the data:', error);
      }
    );
  }

  fetchProjetById(id: number) {
    this.http.get<any>(`http://127.0.0.1:8000/api/projet/${id}`).subscribe(
      (data) => {
        console.log(`Projet with ID ${id}: ${data.nom} in ${data.annee.anneeScolaire}`);
        document.getElementById(
          'show'
        )!.innerHTML = `Projet with ID ${id}: ${data.nom} in ${data.annee.anneeScolaire}`;
      },
      (error) => {
        console.error(
          `An error occurred while fetching annee with ID ${id}:`,
          error
        );
      }
    );
  }

  deleteProjet(id: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.http.delete(`http://127.0.0.1:8000/api/projet/${id}`).subscribe(
        () => {
          console.log(`Annee with ID ${id} deleted successfully.`);
          // Optionally, you can remove the deleted item from the local array
          this.projets = this.projets.filter((projet) => projet.id !== id);
        },
        (error) => {
          console.error(
            `An error occurred while deleting annee with ID ${id}:`,
            error
          );
        }
      );
    }
  }
}
