import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuarioModel} from './models/usuario.model';
import { UsuarioListComponent } from './components/usuario/usuario_list/usuario-list.component';
import { UsuarioAddComponent } from './components/usuario/usuario-add/usuario-add.component';
import { UsuarioEditComponent } from './components/usuario/usuario-edit/usuario-edit.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListComponent,
    UsuarioAddComponent,
    UsuarioEditComponent,
    UsuarioDeleteComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsuarioModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
