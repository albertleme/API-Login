import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioListComponent } from './components/usuario/usuario_list/usuario-list.component';
import { UsuarioAddComponent } from  './components/usuario/usuario-add/usuario-add.component';
import { UsuarioEditComponent } from './components/usuario/usuario-edit/usuario-edit.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';

const routes: Routes = [
 
  { path: 'UsuarioList',       component: UsuarioListComponent },  
  { path: 'UsuarioAdd',       component: UsuarioAddComponent },  
  { path: 'UsuarioEdit/:id',  component: UsuarioEditComponent},
  { path: 'UsuarioDelete/:id',component: UsuarioDeleteComponent },
 
  { path: '',              component:UsuarioListComponent },
  { path: '**',            component: UsuarioListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
