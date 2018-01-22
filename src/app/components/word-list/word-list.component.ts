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


    
  //default constrctor
    //Service must be added to component constructor
    constructor(public dataService:DataService){       
    
      //use data service
      this.dataService.getWords().subscribe(words=>{
          this.words=words;
      })

  }//end constructor



  ngOnInit() {
  }

}
