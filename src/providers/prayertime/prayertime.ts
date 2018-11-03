import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PrayertimeProvider {

  url;
  zones;

  constructor(public http: Http) {
    console.log('Hello PrayertimeProvider Provider');
    //this.url = 'http://api.azanpro.com/times/today.json?zone='+ this.zones +'&format=12-hour';
  }

  getPrayerTime(zone){
    this.zones = zone;
    this.url = 'http://api.azanpro.com/times/today.json?zone='+ this.zones +'&format=12-hour';
  	return this.http.get(this.url)
  	.map(res => res.json());
  }

}
