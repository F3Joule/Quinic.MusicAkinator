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
        playing ? audio.play() : audio.pause();
    },
        [playing]);

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

type toggle = () => void;

const Player: FunctionComponent<Props> = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (<Button className='Play--button' onClick={toggle as toggle}>
        {playing ? <PauseIcon/> :<PlayArrowIcon />}
    </Button>
    );
};

export default Player;