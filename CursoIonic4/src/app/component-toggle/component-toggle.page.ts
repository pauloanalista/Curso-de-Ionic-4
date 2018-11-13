import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-toggle',
  templateUrl: './component-toggle.page.html',
  styleUrls: ['./component-toggle.page.scss'],
})
export class ComponentTogglePage implements OnInit {

  marcado : boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
