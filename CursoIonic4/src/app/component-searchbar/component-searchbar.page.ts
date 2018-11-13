import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-searchbar',
  templateUrl: './component-searchbar.page.html',
  styleUrls: ['./component-searchbar.page.scss'],
})
export class ComponentSearchbarPage implements OnInit {
  nome: string = '';
  pessoas: any;
  pessoasFiltradas: any;

  constructor() {
    this.pessoas = [
      { id: 1, idade: 13, nome: "Paulo" },
      { id: 2, idade: 17, nome: "Paula" },
      { id: 3, idade: 55, nome: "Ana Paula" },
      { id: 4, idade: 22, nome: "Paulo Rogério" },
      { id: 5, idade: 33, nome: "Rogério Marques" },
      { id: 6, idade: 11, nome: "Agatha" },
      { id: 7, idade: 12, nome: "Fernanda" },
      { id: 8, idade: 13, nome: "Maria Fernanda" },
      { id: 9, idade: 14, nome: "Ana" },
    ];

    this.pessoasFiltradas = this.pessoas;
  }

  ngOnInit() {
  }

  filtrarItens(){
    this.pessoasFiltradas = this.filtrarPessoas(this.nome);
  }

  filtrarPessoas(nome){
    this.pessoasFiltradas = this.pessoas;
    
    return this.pessoasFiltradas.filter((item)=>{
      return item.nome.toLowerCase().includes(nome.toLowerCase());
    });
  }
}
