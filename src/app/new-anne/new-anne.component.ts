import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-anne',
  templateUrl: './new-anne.component.html',
  styleUrls: ['./new-anne.component.css'],
})
export class NewAnneComponent {
  formData: any = {}; // Replace with your desired form data structure

  constructor(private http: HttpClient) {}

  onSubmit() {
    console.log(this.formData.annee);
    this.http
      .post('http://127.0.0.1:8000/api/annees', { anneescolaire: this.formData.annee })
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
