import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor() {}
  playlist: any = [
    {
      id: 'xG9BZEfsU1I',
      song:
        'Người tôi yêu',
    },
    { id: 'HBYirj2c_jw', song: 'Deadpool 2 - Take on Me' },
    { id: 'N6O2ncUKvlg', song: 'Nelly - Just A Dream' },
    { id: 'uelHwf8o7_U', song: 'Eminem - Love The Way You Lie ft. Rihanna' },
    { id: 'WpYeekQkAdc', song: 'The Black Eyed Peas - Where Is The Love?' },
  ];
  find(id: string) {
    return this.playlist.find((item: { id: string }) => item.id === id);
  }
}
