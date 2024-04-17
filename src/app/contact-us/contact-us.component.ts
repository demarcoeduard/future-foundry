import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  title = 'Contact Us';

  onSubmit(form: NgForm) {
    if (form.valid) {
      alert('The message has been sent!');
      form.reset();
    } else {
      alert('Please complete all the required fields!');
      form.controls['name'].markAsTouched();
      form.controls['email'].markAsTouched();
    }
  }
}
