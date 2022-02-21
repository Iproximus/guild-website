import Logo from './../../images/Header/logo.svg'

import React, { useEffect } from 'react';
import './../../style/ProductNavBar.css'
// import Products from './Products';
// import Solutions from './Solutions';
// import Enterprise from './Enterprise';
// import Resources from './Recources';
// import Pricing from './Pricing';
// import Search from './Search';
// import Signin from './Signin';
// import TalkToSales from './TalkToSales';
// import TryForFree from './TryForFree'


import ProdServiceSubmenu from './ProdServiceSubmenu';
import ProdIndustriesSubmenu from './ProdIndustriesSubmenu';
import ProdCompanySubmenu from './ProdCompanySubmenu';

const ProdHeader = () => {
	const [scrolledbar, setScrolledbar] = React.useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 200) {
			setScrolledbar(true);
		}
		else {
			setScrolledbar(false);
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	})

	let x = ['navbar'];
	if (scrolledbar) {
		x.push('scrolledbar');
	}

	return (

		< header className={x.join(" ")} >
			<nav className="navigation nav-left">
				<ul>
					<li>  <div className="logo"><img src={Logo} alt="Logo" title="Logo" /></div></li>
				</ul>
			</nav>
			<nav className="navigation nav-right">
				<ul>
					<li><a className='hover-underline-animation a' href="#post2">Home</a></li>
					<li><a className='a' href="#post1"><ProdServiceSubmenu/></a></li>
					<li><a className='a' href="#post1"><ProdIndustriesSubmenu/></a></li>
					<li><a className='a' href="#post1"><ProdCompanySubmenu/></a></li>
					<li><a className='hover-underline-animation a' href="#post4">Contact Us</a></li>
				</ul>
			</nav>
		</header >

		
	);
};

export default ProdHeader;