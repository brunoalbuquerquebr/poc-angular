import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContainerComponent } from '../../components/container/container.component';
import { ContatoComponent } from '../../components/contato/contato.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SeparadorComponent } from '../../components/separador/separador.component';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css',
  imports: [
    ContainerComponent,
    HeaderComponent,
    SeparadorComponent,
    ContatoComponent,
    RouterLink,
  ],
})
export class ListaContatosComponent {}
