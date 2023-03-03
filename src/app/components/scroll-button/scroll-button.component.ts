import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.sass'],
})
export class ScrollButtonComponent {
  buttonVisible: boolean = false;

  goToTop() {
    window.scroll(0, 0);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    window.scrollY > 700
      ? (this.buttonVisible = true)
      : (this.buttonVisible = false);
  }
}
