import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Header() {
return (
<header className='bg-violet-600 shadow-medium ' >
    <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to='/'>
            <h1 className='font-bold text-sm  sm:text-xl flex flex-wrap' >
                <span className='text-yellow-400'>Dari</span>
                <span className='text-black'>Hna</span>
            </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center  '>
            <input type="text" placeholder='Search...'
            className='bg-transparent focus:outline-none w-20 sm:w-64 md:96 '/>
            <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
            <Link to='/Home'>
                <li Home className='hidden sm:inline text-slate-700 hover:underline  '>Home</li>
            </Link>
            <Link to='/About-Us'>
                <li About className='hidden sm:inline text-slate-700 hover:underline'>About-Us</li>
            </Link>
            <Link to='/Login'>
                <li Login className=' text-slate-700 hover:underline'>Login</li>
            </Link>
        </ul>
    </div>
</header>  )
}
