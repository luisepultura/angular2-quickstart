import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor() { }

    getCustomers(){
        return [
        {id: 1, name: 'Sally'},
        {id: 2, name: 'Kevin'},
        {id: 3, name: 'Lulu'},
        {id: 4, name: 'Sam'}
        ];
    }

}