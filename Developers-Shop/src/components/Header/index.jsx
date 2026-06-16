import { Link } from  'react-router-dom'
import { GrSearchAdvanced } from "react-icons/gr";

export default function Header() {
    return (
        <header className='header'>
            <Link to='/' className='Logo'>
                <span className='logo-d'>K</span>
                <span className='logo-b'>O</span>
                <span className='logo-f'>D</span>
            </Link>
        </header>
    )
}