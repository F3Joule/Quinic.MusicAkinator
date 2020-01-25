export type MusicInfo = {
    title: string,
    artist: string,
    lyrics: string
};

export type AuddResponse = {
    status: string,
    result: Array<MusicInfo>,
}
