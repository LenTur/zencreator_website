import React, { useState } from 'react';
import { Heart, Users, CheckCircle, Camera, Clock, Shield } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { FAQAccordion } from '@/components/sections/FAQAccordion';

const faqItems = [
  {
    question: "Is the content unique to my product?",
    answer: "Yes. Every asset is generated for you and never recycled."
  },
  {
    question: "Can I request niche demographics (e.g., wheelchair users, tattoos, specific fashion)?",
    answer: "Yes, but it depends on the specific capabilities of our AI tools. We have successfully generated content with people in wheelchairs or with certain clothing styles, but some details (e.g. complex tattoos) may be limited by current technologies. Provide your requirements and we'll let you know what is feasible to implement."
  },
  {
    question: "How do you ensure compliance with app-store policies?",
    answer: "Our moderation pipeline flags nudity, minors, weapons, hate symbols and more; humans approve the final set."
  }
];

// Interactive Widget Component
const InteractiveProfileWidget: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<string>('Female');
  const [selectedAge, setSelectedAge] = useState<string>('25-35');
  const [selectedEthnicity, setSelectedEthnicity] = useState<string>('European');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentProfile, setCurrentProfile] = useState({
    name: 'Sarah',
    age: '28',
    location: 'San Francisco, CA',
    bio: 'Love hiking, yoga, and trying new restaurants. Looking for someone who shares my passion for adventure and good coffee ☕️',
    avatar: '👩🏼‍💼',
    photos: [] as string[]
  });

  const profileVariations = {
    'Male-18-25-European': { name: 'Jake', age: '23', location: 'Austin, TX', bio: 'Tech enthusiast, rock climbing, and craft beer lover. Always up for spontaneous adventures! 🧗‍♂️', avatar: '👨🏻‍💻' },
    'Male-25-35-Asian': { name: 'Kevin', age: '29', location: 'Seattle, WA', bio: 'Software engineer by day, chef by night. Love trying new recipes and exploring the city! 👨‍🍳', avatar: '👨🏻‍💻' },
    'Female-25-35-Black': { name: 'Maya', age: '31', location: 'Atlanta, GA', bio: 'Artist and yoga instructor. Passionate about mindfulness, travel, and good music 🎨✨', avatar: '👩🏾‍🎨' },
    'Female-18-25-Latina': { name: 'Sofia', age: '24', location: 'Miami, FL', bio: 'Dancing through life! Love salsa, beach days, and trying new cuisines 💃🏻', avatar: '👩🏻‍🦱' },
    'Male-35-45-Black': { name: 'Marcus', age: '38', location: 'Chicago, IL', bio: 'Entrepreneur and fitness enthusiast. Looking for someone to share life\'s adventures with 💪🏾', avatar: '👨🏾‍💼' },
    'Female-25-35-European': { name: 'Sarah', age: '28', location: 'San Francisco, CA', bio: 'Love hiking, yoga, and trying new restaurants. Looking for someone who shares my passion for adventure and good coffee ☕️', avatar: '👩🏼‍💼' },
  };

  const generateProfile = async () => {
    setIsGenerating(true);
    
    try {
      // Generate real AI photos using Pollinations API
      const ageNumber = selectedAge.split('-')[0]; // Get first number from range
      const prompt = `professional headshot photo of attractive ${selectedGender.toLowerCase()} ${selectedEthnicity.toLowerCase()} person aged ${ageNumber}, realistic, high quality, dating app profile photo, natural lighting, smiling, modern style`;
      
      // Generate 3 different photos
      const photos = await Promise.all([
        generatePhoto(prompt + ', portrait style'),
        generatePhoto(prompt + ', casual style'),
        generatePhoto(prompt + ', lifestyle photo')
      ]);
      
      // Get profile data
      const key = `${selectedGender}-${selectedAge}-${selectedEthnicity}`;
      const profile = profileVariations[key as keyof typeof profileVariations] || currentProfile;
      
      // Update profile with generated photos
      setCurrentProfile({
        ...profile,
        photos: photos,
        avatar: photos[0] // Use first photo as avatar
      });
      
    } catch (error) {
      console.error('Error generating profile:', error);
      // Fallback to predefined profiles
      const key = `${selectedGender}-${selectedAge}-${selectedEthnicity}`;
      const profile = profileVariations[key as keyof typeof profileVariations] || currentProfile;
      setCurrentProfile(profile);
    }
    
    setIsGenerating(false);
  };

  const generatePhoto = async (prompt: string): Promise<string> => {
    const seed = Math.floor(Math.random() * 1000000);
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=512&height=512&seed=${seed}&enhance=true&nologo=true&model=flux`;
    
    // Preload image to ensure it's ready
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(url);
      img.onerror = () => resolve(url); // Even if error, return URL
      img.src = url;
    });
  };

  const ButtonStyle = {
    base: "transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 font-medium",
    unselected: "border-2 border-gray-200 text-gray-600 bg-white hover:border-purple-300 hover:bg-purple-25 hover:text-gray-700",
    selected: "border-2 border-purple-500 bg-purple-500 text-white shadow-lg transform scale-[1.02]",
    hover: "hover:shadow-md"
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 shadow-xl max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        
        {/* Controls Panel */}
        <div className="space-y-6">
          <h4 className="text-2xl font-bold text-gray-900 mb-6">Customize Profile</h4>
          
          {/* Gender */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Gender</label>
            <div className="flex gap-3">
              {['Male', 'Female'].map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedGender(option)}
                  className={`px-6 py-3 rounded-xl ${ButtonStyle.base} ${
                    selectedGender === option ? ButtonStyle.selected : ButtonStyle.unselected
                  } ${ButtonStyle.hover}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Age Range */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Age Range</label>
            <div className="grid grid-cols-3 gap-2">
              {['18-25', '25-35', '35-45', '45-55', '55-65', '65-75', '75+'].map((range) => (
                <button
                  key={range}
                  onClick={() => setSelectedAge(range)}
                  className={`px-4 py-2 rounded-lg text-sm ${ButtonStyle.base} ${
                    selectedAge === range ? ButtonStyle.selected : ButtonStyle.unselected
                  } ${ButtonStyle.hover}`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Ethnicity */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Ethnicity</label>
            <div className="grid grid-cols-2 gap-2">
              {['European', 'Asian', 'Black', 'Indian', 'Latina', 'Mixed'].map((ethnicity) => (
                <button
                  key={ethnicity}
                  onClick={() => setSelectedEthnicity(ethnicity)}
                  className={`px-4 py-2 rounded-lg text-sm ${ButtonStyle.base} ${
                    selectedEthnicity === ethnicity ? ButtonStyle.selected : ButtonStyle.unselected
                  } ${ButtonStyle.hover}`}
                >
                  {ethnicity}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={generateProfile}
            disabled={isGenerating}
            className={`w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl ${
              isGenerating 
                ? 'bg-gray-400 cursor-not-allowed text-white' 
                : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 active:scale-[0.98]'
            }`}
          >
            {isGenerating ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Generating...</span>
              </div>
            ) : (
              'Generate Profile Preview'
            )}
          </button>
        </div>

        {/* Preview Panel */}
        <div className="bg-gray-50 rounded-xl p-4 h-full">
          {/* Profile Card - Like Production */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-200 transition-all duration-500">
            {/* Avatar + Name Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-2xl transition-all duration-500 overflow-hidden">
                {isGenerating ? (
                  <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : currentProfile.photos && currentProfile.photos.length > 0 ? (
                  <img 
                    src={currentProfile.photos[0]} 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-white text-sm">👤</span>
                )}
              </div>
              <div>
                <h5 className="text-lg font-bold text-gray-900 transition-all duration-500">
                  {isGenerating ? '...' : `${currentProfile.name}, ${currentProfile.age}`}
                </h5>
                <p className="text-sm text-gray-600 transition-all duration-500">
                  {isGenerating ? 'Loading...' : currentProfile.location}
                </p>
              </div>
            </div>
            
            {/* Photo Grid 2x2 */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[0, 1, 2, 0].map((i, index) => (
                <div key={index} className={`aspect-square rounded-lg flex items-center justify-center transition-all duration-500 overflow-hidden ${
                  isGenerating 
                    ? 'bg-gradient-to-br from-gray-300 to-gray-400 animate-pulse' 
                    : 'bg-gradient-to-br from-gray-200 to-gray-300'
                }`}>
                  {isGenerating ? (
                    <div className="w-6 h-6 border-2 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                  ) : currentProfile.photos && currentProfile.photos[i] ? (
                    <img 
                      src={currentProfile.photos[i]} 
                      alt={`Profile photo ${i + 1}`}
                      className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  ) : (
                    <Camera className="w-6 h-6 text-gray-500" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6 border border-purple-200">
          <p className="text-gray-700 font-semibold mb-2">✨ What you get with each profile:</p>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>📸 6 high-quality images</div>
            <div>🎥 2 short video clips</div>
            <div>📝 AI-generated bio</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DatingProfilesService: React.FC = () => {
  return (
    <PageLayout
      title="Dating Profiles Generation — AI-Generated Dating Profiles & Photos"
      description="Need content for a new dating app fast? ZenCreator auto-generates exclusive, human-quality dating profiles—photos, videos & bios—at scale. Manual QA, 100% consistency."
    >
      {/* Hero */}
      <div className="container mx-auto px-4" style={{ paddingTop: '180px' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#0F172A] rounded-3xl border border-white/10 min-h-[60vh] flex items-center justify-center">
            <section className="pt-24 pb-[40px] text-center text-white w-full px-6">
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Dating Profiles Generation
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7BA1F8, #C084FC)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                  className="text-2xl md:text-4xl"
                >
                  AI-Generated Dating Profiles & Photos
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Launch a dating product with thousands of believable, on-brand profiles — without photo shoots, casting, or months of prep.
              </p>
              <div className="flex gap-4 justify-center">
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Book a Demo
                </a>
                <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200">
                  Get a Quote
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">



        </div>
      </div>

      {/* Trusted by */}
      <section className="w-full py-[75px] bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-sm tracking-wide text-gray-500 mb-12 uppercase text-center">Trusted by Singles on</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {[
                { name: 'match.com', url: 'https://match.com' },
                { name: 'dating.com', url: 'https://dating.com' },
                { name: 'bumble', url: '#' },
                { name: 'tinder', url: '#' },
                { name: 'hinge', url: '#' },
                { name: 'okcupid', url: '#' }
              ].map((platform) => (
                <div key={platform.name} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white rounded-xl py-6 px-4 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-[1.02] text-center">
                    <span className="text-gray-700 font-medium">{platform.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Service Details */}
          <section className="py-[150px] bg-white">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 text-center">Dating Profile Generation as a Service</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 text-center leading-relaxed">
              ZenCreator's <strong>Dating Profile Generation</strong> service delivers complete, ready-to-publish profiles in days.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Photos & Video',
                  description: '3–50 images + 1-10 short clips per profile — selfies, casual shots, "spicy" lingerie or swimwear (optional, 100% policy-compliant).',
                  icon: Camera
                },
                {
                  title: 'Consistent Identity',
                  description: 'Same face, body, and style across all media — no odd fingers or mismatched eyes.',
                  icon: Users
                },
                {
                  title: 'Complete Bio',
                  description: 'Description, Age, Hobbies, Fun facts etc.',
                  icon: Heart
                },
                {
                  title: 'Any Demographic',
                  description: 'Gender, age 18–85+, ethnicity & body type — fully customizable per order.',
                  icon: Users
                },
                {
                  title: 'Exclusive License',
                  description: 'Content belongs to you; never resold or reused.',
                  icon: Shield
                },
                {
                  title: 'Manual QA',
                  description: 'Human moderation on every asset — no six-finger, rings, or policy violations.',
                  icon: CheckCircle
                }
              ].map((feature) => (
                <div key={feature.title} className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-purple-200/50 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Scale & Speed */}
      <section className="w-full py-[75px] bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">Scale & Speed</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: '20,000+', description: 'production-ready images/month today' },
                { number: '100× capacity', description: 'on standby — thanks to our GPU farm & workflow automation' },
                { number: '48 hours', description: 'typical lead time for the first 100 profiles' }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <div className="relative bg-white rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-6 mx-auto">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-3xl font-black text-purple-900 mb-4">{stat.number}</h4>
                    <p className="text-gray-700 leading-relaxed">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Live Preview Widget */}
          <section className="py-[150px] bg-white">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 text-center">Live Preview Widget</h3>
            <p className="text-lg text-gray-600 mb-12 text-center">Customize and see instant profile previews:</p>
            
            <InteractiveProfileWidget />
          </section>

        </div>
      </div>
      
      <FAQAccordion 
        items={faqItems} 
        title="Frequently Asked Questions"
        cta={
          <section className="pt-10 bg-[#0F172A] text-white rounded-3xl p-12 md:p-16 text-center border border-white/10">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to Fill Your Dating App with High-Quality Profiles?</h3>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">Stop worrying about the "cold-start" problem and focus on acquiring real users.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://calendly.com/leo-zencreator/zencreator-demo-1?month=2025-08" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">Book a Demo</a>
              <a href="mailto:info@zencreator.pro?subject=Start%20Dating%20Profiles%20Project" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">Start a Project</a>
            </div>
          </section>
        }
      />
    </PageLayout>
  );
};