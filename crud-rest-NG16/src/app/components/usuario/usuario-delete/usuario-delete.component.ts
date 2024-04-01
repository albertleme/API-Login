import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { UsuarioServices } from 'src/app/services/usuario.services';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})

export class UsuarioDeleteComponent implements OnInit {
  
  errorMessage!: string;

  
  constructor(
      public usuario: UsuarioModel,
      private usuarioServices: UsuarioServices, 
      private route: ActivatedRoute,
      private router: Router,
      private location: Location
      ) 
      { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] == undefined) {
          console.log('** Não Encontrou Parâmetro');
      } else {
          const id = params['id'];
          this.usuarioServices.findById(id)
              .subscribe(usuario => this.usuario = usuario);
        }
    });
  }

  usuarioDelete(id: any) { console.log(" **********USUARIODELETE*********", id);
        this.usuarioServices.delete(id)
            .subscribe((status: boolean) => {
                if (status) {
                    this.router.navigate(['/Menu']);
                } else {
                    this.errorMessage = 'Unable to delete Usuario';
                }
            });
  }

  goBack(): void {
    this.location.back();
  }

}
