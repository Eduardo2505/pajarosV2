import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BirdsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
  	*/
  @Injectable()
  export class BirdsService {

    private url="http://127.0.0.1/pajarosAdmin";

  	constructor(public http: Http) {
  		console.log('Hello BirdsService Provider');
  	}

  	getAll(){
  		return new Promise(
  			resolve=>{
  				this.http.get(this.url+"/admin/all")
  				.map(res=> res.json())
  				.subscribe(
  					data => {
  						resolve(data);
  						console.log(data);
  					},
  					err=>{
  						console.log(err);
  					}
  					)
  			}
  			);
  	}

  	getOne(id){
  		return new Promise(
  			resolve=>{
  				this.http.get(this.url+"/admin/buscar?id="+id)
  				.map(res=> res.json())
  				.subscribe(
  					data => {
  						resolve(data);
  					},
  					err=>{
  						console.log(err);
  					}
  					)
  			}
  			);
  	}


  	add(data){
     var headers = new Headers();
      
      headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      var params = 'titulo='+data.titulo+'&pajaro='+data.pajaro+'&latitud='+data.latitud+'&longitud='+data.longitud+'&veces='+data.veces+'&lastview='+data.lastView;

  		return new Promise(
  			resolve=>{
  				this.http.post(this.url+"/admin/add", params,{headers: headers})
  				.map(res=> res.json())
  				.subscribe(
  					data => {
  						resolve(data);
  					},
  					err=>{
  						console.log(err);
  					}
  					)
  			}
  			);
  	}

  	addVeces(data){

  		var headers = new Headers();
  		
  		headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  		var params = 'id='+data.id+'&veces='+data.veces;
  		return new Promise(
  			resolve=>{
  				this.http.post(this.url+"/admin/updateVeces", params,{headers: headers})
  				.map(res=> res.json())
  				.subscribe(
  					data => {

  						
  						resolve(data);
  					},
  					err=>{
  						console.log(err);
  					}
  					)
  			}
  			);
  	}

  	update(data){
  		return new Promise(
  			resolve=>{
  				this.http.post(this.url+"/admin/update", data)
  				.map(res=> res.json())
  				.subscribe(
  					data => {
  						resolve(data);
  					},
  					err=>{
  						console.log(err);
  					}
  					)
  			}
  			);
  	}

  	delete(id){
  		return new Promise(
  			resolve=>{
  				this.http.get(this.url+"/admin/delete?id="+id)
  				.map(res=> res.json())
  				.subscribe(
  					data => {
  						resolve(data);
  					},
  					err=>{
  						console.log(err);
  					}
  					)
  			}
  			);
  	}

  }
