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
    ],
    secondaryLinks: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
    ],
    socialLinks: [{ ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' }],
    footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
