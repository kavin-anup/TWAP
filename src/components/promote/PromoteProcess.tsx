
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import 'swiper/css';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollTrigger);

const rankingSteps = [
    {
        label: "Service Line",
        points: 50,
        color: "bg-brand-orange",
        description: "We analyze your tech stack concentration. Solutions that focus on specific strengths score higher.",
        highlight: "Specialization = Authority"
    },
    {
        label: "Reviews",
        points: 15,
        color: "bg-brand-lime",
        description: "Verified testimonials from reputable platforms validate your service quality and reliability.",
        highlight: "Trust = Higher Rank"
    },
    {
        label: "Portfolio",
        points: 15,
        color: "bg-brand-orange",
        description: "Diverse, high-quality case studies demonstrate your ability to deliver complex solutions.",
        highlight: "Proven Track Record"
    },
    {
        label: "Awards",
        points: 10,
        color: "bg-brand-lime",
        description: "Industry recognition serves as a third-party validation of your excellence and innovation.",
        highlight: "Credibility Bonus"
    },
    {
        label: "Interviews with TWAP",
        points: 10,
        color: "bg-brand-orange",
        description: "For a higher score, get in touch with The Web App Pro for an interview of the C-suite executive.",
        highlight: "1 interview = 5 points"
    }
];

const PromoteProcess = () => {
    const [activeRankIndex, setActiveRankIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pinning sections logic can be added here if needed, 
            // but simpler sticky positioning is often smoother for this layout.
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative bg-[#050505] text-white">

            {/* 01. Selection Algorithm (Brand Orange) */}
            {/* 01. Selection Algorithm (Brand Orange) */}
            <div className="relative min-h-screen flex flex-col md:flex-row">
                {/* Sticky Header */}
                <div className="w-full md:w-1/2 p-10 md:p-20 bg-brand-dark cursor-default md:sticky md:top-0 md:h-screen z-10 flex flex-col justify-center relative shadow-2xl overflow-hidden">
                    {/* Background Accent */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute -top-[20%] -right-[20%] w-[80%] h-[80%] bg-brand-red rounded-full blur-[120px] opacity-20"></div>
                    </div>

                    <div className="text-xl font-bold tracking-widest border-t-2 border-brand-red/50 pt-4 text-brand-red mb-12 relative z-10 w-fit">01</div>

                    <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8 relative z-10 text-white">
                        How Do We<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange">Rank Solutions?</span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-12 relative z-10">
                        Our selection isn't just about picking popular stacks. It's a rigorous filtration process powered by data science and engineering expertise to identify the perfect architectural fit for your business.
                    </p>

                    <div className="border-t border-brand-red/30 pt-8 relative z-10">
                        <div className="text-brand-red font-bold uppercase tracking-widest mb-2">The Web App Pro</div>
                        <div className="text-gray-500 text-base">Algorithm to Feature Solutions</div>
                    </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 p-10 md:p-20 bg-[#0a0a0b] flex flex-col justify-center min-h-screen relative border-l border-gray-900">

                    <div className="grid grid-cols-1 gap-16">
                        {/* Intro Text */}
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-6">How Our Algorithm Ranks<br />Tech Stacks (Out of 100 Points)</h3>

                            {/* Ranking List */}
                            <div className="space-y-4">
                                {rankingSteps.map((step, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setActiveRankIndex(index)}
                                        className={`flex items-center justify-between border-b pb-3 group cursor-pointer transition-colors ${activeRankIndex === index
                                            ? 'border-brand-orange'
                                            : 'border-gray-800 hover:border-gray-600'
                                            }`}
                                    >
                                        <span className={`text-sm font-bold uppercase tracking-wider transition-colors ${activeRankIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'
                                            }`}>
                                            {step.label}
                                        </span>
                                        <span className={`px-3 py-1 text-black text-base font-bold rounded-full transition-all ${activeRankIndex === index ? step.color : 'bg-gray-800 text-gray-400'
                                            }`}>
                                            {step.points} points
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Wheel */}
                        <div className="relative w-full aspect-square max-w-[400px] mx-auto bg-gray-900/30 rounded-3xl border border-gray-800 p-8 flex flex-col items-center justify-center transition-all duration-500">
                            {/* Grid BG */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29372e_1px,transparent_1px),linear-gradient(to_bottom,#1f29372e_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 rounded-3xl pointer-events-none"></div>

                            <div className="relative w-64 h-64 flex items-center justify-center">
                                {/* Outer Ring */}
                                <div className="absolute inset-0 rounded-full border-[6px] border-gray-800"></div>

                                {/* Dynamic Progress Ring */}
                                <svg className="absolute inset-0 w-full h-full -rotate-90 transform">
                                    <circle
                                        cx="128"
                                        cy="128"
                                        r="125" // Radius adjusted for border width
                                        fill="transparent"
                                        strokeWidth="6"
                                        strokeDasharray={2 * Math.PI * 125}
                                        strokeDashoffset={(2 * Math.PI * 125) - ((2 * Math.PI * 125) *
                                            rankingSteps.slice(0, activeRankIndex + 1).reduce((acc, step) => acc + step.points, 0)

                                        ) / 100}
                                        strokeLinecap="round"
                                        className="transition-[stroke-dashoffset] duration-1000 ease-out"
                                        style={{ stroke: activeRankIndex % 2 === 0 ? '#f97316' : '#84cc16' }} // Toggle Orange/Lime based on index for variety or stick to step definition
                                    />
                                </svg>

                                <div className="text-center z-10 flex flex-col items-center animate-[fadeIn_0.5s_ease-out]" key={activeRankIndex}>
                                    <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">{activeRankIndex + 1} of {rankingSteps.length}</span>
                                    <span className="text-sm font-bold text-white uppercase tracking-widest mb-3 max-w-[150px] leading-tight">{rankingSteps[activeRankIndex].label}</span>
                                    <span className={`px-4 py-1.5 text-black text-base font-bold rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] ${rankingSteps[activeRankIndex].color}`}>
                                        {rankingSteps.slice(0, activeRankIndex + 1).reduce((acc, step) => acc + step.points, 0)} points
                                    </span>
                                </div>
                            </div>

                            <p className="text-center text-base text-gray-400 mt-8 max-w-[250px] leading-relaxed relative z-10 min-h-[60px]">
                                {rankingSteps[activeRankIndex].description.replace('The Web App Pro', '')}
                                {rankingSteps[activeRankIndex].label === "Interviews with TWAP" && <span className="text-white">The Web App Pro</span>}
                                {rankingSteps[activeRankIndex].label === "Interviews with TWAP" && " for an interview of the C-suite executive."}
                                <br />
                                <span className={`mt-1 block font-bold ${activeRankIndex % 2 === 0 ? 'text-brand-orange' : 'text-brand-lime'}`}>
                                    {rankingSteps[activeRankIndex].highlight}
                                </span>
                            </p>

                            {/* Nav Buttons */}
                            <div className="flex gap-4 mt-6 relative z-10">
                                <button
                                    onClick={() => setActiveRankIndex(prev => prev === 0 ? rankingSteps.length - 1 : prev - 1)}
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                                >
                                    <i className="ri-arrow-left-line"></i>
                                </button>
                                <button
                                    onClick={() => setActiveRankIndex(prev => prev === rankingSteps.length - 1 ? 0 : prev + 1)}
                                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                                >
                                    <i className="ri-arrow-right-line"></i>
                                </button>
                            </div>
                        </div>

                        {/* Tiebreaker Card */}
                        {/* <div className="w-full bg-gradient-to-r from-brand-orange via-brand-red to-brand-orange p-[1px] rounded-xl overflow-hidden">
                            <div className="bg-gradient-to-r from-brand-orange/90 to-brand-red/90 p-8 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6">
                                <span className="px-3 py-1 bg-white/20 text-white font-bold uppercase tracking-widest rounded-full whitespace-nowrap">Tiebreaker Rule</span>
                                <p className="text-white font-bold text-lg leading-tight">
                                    If two frameworks score the same,<br />the stack with the <span className="text-black">higher community support</span> ranks higher.
                                </p>
                            </div>
                        </div> */}



                        {/* Process Flow Visual - Connected via Lines */}
                        <div className="mt-12 relative">
                            {/* Connector Lines */}
                            {/* <div className="flex justify-center mb-8">
                                <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 0 V40 C100 40 100 60 50 80 H20" stroke="#374151" strokeWidth="1" />
                                    <path d="M100 0 V40 C100 40 100 60 150 80 H180" stroke="#374151" strokeWidth="1" />
                                    <rect x="80" y="20" width="40" height="20" rx="10" fill="#0a0a0b" stroke="#374151" />
                                    <text x="100" y="34" fill="#6b7280" fontSize="8" textAnchor="middle">Flow</text>
                                </svg>
                            </div> */}

                            {/* Banner */}
                            <div className="flex justify-center mb-16 relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-px bg-gray-800 -z-10"></div>
                                <div className="bg-brand-red text-white font-bold px-12 py-4 rounded-full shadow-[0_4px_20px_rgba(220,38,38,0.4)] border border-white/10">
                                    Here's how the process looks!
                                </div>
                            </div>

                            {/* Step Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

                                {/* Step 1 */}
                                <div className="bg-white p-6 rounded-2xl group hover:-translate-y-2 transition-transform duration-300">
                                    <span className="inline-block px-3 py-1 bg-yellow-400 text-black font-bold rounded-full mb-4">Step - 1</span>
                                    <h4 className="text-black font-bold text-lg leading-tight mb-3">Signal Collection Begins</h4>
                                    <p className="text-gray-500 text-base leading-relaxed">
                                        As soon as a project enters our ecosystem, our algorithm kicks into gear. It begins tracking publicly available data, repository activity, and performance indicators across five core dimensions.
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-white p-6 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 delay-100">
                                    <span className="inline-block px-3 py-1 bg-yellow-400 text-black font-bold rounded-full mb-4">Step - 2</span>
                                    <h4 className="text-black font-bold text-lg leading-tight mb-3">Architectural Analysis</h4>
                                    <p className="text-gray-500 text-base leading-relaxed">
                                        Our system analyzes your code structure and service concentration. Solutions that double down on what they do best score higher. No fluff, no diluted offerings.
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-white p-6 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 delay-200">
                                    <span className="inline-block px-3 py-1 bg-yellow-400 text-black font-bold rounded-full mb-4">Step - 3</span>
                                    <h4 className="text-black font-bold text-lg leading-tight mb-3">Velocity & Impact Check</h4>
                                    <p className="text-gray-500 text-base leading-relaxed">
                                        We don't just count commits; we measure impact. Our algorithm tracks release frequency, issue resolution time, and community engagement to gauge real-world momentum.
                                    </p>
                                </div>

                                {/* Step 4 */}
                                <div className="bg-white p-6 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 delay-300">
                                    <span className="inline-block px-3 py-1 bg-yellow-400 text-black font-bold rounded-full mb-4">Step - 4</span>
                                    <h4 className="text-black font-bold text-lg leading-tight mb-3">Award Recognition</h4>
                                    <p className="text-gray-500 text-base leading-relaxed">
                                        The system scans and validates industry awards, ensuring they're recent and relevant. Our backend allocates credibility-based badges that can't be bought.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 02. QA & Testing (Brand Lime) */}
            <div className="relative min-h-screen flex flex-col md:flex-row">
                {/* Sticky Header */}
                <div className="w-full md:w-1/2 p-10 md:p-20 bg-brand-lime text-brand-dark flex flex-col justify-between md:sticky md:top-0 md:h-screen z-10">
                    <div className="text-xl font-bold tracking-widest border-t border-brand-dark/30 pt-4">02</div>
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight mt-10">
                        How Do We Test<br />and Review Digital Products?
                    </h2>
                    <div className="mt-10 border-t border-brand-dark/30 pt-4 w-20"></div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 bg-[#0a0a0b] flex flex-col min-h-screen">

                    {/* Intro Section */}
                    <div className="p-10 md:p-20 border-b border-gray-800">
                        <h3 className="text-2xl font-bold text-white mb-6">Each product featured on<br />The Web App Pro is tested.</h3>
                        <p className="text-gray-400 mb-6">But before we tell you about how we test featured products, here's how we find them!</p>

                        <div className="space-y-4">
                            <h4 className="text-white font-bold">Our sources to find top digital products include:</h4>
                            <ul className="space-y-3">
                                {[
                                    "Stats from sources like Statista, SimilarWeb, etc.",
                                    "Awards and accolades include App Store Award, Google Play's best apps and games, etc.",
                                    "News and release notes are also taken into account.",
                                    "We also let product owners themselves reach out to us and submit their product for a thorough review."
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-base text-gray-400 items-start">
                                        <div className="w-4 h-4 rounded-full bg-brand-red flex-shrink-0 flex items-center justify-center mt-0.5">
                                            <i className="ri-check-line text-white"></i>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-500 mt-4">We explore the vast universe of data and statistics to find out which digital products are being talked about the most.</p>
                        </div>
                    </div>

                    {/* Red Banner */}
                    <div className="bg-gradient-to-r from-[#991b1b] to-black p-10 md:p-20">
                        <h3 className="text-2xl font-bold text-white mb-4">But...We Don't Just<br />Focus on What's Popular</h3>
                        <p className="text-gray-200 leading-relaxed">
                            While we keep tracking trending and award-winning apps, our space remains open for underrated or newly launched products as well. In short, beyond quality, we also keep an eye out for potential. That is why you find tons of underrated apps, websites, and software reviewed on The Web App Pro.
                            <br /><br />
                            As for the parameters to review digital products, here are a few that we use:
                        </p>
                    </div>

                    {/* Review Parameters List */}
                    <div className="p-10 md:p-20 space-y-12 border-b border-gray-800">

                        {/* User Experience */}
                        <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
                            <h4 className="text-lg font-bold text-white">User Experience</h4>
                            <div className="text-sm text-gray-400 space-y-4">
                                <p>We take a deep dive into the functionality of the product to identify what the user journey looks like. Our experts explore each product page in detail and test every publicly accessible feature for the intended users.</p>
                                <div>
                                    <p className="font-bold text-gray-300 mb-2">As a part of testing the user experience, we assess:</p>
                                    <ul className="list-disc pl-4 space-y-1 text-base">
                                        <li>Navigation structure and flow</li>
                                        <li>Design consistency, responsiveness, and intuitiveness</li>
                                        <li>Feature usefulness — are they essential or bloated?</li>
                                        <li>User feedback from app stores, online communities, and early testers</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-gray-800 w-full"></div>

                        {/* Functional Testing */}
                        <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
                            <h4 className="text-lg font-bold text-white">Functional Testing</h4>
                            <div className="text-sm text-gray-400 space-y-4">
                                <p>Buggy apps can ruin the whole experience for users, even if the UX is top-notch. Our expert product reviewers are pros at testing functionalities.</p>
                                <div>
                                    <p className="font-bold text-gray-300 mb-2">Our testers actively use the app or software, evaluating:</p>
                                    <ul className="list-disc pl-4 space-y-1 text-base">
                                        <li>Real-time performance</li>
                                        <li>Bugs or lags</li>
                                        <li>Integrations with other tools</li>
                                        <li>Scalability and updates</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-gray-800 w-full"></div>

                        {/* Market Fit & Innovation */}
                        <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
                            <h4 className="text-lg font-bold text-white">Market Fit & Innovation</h4>
                            <div className="text-sm text-gray-400 space-y-4">
                                <p>We are continuously focused on identifying products that solve real-world issues. In our pursuit, we identify if the product:</p>
                                <ul className="list-disc pl-4 space-y-1 text-base">
                                    <li>Solves a real-world issue</li>
                                    <li>Offers USPs</li>
                                    <li>Aligns with the latest trends</li>
                                </ul>
                            </div>
                        </div>

                        <div className="h-px bg-gray-800 w-full"></div>

                        {/* Privacy & Compliance */}
                        <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8">
                            <h4 className="text-lg font-bold text-white">Privacy & Compliance</h4>
                            <div className="text-sm text-gray-400 space-y-4">
                                <p>Data security is a critical concern given how fast cyberattackers are adopting new trends. Here's how we judge the security standards of products:</p>
                                <ul className="list-disc pl-4 space-y-1 text-base">
                                    <li>Data collection policies</li>
                                    <li>Security features (encryption, permissions, etc.)</li>
                                    <li>Compliance with GDPR, HIPAA, or other relevant standards</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* Golden Rating System */}
                    <div className="p-10 md:p-20">
                        <h4 className="text-xl font-bold text-brand-lime text-center mb-10">Our Golden Rating System</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800 border border-gray-800">
                            {/* Box 1 (5 Stars) */}
                            <div className="bg-[#0a0a0b] p-8 flex flex-col items-center justify-center text-center aspect-square md:row-span-2 hover:bg-brand-orange hover:text-black">
                                <div className="text-brand-lime text-base mb-2 tracking-widest">★★★★★</div>
                                <div className="font-semibold">A perfectly<br />planned product</div>
                            </div>

                            {/* Box 2 (4 Stars) */}
                            <div className="bg-[#0a0a0b] p-8 flex flex-col items-center justify-center text-center aspect-square h-full hover:bg-brand-orange hover:text-black">
                                <div className="text-brand-lime text-base mb-2 tracking-widest">★★★★</div>
                                <div className="font-semibold">Good product, with scope for<br />improvement</div>
                            </div>

                            {/* Box 3 (Split) */}
                            <div className="bg-[#0a0a0b] grid grid-cols-10 aspect-video md:col-span-2">
                                <div className="border-r border-gray-800 flex flex-col md:col-span-5">
                                    <div className="flex-1 flex flex-col items-center justify-center border-b border-gray-800 p-2 hover:bg-brand-orange hover:text-black">
                                        <div className="text-brand-lime mb-1">★</div>
                                        <div className="leading-tight text-center font-semibold">Wouldn't<br />recommend</div>
                                    </div>
                                    <div className="flex-1 flex flex-col items-center justify-center p-2 hover:bg-brand-orange hover:text-black">
                                        <div className="text-brand-lime mb-1">★★</div>
                                        <div className="leading-tight text-center font-semibold">Ignores key<br />improvements</div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 text-center md:col-span-5 hover:bg-brand-orange hover:text-black">
                                    <div className="text-brand-lime text-base mb-2 tracking-widest">★★★</div>
                                    <div className="leading-tight font-semibold">Balanced, but easily replaceable</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* 03. Development Standards (Brand Burgundy) */}
            <div className="relative min-h-screen flex flex-col md:flex-row">
                {/* Sticky Header */}
                <div className="w-full md:w-1/2 p-10 md:p-20 bg-brand-burgundy text-white flex flex-col justify-between md:sticky md:top-0 md:h-screen z-10">
                    <div className="text-xl font-bold tracking-widest border-t border-white/30 pt-4">03</div>
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight mt-10">
                        Our Code<br />Standards
                    </h2>
                    <div className="mt-10 border-t border-white/30 pt-4 w-20"></div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 p-10 md:p-20 bg-[#0a0a0b] flex flex-col justify-center min-h-screen">
                    <div className="space-y-12">
                        {/* Standard 1 */}
                        <div className="group">
                            <div className="flex items-start gap-6">
                                <span className="text-4xl font-black text-gray-800 group-hover:text-brand-burgundy transition-colors">01.</span>
                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-3">Clean Architecture</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        We enforce separation of concerns using Clean Architecture principles. This ensures your codebase remains maintainable, testable, and adaptable to future changes without accruing technical debt.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Standard 2 */}
                        <div className="group">
                            <div className="flex items-start gap-6">
                                <span className="text-4xl font-black text-gray-800 group-hover:text-brand-burgundy transition-colors">02.</span>
                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-3">Type Safety First</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        Strict TypeScript configuration prevents runtime errors before they happen. We define comprehensive interfaces for all data structures, ensuring predictable application behavior.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Standard 3 */}
                        <div className="group">
                            <div className="flex items-start gap-6">
                                <span className="text-4xl font-black text-gray-800 group-hover:text-brand-burgundy transition-colors">03.</span>
                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-3">Review & Pair Programming</h4>
                                    <p className="text-gray-400 leading-relaxed">
                                        Every line of code is reviewed. We encourage pair programming for complex logic, fostering knowledge sharing and reducing bus factor risk.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 04. Expert Team (Brand Dark/Gray) */}
            <div className="relative min-h-screen flex flex-col md:flex-row">
                {/* Sticky Header */}
                <div className="w-full md:w-1/2 p-10 md:p-20 bg-gray-900 text-white flex flex-col justify-between md:sticky md:top-0 md:h-screen z-10">
                    <div className="text-xl font-bold tracking-widest border-t border-white/30 pt-4">04</div>
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight mt-10">
                        The Engineers<br />Behind The Magic
                    </h2>
                    <div className="mt-10 border-t border-white/30 pt-4 w-20"></div>
                </div>

                {/* Content - Carousel */}
                <div className="w-full md:w-1/2 p-10 md:p-20 bg-[#050505] flex flex-col justify-center min-h-screen">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        autoplay={{ delay: 3000 }}
                        className="w-full"
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="bg-[#0a0a0b] border border-gray-800 p-8 rounded-3xl h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-gray-800 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Lead Engineer" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Sarah Jenkins</h4>
                                        <span className="text-brand-orange font-mono">Lead Architect</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 leading-relaxed italic">
                                    "Building scalable systems isn't just about handling traffic; it's about handling complexity. We design for the future, today."
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="bg-[#0a0a0b] border border-gray-800 p-8 rounded-3xl h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-gray-800 overflow-hidden">
                                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" alt="Senior Dev" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">David Chen</h4>
                                        <span className="text-brand-lime font-mono">Senior Frontend Dev</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 leading-relaxed italic">
                                    "User experience is defined by milliseconds. We obsess over every frame to ensure your application feels immediate and alive."
                                </p>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

        </section>
    );
};

export default PromoteProcess;
