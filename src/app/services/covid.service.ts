import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor( private http: HttpClient ) { }

  globalTotals() {

    return this.http.get('https://corona.lmao.ninja/all');
  }

  getAllCountries() {
    return this.http.get('https://corona.lmao.ninja/countries?sort=cases')
      .pipe(
        map( (resp: any[]) => {
          return resp.map( countries => {
            return {
              country: countries.country,
              flag: countries.countryInfo.flag,
              cases: countries.cases,
              todayCases: countries.todayCases,
              deaths: countries.deaths,
              todayDeaths: countries.todayDeaths,
              recovered: countries.recovered,
              active: countries.active,
              critical: countries.critical,
            };
          });
        })
      );
  }

  getPais( pais: string) {
    return this.http.get(`https://corona.lmao.ninja/countries/${pais}`);
  }
}
