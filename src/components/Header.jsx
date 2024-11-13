import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../shared/Button";
import ThemeContext from "../context/ThemeContext";
import Logo from "/cw-logo.svg";
import { FaCalendarDay } from "react-icons/fa";

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
		{
			name: "services",
			link: "ss",
		},
		{
			name: "our projects",
			link: "pp",
		},
	];

	const location = useLocation();

	const pathMatchRoute = (route) => {
		if (route === location.pathname) {
			return true;
		}
	};

	return (
		<>
			<div className="bg-blueNavBg/10 text-center py-3">
				✨We’re now taking new projects, book an intro call today!📞
			</div>

			<section
				className={`fixed top-10 pt-7 pb-16 px-20 m-auto md:pr-10 sm:pr-5 wid z-50 h-14`}
			>
				<div className="w-full h-0">
					<div className="flex items-center justify-between">
						<Link
							to="/"
							onClick={() => setShowMenu(true)}
						>
							<img
								src={Logo}
								alt=""
								className="w-36 h-full"
							/>
						</Link>
						{/* Desktop menu */}
						<div className="relative flex items-center w-auto h-full gap-10 text-base md:hidden sm:hidden">
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

							<a
								href="mailto:safiyahmasud@gmail.com"
								className="bg-button px-5 py-2 rounded-full flex gap-2 items-center justify-center"
							>
								<FaCalendarDay /> Book a Call
							</a>
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

						<a
							href="mailto:safiyahmasud@gmail.com"
							className="bg-button"
						>
							Get in touch
						</a>
					</div>
				</div>
			</section>
		</>
	);
}

export default Header;
