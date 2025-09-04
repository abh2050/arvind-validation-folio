import { useEffect } from 'react';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import arvindProfile from '@/assets/arvind-profile.png';

const Portfolio = () => {
  useEffect(() => {
    let typedInstance: Typed | null = null;

    // Initialize Typed.js with timeout to ensure DOM is ready
    const initializeTyped = () => {
      const targetElement = document.querySelector('.multiple-text');
      if (targetElement) {
        try {
          typedInstance = new Typed('.multiple-text', {
            strings: [
              'System Validation Engineer',
              'Pre/Post-Silicon Validation Specialist',
              'Hardware/Firmware Integration',
              'SoC Debug & QAT Validation'
            ],
            typeSpeed: 100,
            backSpeed: 60,
            backDelay: 1000,
            loop: true
          });
          console.log('Typed.js initialized successfully');
        } catch (error) {
          console.error('Failed to initialize Typed.js:', error);
          // Fallback: add static text
          if (targetElement) {
            targetElement.textContent = 'System Validation Engineer';
            targetElement.classList.add('fallback-typing');
          }
        }
      } else {
        console.warn('Target element .multiple-text not found');
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(initializeTyped, 500);

    // Initialize ScrollReveal with proper checks
    const initializeScrollReveal = () => {
      try {
        const sr = ScrollReveal();
        
        sr.reveal('.home', { delay: 200, origin: 'top' });
        sr.reveal('.about', { delay: 300, origin: 'left' });
        sr.reveal('.experience-card', { delay: 100, origin: 'bottom', interval: 200 });
        sr.reveal('.education', { delay: 200, origin: 'right' });
        sr.reveal('.skill-chip', { delay: 100, origin: 'bottom', interval: 100 });
        sr.reveal('.project-card', { delay: 150, origin: 'bottom', interval: 150 });
        sr.reveal('.recognition-item', { delay: 100, origin: 'left', interval: 100 });
        sr.reveal('.testimonials', { delay: 200, origin: 'bottom' });
        console.log('ScrollReveal initialized successfully');
      } catch (error) {
        console.error('Failed to initialize ScrollReveal:', error);
      }
    };

    setTimeout(initializeScrollReveal, 200);

    // Navbar scroll effects
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = () => {
      const scrolled = window.scrollY;
      
      // Header background
      if (navbar) {
        if (scrolled > 100) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }

      // Active link highlighting
      let current = '';
      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        const sectionHeight = element.clientHeight;
        if (scrolled >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };

    // Mobile menu toggle
    const menuIcon = document.getElementById('menu-icon');
    const navbarList = document.querySelector('.navbar ul');

    const toggleMenu = () => {
      if (menuIcon && navbarList) {
        menuIcon.classList.toggle('bx-x');
        navbarList.classList.toggle('open');
        document.body.classList.toggle('menu-open');
      }
    };

    // Smooth scrolling
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const section = document.getElementById(id || '');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Close mobile menu
        if (menuIcon && navbarList) {
          menuIcon.classList.remove('bx-x');
          navbarList.classList.remove('open');
          document.body.classList.remove('menu-open');
        }
      }
    };

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    menuIcon?.addEventListener('click', toggleMenu);
    
    // Add click listeners to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    // Cleanup
    return () => {
      // Destroy Typed instance
      if (typedInstance) {
        typedInstance.destroy();
      }
      
      window.removeEventListener('scroll', handleScroll);
      menuIcon?.removeEventListener('click', toggleMenu);
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 navbar transition-all duration-300">
        <nav className="flex items-center justify-between section-padding py-4">
          <a href="#home" className="text-2xl font-bold">
            Port<span className="text-primary">folio.</span>
          </a>
          
          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" className="nav-link text-foreground hover:text-primary">Home</a></li>
            <li><a href="#about" className="nav-link text-foreground hover:text-primary">About</a></li>
            <li><a href="#experience" className="nav-link text-foreground hover:text-primary">Experience</a></li>
            <li><a href="#education" className="nav-link text-foreground hover:text-primary">Education</a></li>
            <li><a href="#skills" className="nav-link text-foreground hover:text-primary">Skills</a></li>
            <li><a href="#projects" className="nav-link text-foreground hover:text-primary">Projects</a></li>
            <li><a href="#recognitions" className="nav-link text-foreground hover:text-primary">Recognitions</a></li>
            <li><a href="#testimonials" className="nav-link text-foreground hover:text-primary">Testimonials</a></li>
          </ul>

          <div className="bx bx-menu text-2xl md:hidden cursor-pointer" id="menu-icon"></div>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="home min-h-screen flex items-center section-padding pt-24">
        <div className="container-max grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, <br />
              I'm <span className="text-primary">Arvind Singh</span>
            </h1>
            <h3 className="text-xl md:text-2xl mb-6">
              I'm a <span className="multiple-text text-primary font-semibold"></span>
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Diligent Validation Engineer with 12+ years in system validation. Experienced across top-tier semiconductor companies. Strong background in computer architecture and SoC validation. Skilled in hardware/firmware integration and system-level debug. Master's in Electrical and Computer Engineering. Open to roles in Pre/Post-Silicon Validation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="btn-gradient px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2">
                <i className="bx bx-download"></i>
                Download Resume
              </a>
              <a href="https://www.linkedin.com/in/arvind-singh-8ba36946/" target="_blank" rel="noopener noreferrer" className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all inline-flex items-center gap-2">
                <i className="bx bxl-linkedin"></i>
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              <img 
                src={arvindProfile} 
                alt="Arvind Singh" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg hover-lift animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section-padding bg-secondary/50">
        <div className="w-full px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About <span className="text-primary">Me</span></h2>
          
          <div className="w-full">
            <div className="professional-card p-8 md:p-12 mb-8">
              <div className="grid lg:grid-cols-3 gap-12">
                
                {/* Main Profile Section */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center gap-2 mb-6">
                    <i className="bx bx-map text-primary text-xl"></i>
                    <span className="text-muted-foreground text-lg">Hillsboro, Oregon, United States</span>
                  </div>
                  
                  <p className="text-lg leading-relaxed mb-8">
                    Diligent Validation Engineer with 12+ years in system validation across top-tier semiconductor companies. I specialize in bridging the gap between hardware and software, with deep expertise in computer architecture and SoC validation. My passion lies in solving complex technical challenges through systematic debugging, thorough issue triage, and seamless cross-functional collaboration.
                  </p>
                  
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <i className="bx bx-briefcase text-accent text-xl"></i>
                      <span className="font-medium text-accent text-lg">Open to work</span>
                    </div>
                    <p className="text-base">Verification Validation Engineer and Validation Engineer roles</p>
                  </div>

                  {/* Core Competencies */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary mb-4">Core Competencies</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <i className="bx bx-chip text-primary text-xl mt-1"></i>
                        <div>
                          <h4 className="font-medium">Hardware Validation</h4>
                          <p className="text-sm text-muted-foreground">System-level validation, SoC debug, hardware integration</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="bx bx-code-alt text-primary text-xl mt-1"></i>
                        <div>
                          <h4 className="font-medium">Test Automation</h4>
                          <p className="text-sm text-muted-foreground">Python scripting, automated test frameworks, CI/CD</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="bx bx-bug text-primary text-xl mt-1"></i>
                        <div>
                          <h4 className="font-medium">Debug & Triage</h4>
                          <p className="text-sm text-muted-foreground">Root cause analysis, issue isolation, systematic debugging</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <i className="bx bx-group text-primary text-xl mt-1"></i>
                        <div>
                          <h4 className="font-medium">Collaboration</h4>
                          <p className="text-sm text-muted-foreground">Cross-functional teamwork, technical leadership</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats and Quick Facts */}
                <div className="space-y-6">
                  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                    <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Experience</span>
                        <span className="font-bold text-primary">12+ Years</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Education</span>
                        <span className="font-bold">Master's ECE</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Specialization</span>
                        <span className="font-bold">System Validation</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Industry Focus</span>
                        <span className="font-bold">Semiconductors</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Strengths */}
                  <div className="bg-accent/5 rounded-lg p-6 border border-accent/20">
                    <h3 className="text-xl font-semibold mb-4">Key Strengths</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <i className="bx bx-check-circle text-accent"></i>
                        <span className="text-sm">Problem-solving mindset</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="bx bx-check-circle text-accent"></i>
                        <span className="text-sm">Attention to detail</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="bx bx-check-circle text-accent"></i>
                        <span className="text-sm">Technical leadership</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="bx bx-check-circle text-accent"></i>
                        <span className="text-sm">Continuous learning</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="bx bx-check-circle text-accent"></i>
                        <span className="text-sm">Quality-driven approach</span>
                      </div>
                    </div>
                  </div>

                  {/* Professional Interests */}
                  <div className="bg-secondary/30 rounded-lg p-6 border border-secondary/40">
                    <h3 className="text-xl font-semibold mb-4">Professional Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Silicon Validation</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Computer Architecture</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Test Automation</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Hardware Security</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">System Debug</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience section-padding">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Work <span className="text-primary">Experience</span></h2>
          
          <div className="space-y-8">
            {/* Intel Corporation */}
            <div className="experience-card professional-card p-8">
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">System Validation Engineer</h3>
                  <p className="text-primary font-medium">Intel Corporation</p>
                  <p className="text-sm text-muted-foreground">Apr 2022 – Aug 2025 · 3 yrs 5 mos</p>
                  <p className="text-sm text-muted-foreground">Hillsboro, Oregon, United States</p>
                </div>
              </div>
              
              <div className="mb-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                <p className="text-sm leading-relaxed">
                  Worked on Intel's Gen Sapphire Rapid, Diamond Rapids & Intel Xeon next Gen CPU's, focusing on Quick Assist Technology (QAT) validation from spec to silicon bring-up & debug. QAT is a hardware security feature. It's designed to accelerate cryptographic and compression operations, which are crucial for data security and performance in various applications. By offloading these computationally intensive tasks from the CPU, QAT enhances overall system performance and efficiency.
                </p>
              </div>
              
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Owned end-to-end validation of Intel QAT features across simulation, emulation, and silicon.</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Analyzed Hardware Architecture Spec/ Firmware Architecture Spec and IP specs to define test plans and close coverage gaps.</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Partnered with Firmware teams to develop descriptors, integrate early features, and validate using Firmware models.</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Built validation infrastructure on SIMICS, developed YAML-based tests for algorithm-mode coverage.</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Drove virtual-to-FPGA transition to enable stress, RAS, and reset testing; uncovered RTL bugs.</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Root-caused Hardware issues using waveform analysis and RTL debug tools.</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Supported silicon bring-up and integration across Hardware/ Firmware/ Software.</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Led regressions across Firmware drops, ensuring backward compatibility and feature stability.</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Collaborated with tool teams to enhance observability and validation efficiency.</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Utilized GitHub extensively for source code management, collaborating with cross-functional teams through pull requests, issue tracking, and code reviews.</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Ran daily syncs with cross-functional teams and mentored juniors on debug and validation flow.</li>
              </ul>
            </div>

            {/* UST */}
            <div className="experience-card professional-card p-8">
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Memory Validation Engineer at Intel corporation as contingent worker</h3>
                  <p className="text-primary font-medium">UST</p>
                  <p className="text-sm text-muted-foreground">Sep 2019 – Apr 2022 · 2 yrs 8 mos</p>
                  <p className="text-sm text-muted-foreground">Hillsboro, Oregon, United States</p>
                </div>
              </div>
              
              <div className="mb-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                <p className="text-sm leading-relaxed">
                  Conducted silicon validation including board bring up, firmware & BIOS updates. Enabled test content and determined root cause of failures using system logs. Leveraged knowledge of Intel memory testing, storage testing, and different types of memory configurations (1LM/2LM/AD) to validate Intel DIMMs including: DDR4, Intel Optane memory (DDRT), and other memory protocols.
                </p>
              </div>
              
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Currently involved in bringing up intel server roadmap: 14nm Cooper lake and 10nm Ice lake CPU's</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Setting up BIOS knobs to validate CPU's with different memory configuration using Python and Linux automation test suite</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Good understanding of intel architecture with knowledge of processor, chipset, memory, I/O subsystem and bus protocol</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Hands on experience with hardware troubleshooting on 2/4 socket CPU systems, different memory subsystem, NUC, Jumpers</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Performed host validation on different Intel platforms using technique such as: Update TortoiseSVN, setting up SSH/COM ports, Cache PushUtil/Unlock credentials, setting up WPS & USB power switches, Updating latest BKC</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Wrote bug reports using JIRA tool & following up to ensure proper issue closure</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Good knowledge on SRAM & DRAM technology</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Good understanding of l1-L2-L3 Cache memory sub-system, Virtual memory & paging concepts</li>
              </ul>
              
              <div className="bg-success/10 border border-success/20 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <i className="bx bx-award text-success"></i>
                  <span className="text-sm font-medium">Awarded as Intel HSD GOLD Badge 2021 for putting efforts on validating and debugging sightings for High Bandwidth Memory and RAS project</span>
                </div>
              </div>
            </div>

            {/* L&T Technology Services */}
            <div className="experience-card professional-card p-8">
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Validation Engineer at intel corporation as contingent worker</h3>
                  <p className="text-primary font-medium">L&T Technology Services Limited</p>
                  <p className="text-sm text-muted-foreground">Apr 2017 – Aug 2019 · 2 yrs 5 mos</p>
                  <p className="text-sm text-muted-foreground">Hillsboro, Oregon</p>
                </div>
              </div>
              
              <div className="mb-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                <p className="text-sm leading-relaxed">
                  Tested Intel modem features over the networks for Apple products. Identified and fixed issues on test setups. Confirmed compatibility with different operating systems and hardware interfaces such as PCIE and USB.
                </p>
              </div>
              
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Analyzed crash, reset, and functional failures uncovered in comprehensive stress testing.</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Contributed pertinent protocol stack and firmware level log analysis by utilizing system trace tool.</li>
              </ul>
            </div>

            {/* America Networks */}
            <div className="experience-card professional-card p-8">
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Test Engineer</h3>
                  <p className="text-primary font-medium">America Networks</p>
                  <p className="text-sm text-muted-foreground">Aug 2016 – Jan 2017 · 6 mos</p>
                  <p className="text-sm text-muted-foreground">Philadelphia, USA</p>
                </div>
              </div>
              
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Measuring the Quality of Service (QoS) of a mobile radio network for mobile operators like- AT&T, T-Mobile, Sprint using JDSU tool</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Log files collected from drive test tools are analyzed to evaluate various KPI parameters of the network</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Part of International field verification team which involved verification of 3GPP conformance of cellular modem standards</li>
              </ul>
            </div>

            {/* Airspan Networks */}
            <div className="experience-card professional-card p-8">
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Assistant Network Engineer / Customer Support Engineer</h3>
                  <p className="text-primary font-medium">Airspan Networks</p>
                  <div className="text-sm text-muted-foreground">
                    <p>Assistant Network Engineer — Mar 2014 – Feb 2015 · 1 yr</p>
                    <p>Customer Support Engineer — Jul 2012 – Feb 2014 · 1 yr 8 mos</p>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Good knowledge of IP Networking & Routing</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Monitoring & Optimizing networks elements using NMS</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Monitoring WiMAX core elements such as AAA Server, Cisco ASN Gateway, Switches & Routers.</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Configuring ports in a cisco switches as per requirement</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Monitor Microwave links Planning VS Performance using NMS and Tool data.</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Prepare & submit Key Performance Indicator report (KPI) to Customer.</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Commissioning/Configuring 4G LTE – Advanced base stations</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Commissioning/Configuring MicroMax base stations radios (BSR) & ProST CPEs</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Configuring Wireless Devices(APs- router mode, bridge mode & WDS mode)</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Configuring & implementing Wimax CPEs like: Green packet IDU, AWB IDU, Airspan ODU, Green packet USB, Tecom.</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Performing telecom site survey for RF,Transmission, Power</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Performing RF interference tests & their optimization</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Performing drive test to check the coverage of base stations and WiFi hotspots sites</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Good knowledge of installing and implementing WiFi Hotspot sites</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Good knowledge of performing Acceptance Test (PAT) with customer</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Good experience in coordinating & supporting customer support centers</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Good knowledge of testing & installing AC/DC power system ,equipment & devices</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Good knowledge of implementing & testing solar power system</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Monitor the existing base stations, wireless AP and PTP links performance and perform fault analysis</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Prepare TSSR report from information obtained from Survey teams</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Regular meeting with Customers to discuss about project progress and issues</li>
              </ul>
            </div>

            {/* Zamil New Delhi Infrastructure */}
            <div className="experience-card professional-card p-8">
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Test Engineer</h3>
                  <p className="text-primary font-medium">Zamil New Delhi Infrastructure Pvt. Ltd</p>
                  <p className="text-sm text-muted-foreground">Jun 2010 – Jun 2012 · 2 yrs 1 mo</p>
                </div>
              </div>
              
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Commissioning/Configuring huawei OptiX RTN 905 IDU & BBU3900</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Configuring basic Microwave parameters like Frequency, Modulation, Tx power, Channel Bandwidth, V-LAN</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Microwave antena alignment and Commissioning</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Monitoring & supervising Microwave and BTS installation works at site.</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>E1 arrangement for near end and far end sites</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Preparing antena acceptance report</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Good knowledge of various alarm extended from EMUA to DG generator</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Providing support to the customer for the fault analysis and rectification</li>
                <li className="flex items-start gap-2"><i className="bx bx-check text-primary mt-1"></i>Preparing & sending DPR to central team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education section-padding bg-secondary/50">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="professional-card p-8 text-center">
              <div className="mb-4">
                <i className="bx bx-graduation text-4xl text-primary mb-4"></i>
                <h3 className="text-xl font-bold">Master of Science (MS), Electrical & Computer Engineering</h3>
                <p className="text-primary font-medium">Portland State University</p>
                <p className="text-sm text-muted-foreground">Jan 2020 – Dec 2021</p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-sm">Ranked one of the nation's most innovative universities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills section-padding">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
          
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {[
              'Python (Programming Language)',
              'C++',
              'Silicon Validation',
              'GTK',
              'Synopsys tools',
              'RAS',
              'Bug Tracking',
              'Computer System Validation'
            ].map((skill, index) => (
              <span key={index} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects section-padding bg-secondary/50">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="project-card professional-card p-6 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <i className="bx bx-chip text-2xl text-primary"></i>
                <div>
                  <h3 className="font-bold">Intel Quickassist Technology</h3>
                  <p className="text-sm text-muted-foreground">Apr 2022 – Present</p>
                </div>
              </div>
            </div>

            <div className="project-card professional-card p-6 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <i className="bx bx-memory-card text-2xl text-primary"></i>
                <div>
                  <h3 className="font-bold">Intel Next-Gen Sapphire Rapids Xeon with High Bandwidth Memory project</h3>
                  <p className="text-sm text-muted-foreground">Jan 2021 – Mar 2022</p>
                  <p className="text-xs text-muted-foreground">Associated with UST</p>
                </div>
              </div>
            </div>

            <div className="project-card professional-card p-6 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <i className="bx bx-server text-2xl text-primary"></i>
                <div>
                  <h3 className="font-bold">Intel Optane Persistent Memory validation on COOPER LAKE CPU: 3RD GENERATION XEON SCALABLE FOR 4P/8P SERVERS</h3>
                  <p className="text-sm text-muted-foreground">Jan 2020 – Dec 2020</p>
                  <p className="text-xs text-muted-foreground">Associated with UST</p>
                </div>
              </div>
            </div>

            <div className="project-card professional-card p-6 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <i className="bx bx-wifi text-2xl text-primary"></i>
                <div>
                  <h3 className="font-bold">WiMAX-based high-speed internet project</h3>
                  <p className="text-sm text-muted-foreground">Jul 2012 – Feb 2015</p>
                  <p className="text-xs text-muted-foreground">Associated with Airspan Networks</p>
                  <p className="text-xs mt-2">WiMAX ( IEEE 802.16) is one of the most talked communication technologies. WiMAX project is a part of the fourth generation (4G/5G) communication technology that provides high-speed wireless internet service in all over the world</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognitions Section */}
      <section id="recognitions" className="recognitions section-padding">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recognitions & <span className="text-primary">Awards</span></h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="recognition-item professional-card p-6 flex items-start gap-4">
              <i className="bx bx-trophy text-2xl text-warning"></i>
              <div>
                <h3 className="font-bold text-lg mb-2">Bug of the Month</h3>
                <p className="text-muted-foreground">July, September, October 2024; May 2025</p>
              </div>
            </div>

            <div className="recognition-item professional-card p-6 flex items-start gap-4">
              <i className="bx bx-shield-alt-2 text-2xl text-primary"></i>
              <div>
                <h3 className="font-bold text-lg mb-2">Security Bug of the Month</h3>
                <p className="text-muted-foreground">December 2024</p>
              </div>
            </div>

            <div className="recognition-item professional-card p-6 flex items-start gap-4">
              <i className="bx bx-star text-2xl text-accent"></i>
              <div>
                <h3 className="font-bold text-lg mb-2">Hero/Shero Nominee</h3>
                <p className="text-muted-foreground">January and April 2025</p>
              </div>
            </div>

            <div className="recognition-item professional-card p-6 flex items-start gap-4">
              <i className="bx bx-award text-2xl text-success"></i>
              <div>
                <h3 className="font-bold text-lg mb-2">Recognition for Critical Issues</h3>
                <p className="text-muted-foreground">Recognized for identifying and root-causing critical hardware/firmware issues in Intel QAT features on Intel Xeon platforms.</p>
              </div>
            </div>

            <div className="recognition-item professional-card p-6 flex items-start gap-4">
              <i className="bx bx-medal text-2xl text-warning"></i>
              <div>
                <h3 className="font-bold text-lg mb-2">Intel HSD GOLD Badge 2021</h3>
                <p className="text-muted-foreground">For validating and debugging sightings for High Bandwidth Memory and RAS project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section-padding bg-secondary/50">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional <span className="text-primary">Recommendations</span></h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Smita Kumar - Principal Engineer */}
            <div className="professional-card p-6 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="bx bx-user text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Smita Kumar</h3>
                  <p className="text-sm text-primary">Principal Engineer (Silicon Architect)</p>
                  <p className="text-xs text-muted-foreground">August 25, 2025 • Senior Colleague</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground italic text-sm leading-relaxed">
                "As the hardware architect of an IP, I had the pleasure of working with Arvind, who played a crucial role in validating a newly introduced and critical feature. His contributions were exceptional—Arvind's keen attention to detail helped uncover subtle corner cases, ensuring a robust and reliable implementation. What impressed me most was his eagerness to learn and grow. Whether it was navigating complex specifications or actively seeking feedback, Arvind approached every challenge with curiosity and a growth mindset that elevated the entire team's performance."
              </blockquote>
              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bx bxs-star text-warning text-sm"></i>
                ))}
              </div>
            </div>

            {/* Shane Anderson - System Validation Engineer */}
            <div className="professional-card p-6 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="bx bx-user text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Shane Anderson</h3>
                  <p className="text-sm text-primary">System Validation Software Engineer at Intel</p>
                  <p className="text-xs text-muted-foreground">July 2, 2025 • Mentor & Senior Colleague</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground italic text-sm leading-relaxed">
                "I've had the pleasure of training, mentoring, and working alongside Arvind for over three years now. From day 1, he demonstrated a true passion for learning and succeeding. When it comes to debugging and validation, Arvind leaves no stone unturned. If there's a bug in the product, he will find it. This attention to detail, and commitment to quality is one of his greatest assets. He is the type of person that has made a lasting impact on not just my time at Intel, but in my entire professional career."
              </blockquote>
              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bx bxs-star text-warning text-sm"></i>
                ))}
              </div>
            </div>

            {/* Siddharth Bisoi - Ex-Intel */}
            <div className="professional-card p-6 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="bx bx-user text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Siddharth Bisoi</h3>
                  <p className="text-sm text-primary">5G RAN | SAMSUNG | Ex-Intel | Ex-Nokia</p>
                  <p className="text-xs text-muted-foreground">Former Manager at L&T Technology</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground italic text-sm leading-relaxed">
                "Arvind is not just a terrific and precise validation engineer but also an inspiring person. He consistently demonstrated a strong work ethic at L&T technology and provided outstanding results for the company. He is ready to deal with difficult situations and solve problems on time. He is detail oriented team player. The success achieved in his job required extensive knowledge and dedication. Experiencing his fast and creative mind at the office is most remarkable."
              </blockquote>
              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bx bxs-star text-warning text-sm"></i>
                ))}
              </div>
            </div>

            {/* Roshan Joshi - Radisys Corp */}
            <div className="professional-card p-6 hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="bx bx-user text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Roshan Joshi</h3>
                  <p className="text-sm text-primary">Sales Engineer @ Radisys Corp</p>
                  <p className="text-xs text-muted-foreground">Former Manager at Airspan Networks</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground italic text-sm leading-relaxed">
                "I had an opportunity to manage Arvind when he was in Airspan Networks. He is an absolute pleasure to work with, he always brings an upbeat attitude to his work. I remember him as someone with a serious working attitude and not afraid of hard work. Any team would love to have Arvind as its member!"
              </blockquote>
              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bx bxs-star text-warning text-sm"></i>
                ))}
              </div>
            </div>

            {/* Ehsan Moghaddam - PSU Colleague */}
            <div className="professional-card p-6 hover-lift lg:col-span-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="bx bx-user text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Ehsan Moghaddam</h3>
                  <p className="text-sm text-primary">Graduate Student</p>
                  <p className="text-xs text-muted-foreground">Portland State University Colleague</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground italic text-sm leading-relaxed">
                "I had the opportunity to work with Arvind in formal verification course at Portland State University. He was a great partner to work with on complex lab projects. It was very easy to communicate ideas, work on problems, and collaborate with Arvind. He also has great time management skills along with clear goal orientation. I would highly recommend Arvind for all talent seeking industries."
              </blockquote>
              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bx bxs-star text-warning text-sm"></i>
                ))}
              </div>
            </div>
          </div>

          {/* LinkedIn CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-muted-foreground text-sm mb-4">
              <i className="bx bxl-linkedin text-primary"></i>
              <span>View more recommendations on LinkedIn</span>
            </div>
            <br />
            <a href="https://www.linkedin.com/in/arvind-singh-8ba36946/" target="_blank" rel="noopener noreferrer" className="btn-gradient px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2">
              <i className="bx bxl-linkedin"></i>
              Visit LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground section-padding">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-4">
              <a href="#" className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-light hover:text-primary-foreground transition-all inline-flex items-center gap-2">
                <i className="bx bx-download"></i>
                Download Resume
              </a>
              <a href="https://www.linkedin.com/in/arvind-singh-8ba36946/" target="_blank" rel="noopener noreferrer" className="border border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition-all inline-flex items-center gap-2">
                <i className="bx bxl-linkedin"></i>
                LinkedIn
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <p className="text-sm">© 2025 Arvind Singh. All Rights Reserved.</p>
              <a href="#home" className="bg-primary-foreground text-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-light hover:text-primary-foreground transition-all">
                <i className="bx bx-up-arrow-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Styles */}
      <style>{`
        .navbar.scrolled {
          background: rgba(13, 15, 20, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow-md);
        }

        .navbar ul {
          display: none;
        }

        .navbar ul.open {
          display: flex;
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          background: rgba(13, 15, 20, 0.98);
          backdrop-filter: blur(10px);
          flex-direction: column;
          padding: 2rem;
          box-shadow: var(--shadow-lg);
          z-index: 50;
        }

        .navbar ul.open li {
          margin: 0.5rem 0;
        }

        body.menu-open {
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .navbar ul {
            display: flex !important;
          }
          
          .navbar ul.open {
            position: static;
            background: none;
            flex-direction: row;
            padding: 0;
            box-shadow: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;