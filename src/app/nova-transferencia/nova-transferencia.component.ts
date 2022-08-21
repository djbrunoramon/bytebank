import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService, private router: Router) {}

  ngOnInit(): void {}

  transferir() {
    const tranferencia: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(tranferencia).subscribe((resultado) => {
      this.navegarParaExtratos();
    });
  }

  navegarParaExtratos() {
    this.router.navigateByUrl('extrato');
  }
}
