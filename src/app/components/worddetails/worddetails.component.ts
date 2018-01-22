import { Component, OnInit } from '@angular/core';

//import word
import {Word} from '../../models/word';
import {DataService} from '../../services/data.service';

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-worddetails',
  templateUrl: './worddetails.component.html',
  styleUrls: ['./worddetails.component.css']
})
export class WorddetailsComponent implements OnInit {

  id:number;
  wordObj:Word;

  constructor(
    public dataService:DataService,
    public router:Router,
    public route:ActivatedRoute

  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];
    // Get Client
    this.dataService.getWord(this.id).subscribe(w => {
      
      console.log(w);
      console.log(w.wordtitle);
      
      this.wordObj = w;  
          
      
    });
  }

}
