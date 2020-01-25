import React from 'react';
import MainWithBox from '../components/MainWithBox';
import { GameButton, SearchButton } from '../components/NavButton';
import { isMobile } from 'react-device-detect';

const lists = [['Daft Punk - Harder, Better, Faster, Stronger', 'corect'], ['Daft Punk - Harder, Better, Faster, Stronger', 'corect'], ['Daft Punk - Harder, Better, Faster, Stronger', 'corect'], ['Daft Punk - Harder, Better, Faster, Stronger', 'corect'], ['Daft Punk - Harder, Better, Faster, Stronger', 'corect'], ['Daft Punk - Harder, Better, Faster, Stronger', 'corect']];

export const Seacrh = () => {
    return <MainWithBox withoutNav className={'box-center winner'}>
        <div className='SoundsList'>
            <h4 className='Winner'>Winner: AUDD</h4>
            {lists.map((x, i) => <ScoreItem key={i} name={x[0]} result={x[1] as any} />)}
            <div className={`NavButtons ${isMobile ? 'vertical' : 'horizontal'}`}>
                <GameButton />
                <SearchButton />
            </div>
        </div>
    </MainWithBox>
}

export default Seacrh;

type Props = {
    name: string,
    result: 'correct' | 'incorrect'
}

const ScoreItem = (props: Props) => {
    const { name, result } = props;
    return <div className='ScoreItem'>
        <span className='Sound--name'>{name}</span>
        <span className='Sound--result'>{result}</span>
    </div>
}