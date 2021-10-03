import {
    ContentRating,
    LanguageCode,
    SourceInfo,
    TagType
} from 'paperback-extensions-common'
import {
    MangaBox,
    getExportVersion
} from '../MangaBox'

const MANGANATO_DOMAIN = 'https://manganelo.tv'

export const ManganatoInfo: SourceInfo = {
    version: getExportVersion('0.0.0'),
    name: 'Manganelo',
    description: 'Extension that pulls manga from manganelo.tv',
    author: 'nar1n',
    authorWebsite: 'https://github.com/vapormusic',
    icon: 'icon.png',
    contentRating: ContentRating.EVERYONE,
    websiteBaseURL: MANGANATO_DOMAIN,
    sourceTags: [
        {
            text: 'Notifications',
            type: TagType.GREEN
        }
    ]
}

export class Manganato extends MangaBox {
    baseUrl: string = MANGANATO_DOMAIN
    languageCode: LanguageCode = LanguageCode.ENGLISH
}
