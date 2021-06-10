import React from 'react';
import { SoundArtist } from './SoundArtist';
import { SoundLyric } from './SoundLiryc';

export const SounDetail=({search,lyric,biography})=>{

    return(
        <>
            <h2>{biography!=null? biography.artists[0].strLabel:'serch'}</h2>
            <SoundArtist/>
            <SoundLyric/>
        </>
    )
}