import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('about') about!: ElementRef;
  firstTestimonial = true;
  secondTestimonial = false;
  thirdTestimonial = false;

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  onScroll() {
    this.about.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  onShowTestimonial(num: number) {
    this.firstTestimonial = num === 1;
    this.secondTestimonial = num === 2;
    this.thirdTestimonial = num === 3;
  }
}