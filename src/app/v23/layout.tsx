import './theme.css'

export default function V14Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='v23-scope' data-theme='dark'>
      {children}
    </div>
  )
}
