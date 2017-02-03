import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { VarsGlobales } from '../../providers/vars-globales';
import { BirdsService } from '../../providers/birds-service';


import { Geolocation } from 'ionic-native';
import {AlertController } from 'ionic-angular';

/*
  Generated class for the Add page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
  @Component({
    selector: 'page-add',
    templateUrl: 'add.html',
    providers: [BirdsService]
  })
  export class AddPage {
    latitud;
    longitud;
    titulo;
    pajaro;
    constructor(public navCtrl: NavController, public navParams: NavParams,
      public varsGlobales: VarsGlobales,
      public servicios: BirdsService, public alertCtrl: AlertController) {

    	this.loadPosition();
      this.titulo = "";
      this.pajaro = "";
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad AddPage');
    }

    loadPosition(){
      var __this = this;
      Geolocation.getCurrentPosition()
      .then(
        (position) => {
          __this.latitud = position.coords.latitude;
          __this.longitud = position.coords.longitude;
        },
        (err) =>{
          console.log(err);
        }
        )
    }

    enviar(){
      var now = new Date();
      var datos = {};
      datos["titulo"] =  this.titulo;
      datos["pajaro"] =  this.pajaro;
      datos["latitud"] =  this.latitud;
      datos["longitud"] =  this.longitud;
      datos["veces"] =  1;
      datos["lastView"] =  now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
      this.servicios.add(datos)
      .then(
        data => {
          console.log(data);
          if(data["mensaje"] == "1"){
            let alert = this.alertCtrl.create(
            {
              title:"Aviso",
              subTitle: "Registro añadido",
              buttons: ["OK"]
            }
            );
            alert.present();
          }
        }
        )
      .catch(
        error => {
          console.log(error);
        }
        )
    }

  }
