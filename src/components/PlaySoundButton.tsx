import React, { useState, useEffect, FunctionComponent } from "react";
import { Button } from "@material-ui/core";
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

type Props = {
    url: string
}

const useAudio = (url: string) => {
    const [ audio ] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        let isSubscribe = true;
        playing && isSubscribe ? audio.play() : audio.pause();

        return () => { isSubscribe = false; }

    },[audio, playing]);

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, [audio]);

    return [playing, toggle];
};

type toggle = () => void;

const Player: FunctionComponent<Props> = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (<Button className='Play--button' onClick={toggle as toggle} disabled={url === ''}>
        {playing ? <PauseIcon/> :<PlayArrowIcon />}
    </Button>
    );
};

export default Player;
