/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  Leaf, 
  Zap, 
  Brain, 
  ShieldCheck, 
  Activity, 
  Star, 
  Rocket, 
  Clock,
  AlertTriangle,
  ArrowRight,
  Shield,
  Truck,
  CheckCircle,
  Menu,
  X
} from "lucide-react";

const AFFILIATE_LINK = "http://synaptigen24.com/text.php#aff=CelsoLeme";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(AFFILIATE_LINK, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FDFEFE] text-[#1e293b] font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0B2B40] rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-[#0B2B40]">Synaptigen24</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium hover:text-[#1A4B6B] transition-colors">How it Works</a>
            <a href="#benefits" className="text-sm font-medium hover:text-[#1A4B6B] transition-colors">Benefits</a>
            <a href="#guarantee" className="text-sm font-medium hover:text-[#1A4B6B] transition-colors">Guarantee</a>
            <button 
              onClick={() => window.open(AFFILIATE_LINK, "_blank")}
              className="bg-[#0B2B40] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#1A4B6B] transition-all shadow-md shadow-[#0B2B40]/10"
            >
              Order Now
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 space-y-6 md:hidden"
          >
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">How it Works</a>
            <a href="#benefits" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Benefits</a>
            <a href="#guarantee" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium">Guarantee</a>
            <button 
              onClick={() => window.open(AFFILIATE_LINK, "_blank")}
              className="w-full bg-[#0B2B40] text-white py-4 rounded-xl font-bold"
            >
              Order Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-64 lg:pb-80 overflow-hidden">
        {/* Slanted Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2B40] via-[#0B2B40] to-[#1A4B6B] -skew-y-3 origin-top-right scale-y-110 lg:scale-y-125" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-white"
          >
            <div className="inline-flex items-center gap-2 bg-blue-400/10 border border-blue-400/20 px-4 py-1.5 rounded-full text-blue-200 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Scientifically Formulated
            </div>
            
            <h1 className="font-serif text-5xl lg:text-[5.5rem] font-bold leading-[1.05] mb-8 tracking-tight">
              Heal Your <span className="italic text-blue-200 font-normal">Gut</span>,<br />
              Unlock <span className="text-white">Laser Focus</span>
            </h1>
            
            <p className="text-xl text-blue-50/80 max-w-xl leading-relaxed mb-10">
              Synaptigen24 restores the gut-brain connection to eliminate brain fog
              and deliver clean, sustainable energy — without stimulants.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="space-y-1">
                <span className="block text-2xl font-serif font-bold text-white">100%</span>
                <span className="text-xs uppercase tracking-wider text-blue-100/50 font-semibold">Natural Formula</span>
              </div>
              <div className="space-y-1">
                <span className="block text-2xl font-serif font-bold text-white">180 Day</span>
                <span className="text-xs uppercase tracking-wider text-blue-100/50 font-semibold">Risk-Free Trial</span>
              </div>
              <div className="space-y-1">
                <span className="block text-2xl font-serif font-bold text-white">24/7</span>
                <span className="text-xs uppercase tracking-wider text-blue-100/50 font-semibold">Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border border-white/20">
              <h3 className="text-2xl font-bold mb-2 text-[#0B2B40]">I want to try Synaptigen24 🔥</h3>
              <p className="text-slate-500 mb-10 text-sm">Join 10k+ people unlocking their potential today.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g., Sarah Johnson"
                    className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-300"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-4">Best Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="you@email.com"
                    className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-300"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#0B2B40] hover:bg-[#154663] text-white font-bold py-5 rounded-2xl shadow-xl shadow-blue-900/10 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 mt-4 group"
                >
                  GET EARLY ACCESS
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex flex-col gap-3 mt-8">
                  <div className="flex items-center gap-2 text-[10px] text-slate-400">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    Verified Safe & Secure Checkout
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    Privacy Protected Data
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof & Features */}
      <section id="benefits" className="relative -mt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-12 lg:gap-24">
            <div className="lg:col-span-4 space-y-12">
              <div className="flex flex-wrap gap-4">
                <Badge icon={<Activity className="w-4 h-4" />} text="10,000+ Users" active />
                <Badge icon={<Star className="w-4 h-4 text-yellow-500" />} text="4.9/5 Rating" />
                <Badge icon={<Rocket className="w-4 h-4 text-blue-500" />} text="Early Launch" />
              </div>

              <div className="space-y-10">
                <BenefitCard 
                  icon={<Zap className="w-6 h-6 text-yellow-500" />}
                  title="Stimulant-Free Precision"
                  description="No caffeine spikes or synthetic crashes. Just raw mental processing power that feels like your best day, every day."
                />
                <BenefitCard 
                  icon={<Leaf className="w-6 h-6 text-green-600" />}
                  title="Gut-Brain Optimization"
                  description="Targeted microbiome repair reduces the systemic inflammation that creates massive cognitive drag and fog."
                />
                <BenefitCard 
                  icon={<ShieldCheck className="w-6 h-6 text-blue-600" />}
                  title="Sustainable Clarity"
                  description="Nourishes your brain's long-term health while providing immediate focus. It's the ultimate bio-stack for your mind."
                />
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-blue-600 text-white p-8 rounded-[2rem] flex items-center gap-6 cursor-pointer overflow-hidden relative group"
                onClick={() => window.open(AFFILIATE_LINK, "_blank")}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="p-4 bg-white/20 rounded-2xl">
                  <Truck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 tracking-tight">Free Fast Shipping</h4>
                  <p className="text-blue-100/70 text-sm">On all orders of 6 bottles or more. Limited time.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-[#0B2B40]">
              The Biology of Focus
            </h2>
            <p className="text-slate-500 text-lg">
              Synaptigen24 isn't just another supplement. It's a fundamental bridge between your gut and your mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessStep 
              step="01"
              title="Gut Barrier Repair"
              description="Proprietary microbes seal your intestinal wall, stopping toxic leakage into your bloodstream."
            />
            <ProcessStep 
              step="02"
              title="Inflammation Reset"
              description="By cooling down your body's immune response, we clear the path for cognitive neurotransmission."
            />
            <ProcessStep 
              step="03"
              title="Network Activation"
              description="Your brain's priority shifts from defense to processing, resulting in sharp, effortless focus."
            />
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="guarantee" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 skew-y-3 origin-bottom-left" />
        <div className="max-w-4xl mx-auto relative z-10 bg-white rounded-[3rem] p-8 lg:p-20 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">
          <div className="shrink-0">
            <div className="relative">
              <div className="w-48 h-48 bg-[#0B2B40] rounded-full flex items-center justify-center p-8">
                <Shield className="w-full h-full text-white/90" />
              </div>
              <div className="absolute -bottom-4 right-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg text-xs shadow-lg">
                6 MONTHS
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-3xl font-bold mb-6 text-[#0B2B40]">The Iron-Clad 180-Day 100% Money Back Guarantee</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              If you aren't absolutely blown away by your mental clarity and physical energy in the next 180 days, we'll refund every single penny. No questions asked, no hassle. We take all the risk so you don't have to.
            </p>
            <button 
              onClick={() => window.open(AFFILIATE_LINK, "_blank")}
              className="flex items-center gap-3 font-bold text-[#0B2B40] group"
            >
              Learn more about our guarantee
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-[#0B2B40] py-24 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-8 italic">Ready to feel like yourself again?</h2>
          <p className="text-blue-100/60 mb-12 text-lg">
            Join thousands of others who fixed their gut and found their focus.
          </p>
          <button 
            onClick={() => window.open(AFFILIATE_LINK, "_blank")}
            className="bg-white text-[#0B2B40] px-12 py-6 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl shadow-blue-400/10"
          >
            Claim Your Discounted Bottles
          </button>
          <p className="mt-8 text-blue-300/40 text-[10px] flex items-center justify-center gap-2">
            <Lock className="w-3 h-3" /> Secure 256-bit encrypted checkout
          </p>
        </div>
      </section>

      {/* Legal Footer */}
      <footer className="bg-[#081F2F] pt-20 pb-12 px-6 text-slate-500">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/5 pb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <Brain className="w-6 h-6" />
                <span className="font-serif font-bold text-lg tracking-tight">Synaptigen24</span>
              </div>
              <p className="text-xs leading-relaxed max-w-xs">
                Premium gut-brain support system designed for high performers who need to stay sharp without the jitters of caffeine.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h5 className="text-xs font-bold text-white uppercase tracking-widest">Company</h5>
                <ul className="text-[10px] space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Science</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h5 className="text-xs font-bold text-white uppercase tracking-widest">Legal</h5>
                <ul className="text-[10px] space-y-2">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <AlertTriangle className="w-6 h-6 shrink-0 text-yellow-500/50" />
                <p className="text-[9px] leading-relaxed">
                  FDA Disclaimer: These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease. Results may vary.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px]">© 2025 Synaptigen24 Wellness. Distributed by Early Access Group.</p>
            <div className="flex items-center gap-8 grayscale opacity-30">
              <img src="https://picsum.photos/seed/visa/120/40" alt="Visa" className="h-4 object-contain" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/mastercard/120/40" alt="Mastercard" className="h-4 object-contain" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/paypal/120/40" alt="Paypal" className="h-4 object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex gap-6 group cursor-default"
    >
      <div className="shrink-0 w-14 h-14 bg-white shadow-xl shadow-slate-200/50 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-[#0B2B40]/10">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-xl mb-2 text-[#0B2B40]">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed max-w-lg">{description}</p>
      </div>
    </motion.div>
  );
}

function Badge({ icon, text, active }: { icon: React.ReactNode, text: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
      active 
        ? "bg-[#0B2B40] text-white border-[#0B2B40] shadow-lg shadow-[#0B2B40]/20" 
        : "bg-white text-slate-500 border-slate-100 hover:border-slate-300"
    }`}>
      {icon}
      {text}
    </div>
  );
}

function ProcessStep({ step, title, description }: { step: string, title: string, description: string }) {
  return (
    <div className="p-8 space-y-6">
      <div className="text-[5rem] font-serif font-black text-slate-50 leading-none h-[4rem] select-none">
        {step}
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-xl text-[#0B2B40] tracking-tight">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function Lock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}
