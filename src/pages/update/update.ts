import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { VarsGlobales } from '../../providers/vars-globales';
import { BirdsService } from '../../providers/birds-service';


/*
  Generated class for the Update page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
  providers: [BirdsService]
})
export class UpdatePage {

    constructor(public navCtrl: NavController, public navParams: NavParams,
  		       public varsGlobales: VarsGlobales,
  		       public servicios: BirdsService) {

    	
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

}
