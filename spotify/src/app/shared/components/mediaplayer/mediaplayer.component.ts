import { Component } from '@angular/core';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent {
  mockCover: any = {
    cover:'https://f4.bcbits.com/img/a2705881579_10.jpg',
    album:'Cendra i Or',
    name:'Smoking Souls'
  }
}
