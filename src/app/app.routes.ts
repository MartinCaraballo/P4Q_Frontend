import { Routes } from '@angular/router';
import { LoginComponent } from './Features/auth/login/login.component';
import { RegisterComponent } from './Features/auth/register/register.component';
//import { AuthGuard } from './Core/guards/auth.guard';
//import { NoAuthGuard } from './Core/guards/no-auth.guard';

import { ModalCrearTicketComponent } from '../app/Shared/components/modal-crear-ticket/modal-crear-ticket.component'; // Ajusta la ruta según la ubicación real del componente

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'crear-ticket',
    component: ModalCrearTicketComponent, // Nuevo componente para "Crear Ticket"
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];
