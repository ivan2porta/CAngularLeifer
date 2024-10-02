import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaplayerComponent } from './components/mediaplayer/mediaplayer.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaplayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SideBarComponent, 
    MediaplayerComponent, 
    HeaderUserComponent, 
    SectionGenericComponent, 
    CardPlayerComponent
  ]
})
export class SharedModule { }
