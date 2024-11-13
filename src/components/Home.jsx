import { gsap } from "gsap";
import { useEffect } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import Stroke from "/stroke.svg";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCalendarDay } from "react-icons/fa";

// gsap.registerPlugin(ScrollTrigger);

function Home() {
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
			<div className="w-full text-xl md:pb-10 sm:pb-10">
				<div className="flex flex-col items-center gap-8">
					<div className="leading-tight text-[50px] md:text-[60px] sm:text-[35px] text-center">
						<h1 className="">
							<span className="hero">
								Trusted websites that <br />
							</span>
							<span className="hero">
								<span>converts</span>{" "}
								<span className="text-textFade w-[330px] inline-block">
									leads to clients
									<img
										src={Stroke}
										alt=""
									/>
								</span>
							</span>
						</h1>
						{/* <h1 className="flex gap-32 md:gap-12 sm:gap-12 hero">Developer</h1> */}
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
						className="bg-button px-5 py-2 rounded-full flex gap-2 items-center justify-center"
					>
						<FaCalendarDay /> Book a Call
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
