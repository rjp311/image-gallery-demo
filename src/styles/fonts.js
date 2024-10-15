import { Noto_Sans } from 'next/font/google';
import { Raleway } from 'next/font/google';
import './global.scss'

const ContentFont = Noto_Sans({
    display: 'swap',
    variable: '--font-content',
    subsets: ['latin']
});

const TitleFont = Raleway({
    display: 'swap',
    variable: '--font-title',
    weight: ['700', '900'],
    subsets: ['latin']
});

export { ContentFont, TitleFont }