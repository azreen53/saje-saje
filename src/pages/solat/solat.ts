import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrayertimeProvider } from '../../providers/prayertime/prayertime';

@IonicPage()
@Component({
  selector: 'page-solat',
  templateUrl: 'solat.html',
})
export class SolatPage {

  locationZone:any;
  prayer:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private prayerTime:PrayertimeProvider,) {
  }

  ionViewDidLoad() {
    this.prayerTime.getPrayerTime("sgr01")
  	.subscribe(waktuSolat => {
  		console.log(waktuSolat);
      this.prayer = waktuSolat;
      console.log(this.prayer.prayer_times);
  	});
  }
  

}
