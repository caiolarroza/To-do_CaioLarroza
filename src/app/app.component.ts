import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ["Comprar pão", "Pagar conta", "Ler um livro"];
  novoItem = "";
  pushItem = function(){
  if(this.novoItem != ""){
  this.items.push(this.novoItem);
  this.novoItem = "";
  }
  }
  removeItem = function(index){
  this.items.splice(index, 1);
  }
}