import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { ListaPage } from '../lista/lista';
import { AddPage } from '../add/add';
import { HomePage } from '../home/home';
/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
  @Component({
  	selector: 'page-tabs',
  	templateUrl: 'tabs.html'
  })
  export class TabsPage {



  	listaPage=ListaPage;
  	addPage=AddPage;
  	homePage=HomePage;

  	constructor(public navCtrl: NavController, public navParams: NavParams) {}





  	ionViewDidLoad() {
  		console.log('ionViewDidLoad TabsPage');
  	}

  }
