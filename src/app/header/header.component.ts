import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('isOpenClosedAnimation', [
      transition(':enter', [
        style({ transform: 'scaleX(0)' }),
        animate('0.3s ease', style({ transform: 'scaleX(1)' }))
      ]),
      transition(':leave', [
        style({ transform: 'scaleX(1)' }),
        animate('0.3s ease', style({ transform: 'scaleX(0)' }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit{
  isScreenSmall = false;
  isOpen = false;
  @ViewChild('menu') menu!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(value => {
      this.isOpen = false;
      this.menu.nativeElement.setAttribute('aria-expanded', 'false');
    });

    this.updateNav();
  }

  @HostListener('window:resize') updateNav() {
    if (window.innerWidth <= 1200) {
      this.isScreenSmall = true;
    } else {
      this.isScreenSmall = false;
    }

    if (window.innerWidth > 1200) {
      this.isOpen = false;
    }
  }

  onOpen() {
    this.isOpen = !this.isOpen;
    
    const ariaExpandedState = this.menu.nativeElement.getAttribute('aria-expanded');
    const ariaExpandedValue = ariaExpandedState === 'false' ? 'true' : 'false';
    this.menu.nativeElement.setAttribute('aria-expanded', ariaExpandedValue);
  }
}
