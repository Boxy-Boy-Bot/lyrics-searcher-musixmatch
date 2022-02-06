const lyrics = require('lyrics-searcher-musixmatch').default

lyrics('Never Gonna Give You Up')
	.then((lyrics) => console.log(lyrics))
	.catch(console.warn)
	

// {
//   lyrics: 'We're no strangers to love....',
//   source: {
//     name: 'Musixmatch',
//     url: 'https://www.musixmatch.com',
//     link: 'https://www.musixmatch.com/lyrics/Rick-Astley/Never-Gonna-Give-Up'
//   }
// }

// Get song name
lyrics('Never Gonna Give You Up')
	.then(lyrics => console.log(lyrics.info.track.name)) //logs the song name in the console
	.catch(console.warn)
	
// Get artist name
lyrics('Never Gonna Give You Up')
	.then(lyrics => console.log(lyrics.info.track.artist.name)) //logs the artist name in the console
	.catch(console.warn)