import React, { useState, useRef } from 'react';
import { Sparkles, TrendingUp, Rocket, Search, BarChart2, Globe, Shield, Clock, Users, Target, Award, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Lottie from 'lottie-react';
import heroAnimation from './animations/Business.json';
import featureAnimation from './animations/Step.json';
import JobDashboard from './JobDashboard';
import PlacementGuaranteeCourses from './PlacementGuaranteeCourses';
import JobPostingModal from './JobPostingModal';
import Footer from './Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import resumeAnimation from './animations/Resume.json'
import { Iphone16Pro } from '@/components/iphone16-pro';
import ScrollStack from '@/components/scroll-stack';
import { 
  ThreeDScrollTriggerContainer, 
  ThreeDScrollTriggerRow 
} from '@/components/3d-scroll-trigger';
import { AngledSlider } from "./angled-slider";
import sign from './assets/isgn.png';


import iphone from './assets/Phoneimg.png';
const Dashboard = () => {
  const [email, setEmail] = useState('');
  const [jobPostingModalOpen, setJobPostingModalOpen] = useState(false);
  const heroRef = useRef(null);

  const handleJobPosted = () => {
    setJobPostingModalOpen(false);
  };
  const images = [
    {
      id: 1,
      url: sign,
      title: "Mountain View",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=1000&q=80",
      title: "Ocean Breeze",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=80",
      title: "Forest Mist",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1000&q=80",
      title: "Canyon Echo",
    },
     {
      id: 5,
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1000&q=80",
      title: "Canyon Echo",
    },
     {
      id: 6,
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1000&q=80",
      title: "Canyon Echo",
    },
  ];
  const cards = [
    {
      title: "Discover Your Skills",
      subtitle: "Identify your strengths, interests, and career-ready skills with guided tools and insights.",
      badge: "Step 1",
      backgroundImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
    },
    {
      title: "Learn & Upskill",
      subtitle: "Access curated learning paths, workshops, and resources designed for real-world jobs.",
      badge: "Step 2",
      backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },
    {
      title: "Connect via Video Calls",
      subtitle: "Attend interviews, mentorship sessions, and meetings using built-in HD video calling.",
      badge: "Step 3",
      backgroundImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
    },
    {
      title: "Chat & Collaborate",
      subtitle: "Communicate securely with real-time messaging and collaborate with teams effortlessly.",
      badge: "Step 4",
      backgroundImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984"
    },
    {
      title: "Find Jobs & Projects",
      subtitle: "Explore job openings, freelance gigs, and startup opportunities tailored to your profile.",
      badge: "Step 5",
      backgroundImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
    },
    {
      title: "Manage Everything in One Place",
      subtitle: "Track applications, meetings, chats, and tasks from a single powerful dashboard.",
      badge: "Final Step",
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    }
  ];
  
  const features = [
    {
      icon: <BarChart2 className="w-6 h-6 text-blue-600" />,
      title: "Advanced Analytics",
      description: "Real-time data and insights to track your career progress"
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
      title: "Global Opportunities",
      description: "Access to jobs from top companies worldwide"
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-600" />,
      title: "Privacy Focused",
      description: "Your data is always secure and private"
    }
  ];

  const testimonials = [
    {
      quote: "This platform helped me land my dream job in just 3 weeks!",
      author: "Krishna Soni",
      role: "Product Designer at NOVA Tech"
    },
    {
      quote: "The certification courses boosted my skills and confidence.",
      author: "Anshumesh Saini",
      role: "Senior Developer at Innovate ."
    },
    {
      quote: "Best career decision I've made. 5/5 stars!",
      author: "Vishal Singh",
      role: "Marketing Manager at BrandCo"
    }
  ];

  const ResumeLabSection = () => (
    <section className="py-16  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">

            New Feature
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Build an ATS-Optimized Resume with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Accenture ResumeLab</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered resume builder ensures your resume gets past Applicant Tracking Systems with <span className="font-semibold text-blue-600">90%+ success rate</span>.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100/50 hover:shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">ATS-Optimized Templates</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Professionally designed templates that pass through applicant tracking systems used by 99% of Fortune 500 companies.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Real-time ATS score feedback",
                  "Keyword optimization for your target role",
                  "Formatting that passes automated screens",
                  "Industry-specific content suggestions"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
              
              <a href="https://resumelabs.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                  Build Your Resume Now
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-8">
      <div className="relative w-full h-96 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100 flex items-center px-3">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="absolute top-10 left-0 right-0 bottom-0 p-6 overflow-auto flex items-center justify-center">
          <Lottie 
            animationData={resumeAnimation} 
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
              title: "Higher Interview Rates",
              description: "Users see 3x more interview requests with our optimized resumes"
            },
            {
              icon: <Clock className="w-8 h-8 text-cyan-600" />,
              title: "Save Time",
              description: "Create a professional resume in 15 minutes or less"
            },
            {
              icon: <Award className="w-8 h-8 text-blue-600" />,
              title: "Proven Success",
              description: "Trusted by over 500,000 job seekers worldwide"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-lg mr-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white antialiased">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50/50 to-cyan-50/50 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-100/20 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-100/20 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm">
                <span className="text-sm font-medium text-gray-700">The future of career growth</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Dream Career</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                The all-in-one platform to develop skills, find opportunities, and accelerate your professional growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 hover:shadow-md focus:shadow-lg"
                  />
                </div>
              
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((item) => (
                    <img 
                      key={item}
                      src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item+20}.jpg`}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">100+ professionals</span> have launched their careers
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-3xl -rotate-6 shadow-xl"></div>
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-gray-100/50 rotate-1 transition-all duration-500 hover:rotate-0">
                <Lottie
                  animationData={heroAnimation}
                  loop={true}
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center">
                    {/* Content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-10 text-lg">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center justify-center">
            {[
              { name: 'Google', logo: 'https://imgs.search.brave.com/i0DENobgN0P77lDm5I1RVTCEGAPy8Kp9e_GwORGJvAM/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMw/ODAxMTQ1NjA4L0N1/cnJlbnQtR29vZ2xl/LWxvZ28tMjAxNS0y/MDIzLTYwMHgyMDMu/cG5n' },
              { name: 'Microsoft', logo: 'https://imgs.search.brave.com/fkQBcqH_lKXFBPV_EpCMD4y0x9bbEWaXjk5ZyEEvUyo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waXh5/Lm9yZy9zcmMvNDI5/L3RodW1iczM1MC80/Mjk0OTk5LmpwZw' },
              { name: 'Amazon', logo: 'https://imgs.search.brave.com/y4oNSxnN9VO57utZdjGfBQC9h-bqLO470C0QgabtNvo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zaW1w/bGUtdmVjdG9yLWZp/bGxlZC1mbGF0LWFt/YXpvbi1pY29uLWxv/Z28tc29saWQtYmxh/Y2stcGljdG9ncmFt/LWlzb2xhdGVkLXdo/aXRlLWJhY2tncm91/bmQtYW1hem9uLWxv/Z28tMTU5MDI5MDc0/LmpwZw' },
              { name: 'Facebook', logo: 'https://imgs.search.brave.com/V8n8LzeedWDO7kcVbOs5V47Eg1VwU9jM690FTUb0aQ0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTgwNDg5/My82NjU4L3YvNDUw/L2RlcG9zaXRwaG90/b3NfNjY1ODM4OTUt/c3RvY2staWxsdXN0/cmF0aW9uLWZhY2Vi/b29rLWxvZ28uanBn' },
              { name: 'Netflix', logo: 'https://imgs.search.brave.com/4_G5GtEYed2p7u2zXYg-JjrbttCPF0ej9cuTLzb0mzM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L05ldGZsaXgtTG9n/by01MDB4MjgxLnBu/Zw' },
              { name: 'Netflix', logo: 'https://imgs.search.brave.com/xDVLVggHw_0FyRgpBI4JDdeZJPNxpuv0XXWZAz_ofbI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWRo/d2FuaWZvdW5kYXRp/b24ub3JnL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzExL0dM/QS1VTklWRVJTSVRZ/LU1BVEhVUkEtMTAy/NHg0MjMucG5n' }
            ].map((company, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
              >
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-12 object-contain hover:opacity-100 transition-opacity duration-300" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Elevate Your Career With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Cutting-Edge Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our platform combines powerful tools with expert guidance to help you reach your career goals faster than ever before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-6 shadow-inner">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  <div className="mt-6">
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">

                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Simple Steps to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Career Success</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  { step: "1", title: "Create Your Profile", description: "Build your professional profile in minutes with our intuitive builder" },
                  { step: "2", title: "Develop Skills", description: "Take our certification courses to boost your skills and marketability" },
                  { step: "3", title: "Find Opportunities", description: "Get matched with perfect job opportunities based on your profile" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center text-blue-800 font-bold text-xl shadow-inner group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-cyan-100 transition-all duration-300">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="mt-10 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5">
                Start Your Journey
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-cyan-100/30 rounded-3xl -rotate-6 shadow-xl"></div>
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-gray-100/50 rotate-1 p-6">
                <Lottie
                  animationData={featureAnimation}
                  loop={true}
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center">
                  {/* Content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Components */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative group transform-gpu hover:-translate-y-2 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/30 via-blue-100/30 to-indigo-100/30 rounded-3xl -z-10 transition-all duration-500 group-hover:opacity-80 blur-xl"></div>
          <div 
            className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden transition-all duration-500 hover:shadow-3xl"
            style={{
              boxShadow: '0 25px 60px -15px rgba(6, 182, 212, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.5)'
            }}
          >
            <JobDashboard />
          </div>
        </div>

       



        <div 
          id="certification-courses" 
          className="transition-all duration-500 transform-gpu hover:-translate-y-2 mt-16"
        >
          <PlacementGuaranteeCourses />

        </div>
      </div>
      <ResumeLabSection />
      <div className="w-full  to-white py-16 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* LEFT CONTENT */}
    <div>
     

    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
  SkillMatrix – <br />
  <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 
                   bg-clip-text text-transparent">
    Everything in One
  </span>{" "}
  Affordable Platform
</h1>


      <p className="mt-6 text-gray-600 text-lg max-w-xl">
        SkillMatrix is an all-in-one digital platform that brings video calling,
        job posting, real-time chat, and collaboration tools together in one
        unified system—without high costs.
      </p>

      <ul className="mt-8 space-y-4 text-gray-700">
        <li className="flex items-center gap-3">
          - <span>Video calls & professional interviews</span>
        </li>
        <li className="flex items-center gap-3">
          - <span>Post and apply for jobs easily</span>
        </li>
        <li className="flex items-center gap-3">
          - <span>Secure real-time chat & messaging</span>
        </li>
        <li className="flex items-center gap-3">
          - <span>Seamless collaboration for teams</span>
        </li>
        <li className="flex items-center gap-3">
          - <span>Manage everything from one dashboard</span>
        </li>
      </ul>

      <p className="mt-6 text-gray-600 max-w-xl">
        Unlike other platforms that charge separately for each feature,
        SkillMatrix offers everything at a very affordable cost—perfect for
        students, freelancers, startups, and growing companies.
      </p>

     
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center">
      <div className="absolute -inset-4 bg-blue-100  blur-2xl opacity-60"></div>
      <img
        src={iphone}
        alt="SkillMatrix Platform"
        className="relative z-10 w-full max-w-md rounded-2xl "
      />
    </div>

  </div>
</div>

      
<section className="bg-gradient-to-b from-gray-50 to-white py-24 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="text-center mb-20">
      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
        Success Stories
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        What Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
          Users Say
        </span>
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Don't just take our word for it — hear from professionals who transformed
        their careers.
      </p>
    </div>

    {/* Horizontal Scroll */}
    <ThreeDScrollTriggerContainer>
      <ThreeDScrollTriggerRow baseVelocity={5} direction={1}>

        {/* CARD */}
        {[
          {
            name: "Liam Patel",
            company: "NextGen Interfaces",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            text:
              "From landing pages to complex dashboards, SkillMatrix makes building visually consistent workflows effortless."
          },
          {
            name: "Zoe Williams",
            company: "Studio Aurora",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            text:
              "The attention to detail is phenomenal. Spacing, animations, and component harmony feel premium."
          },
          {
            name: "Aria Thompson",
            company: "CreativePixel Studio",
            img: "https://randomuser.me/api/portraits/women/68.jpg",
            text:
              "SkillMatrix completely changed how we manage interviews, collaboration, and hiring."
          },
          {
            name: "Ethan Rivera",
            company: "CodeLoom Technologies",
            img: "https://randomuser.me/api/portraits/men/76.jpg",
            text:
              "We built our entire hiring workflow in days instead of weeks. A total game changer."
          }
        ].map((user, i) => (
          <div
            key={i}
            className="w-[360px] shrink-0 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={user.img}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{user.name}</h4>
                <p className="text-sm text-gray-500">{user.company}</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">{user.text}</p>
          </div>
        ))}

      </ThreeDScrollTriggerRow>
    </ThreeDScrollTriggerContainer>

  </div>
</section>



      {jobPostingModalOpen && (
        <JobPostingModal
          onClose={() => setJobPostingModalOpen(false)}
          onJobPosted={handleJobPosted}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;