
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { SiComma } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { motion, AnimatePresence } from "framer-motion";

type LottieService = {
  header: string;
  description: string;
  url: string;
};

type Experience = { 
  role: string; 
  company: string; 
  period: string; 
  description: string[]; 
  tech: string[]; 
  url?: string; 
  images?: string[]; 
  imageType?: "horizontal" | "vertical"; 
};


function App() {

  const [arrowUp, setArrowUp] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll helper function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset slightly to account for the sticky header
      const offset = 100; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    // Close mobile menu after clicking a link!
    setIsMobileMenuOpen(false); 
  };

  // Array to cleanly map out our navigation links
  const navLinks = [
    { name: "About Me", id: "about" },
    { name: "What I Do", id: "services" },
    { name: "Experience", id: "experience" },
    { name: "Logic Lab", id: "logic-lab" }
  ];

  const lottieServices: LottieService[] = [
    {
      header: "Web Development",
      description:
        "Building responsive, production-ready web applications with modern frontend and backend technologies.",
      url: "https://lottie.host/c4ac7c14-7ae3-4088-b850-55487a7c3f07/tj5sSUXmcp.lottie",
    },
    {
      header: "Mobile Development",
      description:
        "Creating intuitive mobile experiences with a focus on responsive interfaces, usability, and performance.",
      url: "https://lottie.host/87e7b758-7e39-4120-8865-c801f705b18e/7OKSNRbVKQ.lottie",
    },
    {
      header: "Backend & APIs",
      description:
        "Designing reliable backend services and RESTful APIs that connect applications, databases, and external services.",
      url: "https://lottie.host/0dd687eb-4b5e-4e73-91b3-2dd0c5d17dcd/xki2kFWpdh.lottie",
    },
    {
      header: "Database & Data",
      description:
        "Designing and integrating SQL and NoSQL databases for reliable data storage and efficient application workflows.",
      url: "https://lottie.host/dfab2881-c69a-4fff-90c6-73cf37fb152b/1gMeuCMTiq.lottie",
    },
    {
      header: "Deployment & DevOps",
      description:
        "Containerizing and deploying applications using Docker, VPS infrastructure, Nginx, HTTPS, and CI/CD workflows.",
      url: "https://lottie.host/5bb07876-8c93-4547-8180-b6f711d21bff/kc53R7UnAP.lottie",
    },
  ];

  // select Experience images
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const experiences: Experience[] = [ 
    { 
      role: "Software Developer Intern", 
      company: "Western Digital", 
      period: "Apr 2025 - Oct 2025", 
      description: [ 
        "Architected and built a real-time machine status monitoring web app from scratch.", 
        "Designed project structure, API routing, and full-stack features.", 
        "Established CI/CD pipelines and deployed the application to production servers.", 
        "Developed and tested UI components and APIs to ensure high system reliability." 
      ], 
      tech: [ 
        "HTML/CSS", "TypeScript", "React", 
        "Node.js", "Express", "SQL", "MongoDB", 
        "Redis", "Docker", "CI/CD" 
      ], 
      images: ["/experience/wd.jpg"], 
      imageType: "horizontal" 
    }, 
    { 
      role: "Full Stack Developer Intern", 
      company: "Q-CHANG", period: "Jan 2025 - Apr 2025", 
      description: [ 
        "Maintained and extended a production web app in an agile, sprint-based environment.", 
        "Resolved frontend/backend bugs and built new features on an existing codebase.", 
        "Engineered RESTful APIs and seamlessly integrated database data into the frontend.", 
        "Executed UI improvements, API debugging, and database migrations." 
      ], 
      tech: [ 
        "HTML/CSS", "JavaScript", "React", 
        "Node.js", "Express", "Docker", 
        "SQL", "MongoDB", "CI/CD" 
      ], 
      images: ["/experience/qchang-certificate.jpg"], 
      imageType: "vertical" 
    }, 
    { 
      role: "Software Developer — Teams Project", 
      company: "MoneyMonkey", 
      period: "Jul 2024 - Sep 2024", 
      description: [ 
        "Built a full-stack inflation forecasting web application integrating a machine learning prediction service.", 
        "Designed and implemented the frontend, RESTful backend APIs, database integration, authentication, and ML service.", 
        "Provisioned a VPS, configured a custom domain and HTTPS, and deployed the application using Docker and Nginx.", 
        "Managed the production deployment and service architecture for a publicly accessible web application." 
      ],
      tech: [ 
        "React", "TypeScript", "Node.js", 
        "Express", "Python", "Flask", 
        "MongoDB", "Docker", "Nginx", "VPS", "CI/CD" 
      ], 
      url: "https://moneymonkey.trade/", 
      images: [ 
        "/experience/moneymonkey-home.png", 
        "/experience/moneymonkey-prediction.png", 
        "/experience/moneymonkey-deployment.png" 
      ], 
      imageType: "horizontal" 
    }, 
    { 
      role: "Frontend Developer — Technical Assessment", 
      company: "Cart Order Web", 
      period: "2026", 
      description: [ 
        "Developed a responsive shopping cart and order interface as part of a frontend technical assessment.", 
        "Implemented reusable UI components and interactive cart functionality.", 
        "Focused on responsive design, usability, and clean frontend architecture." 
      ], 
      tech: [ "HTML/CSS", "TypeScript", "React", "Responsive Design" ], 
      url: "https://shop.moneymonkey.trade/", 
      images: ["/experience/cart-order.png"], 
      imageType: "horizontal" 
    } 
  ];

  // --- Bubble Sort STATES ---
  const [bubbleArray, setBubbleArray] = useState([8, 3, 6, 2, 9, 4]);
  const [isSorting, setIsSorting] = useState(false);

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const runBubbleSort = async () => {
    if (isSorting) return;
    setIsSorting(true);
    
    const arr = [...bubbleArray];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        // If the left item is bigger than the right item, swap them
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          
          setBubbleArray([...arr]); // Update state to trigger UI render
          await sleep(400); // Pause for 400ms so the user sees the animation
        }
      }
    }
    setIsSorting(false);
  };

  const resetBubbleSort = () => {
    if (!isSorting) setBubbleArray([8, 3, 6, 2, 9, 4]);
  };


  // --- BINARY SEARCH STATES ---
  const initialBinaryArray = [4, 12, 23, 35, 48, 56, 68, 72, 85, 94];
  const targetValue = 72; // The number we are looking for

  const [binaryLeft, setBinaryLeft] = useState(0);
  const [binaryRight, setBinaryRight] = useState(initialBinaryArray.length - 1);
  const [binaryMid, setBinaryMid] = useState<number | null>(null);
  const [binaryFound, setBinaryFound] = useState<number | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const runBinarySearch = async () => {
    if (isSearching) return;
    setIsSearching(true);
    setBinaryFound(null);

    let l = 0;
    let r = initialBinaryArray.length - 1;

    setBinaryLeft(l);
    setBinaryRight(r);
    setBinaryMid(null);

    await sleep(600); // Wait a moment before starting

    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      setBinaryMid(m);
      await sleep(1000); // Pause so the user can see the "middle" being checked

      if (initialBinaryArray[m] === targetValue) {
        setBinaryFound(m);
        setIsSearching(false);
        return;
      }

      if (initialBinaryArray[m] < targetValue) {
        l = m + 1; // Eliminate left half
      } else {
        r = m - 1; // Eliminate right half
      }
      
      setBinaryLeft(l);
      setBinaryRight(r);
      await sleep(600); // Pause to show the new search boundaries
    }

    setIsSearching(false);
  };

  const resetBinarySearch = () => {
    if (!isSearching) {
      setBinaryLeft(0);
      setBinaryRight(initialBinaryArray.length - 1);
      setBinaryMid(null);
      setBinaryFound(null);
    }
  };

  // --- TWO POINTERS STATES ---
  const twoPointerArray = [2, 5, 8, 11, 15, 21];
  const tpTarget = 23; // The goal is to find two numbers that add up to 23 (8 + 15)

  const [tpLeft, setTpLeft] = useState(0);
  const [tpRight, setTpRight] = useState(twoPointerArray.length - 1);
  const [tpFound, setTpFound] = useState(false);
  const [isTpRunning, setIsTpRunning] = useState(false);

  const runTwoPointers = async () => {
    if (isTpRunning) return;
    setIsTpRunning(true);
    setTpFound(false);

    let l = 0;
    let r = twoPointerArray.length - 1;

    setTpLeft(l);
    setTpRight(r);

    await sleep(600); // Initial pause

    while (l < r) {
      const currentSum = twoPointerArray[l] + twoPointerArray[r];
      await sleep(1000); // Pause to let the user read the "Current Sum" text

      if (currentSum === tpTarget) {
        setTpFound(true);
        setIsTpRunning(false);
        return;
      } else if (currentSum < tpTarget) {
        l++; // Sum is too small, move left pointer to a bigger number
        setTpLeft(l);
      } else {
        r--; // Sum is too big, move right pointer to a smaller number
        setTpRight(r);
      }
      
      await sleep(600); // Pause to show pointer movement
    }
    
    setIsTpRunning(false);
  };

  const resetTwoPointers = () => {
    if (!isTpRunning) {
      setTpLeft(0);
      setTpRight(twoPointerArray.length - 1);
      setTpFound(false);
    }
  };

  return (

    <>
      <header className="mx-auto my-0 max-w-7xl min-w-[320px] px-4 sm:px-8 py-4 sticky top-0 z-50">
        <nav className="flex items-center justify-between py-3 px-6 rounded-full bg-white/70 backdrop-blur-lg shadow-sm border border-white/20 relative">

          {/* Logo / Home */}
          <a 
            onClick={() => scrollToSection('about')} 
            className="hover:cursor-pointer group relative py-2"
            title="Home"
          > 
            <IoHome className="h-6 w-6 text-gray-600 font-medium transition-colors duration-300 group-hover:text-[#26838d]"/>
            {/* <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#26838d] transition-all duration-300 group-hover:w-full"></span> */}
          </a>

          {/* Desktop Links (>= md screen) */}
          <section className="hidden md:flex items-center h-full space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:cursor-pointer group relative py-2"
                title={link.name}
              > 
                <p className="text-gray-600 font-medium transition-colors duration-300 group-hover:text-[#26838d]">
                  {link.name}
                </p>
                {/* Subtle underline animation on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#26838d] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </section>

          {/* Desktop Get Resume Button */}
          <a 
            href="/src/assets/files/Resume_นายสิรภพ ไขกล.pdf"
            download="Resume_นายสิรภพ ไขกล.pdf"
            className="hidden md:flex items-center justify-center hover:cursor-pointer bg-[#26838d] text-white pl-5 pr-8 py-2.5 rounded-full hover:bg-[#1a5c63] hover:shadow-lg hover:shadow-[#26838d]/20 transition-all duration-300"
            onMouseEnter={() => setArrowUp(true)}
            onMouseLeave={() => setArrowUp(false)}
            title="Get Resume"
          >
            <div className="flex items-center relative h-full font-medium"> 
              <p>Get Resume</p>  
              <GoArrowUpRight className={`absolute -right-5 transition-transform duration-300 ${arrowUp ? '-top-1 translate-x-1' : ''}`}/>
            </div>
          </a>

          {/* Mobile Hamburger Button (< md screen) */}
          <button 
            title={isMobileMenuOpen ? 'close' : 'open'}
            className="block md:hidden p-2 text-gray-600 hover:text-[#26838d] transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}

          > 
            {/* Simple CSS Hamburger Icon */}
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          {/* Mobile Dropdown Menu (Framer Motion) */}
          {/* Note: We use AnimatePresence so it animates out when closed */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-0 right-0 mt-4 mx-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 p-4 flex flex-col space-y-2 md:hidden overflow-hidden"
              >
                {navLinks.map((link) => (
                  <a 
                    title={link.name}
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="hover:bg-[#26838d]/5 text-gray-700 hover:text-[#26838d] font-medium px-4 py-3 rounded-xl transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
                
                <div className="h-px w-full bg-gray-100 my-2"></div>
                
                {/* Mobile Get Resume Button */}
                <a 
                  href="/src/assets/files/Resume_นายสิรภพ ไขกล.pdf"
                  download="Resume_นายสิรภพ ไขกล.pdf"
                  title="Get Resume"
                  className="bg-[#26838d] text-white text-center font-medium px-4 py-3 rounded-xl hover:bg-[#1a5c63] transition-colors flex justify-center items-center space-x-2 cursor-pointer"
                >
                  <span>Get Resume</span>
                  <GoArrowUpRight />
                </a>
              </motion.div>
            )}
          </AnimatePresence>

        </nav>
      </header>
      
      <main className="min-h-screen min-w-[320px]">

        {/* About Me */}
        <section id="about" className="mx-auto my-0 max-w-7xl px-8 pt-8">

          <motion.section 
            className="space-y-2 min-w-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <div className=" flex items-center justify-center"> 
              <div className=" relative flex items-center justify-center">
                <small className="border py-0.5 px-3 rounded-full"> 
                  Hello! 
                </small> 
                <img 
                  src="/line-Spark.webp" 
                  alt="line-Spark"
                  loading="lazy"
                  className="object-cover w-15 h-15 absolute rotate-225 -right-8 -top-10"
                />             
              </div>

            </div>

            <h1 className="text-center "> 
              <span> l'm </span> 
              <span className="text-[#26838d]"> Sirapop </span>, 
            </h1>

            <div className="min-w-0 flex items-center justify-center"> 
              <div className="relative min-w-0">
                  <img 
                    src="/line-Spark.webp" 
                    alt="line-Spark"
                    loading="lazy"
                    className="object-cover w-20 h-20 -left-12 -bottom-13 md:w-30 md:h-30 absolute rotate-45 md:-left-17 md:-bottom-18"
                  /> 
                <h1 className="hidden md:block truncate">Software Developer</h1>
                <h3 className="block md:hidden truncate">Software Developer</h3>
                {/* <p className=" truncate">Software Developer</p> */}
              </div>
            </div>

          </motion.section>
          
          <motion.section 
            className="relative"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >

            <div className="absolute top-13 flex -space-x-1 rotate-180">
              <SiComma />
              <SiComma />
            </div>
            <small className="absolute w-33 sm:w-40 md:w-60 top-18 md:top-20">Aspiring Software Developer with practical internship experience in building, maintaining, and improving web applications, Restful-API, frontend and backend debugging, and agile workflows.</small>
            
            <div className="absolute space-x-1 flex right-0 top-13 text-[#26838d]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

            </div>
            <h4 className="absolute right-0 top-20">1 Years</h4>
            <small className="absolute right-0 top-29">Experience</small>

            
            <div className="flex justify-center relative">
              <div className=" overflow-hidden w-90 h-60 md:w-120 md:h-90 relative flex justify-center">

                <div className=" flex w-full h-[133%] -bottom-50 md:-bottom-65 justify-center absolute bg-[#26838dac] rounded-[50%]">

          
                </div>

                <img 
                    src="/Subject.png" 
                    alt="me"
                    loading="lazy"
                    className="z-2 object-cover object-top w-[67%] h-full "
                /> 
                  

              </div>
            </div>

          </motion.section>

        </section>

        {/* What I Do */}
        <section
          id="services"
          className="w-full py-16 bg-black bg-linear-to-br from-black via-[#1a3a3e] to-black rounded-3xl relative overflow-hidden shadow-2xl shadow-[#26838d]/10"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#26838d] blur-[120px] opacity-20 pointer-events-none" />

          {/* Section Header */}
          <div className="px-8 md:px-16 flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10">
            <div className="flex space-x-2 shrink-0">
              <h3 className="text-white">What I</h3>
              <h3 className="text-[#26838d]">Do</h3>
            </div>

            <p className="text-gray-400 max-w-sm md:text-right text-sm leading-relaxed">
              I build full-stack applications, backend systems, and production-ready
              software — from the user interface to deployment.
            </p>
          </div>

          {/* Horizontal Scroll Track */}
          <div
            className="
              px-8 md:px-16
              w-full
              pt-16
              flex
              overflow-x-auto
              gap-6
              pb-12
              snap-x
              snap-mandatory
              scroll-smooth
              relative
              z-10

              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            "
          >
            {lottieServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="
                  w-72
                  md:w-80
                  shrink-0
                  snap-center
                  rounded-3xl
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  shadow-2xl
                  h-100
                  relative
                  overflow-hidden
                  flex
                  flex-col
                  group
                "
              >
                {/* Internal Card Ambient Glow */}
                <div
                  className="
                    absolute
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-32
                    h-32
                    bg-[#26838d]
                    rounded-full
                    blur-[70px]
                    opacity-10
                    group-hover:opacity-40
                    transition-opacity
                    duration-700
                  "
                />

                {/* Header & Description */}
                <div className="p-6 pb-2 z-10">
                  <h3
                    className="
                      text-xl
                      font-bold
                      text-white
                      mb-2
                      group-hover:text-[#40b0bc]
                      transition-colors
                      duration-300
                    "
                  >
                    {service.header}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Lottie Animation */}
                <div className="flex-1 flex items-center justify-center p-6 z-10 relative">
                  <DotLottieReact
                    src={service.url}
                    loop
                    autoplay
                    className="
                      w-full
                      h-full
                      object-contain
                      drop-shadow-2xl
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Animated Bottom Highlight */}
                <div
                  className="
                    h-1.5
                    w-0
                    bg-linear-to-r
                    from-[#26838d]
                    to-[#40b0bc]
                    group-hover:w-full
                    transition-all
                    duration-500
                    ease-out
                    absolute
                    bottom-0
                    left-0
                  "
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="mx-auto my-0 max-w-7xl px-8 py-16">
          <div className="flex justify-center space-x-2 shrink-0 mb-12">
            <h3 className="text-black">My</h3>
            <h3 className="text-[#26838d]">Work Experience</h3>           
          </div>

          <div className="flex flex-col space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[#26838d]/20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >

                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#26838d] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <FaStar className="w-4 h-4" />
                </div>

                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#26838d]/30 transition-all duration-300">

                  {/* Role + Period */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold text-lg text-gray-800">
                      {exp.role}
                    </h3>

                    <span className="text-sm font-medium text-[#26838d] bg-[#26838d]/10 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>

                  {/* Company + URL */}
                  <div className="flex items-center gap-4 mb-4">

                    <h4 className="text-gray-500 font-medium">
                      {exp.company}
                    </h4>

                    {exp.url && (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Visit ${exp.company}`}
                        className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 rounded-full text-gray-500 hover:bg-[#26838d] hover:text-white transition-colors duration-300"
                      >
                        <span className="text-xs font-medium">
                          View Project
                        </span>

                        <GoArrowUpRight className="w-4 h-4" />
                      </a>
                    )}

                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-600 text-sm leading-relaxed flex items-start"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#26838d] mt-1.5 mr-3 shrink-0" />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Images */}
                  {exp.images && exp.images.length > 0 && (
                    <div className="mt-5 pt-5 border-t border-gray-100">

                      <div
                        className={
                          exp.images.length === 1
                            ? "flex justify-center"
                            : "grid grid-cols-1 sm:grid-cols-2 gap-3"
                        }
                      >
                        {exp.images.map((image, imageIndex) => (
                          <button
                            key={imageIndex}
                            type="button"
                            title="View Image"
                            onClick={() => setSelectedImage(image)}
                            className={
                              exp.imageType === "vertical"
                                ? "mx-auto w-40 sm:w-48 overflow-hidden rounded-lg border border-gray-200 hover:border-[#26838d] hover:shadow-md transition-all duration-300 cursor-zoom-in"
                                : "w-full overflow-hidden rounded-lg border border-gray-200 hover:border-[#26838d] hover:shadow-md transition-all duration-300 cursor-zoom-in"
                            }
                          >
                            <img
                              src={image}
                              alt={`${exp.company} ${imageIndex + 1}`}
                              className={
                                exp.imageType === "vertical"
                                  ? "w-full h-auto object-contain"
                                  : "w-full aspect-video object-cover"
                              }
                            />
                          </button>
                        ))}

                        {/* Image Lightbox */}
                        {selectedImage && (
                          <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                            onClick={() => setSelectedImage(null)}
                          >
                            {/* Close button */}
                            <button
                              type="button"
                              onClick={() => setSelectedImage(null)}
                              className="hover:cursor-pointer absolute top-5 right-5 text-white text-3xl leading-none hover:text-gray-300 transition-colors"
                              aria-label="Close image"
                              title="Close Image"
                            >
                              ×
                            </button>

                            {/* Large image */}
                            <img
                              src={selectedImage}
                              alt="Experience preview"
                              className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg shadow-2xl"
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>
                        )}
                      </div>

                      <p className="text-xs text-gray-400 text-center mt-2">
                        Click image to enlarge
                      </p>

                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-gray-100">
                    {exp.tech.map((techItem, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-semibold px-2.5 py-1 bg-[#26838d]/10 text-[#26838d] rounded-md"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Logic Lab */}
        <section id="logic-lab" className="w-full py-16 bg-[#26838d]/5 rounded-3xl border border-[#26838d]/20 mt-8">
          <div className="mx-auto my-0 max-w-7xl px-8">
            <div className="flex justify-between items-end mb-12">
              <div className="flex space-x-2 shrink-0">
                <h3 className="text-black">Logic</h3>
                <h3 className="text-[#26838d]">Lab</h3>           
              </div>
              <p className="text-gray-500 hidden sm:block max-w-sm text-right text-sm">A collection of my recent coding experiments, teams projects, and technical playground.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* --- Interactive Bubble Sort Card --- */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 ">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Bubble Sort</h3>
                    <div className="w-12 h-12 rounded-full bg-[#26838d]/10 flex items-center justify-center text-[#26838d]">
                      <FaStar className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A simple algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
                  </p>

                </div>
                
                {/* The Visualizer Area */}
                <div className="flex-1 flex items-end justify-center space-x-2 min-h-40 bg-[#26838d]/5 rounded-xl p-4 mb-6 border border-[#26838d]/10">
                  {bubbleArray.map((val) => (
                    <motion.div
                      layout // <-- THIS IS THE MAGIC! It animates the swapping automatically
                      key={val} // Key must be the value so Framer Motion tracks it
                      className="w-8 bg-linear-to-t from-[#26838d] to-[#40b0bc] rounded-t-md shadow-sm"
                      style={{ height: `${val * 12}px` }} // Height scales based on the number
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  ))}
                </div>
                
                {/* Controls */}
                <div className="flex space-x-2">
                  <button 
                    onClick={runBubbleSort}
                    disabled={isSorting}
                    className="flex-1 py-2 bg-[#26838d] text-white text-sm font-semibold rounded-lg hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {isSorting ? "Sorting..." : "Play"}
                  </button>
                  <button 
                    onClick={resetBubbleSort}
                    disabled={isSorting}
                    className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-semibold rounded-lg hover:bg-gray-200 disabled:opacity-50 transition-all"
                  >
                    Reset
                  </button>
                </div>
              </motion.div>

              {/* --- Interactive Binary Search Card --- */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Binary Search</h3>
                    <div className="w-12 h-12 rounded-full bg-[#26838d]/10 flex items-center justify-center text-[#26838d]">
                      <FaStar className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    An efficient algorithm that finds an item from a sorted list by repeatedly dividing the search interval in half.
                  </p>
                </div>
                
                {/* The Visualizer Area */}
                <div className="flex-1 flex flex-col items-center justify-end min-h-40 bg-[#26838d]/5 rounded-xl p-4 mb-4 border border-[#26838d]/10 relative">
                  
                  {/* Status Text overlay */}
                  <div className="absolute top-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {binaryFound !== null ? "Target Found!" : `Target: ${targetValue}`}
                  </div>

                  <div className="flex items-end justify-center space-x-1 w-full">
                    {initialBinaryArray.map((val, idx) => {
                      // Determine the visual state of each bar
                      const isEliminated = idx < binaryLeft || idx > binaryRight;
                      const isMid = idx === binaryMid;
                      const isFound = idx === binaryFound;

                      // Dynamic styling based on algorithmic state
                      let bgColor = "bg-[#26838d]/40"; // Active search area
                      let opacity = "opacity-100";
                      let scale = 1;

                      if (isEliminated) {
                        bgColor = "bg-gray-200";
                        opacity = "opacity-30"; // Fade out eliminated numbers
                      }
                      if (isMid) {
                        bgColor = "bg-[#26838d]"; // Highlight the middle checker
                        scale = 1.1;
                      }
                      if (isFound) {
                        bgColor = "bg-green-500"; // Green for success!
                        scale = 1.15;
                      }

                      return (
                        <motion.div
                          key={val}
                          className={`w-6 flex flex-col justify-end items-center rounded-t-md shadow-sm transition-colors duration-300 ${bgColor} ${opacity}`}
                          style={{ height: `${val + 40}px` }} // Base height + value so the staircase is visible
                          animate={{ scale: scale }}
                        >
                          {/* Show the actual number inside the bar */}
                          <span className="text-[10px] text-white font-bold mb-1">{val}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Controls */}
                <div className="flex space-x-2">
                  <button 
                    onClick={runBinarySearch}
                    disabled={isSearching}
                    className="flex-1 py-2 bg-[#26838d] text-white text-sm font-semibold rounded-lg hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {isSearching ? "Searching..." : "Play"}
                  </button>
                  <button 
                    onClick={resetBinarySearch}
                    disabled={isSearching}
                    className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-semibold rounded-lg hover:bg-gray-200 disabled:opacity-50 transition-all"
                  >
                    Reset
                  </button>
                </div>
              </motion.div>

              {/* --- Interactive Two Pointers Card --- */}
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Two Pointers</h3>
                    <div className="w-12 h-12 rounded-full bg-[#26838d]/10 flex items-center justify-center text-[#26838d]">
                      <FaStar className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    An optimized technique for searching pairs in a sorted array by maintaining two indices moving towards each other.
                  </p>
                </div>
                
                {/* The Visualizer Area */}
                <div className="flex-1 flex flex-col items-center justify-center min-h-40 bg-[#26838d]/5 rounded-xl p-4 mb-4 border border-[#26838d]/10 relative">
                  
                  {/* Status Text overlay */}
                  <div className="absolute top-3 text-xs font-bold text-gray-500 uppercase tracking-wider flex flex-col items-center">
                    <span>Target: {tpTarget}</span>
                    <span className={`mt-1 transition-colors duration-300 ${tpFound ? "text-green-500" : "text-[#26838d]"}`}>
                      Current Sum: {twoPointerArray[tpLeft] + twoPointerArray[tpRight]}
                    </span>
                  </div>

                  <div className="flex space-x-2 mt-6">
                    {twoPointerArray.map((val, idx) => {
                      const isLeft = idx === tpLeft;
                      const isRight = idx === tpRight;
                      const isMatched = tpFound && (isLeft || isRight);

                      // Dynamic styling based on pointer positions
                      let bgColor = "bg-white";
                      let borderColor = "border-gray-200";
                      let textColor = "text-gray-700";
                      let yOffset = 0;

                      if (isLeft || isRight) {
                        borderColor = "border-[#26838d]";
                        bgColor = "bg-[#26838d]/10";
                        yOffset = -8; // Lift the active blocks up slightly!
                      }
                      if (isMatched) {
                        borderColor = "border-green-500";
                        bgColor = "bg-green-100";
                        textColor = "text-green-700";
                        yOffset = -12; // Lift success blocks even higher
                      }

                      return (
                        <motion.div
                          key={idx}
                          animate={{ y: yOffset }}
                          className={`relative w-10 h-12 flex items-center justify-center rounded-lg border-2 shadow-sm transition-colors duration-300 ${bgColor} ${borderColor} ${textColor}`}
                        >
                          <span className="font-bold text-sm">{val}</span>
                          
                          {/* Floating Pointer Labels (L and R) */}
                          {isLeft && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute -bottom-6 text-xs font-black text-[#26838d]">
                              L
                            </motion.div>
                          )}
                          {isRight && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute -bottom-6 text-xs font-black text-[#26838d]">
                              R
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Controls */}
                <div className="flex space-x-2 mt-auto">
                  <button 
                    onClick={runTwoPointers}
                    disabled={isTpRunning}
                    className="flex-1 py-2 bg-[#26838d] text-white text-sm font-semibold rounded-lg hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {isTpRunning ? "Running..." : "Play"}
                  </button>
                  <button 
                    onClick={resetTwoPointers}
                    disabled={isTpRunning}
                    className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-semibold rounded-lg hover:bg-gray-200 disabled:opacity-50 transition-all"
                  >
                    Reset
                  </button>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Tech Stack */}
        {/* <section className="mx-auto my-0 max-w-7xl px-8 pt-16 pb-8">
        
          <motion.div
            className="flex justify-center space-x-1.5 mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-black">Tech</h4>
            <h4 className="text-[#26838d]">Stack</h4>
          </motion.div>
        
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.label}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl
                          border border-gray-100 bg-white
                          shadow-sm hover:shadow-md
                          hover:border-[#26838d]/30
                          group cursor-default transition-all duration-300"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <tech.Icon
                  size={36}
                  style={{ color: tech.color }}
                  className="transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                />
                <small className="text-gray-500 text-center leading-tight">{tech.label}</small>
              </motion.div>
            ))}
          </div>
        
        </section> */}

      </main>

      <footer className="w-full py-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Sirapop Khaikol. All rights reserved.</p>
      </footer>

    </>
  )
}

export default App
