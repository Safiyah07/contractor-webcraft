import Stroke from "/stroke.svg";
import Logo from "/webly-logo.png";

function ChooseUs() {
	return (
		<section className="flex flex-col items-center justify-center w-full gap-12 sm:gap-5">
			<div className="flex flex-col gap-7">
				<h1 className="text-textFade leading-tight text-[50px] md:text-[40px] sm:text-[30px] text-center">
					<span className="">Why </span>
					<span className="">
						<span className="inline-block text-white">
							Choose Us
							<img
								src={Stroke}
								alt=""
								className="w-[270px] md:w-[210px] sm:w-[160px]"
							/>
						</span>
					</span>
				</h1>
				<p className="text-center">
					We work hard to bring in quality leads.
					<br className="hidden sm:block" />
					Here’s what sets us apart:
				</p>
			</div>
			<div>
				{/* lg screen */}
				<div className="flex gap-10 px-10 pt-5 text-base shadow-md sm:hidden md:hidden bg-chooseFade rounded-2xl">
					<div>
						<ul className="flex flex-col py-10 gap-7">
							<li className="mb-1">Offers</li>
							<li>Fast Support Response ⚡</li>
							<li>Turnaround Time ⏱</li>
							<li>Mobile-Friendly Sites 📱</li>
							<li>Flexible Payment Plans 💵</li>
							<li>Specialize in HVAC 🛠</li>
							<li>SEO-Optimized Content 📈</li>
						</ul>
					</div>
					<div>
						<ul className="flex flex-col items-center px-20 py-5 shadow-md gap-7 bg-chooseFade rounded-xl">
							<li className="text-2xl">
								<img
									src={Logo}
									alt=""
									className="h-full w-28"
								/>
							</li>
							<li>Within 24 Hours</li>
							<li>10-14 Days</li>
							<li>Fully Optimized</li>
							<li>✅ Available</li>
							<li>✅ Yes</li>
							<li>✅ Included</li>
						</ul>
					</div>
					<div>
						<ul className="flex flex-col items-center px-3 py-10 gap-7 text-white/50">
							<li className="mb-1">Others</li>
							<li>3-5 Days</li>
							<li>2-3 Months</li>
							<li>Overlooked</li>
							<li>❌ Not Offered</li>
							<li>❌ No</li>
							<li>❌ Not Offered</li>
						</ul>
					</div>
				</div>
				{/* sm screen */}
				<div className="flex-col w-[88svw] text-center bg-chooseFade rounded-xl hidden gap-3 p-5 md:flex sm:flex choose-table">
					<p>Fast Suppost Response</p>
					<p>Within 24 hours ⚡</p>
					<p>Turnaround Time</p>
					<p>10-14 Days 📅</p>
					<p>Mobile-Friendly Sites</p>
					<p>Fully Optimized ✅</p>
					<p>Flexible Payment Plans</p>
					<p>Available ✅</p>
					<p>Specialize in HVAC</p>
					<p>Yes ✅</p>
					<p>SEO-Optimized Content</p>
					<p>Included ✅</p>
				</div>
			</div>
		</section>
	);
}

export default ChooseUs;
