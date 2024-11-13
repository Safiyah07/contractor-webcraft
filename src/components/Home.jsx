import { useContext, useEffect } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import ThemeContext from "../context/ThemeContext";
import BlackStar from "../assets/black-star.svg";
import WhiteStar from "../assets/white-star.svg";
import Button from "./../shared/Button";

import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

function Home() {
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		// gsap.from(".hero", {
		// 	opacity: 0,
		// 	y: 50,
		// 	duration: 1,
		// 	scrollTrigger: {
		// 		trigger: ".hero", // Element to trigger animation
		// 		start: "top 80%", // When to start the animation (80% down the viewport)
		// 		toggleActions: "play none none none", // Control animation behavior on scroll
		// 	},
		// });
		gsap.fromTo(
			".hero",
			{ opacity: 0, duration: 0, y: 40 },
			{
				y: 0,
				opacity: 1,
				duration: 1,
				stagger: 0.5,
			}
		);
	}, []);
	return (
		<section
			id="home"
			className="flex flex-col items-center justify-center h-svh"
		>
			<div className="w-full text-xl lg:pl-40 md:pb-10 sm:pb-10">
				<div className="flex flex-col gap-8">
					<div className="tracking-widest leading-tight text-[80px] md:text-[60px] sm:text-[35px] lg:w-3/4">
						<h1 className="flex gap-10 md:gap-3 sm:gap-4 hero">
							Full-Stack
							<img
								src={`${theme === "dark" ? WhiteStar : BlackStar}`}
								alt=""
								className="w-10 md:w-8 sm:w-8 animate-pulse"
							/>
						</h1>
						<h1 className="flex gap-32 md:gap-12 sm:gap-12 hero">
							Developer{" "}
							<img
								src={`${theme === "dark" ? WhiteStar : BlackStar}`}
								alt=""
								className="w-10 md:w-8 sm:w-8 animate-pulse"
							/>
						</h1>
					</div>
					{/* <h1>Developer</h1> */}
					<p className="lg:w-1/2 max-md:w-[73%] md:w-3/4 sm:w-full">
						<span className="hero">
							Hi, I’m Safiyah👋, I develop beautiful and efficient websites and
							web apps.{" "}
						</span>
						<span className="hero">
							When i&apos;m not coding, i explore psychology and indulge in
							culinary{" "}
						</span>
						<span className="hero">adventures.</span>
					</p>
					<a
						href="mailto:safiyahmasud@gmail.com"
						className="block mt-4 mb-6 w-fit lg:mb-0 max-md:mb-0"
					>
						<Button>Get in touch</Button>
					</a>
				</div>
			</div>

			<div className="flex items-center justify-center animate-bounce">
				<BsChevronDoubleDown size={30} />
			</div>
		</section>
	);
}

export default Home;
