import { AuddResponse } from './types';

require('dotenv').config();
var request = require('request');

const requestDeezerMusic = (title: string) => {
  request(
    {
      uri: 'https://api.deezer.com/search/track?q=' + title,
      method: 'GET'
    },
    (err: any, res: any, body: any) => {
      console.log('Deezer result', JSON.parse(body));
    }
  );
};

export function getSongDataByLyrics(lyrics: string) {
  if (lyrics != null) {
    var data = {
      q: lyrics,
      api_token: process.env.AUDD_TOKEN
    };

    request(
      {
        uri: 'https://api.audd.io/findLyrics/',
        form: data,
        method: 'POST'
      },
      (err: any, res: any, body: any) => {
        if (res.statusCode === 200) {
          const response: AuddResponse = JSON.parse(body);
          console.log(response);
        }
        // requestDeezerMusic(songTitle as string);
      }
    );
  }
}
