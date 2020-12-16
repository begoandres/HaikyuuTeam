import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/team.component';
import { DrawingRefsComponent } from './drawingRefs/players.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [NotesComponent, DrawingRefsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [NotesComponent, DrawingRefsComponent]

})
export class SharedComponentsModule { }
