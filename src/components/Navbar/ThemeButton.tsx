import { useState } from 'react'

import { Button, Popover, PopoverContent, PopoverTrigger } from '@/client/components/ui'
import { useThemeContext } from '@/client/context/theme'
import { cn } from '@/client/lib/utils'
import { Theme } from '@/shared'

import { THEME_OPTIONS } from './constants'

export function ThemeButton() {
  const { theme, setTheme } = useThemeContext()
  const [open, setIsOpen] = useState(false)

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
  }
  const handleThemeClick = (theme: Theme) => {
    setTheme(theme)
    handleOpenChange(false)
  }

  const CurrentThemeIcon = THEME_OPTIONS.find((option) => option.value === theme)?.icon

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button size='icon' variant='link' aria-label='Toggle Theme' className='transition-colors'>
          {CurrentThemeIcon && <CurrentThemeIcon className='size-5' />}
        </Button>
      </PopoverTrigger>
      <PopoverContent align='end' className='flex w-fit flex-col bg-primary-foreground p-0'>
        {THEME_OPTIONS.map(({ value, label, icon: Icon }) => (
          <Button
            key={value}
            variant='ghost'
            className={cn('justify-start', theme === value && 'bg-accent')}
            onClick={() => handleThemeClick(value)}
          >
            <Icon className='size-5' />
            {label}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  )
}
