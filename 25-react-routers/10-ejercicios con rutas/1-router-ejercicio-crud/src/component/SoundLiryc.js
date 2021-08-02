import React from 'react';

export const SoundLyric=({title,lyric})=>{

    return(
        <section>
            <h2>{title}</h2>
            <p style={{whiteSpace:'pre-wrap'}}>{lyric.text}</p>
        </section>
    )
}