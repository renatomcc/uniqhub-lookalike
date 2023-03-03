import { Component } from '@angular/core';

interface Customer {
  image: string;
  alt: string;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.sass'],
})
export class ClientesComponent {
  customers: Customer[] = [
    {
      image: '../../../assets/c1.png',
      alt: 'Sambaíba',
    },
    {
      image: '../../../assets/c2.png',
      alt: 'BRT Sorocaba',
    },
    {
      image: '../../../assets/c3.png',
      alt: 'Mobi-PE',
    },
    {
      image: '../../../assets/c4.png',
      alt: 'Mobi-Brasil',
    },
    {
      image: '../../../assets/c5.png',
      alt: 'Nova Mobi Pernambuco',
    },
  ];
}
