import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  onSubmit(form: NgForm) {
    if (form.valid) {
      alert('Subscription made!');
      form.reset()
    } else {
      alert('Please complete the required fields!')
    }
  }
}
