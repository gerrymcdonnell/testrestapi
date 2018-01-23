import {Injectable} from '@angular/core';
//import obserable
import {Observable} from 'rxjs/Observable';
//import map
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

//import word
import {Word} from '../models/word';

@Injectable()
export class DataService{
    
    word:Word;
    words:Observable<any[]>;

    constructor(public http:Http){       
        this.words=this.getWords();
        console.log(this.words);
    }

    //cross origin problem is cakephp problem but is fixed in this app

    /**
     * returns all words from rest service
     */
    getWords(){
        return this.http.get('http://localhost/cake3restapi/words.json').map(res=>res.json());
    }

    /**
     * 
     * @param id get a single word
     */
    getWord(id:number){
      /*this.word = this.af.object('/words/'+id) as FirebaseObjectObservable<Client>;
      return this.word;*/
      
      //rest api below url may be wrong

      return this.http.get('http://localhost/cake3restapi/words/'+id+'.json').map(res=>res.json());

    }


    updateWord(id:number, word:Word){
        //return this.words.update(id, word);
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
