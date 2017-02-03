import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { VarsGlobales } from '../../providers/vars-globales';
import { BirdsService } from '../../providers/birds-service';

import { AlertController } from 'ionic-angular';


import { HomePage } from '../home/home';
import { AddPage } from '../add/add';
import { UpdatePage } from '../update/update';

/*
  Generated class for the Lista page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
  @Component({
    selector: 'page-lista',
    templateUrl: 'lista.html',
    providers: [BirdsService]
  })
  export class ListaPage {
    pajaros;
    id;
    constructor(public navCtrl: NavController, public navParams: NavParams,
      public varsGlobales: VarsGlobales,
      public servicios: BirdsService, public alertCtrl: AlertController) {
    this.loadData();
    	
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad ListaPage');
    }

      loadData(){
    this.servicios.getAll()
          .then(
            data => {
              console.log(data);
              this.pajaros = data;
            }
          )
          .catch(
            error => {
              console.log(error);
            }
          )
  }

  goHome(index){
    console.log(index);
    this.varsGlobales.setSlide(index);
    this.navCtrl.push(HomePage);
  }

  goUpdate(index){
    console.log(index);
    this.navCtrl.push(UpdatePage, {id:index});
  }

  delete(index){
    this.id = index;
    this.showPrompt();
  }

  showPrompt(){
    var __this = this;
      let prompt = this.alertCtrl.create(
          {
            title: "Aviso",
            message: "Seguro que quieres borrar el pájaro?",
            buttons:[
              {
                text: "Cancelar",
                handler: data =>{
                }
              },
              {
                text: "Borrar",
                handler: data =>{
                  __this.borrar();
                }
              }
            ]
          }
        );
      
      prompt.present();
  }

  borrar(){
    this.servicios.delete(this.id)
          .then(
            data => {
              console.log(data[0]);
              this.loadData();
            }
          )
          .catch(
            error => {
              console.log(error);
            }
          )
  }

  }
