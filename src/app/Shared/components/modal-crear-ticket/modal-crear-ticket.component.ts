import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-crear-ticket',
  standalone: true, 
  imports: [ReactiveFormsModule], 
  templateUrl: './modal-crear-ticket.component.html',
  styleUrls: ['./modal-crear-ticket.component.css'],
})
export class ModalCrearTicketComponent {
  ticketForm: FormGroup; 

  constructor(private fb: FormBuilder) {
    this.ticketForm = this.fb.group({
      title: ['', Validators.required], 
      description: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      console.log('Formulario enviado:', this.ticketForm.value);
      // Enviar datos al backend.
    }
  }
}
