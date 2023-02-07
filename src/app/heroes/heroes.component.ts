import { Component, OnInit } from "@angular/core";

export interface Hero {
  id: number;
  name: string;
  bunda?: Bunda;
}

export interface Bunda {
  tamanho: string;
  sabor: string;
}

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
})
export class HeroesComponent implements OnInit {
  hero: Hero;

  constructor() {}

  ngOnInit() {

    
    this.hero = {
      id: 1,
      name: "biazona",
      bunda: {
        sabor: "morango",
        tamanho: "perfeito",
      },
    };
  }
}
