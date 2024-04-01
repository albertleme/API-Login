import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuarioServices } from 'src/app/services/usuario.services';

@Component({
  selector: 'app-usuario_list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
})
export class UsuarioListComponent {
  usuarios?: UsuarioModel[];
  
  constructor(
    private usuarioServices: UsuarioServices,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios(): void {
    this.usuarioServices.readAll().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (e) => console.error(e)
    });
  }

  alterarUsuario(id: string) {
    this.router.navigate(['/UsuarioEdit', id]);
  }

  excluirUsuario(id: string) {
    this.router.navigate(['/UsuarioDelete', id]);
  }

  incluirUsuario() {
    this.router.navigate(['/UsuarioAdd']);
  }

  refresh(): void{
    this.carregarUsuarios();
  }

 }
