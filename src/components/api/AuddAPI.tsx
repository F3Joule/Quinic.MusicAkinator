import { AuddResponse, MusicInfo } from './types';
import axios from 'axios';

require('dotenv').config();

const publicProxy = 'https://cors-anywhere.herokuapp.com/';

const requestDeezerMusic = async (musicInfo: MusicInfo) => {
  const data = await axios
    .get(`${publicProxy}https://api.deezer.com/search?q=artist:"${musicInfo.artist}"track:"${musicInfo.title}"`);
  console.log(data);
  return data;
};

export async function getSongDataByLyrics(lyrics: string) {
  if (lyrics != null) {
    var data = {
      q: lyrics,
      api_token: process.env.AUDD_TOKEN
    };

    const res = await axios
      .post(`${publicProxy}https://api.audd.io/findLyrics/`, data);
    const response: AuddResponse = res.data;
    console.log('Audd result', response);
    const deezerData = await requestDeezerMusic(response.result[0]);
    return deezerData;
  }
}
