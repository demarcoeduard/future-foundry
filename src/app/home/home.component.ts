import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('about') about!: ElementRef;
  firstTestimonial = true;
  secondTestimonial = false;
  thirdTestimonial = false;

  onScroll() {
    this.about.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  onShowTestimonial(num: number) {
    this.firstTestimonial = num === 1;
    this.secondTestimonial = num === 2;
    this.thirdTestimonial = num === 3;
  }
}