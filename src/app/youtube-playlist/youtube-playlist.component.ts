import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.css']
})
export class YoutubePlaylistComponent implements OnInit {

  constructor(private youtubeService:YoutubeService) { }

  listVideo: [] = [];
  ngOnInit(): void {
    this.listVideo = this.youtubeService.playlist;
  }

}
