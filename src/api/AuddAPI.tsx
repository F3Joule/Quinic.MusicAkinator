import { AuddResponse, MusicInfo } from './types';
import axios from 'axios';
import { DeezerData } from '../components/ResultContext';

require('dotenv').config();

// TODO: Use .env variable to be able to disable proxy
const publicProxy = 'https://cors-anywhere.herokuapp.com/';

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
    const initialData = await getDeezerData(dataForDeezer);

    return { ...initialData, lyrics: dataForDeezer.lyrics, results: response };
  }
}

export async function getDeezerData (data: MusicInfo) {
  const deezerData = await requestDeezerMusic(data);
  const initialData: DeezerData = deezerData ? deezerData : { title: data.title, preview: '', album: { cover: '' }};
  return initialData;
}