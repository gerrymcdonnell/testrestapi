import { Component, OnInit } from '@angular/core';

//import word
import {Word} from '../../models/word';

import {DataService} from '../../services/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-word',
  templateUrl: './edit-word.component.html',
  styleUrls: ['./edit-word.component.css']
})
export class EditWordComponent implements OnInit {

  //works
  word:Word=new Object;

  id:number=0;

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
      
      console.log(w.wordtitle);      
      
      this.word = w;     
      
    });
  }

  onSubmit({value, valid}:{value:Word, valid:boolean}){
    if(!valid){
      //this.flashMessagesService.show('Please fill in all fields', {cssClass:'alert-danger', timeout: 4000});
      this.router.navigate(['edit-word/'+this.id]);
    } else {
      // Update client
      this.dataService.updateWord(this.id, value);
      //this.flashMessagesService.show('Client updated', {cssClass:'alert-success', timeout: 4000});
      this.router.navigate(['/word/'+this.id]);
    }
  }


}
