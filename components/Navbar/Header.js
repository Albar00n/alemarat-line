import React, { useState } from "react";
import Link  from "next/link";
import MobileMenu from "./MobileMenu";

const Header = (props) => {
	const [menuActive, setMenuState] = useState(false);
	const [SearchActive, setSearchState] = useState(false);

	const SubmitHandler = (e) => {
		e.preventDefault();
	};

	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

	return (
		<header className="main-header s2">
			<div className="header-upper">
				<div className="container-fluid clearfix">
					<div className="header-inner">
						<div className="logo">
							<Link href="/">
								<img src="" alt="" />
							</Link>
						</div>
						<div className="nav-outer clearfix">
							<nav className="main-menu navbar-expand-lg">
								<MobileMenu />
								<div className="navbar-collapse collapse clearfix">
									<ul className="navigation clearfix">
										<li>
											<Link href="/">Home</Link>
										</li>
										<li>
											<Link href="/about">about</Link>
										</li>
										<li>
											<Link href="/project">project</Link>
										</li>
										<li>
											<Link href="/services">services</Link>
										</li>
										<li>
											<Link href="/contact">Contact us</Link>
										</li>
									</ul>
								</div>
							</nav>
						</div>

						<div className="menu-icons">
							<div className="nav-search ml-15">
								<button onClick={() => setSearchState(!SearchActive)}>
									<i
										className={`fi ti-search ${
											SearchActive ? "ti-close" : "fi "
										}`}></i>
								</button>
								<form
									onSubmit={SubmitHandler}
									className={`hide ${SearchActive ? "show" : ""}`}>
									<input
										type="text"
										placeholder="Search"
										className="searchbox"
										required=""
									/>
									<button
										type="submit"
										className="searchbutton fa fa-search"></button>
								</form>
							</div>

							<div className="menu-sidebar">
								<button onClick={() => setMenuState(!menuActive)}>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className={`sidebar-wrap ${menuActive ? "side-content-visible" : ""}`}>
				<div
					className="form-back-drop"
					onClick={() => setMenuState(!menuActive)}></div>
				<section className="hidden-bar">
					<div className="inner-box text-center">
						<div
							className="cross-icon"
							onClick={() => setMenuState(!menuActive)}>
							<span className="fa fa-times"></span>
						</div>
						<div className="title">
							<h3>Get Appointment</h3>
						</div>
						<div className="appointment-form">
							<form method="post" onSubmit={SubmitHandler}>
								<div className="form-group">
									<input
										type="text"
										name="text"
										value=""
										placeholder="Name"
										required
									/>
								</div>
								<div className="form-group">
									<input
										type="email"
										name="email"
										value=""
										placeholder="Email Address"
										required
									/>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="phone"
										value=""
										placeholder="Phone no."
										required
									/>
								</div>
								<div className="form-group">
									<textarea placeholder="Message" rows="5"></textarea>
								</div>
								<div className="form-group">
									<button type="submit" className="theme-btn">
										Submit now
									</button>
								</div>
							</form>
						</div>
						<div className="social-icons">
							<Link href="/">
								<i className="fa fa-twitter"></i>
							</Link>
							<Link href="/">
								<i className="fa fa-facebook-f"></i>
							</Link>
							<Link href="/">
								<i className="fa fa-instagram"></i>
							</Link>
							<Link href="/">
								<i className="fa fa-pinterest-p"></i>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</header>
	);
};

export default Header;
