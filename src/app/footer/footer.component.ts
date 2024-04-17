import { Component } from '@angular/core'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  showPopUp = false;
  popUpText1 = "Thank you for subscribing.";
  popUpText2 = "Now you'll be able to receive our latest updates.";

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.showPopUp = true;
      
      setTimeout(() => {
        this.showPopUp = false;
        form.reset();
      }, 3000);
    } else {
      form.controls['name'].markAsTouched();
      form.controls['email'].markAsTouched();
    }
  }
}
