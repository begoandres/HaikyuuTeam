import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class NotesComponent implements OnInit {

  @Input('note') note: any;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {}

  async buyItem(team) {
    let toast = await this.toastCtrl.create({
      message: 'Added to the cart: ${product.name}'
    });
    toast.present();
  }

}
