// index-annee.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index-annee',
  templateUrl: './index-annee.component.html',
  styleUrls: ['./index-annee.component.css'],
})
export class IndexAnneeComponent implements OnInit {
  annees: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchAnnees();
  }

  fetchAnnees() {
    this.http.get<any[]>('http://127.0.0.1:8000/api/annees').subscribe(
      (data) => {
        this.annees = data;
      },
      (error) => {
        console.error('An error occurred while fetching the data:', error);
      }
    );
  }

  deleteAnnee(id: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.http.delete(`http://127.0.0.1:8000/api/annees/${id}`).subscribe(
        () => {
          console.log(`Annee with ID ${id} deleted successfully.`);
          // Optionally, you can remove the deleted item from the local array
          this.annees = this.annees.filter((annee) => annee.id !== id);
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
  fetchAnneeById(id: number) {
    this.http.get<any>(`http://127.0.0.1:8000/api/annees/${id}`).subscribe(
      (data) => {
        console.log(`Annee with ID ${id}:`, data.anneeScolaire);
        document.getElementById(
          'show'
        )!.innerHTML = `Annee with ID ${id}: ${data.anneeScolaire}`;
      },
      (error) => {
        console.error(
          `An error occurred while fetching annee with ID ${id}:`,
          error
        );
      }
    );
  }
}
