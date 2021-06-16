import React from 'react';

export const SoundArtist=({artist})=>{
	if(!artist) return null
	const stylesIMg={
		maxWidth:'200px',
		maxHeight:'200px'
	}
    return(
	<>
		<section>
        		<header>
					<h2>{artist.strArtist}</h2>
				</header>
				<img style={stylesIMg} src={artist.strArtistThumb} alt={artist.strArtist}></img>
				<p><b>Pais:  </b>{artist.strCountry}</p>
				<p><b>Genero:  </b>{artist.strGenre}</p>
				{artist.strWebsite && <a href={`http://${artist.strWebsite}`} target='_blank'><b>{artist.strWebsite}</b></a>}
				<blockquote>
					{artist.strBiographyES}
				</blockquote>
		</section>
	</>

    )
}