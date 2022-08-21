import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private url = 'http://localhost:3000/transferencias';

  private listaTransferencias: any[];

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  getTodasTransferencias(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: any): Observable<Transferencia> {
    this.hidratarComData(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratarComData(transferencia: any) {
    transferencia.data = new Date();
  }
}
