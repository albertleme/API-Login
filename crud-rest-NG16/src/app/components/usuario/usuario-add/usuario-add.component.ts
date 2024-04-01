import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { UsuarioServices } from 'src/app/services/usuario.services';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  public newUsuario = { 'nome': '', 'grupo': '', 'email': '','senha': '' };

  public mensagem: string | undefined;

  constructor(
    private usuarioServices: UsuarioServices,
    private location: Location) { }

  ngOnInit(): void {
  }

createUsuario(newUsuario: any): void {
  if (this.newUsuario.nome === '') {
      this.mensagem = 'Nome Não informado';
      return;
  }
  if (this.newUsuario.senha === '') {
      this.mensagem = 'Senha Não informada';
      return;
  }
  console.log('Incluindo Usuario'); 
  
  let usuarioOperation: Observable<UsuarioModel[]>;
  console.log('VAI CRIAR USUARIO');
  usuarioOperation = this.usuarioServices.create(newUsuario);
  usuarioOperation.subscribe();
  console.log('CRIOU USUARIO');
  this.wait(1000);
  this.location.back();   
}

wait(ms: number){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
  }
}

}
