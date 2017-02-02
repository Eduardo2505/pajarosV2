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

  	constructor(public http: Http) {
  		console.log('Hello BirdsService Provider');
  	}

  	getAll(){
  		return new Promise(
  			resolve=>{
  				this.http.get("http://127.0.0.1/pajarosAdmin/admin/all")
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
  				this.http.get("http://127.0.0.1/pajarosAdmin/admin/buscar?id="+id)
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


  		return new Promise(
  			resolve=>{
  				this.http.post("http://127.0.0.1/pajarosAdmin/admin/add", data)
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
  		var now = new Date();
  		headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  		var params = 'id='+data.id+'&veces='+data.veces;
  		return new Promise(
  			resolve=>{
  				this.http.post("http://127.0.0.1/pajarosAdmin/admin/updateVeces", params,{headers: headers})
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
  				this.http.post("http://127.0.0.1/pajarosAdmin/admin/update", data)
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
  				this.http.get("http://127.0.0.1/pajarosAdmin/admin/delete?id="+id)
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
