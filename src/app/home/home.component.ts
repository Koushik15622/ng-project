import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  changeColour(element: HTMLElement,e2:HTMLElement) {
    element.style.backgroundColor = 'yellow';
    e2.style.color='black';
 }
  ngOnInit(): void {
  }

}
