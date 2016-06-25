import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const URL_CUSTOMER = 'app/customers.json';

@Injectable()
export class CustomerService {

    constructor(private _http: Http) { }

    getCustomers(){
        return this._http.get(URL_CUSTOMER)
            .toPromise()
            .then(response => response.json())
            .catch((err: any) => {
                console.log(err);//customize this...
                return Promise.reject(err);
            });
            
    }

}