import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode2',
  templateUrl: './episode2.component.html',
  styleUrls: ['./episode2.component.css']
})
export class Episode2Component implements OnInit {

  ships = ['Corellian', 'DroidStarFighter', 'JediStarFighter', 'MilleniumFalcon', 'NabooBomber', 'NabooStarFighter', 'RebublicCruiser', 'Tibirium', 'TieFighter', 'Xwing', 'YWing']

  constructor() { }

  ngOnInit() {
  }

}
