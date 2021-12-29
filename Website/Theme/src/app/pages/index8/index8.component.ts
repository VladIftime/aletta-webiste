import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index8',
  templateUrl: './index8.component.html',
  styleUrls: ['./index8.component.scss']
})
/**
 * Index-8 component
 */
export class Index8Component implements OnInit {

  constructor() { }

  currentSection = 'home';

  ngOnInit(): void {
    document
      .getElementById('color-opt')
      .setAttribute('href', 'assets/css/colors/default.css');
  }
  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar.style.backgroundColor = '#1a1a1a';
      navbar.style.padding = '15px 0px';
    }
    else {
      navbar.style.backgroundColor = '';
      navbar.style.padding = '20px';
    }
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

}
