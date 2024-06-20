import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import OpenToWorkBadge from './ui/OpenToWorkBadge'
import { NavOptions } from './NavOptions'

const Header = () => {
  return (
    <header className="relative flex items-center justify-between px-4 py-10 sm:px-0">
      <div className="align-center flex flex-row items-center">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
        {siteMetadata.openToWork && <OpenToWorkBadge />}
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <NavOptions />
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
