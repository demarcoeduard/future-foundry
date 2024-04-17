import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  title = 'Contact Us';

  showPopUp = false;
  popUpText1 = "Thank you for contacting us.";
  popUpText2 = "We'll get back to you shortly.";

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.showPopUp = true;

      setTimeout(() => {
        this.showPopUp = false;
        form.reset();
      }, 3000);
    } else {
      alert('Please complete all the required fields!');
      form.controls['name'].markAsTouched();
      form.controls['email'].markAsTouched();
    }
  }
}
