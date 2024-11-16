import { useState } from 'react'

import { THEME_OPTIONS } from '../constants'

import { Theme, useThemeContext } from '@/context/theme'
import { Button, Popover, PopoverContent, PopoverTrigger } from '@/components/ui'

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
          <Button key={value} variant='ghost' className='justify-start' onClick={() => handleThemeClick(value)}>
            <Icon className='size-5' />
            {label}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  )
}
