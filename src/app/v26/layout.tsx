import './theme.css'

export default function V26Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='v26-scope' data-theme='dark'>
      {children}
    </div>
  )
}
