import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-projet',
  templateUrl: './new-projet.component.html',
  styleUrls: ['./new-projet.component.css']
})
export class NewProjetComponent {
  formData: any = {}; // Replace with your desired form data structure

  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log(typeof(parseInt(this.formData.anneeId)));
    this.http
      .post('http://127.0.0.1:8000/api/projet/new', { nom: this.formData.nom, anneeId: parseInt(this.formData.anneeId) })
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
