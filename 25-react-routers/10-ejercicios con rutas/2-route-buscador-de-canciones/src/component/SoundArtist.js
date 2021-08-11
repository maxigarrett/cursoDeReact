import React from 'react';

export const SoundArtist=({artist})=>{
	if(!artist) return null
	const stylesIMg={
		maxWidth:'200px',
		maxHeight:'200px',
		borderRadius:'5px',
		backgroundColor:'gey',
		padding:'10px',
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
				{artist.strWebsite && <a href={`http://${artist.strWebsite}`} target='_blank' rel='noreferrer'><b>{artist.strWebsite}</b></a>}
				<br></br>
				<a href={`http://${artist.strLastFMChart}`} target='_blank' rel='noreferrer'><b>{artist.strLastFMChart}</b></a>
				<blockquote>
					{artist.strBiographyES}
				</blockquote>
		</section>
	</>

    )
}