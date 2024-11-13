import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsArrowUp, BsMoon, BsSun } from "react-icons/bs";
import ThemeContext from "../context/ThemeContext";
import Button from "../shared/Button";

function Footer() {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<section className="pt-20 text-2xl">
			<Button>
				<div className="relative">
					<div className="flex justify-between gap-20 px-16 py-20 md:px-5 sm:px-0 md:flex-col sm:flex-col md:gap-10 sm:gap-10">
						<div className="flex flex-col w-3/5 gap-20 md:gap-10 sm:gap-10 md:w-full sm:w-full">
							<h1 className="tracking-widest md:tracking-wide leading-snug text-[50px] max-md:text-[40px] md:text-[40px] sm:text-2xl capitalize">
								Let&apos;s talk about your project
							</h1>
							<Button className={"px-7"}>
								<a href="mailto:safiyahmasud@gmail.com">Get in touch</a>
							</Button>
						</div>

						<div className="flex flex-col lg:gap-10 max-md:gap-8 gap-5 lg:items-end max-md:items-end">
							<Button
								className={`${
									theme === "dark" ? "dark-btn" : "light-btn"
								} px-5 md:px-3 sm:px-3`}
							>
								<div className="flex items-center justify-center gap-6 lg:gap-8 max-md:gap-8">
									<BsSun
										// size={20}
										className="z-10 cursor-pointer"
										onClick={() => setTheme("light")}
									/>{" "}
									<BsMoon
										// size={20}
										className={` cursor-pointer z-10`}
										onClick={() => setTheme("dark")}
									/>
								</div>
							</Button>
							<Link
								to={
									"https://drive.google.com/file/d/1T9xxlLCHd7nYBAlfb8ClwIqFSxk9F0I5/view"
								}
								target="_blank"
								rel="noopener noreferrer"
							>
								CV
							</Link>
							<Link
								to={"https://www.linkedin.com/in/safiyah-amedu-9424b6230/"}
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</Link>
							<Link
								to={"https://twitter.com/Sa_fi_yah"}
								target="_blank"
								rel="noopener noreferrer"
							>
								Twitter/X
							</Link>
						</div>
					</div>

					<a
						href="#top"
						className="flex justify-end cursor-pointer pr-12 md:pr-0 sm:pr-0 pb-5"
					>
						<Button className={"px-[10px] py-2 rounded-full"}>
							<BsArrowUp />
						</Button>
					</a>
				</div>
			</Button>
		</section>
	);
}

export default Footer;
