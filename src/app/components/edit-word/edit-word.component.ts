import { Component, OnInit } from '@angular/core';

//import word
import {Word} from '../../models/word';

@Component({
  selector: 'app-edit-word',
  templateUrl: './edit-word.component.html',
  styleUrls: ['./edit-word.component.css']
})
export class EditWordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    /*this.id = this.route.snapshot.params['id'];

    // Get Client
    this.dataService.getClient(this.id).subscribe(word => {
      this.word = word;
    });*/

  }

}
