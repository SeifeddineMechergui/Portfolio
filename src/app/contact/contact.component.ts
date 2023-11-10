
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private http: HttpClient) {}

  submitForm(form: NgForm): void {
    const backendUrl = 'http://localhost:3000/send-email'; 

    this.http.post(backendUrl, form.value).subscribe(
      (response) => {
        console.log('Emails sent successfully:', response);
        form.reset();
      },
      (error) => {
        console.error('Error sending emails:', error);
      }
    );
  }
}
