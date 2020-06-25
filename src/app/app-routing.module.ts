import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { HomeComponent } from './home/home.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';

const routes: Routes = [
  {
    path: 'dictionary',
    component: DictionaryComponent,
    children: [
      {
        path: ':key',
        component: DictionaryDetailComponent,
        canActivate:[]
      }
    ]
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'timelines',
    component: TimelinesComponent,
  },
  {
    path: 'video',
    component: YoutubePlaylistComponent,
    children: [
      {
        path: ':id',
        component: YoutubePlayerComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
