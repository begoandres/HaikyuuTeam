import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {

  @Input('player') player: any;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {}

  async buyItem(player) {
    let toast = await this.toastCtrl.create({
      message: 'Added to the cart: ${product.name}'
    });
    toast.present();
  }


}
