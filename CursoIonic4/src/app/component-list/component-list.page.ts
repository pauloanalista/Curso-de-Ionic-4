import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.page.html',
  styleUrls: ['./component-list.page.scss'],
})
export class ComponentListPage implements OnInit {

  frutas : string[] =['Abacate', 'Maça', 'Manga'];
  constructor() { }

  ngOnInit() {
  }


}
