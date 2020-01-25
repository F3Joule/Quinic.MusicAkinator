export type MusicInfo = {
    title: string,
    artist: string
};

export type AuddResponse = {
    status: string,
    result: Array<MusicInfo>,
}
