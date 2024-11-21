import { FunctionComponent, SVGProps } from 'react'

import { GitHub } from '@/assets/icons/GitHub'
import { LinkedIn } from '@/assets/icons/LinkedIn'
import { Telegram } from '@/assets/icons/Telegram'
import { WhatsApp } from '@/assets/icons/WhatsApp'

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
    href: 'https://wa.me/79054696795',
    label: 'WhatsApp',
    icon: WhatsApp,
  },
  {
    href: 'https://t.me/maxh1t',
    label: 'Telegram',
    icon: Telegram,
  },
]
