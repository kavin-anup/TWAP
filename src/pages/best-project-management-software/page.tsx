import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function BestProjectManagementSoftwarePage() {
    const [showAllLaunches, setShowAllLaunches] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const logos = [
        { name: "Notion", image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", style: { top: "10%", left: "10%" }, animation: "animate-float-random-1", delay: "animation-delay-0" },
        { name: "Monday", image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", style: { top: "60%", left: "5%" }, animation: "animate-float-random-2", delay: "animation-delay-200" },
        { name: "Jira", image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", style: { top: "5%", left: "60%" }, animation: "animate-float-random-1", delay: "animation-delay-400" },
        { name: "Trello", image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", style: { top: "40%", left: "80%" }, animation: "animate-float-random-2", delay: "animation-delay-100" },
        { name: "Asana", image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", style: { top: "80%", left: "40%" }, animation: "animate-float-random-1", delay: "animation-delay-2000" },
        { name: "Todoist", image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", style: { top: "35%", left: "35%" }, animation: "animate-float-random-2", delay: "animation-delay-0" },
    ];

    const apps = [
        {
            name: "Notion",
            tagline: "The all-in-one workspace",
            rating: 4.8,
            reviews: "1.3K reviews",
            tags: ["Note and writing apps", "No-code Platforms", "AI notetakers"],
            logo: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            badges: [
                { icon: "ri-trophy-fill", tooltip: "#1 Product of the Month", color: "text-yellow-500" },
                { icon: "ri-medal-fill", tooltip: "Editor's Choice", color: "text-blue-400" }
            ],
            downloads: { android: "#", ios: "#" }
        },
        {
            name: "Monday.com",
            tagline: "A new way of working",
            rating: 4.7,
            reviews: "2.1K reviews",
            tags: ["Project Management", "Collaboration", "CRM"],
            logo: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            badges: [
                { icon: "ri-vip-crown-fill", tooltip: "Most Popular", color: "text-amber-500" }
            ],
            downloads: { android: "#", ios: "#" }
        },
        {
            name: "Jira",
            tagline: "The #1 software development tool used by agile teams",
            rating: 4.6,
            reviews: "5K+ reviews",
            tags: ["Issue Tracking", "Agile", "DevOps"],
            logo: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            badges: [
                { icon: "ri-award-fill", tooltip: "Best for Developers", color: "text-purple-500" }
            ],
            downloads: { android: "#", ios: "#" }
        },
        {
            name: "Trello",
            tagline: "Visual collaboration tool",
            rating: 4.5,
            reviews: "3.5K+ reviews",
            tags: ["Kanban", "Task Management", "Org Charts"],
            logo: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            badges: [],
            downloads: { android: "#", ios: "#" }
        },
        {
            name: "Asana",
            tagline: "The easiest way to manage team projects",
            rating: 4.7,
            reviews: "4K+ reviews",
            tags: ["Work Management", "Productivity", "Roadmaps"],
            logo: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            badges: [
                { icon: "ri-star-smile-fill", tooltip: "Best Support", color: "text-green-500" }
            ],
            downloads: { android: "#", ios: "#" }
        },
        {
            name: "Todoist",
            tagline: "Organize your life and work",
            rating: 4.8,
            reviews: "900+ reviews",
            tags: ["To-Do Lists", "Personal Productivity", "Task Manager"],
            logo: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            badges: [],
            downloads: { android: "#", ios: "#" }
        },
        {
            name: "ClickUp",
            tagline: "One app to replace them all",
            rating: 4.7,
            reviews: "3.2K reviews",
            tags: ["Project Management", "Docs", "Goals"],
            logo: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            badges: [
                { icon: "ri-rocket-2-fill", tooltip: "Fastest Growing", color: "text-red-500" }
            ],
            downloads: { android: "#", ios: "#" }
        },
        {
            name: "Linear",
            tagline: "The issue tracking tool you'll enjoy using",
            rating: 4.9,
            reviews: "800+ reviews",
            tags: ["Issue Tracking", "Product Development"],
            logo: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            badges: [
                { icon: "ri-magic-line", tooltip: "Best UX", color: "text-purple-600" }
            ],
            downloads: { android: "#", ios: "#" }
        },
        {
            name: "Airtable",
            tagline: "Connect everything. Achieve anything.",
            rating: 4.6,
            reviews: "2.5K reviews",
            tags: ["Low-code", "Database", "Workflows"],
            logo: "https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            badges: [],
            downloads: { android: "#", ios: "#" }
        },
        {
            name: "Height",
            tagline: "The all-in-one project management tool",
            rating: 4.5,
            reviews: "500+ reviews",
            tags: ["Project Management", "Tasks", "Chat"],
            logo: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            badges: [],
            downloads: { android: "#", ios: "#" }
        },
        {
            name: "Basecamp",
            tagline: "The all-in-one toolkit for working remotely",
            rating: 4.4,
            reviews: "4.1K reviews",
            tags: ["Remote Work", "Project Management"],
            logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            badges: [],
            downloads: { android: "#", ios: "#" }
        },
        {
            name: "Wrike",
            tagline: "Versatile & robust project management",
            rating: 4.3,
            reviews: "2K+ reviews",
            tags: ["Enterprise", "Gantt Charts"],
            logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            badges: [],
            downloads: { android: "#", ios: "#" }
        }
    ];

    const recentLaunches = [
        {
            name: "Plane",
            tagline: "AI-native project management",
            time: "3mo ago",
            logo: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Orchestra",
            tagline: "A chat-centric workspace for builders and modern teams",
            time: "3mo ago",
            logo: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Korgi",
            tagline: "AI-built project boards powered by your productivity stack",
            time: "1mo ago",
            logo: "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Linear",
            tagline: "The issue tracking tool you'll enjoy using",
            time: "2mo ago",
            logo: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Height",
            tagline: "The all-in-one project management tool",
            time: "1mo ago",
            logo: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "ClickUp",
            tagline: "One app to replace them all",
            time: "4mo ago",
            logo: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];

    return (
        <div className="min-h-screen bg-[#fffdfb] font-['Poppins']">
            <Header />
            <main className="">
                <div className="relative overflow-hidden pt-32 pb-20"
                    style={{
                        background: 'linear-gradient(to bottom, #1B1B36 45%, #56122D)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>

                    {/* Breadcrumbs */}
                    {/* <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 overflow-x-auto whitespace-nowrap">
                        <span className="hover:text-brand-dark cursor-pointer transition-colors">Home</span>
                        <i className="ri-arrow-right-s-line text-xs"></i>
                        <span className="hover:text-brand-dark cursor-pointer transition-colors">Product categories</span>
                        <i className="ri-arrow-right-s-line text-xs"></i>
                        <span className="hover:text-brand-dark cursor-pointer transition-colors">Productivity</span>
                        <i className="ri-arrow-right-s-line text-xs"></i>
                        <span className="text-brand-dark font-medium">Project management software</span>
                    </nav> */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 min-h-[500px] rounded-[3rem] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

                        {/* Left Column: Text */}
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-6xl font-semibold text-white font-['Manrope'] !leading-tight tracking-tight">
                                The best <span className="relative inline-block">project management </span> softwares of 2026
                            </h1>
                            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-xl">
                                Project management software helps teams and individuals plan, organize, and track projects efficiently. It provides a centralized platform for managing tasks, resources, timelines, and communication within a project.
                            </p>
                        </div>

                        {/* Right Column: Logos (Animated Galaxy) */}
                        <div className="relative h-full min-h-[400px] w-full flex items-center justify-center">
                            {/* Background Glows */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-orange/20 rounded-full blur-[100px] animate-pulse"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-lime/10 rounded-full blur-[80px] animate-pulse animation-delay-2000"></div>

                            {logos.map((logo, index) => (
                                <div
                                    key={index}
                                    className={`absolute w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl flex items-center justify-center p-4 hover:scale-110 hover:bg-white/20 transition-all duration-300 cursor-pointer group ${logo.animation} ${logo.delay}`}
                                    style={logo.style}
                                >
                                    <div className="w-full h-full rounded-xl overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/0 to-white/0 group-hover:from-black/10 transition-colors z-10"></div>
                                        <img src={logo.image} alt={logo.name} className="w-full h-full object-cover" />
                                    </div>
                                    {/* Tooltipish name */}
                                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                        {logo.name}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                <div className="px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-[65%,1fr] gap-10 max-w-7xl mx-auto">
                    {/* App List Section */}
                    <div className="space-y-6">
                        {apps.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((app, index) => {
                            // Calculate the actual rank index based on current page
                            const rank = (currentPage - 1) * itemsPerPage + index + 1;
                            return (
                                <div key={index} className="bg-gray-100 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">

                                    <div className="flex flex-col md:flex-row gap-6 md:items-start">
                                        {/* App Icon & Rank */}
                                        <div className="relative">
                                            <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-2xl flex items-center justify-center p-4 shadow-inner border border-gray-100">
                                                <img src={app.logo} alt={app.name} className="w-full h-full object-cover rounded-xl" />
                                            </div>
                                            <div className="absolute -top-3 -left-3 w-8 h-8 flex items-center justify-center bg-gray-900 text-white font-bold rounded-full text-sm border-2 border-white shadow-md">
                                                {rank}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-[#1A2E35] font-['Manrope'] mb-1 group-hover:text-brand-orange transition-colors cursor-pointer">{app.name}</h3>
                                                    <p className="text-[#4A5E65] font-medium">{app.tagline}</p>
                                                </div>

                                                {/* Badges with Tooltip */}
                                                <div className="flex gap-2 self-start md:self-center">
                                                    {app.badges.map((badge, idx) => (
                                                        <div key={idx} className="relative group/badge">
                                                            <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center ${badge.color} text-xl shadow-sm border border-gray-300 cursor-help hover:bg-gray-100 transition-colors`}>
                                                                <i className={badge.icon}></i>
                                                            </div>
                                                            {/* Tooltip */}
                                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg opacity-0 invisible group-hover/badge:opacity-100 group-hover/badge:visible transition-all whitespace-nowrap z-20">
                                                                {badge.tooltip}
                                                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Ratings & Tags & Downloads */}
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4 border-t border-gray-100 mt-4">

                                                <div className="space-y-3">
                                                    {/* Stars */}
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex text-[#FACC15] text-lg">
                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <i key={star} className={`ri-star-${star <= Math.floor(app.rating) ? 'fill' : 'fill'} ${(star > Math.floor(app.rating) && star <= app.rating + 0.5) ? 'half-fill' : ''}`}></i>
                                                            ))}
                                                        </div>
                                                        <div className="flex items-baseline gap-1">
                                                            <span className="text-lg font-bold text-[#1A2E35]">{app.rating}</span>
                                                            <span className="text-sm text-gray-400">/5</span>
                                                        </div>
                                                        <span className="text-sm text-[#4A5E65] font-medium px-2 py-0.5 bg-gray-100 rounded-full">{app.reviews}</span>
                                                    </div>

                                                    {/* Tags */}
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        {app.tags.map((tag, idx) => (
                                                            <span key={idx} className="text-xs font-semibold text-brand-burgundy/60 bg-gray-50 px-3 py-1.5 rounded-lg border border-brand-burgundy/20 hover:border-gray-300 transition-colors cursor-default">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Download Options */}
                                                <div className="flex items-center gap-3">
                                                    <a href={app.downloads.ios} className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-black transition-colors shadow-lg shadow-gray-200 hover:shadow-gray-300 active:scale-95 duration-200">
                                                        <i className="ri-apple-fill text-xl"></i>
                                                        {/* <div className="text-left leading-none hidden sm:block">
                                                        <div className="text-[10px] font-medium opacity-80">Download on the</div>
                                                        <div className="text-xs font-bold">App Store</div>
                                                    </div> */}
                                                    </a>
                                                    <a href={app.downloads.android} className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-black transition-colors shadow-lg shadow-gray-200 hover:shadow-gray-300 active:scale-95 duration-200">
                                                        <i className="ri-google-play-fill text-xl"></i>
                                                        {/* <div className="text-left leading-none hidden sm:block">
                                                        <div className="text-[10px] font-medium opacity-80">GET IT ON</div>
                                                        <div className="text-xs font-bold">Google Play</div>
                                                    </div> */}
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Pagination Controls */}
                        {apps.length > itemsPerPage && (
                            <div className="flex justify-center items-center gap-4 pt-4">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${currentPage === 1
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : 'bg-white text-[#1A2E35] hover:bg-gray-100 shadow-sm border border-gray-200 cursor-pointer'
                                        }`}
                                >
                                    <i className="ri-arrow-left-s-line text-xl"></i>
                                </button>

                                <div className="flex gap-2">
                                    {Array.from({ length: Math.ceil(apps.length / itemsPerPage) }, (_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentPage(i + 1)}
                                            className={`w-10 h-10 rounded-full font-bold text-sm transition-all cursor-pointer ${currentPage === i + 1
                                                    ? 'bg-[#1A2E35] text-white shadow-md scale-110'
                                                    : 'bg-white text-[#4A5E65] hover:bg-gray-50 border border-gray-200'
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(apps.length / itemsPerPage)))}
                                    disabled={currentPage === Math.ceil(apps.length / itemsPerPage)}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${currentPage === Math.ceil(apps.length / itemsPerPage)
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                            : 'bg-white text-[#1A2E35] hover:bg-gray-100 shadow-sm border border-gray-200 cursor-pointer'
                                        }`}
                                >
                                    <i className="ri-arrow-right-s-line text-xl"></i>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Recent Launches Sidebar */}
                    <div className="bg-gray-100 rounded-2xl p-6 h-fit sticky top-24">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-green-600"></div>
                            <h3 className="font-bold text-[#1A2E35] text-lg">Recent launches</h3>
                        </div>

                        <p className="text-sm text-[#4A5E65] leading-relaxed mb-8">
                            <span className="text-[#CA8A04] font-bold">Plane</span> centers sprints and docs with flexible views, automations, and self-hosting for teams replacing fragmented stacks. <span className="text-[#CA8A04] font-bold">Orchestra</span> fuses chat, tasks, and calls so conversations stay attached to work, with AI summaries and unified search. For rapid setup across Google/Microsoft ecosystems, <span className="text-[#CA8A04] font-bold">Korgi</span> auto-builds project boards, links docs/meetings, and exports organized workspaces, ideal for cross-functional launches and client collaborations.
                        </p>

                        <div className="space-y-6 mb-8">
                            {(showAllLaunches ? recentLaunches : recentLaunches.slice(0, 3)).map((launch, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-sm flex-shrink-0">
                                        <img src={launch.logo} alt={launch.name} className="w-full h-full object-cover rounded-lg" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h4 className="font-bold text-[#1A2E35] text-sm">{launch.name}</h4>
                                            <span className="text-xs text-[#4A5E65] whitespace-nowrap ml-2">{launch.time}</span>
                                        </div>
                                        <p className="text-xs text-[#4A5E65] truncate">{launch.tagline}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {!showAllLaunches && (
                            <button
                                onClick={() => setShowAllLaunches(true)}
                                className="w-full py-3 bg-brand-orange hover:bg-brand-burgundy text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
                            >
                                See all recent launches
                            </button>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
