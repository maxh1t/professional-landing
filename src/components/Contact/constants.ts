import { FunctionComponent, SVGProps } from 'react'

import { DevTo } from '@/client/assets/icons/DevTo'
import { Facebook } from '@/client/assets/icons/Facebook'
import { GitHub } from '@/client/assets/icons/GitHub'
import { LinkedIn } from '@/client/assets/icons/LinkedIn'

type SocialLink = {
  href: string
  label: string
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: '#',
    label: 'LinkedIn',
    icon: LinkedIn,
  },
  {
    href: '#',
    label: 'GitHub',
    icon: GitHub,
  },
  {
    href: '#',
    label: 'Facebook',
    icon: Facebook,
  },
  {
    href: '#',
    label: 'Dev.to',
    icon: DevTo,
  },
]

export const EMAIL = 'example@example.com'
