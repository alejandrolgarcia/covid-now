import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CovidService } from '../../services/covid.service';
import { Countries } from '../../interfaces/countries';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pais: string;
  countries: any = {};

  constructor(private covidService: CovidService) {}

  ngOnInit() {
    this.searchPais();
  }

  searchPais() {
    // console.log(form);

    if (this.pais == null && !localStorage.getItem('pais') ) {
      this.infoPais('USA');
    }

    if ( this.pais ) {
      localStorage.setItem('pais', this.pais);
      this.infoPais(this.pais);
    }

    if (localStorage.getItem('pais')) {
      this.infoPais(localStorage.getItem('pais'));
    }

    console.log(this.pais);

  }

  infoPais( pais: string ) {
    this.covidService.getPais(pais).subscribe((resp: Countries) => {
      this.countries = resp;
      console.log(this.countries);
    });
  }
}
