import { Component } from '@angular/core';
import { CarroService } from 'src/carro.service';
import { ICarro } from 'src/iCarros';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Api-Angular';
  constructor(private carroService: CarroService)
  {

  }

  obterTodosCarros(){
    this.carroService.obterTodos()
    .then(carros => console.log(carros))
    .catch(error => console.error(error));
    
  }
  obterSomenteUm(){
    this.carroService.obterPorId(3)
      .then(carros => console.log(carros))
      .catch(error => console.error(error));
  }
  adicionarCarro(){
     const carro: ICarro = {
       nome:"Civic",
       marca:"Honda"
  };
  this.carroService.adicionar(carro)
  .then(carros => console.log('adicionado'))
  .catch(error => console.error(error));
  }

    atualizar(){
      const carro: ICarro = {
        id:8,
        nome:"Corolla",
        marca:"Toyota"
    };
    this.carroService.atualizar(carro)
    .then(carro => console.log('att',carro))
    .catch(error => console.error(error));
    }
    remover()
    {
        this.carroService.delete(8)
        .then(res => console.log('removido',res))
        .catch(error => console.error(error));
    }
}
