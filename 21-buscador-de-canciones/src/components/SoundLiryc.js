import React from 'react';

export const SoundLyric=({title,lyric})=>{

    return(
        <section>
            <h2>{title}</h2>
            <p>{lyric.lyrics}</p>
        </section>
    )
}