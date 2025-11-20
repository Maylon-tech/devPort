import Link from "next/link"
import Nav from "./Nav"
import { Button } from "./ui/button"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Nemoto <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* DECKTOP NAV  --  HIRE ME BUTTON */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  )
}

export default Header