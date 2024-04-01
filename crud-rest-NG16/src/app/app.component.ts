import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prot-crud-rest-3c';

  constructor(
    private router: Router, 
    ) { }

    ngOnInit(): void {    
      this.executarUsuario();
    }
  
    executarUsuario() {
      this.router.navigate(['/UsuarioList']);
    }

}
