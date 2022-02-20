function Footer() {
   const year = new Date().getFullYear()
  return (
    <footer className="d-flex justify-content-center align-items-center bg-dark text-white">
      &copy; {year} GithubFinder
    </footer>
  )
}

export default Footer
