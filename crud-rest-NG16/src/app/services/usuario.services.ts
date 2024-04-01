import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../models/usuario.model';

const urlUsuarios = 'http://localhost:8080/api/usuarios';
const urlUsuario  = 'http://localhost:8080/api/usuarios';


@Injectable({
  providedIn: 'root',
})

export class UsuarioServices {
  constructor(private http: HttpClient) {}

  create(data: any): Observable<any> {
    return this.http.post(urlUsuarios, data);
  }

  readAll(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(urlUsuarios);
  }

  findById(id: any): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${urlUsuario}/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${urlUsuario}/${id}`, data);
  }
 
  delete(id: any): Observable<any> {
    return this.http.delete<UsuarioModel>(`${urlUsuario}/${id}`);
  }
  
}
