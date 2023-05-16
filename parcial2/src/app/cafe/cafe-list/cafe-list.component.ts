import { Component, OnInit } from '@angular/core';
import {Cafe} from '../cafe';
import {CafesService} from '../cafes.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];
  constructor(private cafeService: CafesService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
    });
  }

  ngOnInit() {
  }

  getCafeOrigen(cafe: Cafe): Number {
    let contadorOrigen = 0;
    this.cafes.forEach((serie) => {
      if (cafe.tipo == 'Café de Origen') {
        contadorOrigen += 1;
      }
    });
    return contadorOrigen;
  }

  getCafeBlend(cafe: Cafe): Number {
    let contadorBlend = 0;
    this.cafes.forEach((serie) => {
      if (cafe.tipo == 'Blend') {
        contadorBlend += 1;
      }
    });
    return contadorBlend;
  }
}
