function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Marketing</h1>
      {children}
      <p>Footer</p>
    </div>
  )
}

export default Layout
