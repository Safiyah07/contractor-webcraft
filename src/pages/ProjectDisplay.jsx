import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "./../shared/Button";

function ProjectDisplay() {
	const { name } = useParams();

	const [project, setProject] = useState(null);

	useEffect(() => {
		const proj = async () => {
			try {
				const response = await fetch("/data/projects.json");
				const data = await response.json();
				const currentProject = data.find((project) => project.name === name);
				setProject(currentProject);
			} catch (error) {
				console.log(error);
			}
		};

		proj();

		window.scrollTo(0, 0);
	}, [name]);

	if (!project) {
		return <div>Loading...</div>;
	}

	return (
		<section className="pt-20 text-xl">
			<div
				className={`flex flex-col gap-10 px-16 py-10 ${project.gradient} shadow-light-3xl rounded-2xl md:px-10 sm:px-3`}
			>
				<div className="flex items-center justify-between">
					<h1 className="capitalize">{project.name}</h1>
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button className={"cursor-pointer"}>View Project</Button>
					</a>
				</div>
				{/* Mockup */}
				<div className="flex flex-col items-center justify-center gap-10 m-auto w-fit">
					<img
						src={project.mockup[1]}
						alt=""
						className="object-cover lg:h-96 max-md:h-96 sm:h-40"
					/>
					<div className="w-full h-[15px] bg-shadow opacity-50 rounded-[100%] blur-[10px]"></div>
				</div>

				<div>
					<div className="flex items-center justify-between mb-5">
						<h1 className="capitalize">{project.desc}</h1>
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="sm:hidden"
						>
							<Button className={"cursor-pointer"}>View Project</Button>
						</a>
					</div>

					<div className="flex flex-col gap-5">
						<div className="flex items-baseline gap-2">
							<h1 className="mb-5 text-base">Role:</h1>
							<p>{project.role}</p>
						</div>

						<div className="">
							<h1 className="text-base">Problem:</h1>
							<ul className="ml-6 list-disc">
								<li>{project.problem}</li>
							</ul>
						</div>
						<div className="">
							<h1 className="text-base">Solution:</h1>
							<ul className="ml-6 list-disc">
								<li>{project.solution}</li>
							</ul>
						</div>

						{/* Mockup */}
						<div className="flex flex-col items-center justify-center gap-10 m-auto my-20 w-fit">
							<img
								src={project.mockup[2]}
								alt=""
								className="object-cover lg:h-[500px] max-md:h-[500px]"
							/>
							<div className="w-full h-[15px] bg-shadow opacity-50 rounded-[100%] blur-[10px]"></div>
						</div>

						{/* key features */}
						<div className="flex flex-col gap-2">
							<h1 className="mb-5 text-base">Key features include:</h1>
							<ul className="ml-6 list-disc">
								{project.features.map((list, id) => (
									<li key={id}>{list.list}</li>
								))}
							</ul>
						</div>

						{/* Tech Stack */}
						<div className="">
							<h1 className="mb-5 text-base">Tech Stack:</h1>
							<div className="grid w-full grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
								{project.stack.map((item, id) => (
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

						{/* Conclusion */}
						<p>{project.outro}</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProjectDisplay;
