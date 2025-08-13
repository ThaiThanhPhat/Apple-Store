import { appleImg, searchImg, bagImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center header'>
      <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className = 'flex flex-1 justify-center max-sm:hidden gap-10'>
          {navLists.map((nav) => (
            <div key={nav} className='cursor-pointer text-[#94928d] text-sm hover:text-white transition-all'>
              {nav} 
            </div>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar