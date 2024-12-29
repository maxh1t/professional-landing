import { FunctionComponent, SVGProps } from 'react'

import { DevTo } from '@/client/assets/icons/DevTo'
import { Facebook } from '@/client/assets/icons/Facebook'
import { GitHub } from '@/client/assets/icons/GitHub'
import { Instagram } from '@/client/assets/icons/instagram'
import { LinkedIn } from '@/client/assets/icons/LinkedIn'
import { Telegram } from '@/client/assets/icons/Telegram'

type SocialLink = {
  href: string
  label: string
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://linkedin.com/in/maxh1t',
    label: 'LinkedIn',
    icon: LinkedIn,
  },
  {
    href: 'https://github.com/maxh1t',
    label: 'GitHub',
    icon: GitHub,
  },
  {
    href: 'https://www.facebook.com/maxh1t',
    label: 'Facebook',
    icon: Facebook,
  },
  {
    href: 'https://www.instagram.com/max_h1t',
    label: 'Instagram',
    icon: Instagram,
  },
  {
    href: 'https://t.me/maxh1t',
    label: 'Telegram',
    icon: Telegram,
  },
  {
    href: 'https://dev.to/maxh1t',
    label: 'Dev.to',
    icon: DevTo,
  },
]
