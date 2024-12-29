export function Header() {
  return (
    <header className='flex h-screen flex-col items-center justify-center px-4 text-center md:px-8'>
      <h1 itemProp='name' className='text-3xl font-bold md:text-5xl'>
        Maksim Riazantsev
      </h1>
      <p className='mt-2 text-base text-muted-foreground md:mt-4 md:text-xl'>Front-End Engineer | React</p>
      <img
        src='/images/maksim-riazantsev-profile.jpg'
        alt='Maksim Riazantsev profile'
        itemProp='image'
        className='mt-4 size-28 rounded-full border border-border md:mt-6 md:size-36'
      />
    </header>
  )
}
