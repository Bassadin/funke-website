import { getPermalink } from './utils/permalinks';

export const headerData = {
    links: [
        {
            text: 'Das Lab',
            links: [
                {
                    text: 'Geräte',
                    href: getPermalink('/machines'),
                },
                {
                    text: 'Das Team',
                    href: getPermalink('/the-team'),
                },
            ],
        },
        {
            text: 'Kontakt',
            href: getPermalink('/contact'),
        },
    ],
};

export const footerData = {
    links: [
        {
            title: 'Das Lab',
            links: [
                { text: 'Geräte', href: '/machines' },
                { text: 'Das Team', href: '/the-team' },
                { text: 'Kontakt', href: 'contact' },
            ],
        },
        {
            title: 'Adresse',
            links: [
                {
                    text: 'Stresemannstraße 28<br />76187 Karlsruhe',
                    href: 'https://www.openstreetmap.org/search?query=Stresemannstra%C3%9Fe%2028%2C%2076187%20Karlsruhe',
                    ariaLabel: 'Adresse auf OpenStreetMap öffnen',
                },
            ],
        },
    ],
    secondaryLinks: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
    ],
    socialLinks: [
        { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/die.fffunke' },
        { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: 'https://mastodon.social/@FunkeLab' },
        { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://t.me/+IfTtCOFWW11kNGE0' },
    ],
};
