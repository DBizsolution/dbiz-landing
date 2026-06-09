import './theme.css'
import { DeckThemeProvider } from './deck-theme-provider'

export const metadata = {
  title: 'DBiz Canvas — Talk Deck',
  description: 'AI-assisted front-end design with the DBiz Canvas',
}

export default function DeckLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <DeckThemeProvider>{children}</DeckThemeProvider>
}
