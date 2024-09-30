import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaplayerComponent,
    HeaderUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SideBarComponent
  ]
})
export class SharedModule { }
