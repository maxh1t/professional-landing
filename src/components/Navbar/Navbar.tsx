import { useState } from 'react'

import { Menu } from '@/client/assets/icons/Menu'
import { X } from '@/client/assets/icons/X'

import { NAV_ITEMS } from './constants'
import { ThemeButton } from './ThemeButton'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuToggleClick = () => {
    setMenuOpen((prevState) => !prevState)
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <nav className='fixed top-0 z-10 w-full bg-primary-foreground shadow-md dark:text-white'>
      <div className='mx-auto flex max-w-4xl items-center justify-between p-4 md:px-8'>
        <button onClick={handleLogoClick}>
          <h2 className='text-base font-semibold hover:underline md:text-lg'>John Smith</h2>
        </button>
        <div className='flex items-center gap-3'>
          <div className='hidden gap-4 md:flex'>
            {NAV_ITEMS.map(({ id, text }) => (
              <a href={`#${id}`} key={id} className='hover:underline'>
                {text}
              </a>
            ))}
          </div>
          <ThemeButton />
          <button className='focus:outline-none md:hidden' onClick={handleMenuToggleClick} aria-label='Toggle Menu'>
            <svg className='size-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              {menuOpen ? <X /> : <Menu />}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className='bg-primary-foreground pb-2 shadow-md dark:text-white md:hidden'>
          {NAV_ITEMS.map(({ id, text }) => (
            <a href={`#${id}`} key={id} className='block px-4 py-2 hover:bg-muted' onClick={handleMenuToggleClick}>
              {text}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
