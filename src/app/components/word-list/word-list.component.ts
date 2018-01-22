import { Component, OnInit } from '@angular/core';

import {DataService} from '../../services/data.service';

//import word
import {Word} from '../../models/word';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  /*styleUrls: ['./word-list.component.css']*/
})
export class WordListComponent implements OnInit {

 
  //properties
  words:Word[]=[];


    

    //Service must be added to component constructor
    constructor(public dataService:DataService){
  }//end constructor



  ngOnInit() {
    //use data service
    this.dataService.getWords().subscribe(words=>{
      this.words=words;
    })
  }

}
