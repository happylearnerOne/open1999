import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Promise } from 'es6-promise';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

	constructor(private http : Http){

	}

  searchLocation(){

    var promise = new Promise((resolve, reject) => {
      this.http.get("http://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery")
      	.toPromise()
      	.then(res => {
      		return resolve(res.json());
      	})
      	.catch(err => {
      		return reject();
      	});
    });
    return promise;

  }

}
