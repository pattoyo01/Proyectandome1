import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servivios/portfolio.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
miPorfolio:any;
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerdatos().subscribe(data=>{
      console.log(data)
      this.miPorfolio=data;
    });
  }
}

