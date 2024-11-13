import { useEffect } from "react";
import HTML from "/html.png";
import CSS from "/css.png";
import Bootstrap from "/bootstrap.png";
import Tailwind from "/tailwind.png";
import Js from "/js.png";
import ReactJs from "/reactjs.png";
import NextJs from "/next.png";
import NodeJs from "/node.png";
import Express from "/express.png";
import Mongodb from "/mongodb.png";
import Contentful from "/contentful.png";
import Firebase from "/firebase.png";
import Figma from "/figma.png";
import Photopea from "/Photopea.png";
import Chat from "../assets/chat.svg";
import Button from "../shared/Button";

function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const frontend = [
		{
			name: "HTML",
			icon: HTML,
		},
		{ name: "CSS", icon: CSS },
		{ name: "Tailwind CSS", icon: Tailwind },
		{ name: "Bootstrap", icon: Bootstrap },
		{ name: "Javascript", icon: Js },
		{ name: "React Js", icon: ReactJs },
		{ name: "Next Js", icon: NextJs },
	];

	const backend = [
		{ name: "Node Js", icon: NodeJs },
		{ name: "Express Js", icon: Express },
	];

	const db = [
		{ name: "MongoDB", icon: Mongodb },
		{ name: "Contentful", icon: Contentful },
		{ name: "Firebase", icon: Firebase },
	];

	const aSkills = [
		{ name: "Figma", icon: Figma },
		{ name: "PhotoPea", icon: Photopea },
	];

	return (
		<main className="flex flex-col gap-20 pt-32 text-xl sm:pt-24 sm:gap-14">
			{/* intro */}
			<section className="flex flex-col">
				<h1 className="mb-4 text-2xl sm:text-xl">Hey There, I’m Safiyah</h1>

				<p>
					A freelance full-stack developer with 2 years of experience under my
					belt, I started my career as a frontend developer at Pryde Lab. After
					some convincing (and a little curiosity), I dipped my toes into
					backend development and now, I’m all in! I’ve been loving the
					full-stack journey so far, and while I’m currently freelancing, I’m
					always on the lookout for the next exciting project.
				</p>
				<br />
				<p>
					Beyond my coding skills, I’m also a passionate advocate for mental
					health. I believe in the power of open conversations and empathy to
					create a supportive and inclusive work environment. So, if you ever
					need a friendly ear or a shoulder to lean on, I’m here for you.
				</p>

				<img
					src={Chat}
					alt=""
					className="self-end block mt-10 w-36"
				/>
			</section>

			{/* offers */}
			<section className="">
				<Button
					className={"py-20 w-full lg:px-28 max-md:px-10 sm:px-5 sm:pt-5"}
				>
					<h1 className="mb-10 text-2xl sm:text-xl sm:mt-10">
						What i can do for you
					</h1>

					<div className="flex md:flex-col sm:flex-col justify-between gap-[100px]">
						<div>
							<h1 className="mb-5 max-md:text-lg sm:text-lg">
								Frontend Development
							</h1>
							<ul className="list-disc ml-[1.4rem] flex flex-col gap-5">
								<li>Build responsive and interactive UIs.</li>
								<li>Develop dynamic apps.</li>
								<li>Implement website and web app designs.</li>
								<li>Implement style using Bootstrap / Tailwind CSS.</li>
							</ul>
						</div>

						<div>
							<h1 className="mb-5 max-md:text-lg sm:text-lg">
								Backend Development
							</h1>
							<ul className="list-disc ml-[1.4rem] flex flex-col gap-5">
								<li>Create robust APIs with Node.js and Express.js.</li>
								<li>Manage databases using MongoDB.</li>
								<li>Integrate headless CMS with Contentful and Firebase.</li>
							</ul>
						</div>
					</div>
				</Button>
			</section>

			{/* skills */}
			<section>
				<h1 className="mb-10 text-2xl sm:text-xl">Tech Stack / Tools</h1>
				<div className="flex flex-col gap-10">
					{/* frontend */}
					<div>
						<h1 className="mb-5 text-lg">Frontend</h1>
						<div className="grid w-full grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
							{frontend.map((item, id) => (
								<div
									key={id}
									className="flex items-center justify-center w-40 gap-3 py-2 mb-5 border rounded-full sm:gap-2 sm:w-36"
								>
									<img
										src={item.icon}
										className="w-5"
										alt=""
									/>
									<p>{item.name}</p>
								</div>
							))}
						</div>
					</div>

					{/* backend */}
					<div>
						<h1 className="mb-5 text-lg">Backend</h1>
						<div className="grid w-full grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
							{backend.map((item, id) => (
								<div
									key={id}
									className="flex items-center justify-center w-40 gap-3 py-2 mb-5 border rounded-full sm:gap-2 sm:w-36"
								>
									<img
										src={item.icon}
										className="w-5"
										alt=""
									/>
									<p>{item.name}</p>
								</div>
							))}
						</div>
					</div>

					{/* db and cms */}
					<div>
						<h1 className="mb-5 text-lg">Database / Content Management</h1>
						<div className="grid w-full grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
							{db.map((item, id) => (
								<div
									key={id}
									className="flex items-center justify-center w-40 gap-3 py-2 mb-5 border rounded-full sm:gap-2 sm:w-36"
								>
									<img
										src={item.icon}
										className="w-5"
										alt=""
									/>
									<p>{item.name}</p>
								</div>
							))}
						</div>
					</div>

					{/* Additional Skills */}
					<div>
						<h1 className="mb-5 text-lg">Additional Skills (Basics)</h1>
						<div className="grid w-full grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
							{aSkills.map((item, id) => (
								<div
									key={id}
									className="flex items-center justify-center w-40 gap-3 py-2 mb-5 border rounded-full sm:gap-2 sm:w-36"
								>
									<img
										src={item.icon}
										alt=""
										className="w-5"
									/>
									<p>{item.name}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* outro */}
			<section>
				<p>
					When I’m not coding, you can find me exploring my interests in
					psychology, watching medical procedures (don’t judge!), enjoying
					delicious yogurt, or indulging in freshly baked bread.
				</p>
				<br className="hidden sm:block" />
				<p>
					I’m always open to new opportunities and collaborations. Feel free to
					reach out if you’re interested in working together or simply want to
					have a chat. Let’s create something amazing together!
				</p>
			</section>
		</main>
	);
}

export default About;
