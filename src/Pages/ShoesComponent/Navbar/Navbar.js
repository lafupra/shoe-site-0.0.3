import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import { useSelector,useDispatch} from 'react-redux'
import { logoutuser } from '../../../Redux/userRedux'

const Navbar = () => {
	const user = useSelector(state => state.user.user)
	const dispatch = useDispatch()
	
  return (
    <>
      <header>
		<div className="navcontainer">
        <Link className="link" to={"/"}> <h1>Shoe Store</h1> </Link>
			<nav>
				<ul>
					<li><Link to={"/"}  >Home</Link></li>
					<li><Link to={"/men"}>Men</Link></li>
					<li><Link>Woman</Link></li>
					<li><Link>Kid</Link></li>
					{user._id === undefined ? <li><Link to={"/login"}>Log in</Link></li> : <li onClick={() => dispatch( logoutuser())}>Log out</li> }
				</ul>
			</nav>
		</div>
	</header>
    </>
  )
}

export default Navbar