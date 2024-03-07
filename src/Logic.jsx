// FUNCTION FOR GETTING SONGS
// USING IN BROWSE
export async function getSongs(){
    const songURL = 'https://academics.newtonschool.co/api/v1/music/song?page=2&limit=20';
    const header = {'projectId': 'f104bi07c490'};

    const resp = await fetch(songURL,{
        headers: header
    })
    const data = await resp.json();
    // console.log('songs',data);
    return data.data;
}

// FUNCTION FOR GETTING ALBUMS
// USING IN BROWSE
export async function getAlbum(){
    const albumURL = 'https://academics.newtonschool.co/api/v1/music/album?limit=20';
    const header = {'projectId': 'f104bi07c490'};
    const resp = await fetch(albumURL,{
        headers: header
    })
    const data = await resp.json();
    // console.log('album',data);
    return data.data;
}


// FUNCTION FOR GETTING PERTICULAR ALBUM DATA;
// USING IN ALBUM 
export async function getAlbumData(albumId){
    const albumDetails = `https://academics.newtonschool.co/api/v1/music/album/${albumId}`;
    const header = {'projectId': 'f104bi07c490'};
    const resp = await fetch(albumDetails,{
        headers: header
    })
    const data = await resp.json();
    // console.log('AlbumDetails',data);
    return data.data;
}

// FUNCTION FOR GETTING PERTICULAR ARTIST DATA;
// USIGN IN ARTIST
export async function getArtistData(artistId) {
    const artistDetails = `https://academics.newtonschool.co/api/v1/music/artist/${artistId}`;
    const header = { 'projectId': 'f104bi07c490' };
    const resp = await fetch(artistDetails, {
        headers: header
    })
    const data = await resp.json();
    // console.log('ArtistDetails', data);
    return data.data;
}

// FUNCTION FOR GETTING LIKED SONGS;
// USING IN FAVOURITE
export async function gettingLikedSongs(token) {
    // REQUIREMENT FOR GETTING LIKED SONGS;
    const LikeSongURL = 'https://academics.newtonschool.co/api/v1/music/favorites/like';
    const LikeSongsheader = { 'projectId': 'f104bi07c490', 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' };

    const resp = await fetch(LikeSongURL, {
        method: 'GET',
        headers: LikeSongsheader,
    })
    const songdata = await resp.json();
    // console.log("Actual Data", songdata);
    // console.log("liked songs", songdata.data.songs);
    if (resp.ok) {
        return songdata.data.songs;
    }
}