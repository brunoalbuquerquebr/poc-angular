import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContainerComponent } from '../../components/container/container.component';
import { SeparadorComponent } from '../../components/separador/separador.component';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css',
  imports: [
    ContainerComponent,
    SeparadorComponent,
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
  ],
})
export class FormularioContatoComponent {
  contatoForm!: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('Ana'),
      telefone: new FormControl('(11) 99999-9999'),
    });
  }
  salvarContato() {
    console.log(this.contatoForm.value);
  }

  cancelar() {
    console.log('cancelar');
  }
}
