import { CepService } from './../cep.service';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-externa',
  templateUrl: './api-externa.page.html',
  styleUrls: ['./api-externa.page.scss'],
})
export class ApiExternaPage implements OnInit {

  result : any;
  constructor(private usuarioService : UsuarioService, private cepService : CepService) { }

  ngOnInit() {
  }

  get(){
    //chama a tela de aguarde
    this.usuarioService.obterUsuarioPorId(4)
    .then((response)=>{
      this.result = JSON.stringify(response);
      //fecha tela de aguarde
    })
    .catch((response)=>{
      this.result = JSON.stringify(response);
      //fecha tela de aguarde
    });
  }

  post(){
    let usuario = {id:50, nome: 'Zeca'};
    
    this.usuarioService.adicionar(usuario).then((response : any)=>{
      this.result = JSON.stringify( response);
    })
    .catch((response)=>{
      this.result = JSON.stringify( response);
    });
  }

  put(){
    let usuario = {id:4, nome: 'Tereza'};
    
    this.usuarioService.atualizar(usuario).then((response : any)=>{
      this.result = JSON.stringify( response);
    })
    .catch((response)=>{
      this.result = JSON.stringify( response);
    });
  }

  delete(){
    //chama a tela de aguarde
    this.usuarioService.excluirPorId(4)
    .then((response)=>{
      this.result = JSON.stringify(response);
      //fecha tela de aguarde
    })
    .catch((response)=>{
      this.result = JSON.stringify(response);
      //fecha tela de aguarde
    });
  }

  cep(){
    //chama a tela de aguarde
    this.cepService.obterEndereco(26112250)
    .then((response)=>{
      this.result = JSON.stringify(response);
      //fecha tela de aguarde
    })
    .catch((response)=>{
      this.result = JSON.stringify(response);
      //fecha tela de aguarde
    });
  }
}
