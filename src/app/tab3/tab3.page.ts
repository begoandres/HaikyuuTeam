import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  selected_values=[];
  onSelect(){
      if(this.selected_values.length==2){
          //do somthing
       }
  }

}
