import {Injectable} from '@angular/core';

//import obserable
import {Observable} from 'rxjs/Observable';

//import map
import 'rxjs/add/operator/map';

import {Http} from '@angular/http';

@Injectable()
export class DataService{
    users:string[];


    //data: Observable<Array<number>>;

    constructor(public http:Http){
        //this.users=['ted','doungal','bob'];

    }

    //cross origin problem is cakephp problem but is fixed in this app

    /**
     * returns words from rest service
     */
    getWords(){
        return this.http.get('http://localhost/cake3restapi/words.json').map(res=>res.json());
    }


    /*
    //requires an auth header with login details
    getWordswithAuth(){
        return this.http.get('http://localhost/cake3restapi/words.json')
        .map(res=>res.json());
    }


    addUser(user){
        return this.http.post('http://jsonplaceholder.typicode.com/users',user)
        .map(res=>res.json());
    }

    deleteUser(id){
        return this.http.delete('http://jsonplaceholder.typicode.com/users/'+id)
        .map(res=>res.json());
    }

    //broke
    updateUser(user){
        return this.http.put('http://jsonplaceholder.typicode.com/users/'+user.id, user)
            .map(res => res.json());
    }*/

    
}
