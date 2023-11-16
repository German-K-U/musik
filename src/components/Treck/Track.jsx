const  Track = (track) => {
    const { id, src, preview, title, artists, duration} = track;

    return <div>{JSON.stringify(track)}</div>
};

export default Track;