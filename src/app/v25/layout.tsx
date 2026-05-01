import './theme.css'

export default function V25Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='v25-scope'>
      {children}
    </div>
  )
}
