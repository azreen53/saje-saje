import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SettingPage } from '../setting/setting';
import { SolatPage } from '../solat/solat';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SolatPage;
  tab3Root = AboutPage;
  tab4Root = SettingPage;

  constructor() {

  }
}
