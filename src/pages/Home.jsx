import { useEffect } from "react";
import HomePage from "../components/Home";
import Projects from "../components/Projects";
import ChooseUs from "../components/ChooseUs";

function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main
			id="top"
			className="flex flex-col gap-20 text-xl md:text-lg sm:text-base"
		>
			<HomePage />
			<ChooseUs />
			<Projects />
		</main>
	);
}

export default Home;
