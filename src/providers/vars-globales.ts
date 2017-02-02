import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the VarsGlobales provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
  	*/
  @Injectable()
  export class VarsGlobales {
  	private scriptLoaded;
  	private slide;

  	constructor(public http: Http) {
  		console.log('Hello VarsGlobales Provider');
  		this.scriptLoaded = false;
      this.slide = 0;
  	}

  	setScriptLoaded(value){
  		this.scriptLoaded = value;
  	}

  	getScriptLoaded(){
  		return this.scriptLoaded;
  	}

  	setSlide(value){
  		this.scriptLoaded = value;
  	}

  	getSlide(){
  		return this.scriptLoaded;
  	}



  }
