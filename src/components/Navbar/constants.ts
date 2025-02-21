import { FunctionComponent, SVGProps } from 'react'

import { Moon } from '@/client/assets/icons/Moon'
import { Sun } from '@/client/assets/icons/Sun'
import { SunMoon } from '@/client/assets/icons/SunMoon'
import { Theme } from '@/shared'

type NavItem = {
  text: string
  id: string
}

export const NAV_ITEMS: NavItem[] = [
  { text: 'About', id: 'about' },
  { text: 'Experience', id: 'experience' },
  { text: 'Skills', id: 'skills' },
  { text: 'Projects', id: 'projects' },
  { text: 'Articles', id: 'articles' },
  { text: 'Contact', id: 'contact' },
]

type ThemeOption = {
  value: Theme
  label: string
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    value: Theme.Light,
    label: 'Light',
    icon: Sun,
  },
  {
    value: Theme.Dark,
    label: 'Dark',
    icon: Moon,
  },
  {
    value: Theme.System,
    label: 'System',
    icon: SunMoon,
  },
]
