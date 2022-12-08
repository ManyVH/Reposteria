import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  valor = false
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.valor="true"===this.rutaActiva.snapshot.params['cabeza']
  }

}
