import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Override the default config here
  site: { 
    title: '浮生若梦',
    subtitle: 'Dreaming',
    author: 'JanVh',
    description: '我曾想抓住每一寸光阴，可它总从指缝间流走，碎成月光。',
    website: 'https://life.zjan.me',
    pageSize: 7,
    socialLinks: [
      {
        name: 'rss',
        href: '/atom.xml',
      },
    ],
   },
  seo: { 
    twitter: "@qqleap",
    meta: ['文字', '感悟']
  },
}
