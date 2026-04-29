import './theme.css'

export const metadata = {
  title: 'DBiz Canvas — Talk Deck',
  description: 'AI-assisted front-end design with the DBiz Canvas',
}

export default function DeckLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='deck-scope' data-theme='dark'>
      {children}
    </div>
  )
}
