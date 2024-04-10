import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  title = 'Services';

  onSubmit(form: NgForm) {
    if (!form.valid) {
      alert('Invalid Form');
    } else {
      alert('The request has been submitted');
    }

    form.reset();
  }
}
