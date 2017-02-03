import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { VarsGlobales } from '../../providers/vars-globales';
import { BirdsService } from '../../providers/birds-service';

import { AlertController } from 'ionic-angular';


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
    titulo;
    pajaro;
    id;
    constructor(public navCtrl: NavController, public navParams: NavParams,
      public varsGlobales: VarsGlobales,
      public servicios: BirdsService,public alertCtrl: AlertController) {
      if(navParams.get("id") != null){
        this.id = navParams.get("id");
        this.loadSlideData();
      }

    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad UpdatePage');
    }

    loadSlideData(){
      this.servicios.getOne(this.id)
      .then(
        data => {
          console.log(data[0]);
          this.titulo = data[0]["titulo"];
          this.pajaro = data[0]["pajaro"];
        }
        )
      .catch(
        error => {
          console.log(error);
        }
        )
    }

    enviar(){
      var now = new Date();
      var datos = {};
      datos["titulo"] =  this.titulo;
      datos["pajaro"] =  this.pajaro;
      datos["id"] =  this.id;
      this.servicios.update(datos)
      .then(
        data => {
          console.log(data);
          if(data["mensaje"] == "1"){
            let alert = this.alertCtrl.create(
            {
              title:"Aviso",
              subTitle: "Registro modificado",
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
