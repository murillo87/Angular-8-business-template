import {Component} from '@angular/core';

@Component({
    selector: 'mi-component',
    templateUrl: './mi-componente.component.html'
    /*template: `
        <h1>{{title}}</h1>
        <h2>{{year}}</h2>
        <p>{{comentario}}</p>
    `*/
})
export class MiComponente{

    public title: string;
    public comentario: string;
    public year: number;

    constructor(){
        this.title = "Hola mundo estoy probando el título 123";
        this.comentario = "Este es el texto del comentario";
        this.year = 2020;        

        console.log('Mi primer componente cargado');
    }
}
