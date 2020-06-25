import { Component, OnInit, OnDestroy } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

import { from } from 'rxjs';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css'],
})
export class YoutubePlayerComponent implements OnInit,OnDestroy {
  song: any;
  sub: Subscription;
  constructor(private youtubeService: YoutubeService,
    private activatedRouter: ActivatedRoute,
    private domSanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    // this.activatedRouter.params.subscribe((temp: Params) => {
    //   console.log(temp);
    // });
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      console.log(id);
      this.song = this.youtubeService.find(id);
    });
  }
  getSrc() {
    const url = 'https://www.youtube.com/embed/' + this.song.id;
     return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
     if (this.sub) {
       this.sub.unsubscribe();
     }
  }
}
