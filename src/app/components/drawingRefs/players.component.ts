import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class DrawingRefsComponent implements OnInit {

  @Input('drawing') drawing: any;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {}

  async buyItem(drawing) {
    let toast = await this.toastCtrl.create({
      message: 'Added to the cart: ${product.name}'
    });
    toast.present();
  }


}
