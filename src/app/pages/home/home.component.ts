import { Component, OnInit } from '@angular/core';
import { CovidService } from '../../services/covid.service';
import { Totals } from '../../interfaces/totals';
import { Countries } from '../../interfaces/countries';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private covidService: CovidService ) { }

  total: any = {};
  countries: Countries[] = [];

  ngOnInit() {

    this.covidService.globalTotals()
      .subscribe( (resp: Totals) => {
        console.log(resp);
        this.total = resp;
      });

    this.covidService.getAllCountries()
      .subscribe(((resp: Countries[]) => {
          console.log( resp );
          this.countries = resp;
      }));
  }

}
