import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Tab2Page {

  information: any[]

  automaticClose = false;

  constructor( private http: HttpClient) {
    this,http.get('../assets/drawingRefs.json').subscribe(res=> {
      this.information = res['items'];

      this.information[0].open = true;
    })

  }

  toggleSection(index) {
    this.information[index].open = !this.information[index].open

    if (this.automaticClose && this.information[index].open) {
      this.information
      .filter((item, itemIndex) => itemIndex != index)
      .map(item => item.open = false);
    }
  }

  toggleItem(index, childIndex) {
    this.information[index].children[childIndex].open = !this.information[index].children[childIndex].open


  }

}