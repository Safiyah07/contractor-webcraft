import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Outlet,
	RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Projects from "./pages/Projects";
import About from "./pages/About";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				element={<Root />}
				path="/"
			>
				<Route
					element={<Home />}
					index
				/>
				{/* <Route
					path="/projects"
					element={<Projects />}
				/> */}
				<Route
					path="/about"
					element={<About />}
				/>
				{/* Dynamic route below */}
				<Route
					path="/project/:name"
					element={<ProjectDisplay />}
				/>
			</Route>
		)
	);

	return (
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export const Root = () => {
	return (
		<main
			className={`
					bg-bg text-white h-full`}
		>
			<div className="">
				<Header />
				<Outlet />
			</div>
			<Footer />
		</main>
	);
};

export default App;
