import { FunctionComponent, SVGProps } from 'react'

import { Theme } from '@/context/theme'
import { Sun } from '@/assets/icons/Sun'
import { Moon } from '@/assets/icons/Moon'
import { SunMoon } from '@/assets/icons/SunMoon'

type NavItem = {
  text: string
  id: string
}

export const NAV_ITEMS: NavItem[] = [
  { text: 'About', id: 'about' },
  { text: 'Experience', id: 'experience' },
  { text: 'Projects', id: 'projects' },
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
