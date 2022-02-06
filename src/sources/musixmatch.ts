import { CheerioAPI } from 'cheerio'
import { Source } from 'songlyrics/src/types'
import { saveDumpFile } from 'songlyrics/src/util'
import fs from "fs"

const musixmatch: Source = {
	name: 'Musixmatch',
	hostname: 'www.musixmatch.com',
	path: '/lyrics',
	parse: function ($: CheerioAPI): any[] {
		const content = $('body > script:nth(0)').html()
		if (!content) throw new Error('No content')
		const selector = 'var __mxmState = '
		const startIndex = content.indexOf(selector) + selector.length
		const raw = content.slice(startIndex).slice(0, -1)
		const json = JSON.parse(raw)
		if (!json?.page?.lyrics?.lyrics) throw new Error('No content')
		const lyrics = json.page.lyrics.lyrics
		return [ lyrics.body, json ]
	},
}

export default musixmatch
