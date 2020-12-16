import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { PlayersComponent } from './players/players.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TeamComponent, PlayersComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [TeamComponent, PlayersComponent]

})
export class SharedComponentsModule { }
