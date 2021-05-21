import { Injectable } from '@angular/core';
import { controlCounter } from './controlCounter';

@Injectable({
  providedIn: 'root'
})
export class DdEventService {

  constructor() { }

  counterArray: controlCounter[]=[];
  previewArray: string[]=[];

  getControlOrder(){
    return this.previewArray;
  }

  allowDrop(ev: any){
    ev.preventDefault();
  }

  drag(ev: any){
    ev.dataTransfer.setData("name", ev.target.innerHTML)
  }

  drop(ev: any){
    ev.preventDefault();
    var name = ev.dataTransfer.getData("name");
    let index=this.counterArray.findIndex(obj => obj.controls == name);
    if(index<0){
      this.counterArray.push({'controls':name,'counter':1});
      index=this.counterArray.findIndex(obj => obj.controls == name);
    }
    else{
      this.counterArray[index].counter++;
    }

    var childnode=document.createElement('div');
    childnode.id=name+this.counterArray[index].counter;
    childnode.className='childClass';
    childnode.innerText=name+this.counterArray[index].counter;
    var icon=document.createElement('span');
    icon.className="childSpan";
    icon.innerText="x";
    icon.title="Remove";
    icon.addEventListener("click",(e: Event)=> this.deleteControl(childnode.id))
    childnode.appendChild(icon);
    var element = document.getElementById('inputArea');
    element?.insertBefore(childnode,element.firstChild);
    this.previewArray.unshift(childnode.id);
  }

  deleteControl(obj1: string){
    document.getElementById(obj1)?.remove();
    let index=this.previewArray.indexOf(obj1);
    this.previewArray.splice(index,1);
    this.getControlOrder();
  }
}
