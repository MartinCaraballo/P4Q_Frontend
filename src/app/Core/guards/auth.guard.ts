import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Servicio de autenticación

@Injectable({
  providedIn: 'root',
})
//Este canActivate se llama cuando un usuario no logeado quiere entrar a una ruta que necesita log.
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) { // Verifica si el usuario está autenticado
      return true;
    } else {
      this.router.navigate(['/login']); // Redirige al login si no está autenticado
      return false;
    }
  }
}
