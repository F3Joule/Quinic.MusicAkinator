import { AuddResponse, MusicInfo } from './types';
import axios from 'axios';

require('dotenv').config();

const publicProxy = 'http://127.0.0.1:9000/';

export const requestDeezerMusic = async (musicInfo: MusicInfo) => {
  console.log('Here');
  const data = await axios
    .get(`${publicProxy}https://api.deezer.com/search?q=artist:"${musicInfo.artist}"track:"${musicInfo.title}"`);
  console.log(data);
  return data.data.data[0];
};

export async function getSongDataByLyrics(lyrics: string) {
  if (lyrics != null) {
    var data = {
      q: lyrics,
      api_token: 'cc95465555e477a488ff9f35e51251a3'
    };

    const res = await axios
      .post(`${publicProxy}https://api.audd.io/findLyrics/`, data);
    const response: AuddResponse = res.data;
    console.log('Audd result', response);
    const dataForDeezer = response.result[0];
    const deezerData = await requestDeezerMusic(dataForDeezer);
    return { ...deezerData, lyrics: dataForDeezer.lyrics, results: response };
  }
}
