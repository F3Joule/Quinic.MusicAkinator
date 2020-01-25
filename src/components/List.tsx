import React from 'react';
import { MusicInfo } from '../api/types';

type PropsList = {
    results: MusicInfo[]
}

export const List = (props: PropsList) => {
    const { results } = props;
    return <div className='SoundsList'>
        <h4 className='Winner'>SEARCH HISTORY:</h4>
        {results.map((x, i) => <ScoreItem key={i} result={x} />)}
    </div>
}

export default List;

type Props = {
    result: MusicInfo
}

const ScoreItem = (props: Props) => {
    const { result : { title, artist } } = props;
    return <div className='ScoreItem'>
        <span className='Sound--result'>{artist}</span>
        <span className='Sound--name'>{title}</span>
    </div>
}