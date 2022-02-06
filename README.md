# lyrics-searcher-musixmatch

Fork of the NPM package songlyrics (https://www.npmjs.com/package/songlyrics)

## Getting started

```shell
npm install https://github.com/Boxy-Boy-Bot/lyrics-searcher-musixmatch.git --save
```

## How to Use

```js
const lyricssearchermusixmatch = require('lyrics-searcher-musixmatch').default

lyricssearchermusixmatch('Never Gonna Give You Up')
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
lyricssearchermusixmatch('Never Gonna Give You Up')
	.then(lyrics => console.log(lyrics.info.track.name)) //logs the song name in the console
	.catch(console.warn)
	
// Get artist name
lyricssearchermusixmatch('Never Gonna Give You Up')
	.then(lyrics => console.log(lyrics.info.track.artist.name)) //logs the artist name in the console
	.catch(console.warn)
```

## Lyrics provided by

- [Musixmatch](https://www.musixmatch.com)
