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
    href: 'https://linkedin.com/in/maksimriazantsev',
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
    href: 'https://dev.to/maxh1t',
    label: 'Dev.to',
    icon: DevTo,
  },
]
