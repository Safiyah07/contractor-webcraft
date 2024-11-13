import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../shared/Button";
import ThemeContext from "../context/ThemeContext";

function Header() {
	const { theme } = useContext(ThemeContext);

	const [showMenu, setShowMenu] = useState(true);

	const menuDisplay = () => {
		setShowMenu((prevState) => !prevState);
	};

	const nav = [
		{
			name: "home",
			link: "",
		},
		// {
		// 	name: "projects",
		// 	link: "projects",
		// },
		{
			name: "about",
			link: "about",
		},
	];

	const location = useLocation();

	const pathMatchRoute = (route) => {
		if (route === location.pathname) {
			return true;
		}
	};

	return (
		<section
			className={`${
				theme === "light" ? "bg-light" : "bg-dark"
			} fixed top-0 pt-5 pb-16 pr-20 m-auto md:pr-10 sm:pr-5 wid z-50 h-14`}
		>
			<div className="w-full font-normal h-0">
				<div className="flex items-center justify-between">
					<Link
						to="/"
						onClick={() => setShowMenu(true)}
					>
						<h1 className="text-xl font-medium tracking-wider">Safiyah</h1>
					</Link>
					{/* Desktop menu */}
					<div className="relative flex items-center w-auto h-full gap-16 text-xl md:hidden sm:hidden">
						{nav.map((item, id) => (
							<Link
								key={id}
								to={`/${item.link}`}
								className={`${
									pathMatchRoute(`/${item.link}`) && " font-medium"
								} capitalize hover:font-medium transition-all ease-in-out duration-300`}
							>
								{item.name}
							</Link>
						))}
						<Button>
							<a href="mailto:safiyahmasud@gmail.com">Get in touch</a>
						</Button>
					</div>

					{/* md and sm menu btn */}
					<div
						onClick={menuDisplay}
						className="font-normal cursor-pointer lg:hidden max-md:hidden"
					>
						<Button>{showMenu ? <div>Menu</div> : <div>Close</div>}</Button>
					</div>
				</div>

				{/* md and sm menu */}
				<div
					className={`${
						showMenu ? "-top-[1000px]" : "top-0"
					} flex flex-col items-center justify-center gap-16 h-svh rounded-xl p-5 sm:my-0 sm:p-0 sm:h-svh ${
						theme === "dark" ? "bg-dark" : "bg-light"
					} text-2xl lg:hidden max-md:hidden transition-all ease-in-out duration-500 relative z-10`}
					onClick={() => setShowMenu(true)}
				>
					{nav.map((item, id) => (
						<Link
							key={id}
							to={`/${item.link}`}
							className={`${
								pathMatchRoute(`/${item.link}`) && " font-semibold"
							} capitalize hover:font-medium transition-all ease-in-out duration-300`}
						>
							{item.name}
						</Link>
					))}
					<Button>
						<a href="mailto:safiyahmasud@gmail.com">Get in touch</a>
					</Button>
				</div>
			</div>
		</section>
	);
}

export default Header;
