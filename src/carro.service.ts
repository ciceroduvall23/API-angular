import { ICarro } from './iCarros';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { API_PATH } from './environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private httpClient: HttpClient) { }
  
  obterTodos() /*ele está retornando um observable de object */
  {
      return this.httpClient.get<ICarro[]>(`${API_PATH}carros`).toPromise();
      /* o GET retorna um .toPromise ,mas sem o .toPromise(); ele retonaria um observable*/ 
      /*endpoit "Carro" ele vai fazer um get com a api na environmet */ 
  }

  obterPorId(id:number)
  {
    return this.httpClient.get<ICarro[]>(`${API_PATH}carros/${id}`).toPromise();
  }
  adicionar(carro:ICarro)
  {
    return this.httpClient.post<ICarro>(`${API_PATH}carros`,carro).toPromise();
      /* ele vai bater na rota carros,ele vai dar um POST e vai retornar um ICarro que é a interface e vai mandar um objeto Icarro mas sem o ID*/
  }
  atualizar(carro:ICarro)
  {
    return this.httpClient.put<ICarro>(`${API_PATH}carros/${carro.id}`, carro).toPromise();
      /* ele vai bater na rota carros,ele vai dar um POST e vai retornar um ICarro que é a interface e vai mandar um objeto Icarro mas sem o ID*/
  }
  delete(carroId:number)
  {
    return this.httpClient.delete<void>(`${API_PATH}carros/${carroId}`).toPromise();
      /* ele vai bater na rota carros,ele vai dar um POST e vai retornar um ICarro que é a interface e vai mandar um objeto Icarro mas sem o ID*/
  }
}
