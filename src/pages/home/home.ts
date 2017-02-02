import { Component,ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { VarsGlobales } from '../../providers/vars-globales';
import { BirdsService } from '../../providers/birds-service';

// crear referencia del slider
import {AlertController } from 'ionic-angular';

declare var google: any

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
  */
  @Component({
  	selector: 'page-home',
  	templateUrl: 'home.html',
  	providers: [BirdsService]
  })
  export class HomePage {

  	pajaros;
  	@ViewChild('mySlider') slider;
  	lat;
  	long;
  	map;

  	slideIndex;
  	mySlideOptions;
  	start = true;

  	constructor(public navCtrl: NavController, public navParams: NavParams,
  		public varsGlobales: VarsGlobales,
  		public servicios: BirdsService,public alertCtrl: AlertController) {


  		this.servicios.getAll()
  		.then(
  			data=>{
  				console.log(data);
  				this.pajaros=data;
  			}
  			)
  		.catch(
  			error=>{
  				console.log(error);
  			}
  			)

  		if(!this.varsGlobales.getScriptLoaded()){
  			var __this = this;
  			var script = document.createElement("script");
  			script.src = "http://maps.google.com/maps/api/js?key=AIzaSyD3KOTm8OJSm6DKazxmDIkRGtNQaAkNdrA";
  			script.onload = function(){
  				__this.varsGlobales.setScriptLoaded(true);
  			}
  			document.head.appendChild(script);
  		}

  	}

  	ionViewDidLoad() {
  		console.log('ionViewDidLoad HomePage');
  	}

  	onSlideChanged(){
  		if(!this.start){
  			let currentIndex = this.slider.getActiveIndex();
  			this.loadSlideData(currentIndex);
  		}else{
  			this.start = false;
  		}

  	}

  	loadSlideData(index){
  		var datos = this.pajaros[index];
  		this.servicios.getOne(datos.id)
  		.then(
  			data => {
  				//console.log(data[0]);
  				this.lat = data[0]["latitud"];
  				this.long = data[0]["longitud"];
  			}
  			)
  		.catch(
  			error => {
  				console.log(error);
  			}
  			)
  	}

  	openMap(index){
  		if(this.varsGlobales.getScriptLoaded()){
  			var position ={coords: {latitude: this.lat, longitude:this.long}};
  			var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  			var mapOptions = {
  				center: latLng,
  				zoom: 15,
  				mapTypeId: google.maps.MapTypeId.ROADMAP
  			}
  			this.map = new google.maps.Map(document.getElementById("map"+index), mapOptions);
  		}else{
  			console.log("el script estaba ya cargado");
  		}
  	}


  	addVez(index){
  		var datos = this.pajaros[index];
  		datos.veces ++;
  		this.servicios.addVeces(datos)
  		.then(
  			data => {
  				
  				if(data["mensaje"] == "1"){
  					let alert = this.alertCtrl.create(
  					{
  						title:"Aviso",
  						subTitle: "Avistamiento añadido",
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
