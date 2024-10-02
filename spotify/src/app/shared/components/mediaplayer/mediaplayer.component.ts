import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css']
})
export class MediaplayerComponent {
  mockCover: TrackModel = {
    cover:'https://f4.bcbits.com/img/a2705881579_10.jpg',
    album:'Cendra i Or',
    name:'Smoking Souls',
    url: 'http://localgost/track.mp3',
    _id: 1
  }
}
