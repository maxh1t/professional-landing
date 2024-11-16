export function Header() {
  return (
    <header className='flex h-screen flex-col items-center justify-center space-y-4 px-4 text-center md:space-y-6 md:px-8'>
      <h1 itemProp='name' className='text-3xl font-bold md:text-5xl'>
        Maksim Riazantsev
      </h1>
      <p className='text-base text-muted-foreground md:text-xl'>Frontend Engineer | React</p>
      <img
        src='/maksim-riazantsev-profile.jpg'
        alt='Maksim Riazantsev profile picture'
        itemProp='image'
        className='mt-4 size-28 rounded-full border border-border md:size-36'
      />
    </header>
  )
}
