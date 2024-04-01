import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UsuarioServices } from 'src/app/services/usuario.services';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  usuario!: UsuarioModel;

  errorMessage!: string;

  message = '';

  constructor(
    private usuarioServices: UsuarioServices,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] === undefined) {
          console.log('** Não Encontrou Parâmetro');
      } else {
          const id = params['id'];
          this.usuarioServices.findById(id)
              .subscribe(usuario => this.usuario = usuario);
        }
    });
  }
 
 usuarioEdit(): void {
    this.message = '';

    this.usuarioServices
      .update(this.usuario.id, this.usuario)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message  : 'This usuario was updated successfully!';
            this.location.back();
        },
        error: (e) => console.error(e)
      });
  }

  wait(ms: number){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
  }

}
