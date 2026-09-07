import { useState, useEffect } from 'react';
import { 
  Shirt, GraduationCap, Factory, Stethoscope, 
  HeartHandshake, Sparkles, Check, Scissors, PackageCheck, 
  Clock3, Layers, Ruler, BadgeCheck, 
  Phone, MapPin, Menu, X, ArrowRight, 
  MessageCircle, Quote, Users, Building2, Award
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [activeId, setActiveId] = useState('home');
  const [form, setForm] = useState({
    name: '', institution: '', phone: '', type: 'School Uniforms', quantity: '', message: ''
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const scrollTo = (id: string) => {
    setActiveId(id);
    try {
      history.replaceState(null, '', `#${id}`);
    } catch {}
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  const handleWhatsAppEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const institution = form.institution.trim();
    const phoneRaw = form.phone.trim();
    const phoneDigits = phoneRaw.replace(/\D/g, '');
    const quantity = form.quantity.trim();
    
    if (!name) {
      setToast('Please enter your name.');
      return;
    }
    if (!institution) {
      setToast('Please enter institution / organization name.');
      return;
    }
    if (!phoneRaw || phoneDigits.length < 10) {
      setToast('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!quantity) {
      setToast('Please enter approximate quantity.');
      return;
    }
    const message = `Hi Whiteline Uniforms,\nName: ${name}\nInstitution: ${institution}\nPhone: ${phoneRaw}\nUniform Type: ${form.type}\nQuantity: ${quantity}\nMessage: ${form.message.trim() || 'N/A'}`;
    const url = `https://wa.me/919249279111?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setToast('Opening WhatsApp with your enquiry...');
  };

  const products = [
    {
      icon: Shirt,
      title: "School Uniforms",
      desc: "Complete sets for CBSE, ICSE & State syllabus schools. Crisp, durable, and comfortable for daily wear.",
      bullets: ["Shirts, pants, skirts, pinafores", "Ties, belts & ID cards", "Custom house colors & embroidery"]
    },
    {
      icon: GraduationCap,
      title: "College Uniforms",
      desc: "Professional identity for colleges, MBA and technical institutes. Formal and semi-formal collections.",
      bullets: ["Formal shirts & trousers", "Blazers & lab coats", "Department-wise color coding"]
    },
    {
      icon: Factory,
      title: "Industrial Uniforms",
      desc: "Heavy-duty workwear built for factories, warehouses, security and housekeeping teams.",
      bullets: ["Twill & drill fabrics", "Coveralls, security & hi-vis", "Reflective taping available"]
    },
    {
      icon: Stethoscope,
      title: "Doctor & Medical",
      desc: "Clinical whites and scrubs that balance hygiene, comfort and professional appeal.",
      bullets: ["Doctor coats 100% poly-viscose", "Scrubs & OT dresses", "Antibacterial finish options"]
    },
    {
      icon: HeartHandshake,
      title: "Nursing Uniforms",
      desc: "Kerala's preferred nursing dress supplier – traditional and modern cuts for hospitals & colleges.",
      bullets: ["Saree uniforms & salwar sets", "Aprons, frocks & caps", "Institution logo embroidery"]
    },
    {
      icon: Sparkles,
      title: "Custom & Others",
      desc: "Beyond standard categories – for hospitality, catering, sports and events with branding.",
      bullets: ["Hotel & catering uniforms", "Sports jerseys & track suits", "Embroidery & logo printing"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-[#0f2c4d] font-[Inter,system-ui,sans-serif] antialiased selection:bg-[#c9a86a]/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap');
        .serif { font-family: 'Instrument Serif', serif; }
      `}</style>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,44,77,0.08)] py-3' : 'bg-white py-4 border-b border-[#0f2c4d]/[0.06]'}`}>
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[10px] bg-[#0f2c4d] flex items-center justify-center text-white font-bold text-[16px] tracking-[-0.02em]">W</div>
            <div className="leading-[1]">
              <div className="font-bold text-[15px] tracking-[0.14em]">WHITELINE</div>
              <div className="text-[10px] tracking-[0.22em] opacity-60 font-semibold -mt-[1px]">UNIFORMS</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {[
              ['Home','home'],
              ['About','about'],
              ['Products','products'],
              ['Why Us','why'],
              ['Contact','contact'],
            ].map(([label,id])=>(
              <button key={id} onClick={()=>scrollTo(id)} className={`text-[13px] font-medium tracking-[0.02em] transition-all relative ${activeId===id ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}>
                {label}
                {activeId===id && <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#c9a86a] rounded-full" />}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={()=>scrollTo('contact')} className="h-9 px-5 rounded-full bg-[#0f2c4d] text-white text-[13px] font-semibold tracking-[0.02em] hover:bg-[#163a64] transition-colors flex items-center gap-2">
              Get Quote <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button onClick={()=>setMobileOpen(v=>!v)} className="md:hidden w-9 h-9 rounded-full bg-[#0f2c4d] text-white grid place-items-center">
            {mobileOpen ? <X className="w-4 h-4"/> : <Menu className="w-4 h-4"/>}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-black/5 px-5 py-6 space-y-5">
            <div className="grid gap-4">
              {[
                ['Home','home'],
                ['About','about'],
                ['Products','products'],
                ['Why Us','why'],
                ['Contact','contact'],
              ].map(([label,id])=>(
                <button key={id} onClick={()=>scrollTo(id)} className="text-left text-[15px] font-medium">{label}</button>
              ))}
            </div>
            <button onClick={()=>scrollTo('contact')} className="w-full h-11 rounded-full bg-[#0f2c4d] text-white text-[14px] font-semibold">Get Quote</button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="pt-[88px] md:pt-[108px] bg-white overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-16 items-center py-10 md:py-16">
            <div>
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f8f9fb] border border-[#0f2c4d]/10 text-[11px] font-semibold tracking-[0.12em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86a] animate-pulse" /> Supplying across Kerala • Pan-Kerala Delivery
              </div>
              <h1 className="serif mt-6 text-[38px] md:text-[58px] leading-[0.95] tracking-[-0.03em]">
                Premium Uniforms<br/>
                <span className="italic font-normal text-[#0f2c4d]/60">Tailored for</span><br/>
                Performance & Pride
              </h1>
              <p className="mt-5 text-[16px] md:text-[17px] leading-[1.6] opacity-70 max-w-[48ch]">
                Based in Angamaly, supplying throughout Kerala. Trusted Pan-Kerala supplier of School, College, Industrial, Medical & Nursing uniforms. Family-run, factory-direct pricing.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button onClick={()=>scrollTo('products')} className="h-[44px] px-6 rounded-full bg-[#0f2c4d] text-white text-[14px] font-semibold flex items-center gap-2 hover:bg-[#163a64] transition">
                  View Collections <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={()=>scrollTo('contact')} className="h-[44px] px-6 rounded-full border border-[#0f2c4d]/15 bg-white text-[14px] font-semibold hover:bg-[#f8f9fb] transition">Contact Us</button>
              </div>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#0f2c4d]/10 pt-6">
                {[
                  {k:'10+', v:'Years Experience'},
                  {k:'50+', v:'Institutions Served'},
                  {k:'100 / Day', v:'Stitching Capacity'},
                  {k:'Pan-Kerala', v:'Delivery Network'},
                ].map((s,i)=>(
                  <div key={i}>
                    <div className="text-[20px] font-bold tracking-[-0.02em]">{s.k}</div>
                    <div className="text-[11px] font-semibold tracking-[0.08em] uppercase opacity-60 mt-1">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative overflow-hidden md:overflow-visible">
              <div className="relative aspect-[4/4.2] md:aspect-[4/4.6] rounded-[28px] overflow-hidden bg-[#f8f9fb] border border-[#0f2c4d]/10 p-3">
                <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_80%_0%,rgba(201,168,106,0.22),transparent_60%),radial-gradient(90%_60%_at_10%_90%,rgba(15,44,77,0.12),transparent_60%)]" />
                {/* Fabric rack mock */}
                <div className="relative h-full w-full rounded-[20px] bg-white shadow-[0_20px_60px_rgba(15,44,77,0.12)] overflow-hidden flex flex-col">
                  <div className="h-[46px] border-b border-black/5 flex items-center justify-between px-5">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0f2c4d]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#c9a86a]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#e5e7eb]" />
                    </div>
                    <div className="text-[10px] tracking-[0.18em] font-semibold opacity-50">WHITELINE ATELIER</div>
                  </div>

                  <div className="flex-1 grid grid-cols-[1fr_1fr] gap-0">
                    <div className="border-r border-black/5 p-4 flex flex-col gap-4 bg-[#fbfaf7]">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-[0.12em]">FABRIC SWATCHES</span>
                        <Layers className="w-3.5 h-3.5 opacity-40" />
                      </div>
                      {[
                        {c:'bg-[#0f2c4d]', n:'Navy Twill 240GSM'},
                        {c:'bg-white border', n:'Poplin White'},
                        {c:'bg-[#e8ddd0]', n:'Poly-Cotton Khaki'},
                        {c:'bg-[#c9a86a]', n:'Gold Accent'},
                      ].map((f,i)=>(
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl ${f.c} shadow-sm`} />
                          <div>
                            <div className="text-[12px] font-semibold">{f.n}</div>
                            <div className="text-[10px] opacity-50">Premium • Breathable</div>
                          </div>
                        </div>
                      ))}
                      <div className="mt-auto rounded-xl bg-[#0f2c4d] text-white p-3 flex items-center gap-2">
                        <BadgeCheck className="w-4 h-4 text-[#c9a86a]" />
                        <span className="text-[11px] font-semibold">QC Passed • Lot #WL-284</span>
                      </div>
                    </div>

                    <div className="p-4 flex flex-col">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold tracking-[0.12em]">UNIFORM RACK</span>
                        <Ruler className="w-3.5 h-3.5 opacity-40" />
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {[
                          {label:'School', color:'bg-[#0f2c4d]'},
                          {label:'Medical', color:'bg-white border'},
                          {label:'Nursing', color:'bg-[#fefefe] border'},
                          {label:'Industrial', color:'bg-[#d8c4a6]'},
                        ].map((u,i)=>(
                          <div key={i} className="rounded-[14px] bg-[#f8f9fb] border border-black/[0.06] p-2.5">
                            <div className={`h-[56px] rounded-[10px] ${u.color} relative overflow-hidden`}>
                              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[42%] h-[5px] rounded-full bg-black/10" />
                              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.06))]" />
                            </div>
                            <div className="mt-2 text-[11px] font-semibold tracking-[0.02em]">{u.label}</div>
                            <div className="text-[10px] opacity-50">Ready stock</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto flex items-center gap-2 text-[11px]">
                        <div className="w-7 h-7 rounded-full bg-[#c9a86a]/20 grid place-items-center"><Scissors className="w-3.5 h-3.5" /></div>
                        <span className="opacity-70"><b className="text-[#0f2c4d]">Custom Embroidery</b> • Pan-Kerala Supply</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="hidden md:block absolute -z-10 top-8 -right-8 w-[120px] h-[120px] rounded-full bg-[#c9a86a]/15 blur-[20px]" />
              <div className="hidden md:block absolute -z-10 bottom-10 -left-10 w-[160px] h-[160px] rounded-full bg-[#0f2c4d]/10 blur-[24px]" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#f8f9fb] border-t border-[#0f2c4d]/5">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
            <div className="sticky top-28">
              <div className="text-[11px] font-bold tracking-[0.18em] opacity-50">ABOUT WHITELINE</div>
              <h2 className="serif mt-3 text-[34px] md:text-[42px] leading-[0.95] tracking-[-0.02em]">Crafting Uniforms<br/>That Define Identity</h2>
              <div className="mt-8 rounded-[18px] bg-white border border-[#0f2c4d]/10 p-5 flex gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0f2c4d] text-white grid place-items-center shrink-0"><Quote className="w-4 h-4" /></div>
                <div>
                  <div className="text-[14px] leading-[1.5] italic opacity-80">"Uniform is not just cloth – it's discipline, pride and trust. We stitch that emotion from Angamaly for Kerala."</div>
                  <div className="mt-2 text-[12px] font-semibold">— Whiteline Founding Team</div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[16px] leading-[1.7] opacity-80">
                Whiteline Uniforms is a family-run manufacturing unit based in <span className="font-semibold text-[#0f2c4d]">Angamaly, Kerala</span>, supplying throughout Kerala. For over a decade, we have been the silent partner behind 50+ schools, colleges, hospitals and factories throughout Kerala.
              </p>
              <p className="mt-4 text-[15px] leading-[1.7] opacity-70">
                We source premium poly-cotton, twill, drill and poplin fabrics directly from mills, maintain a steady stitching capacity of ~100 uniforms per day, and provide complete custom embroidery, logo printing and on-time delivery even for urgent academic season orders. No middlemen – factory direct with Pan-Kerala supply network.
              </p>

              <div className="mt-8 grid md:grid-cols-3 gap-4">
                {[
                  {icon: Layers, title:'Quality Fabric', desc:'Mills-direct poly-cotton, twill, drill. Color-fast, low-shrink, Kerala climate tested.'},
                  {icon: Scissors, title:'Perfect Stitching', desc:'Double-stitched seams, reinforced stress points, neat finishing – built for daily rough use.'},
                  {icon: PackageCheck, title:'On-Time Delivery', desc:'Angamaly hub with throughout Kerala logistics. Bulk orders dispatched within 10-15 days anywhere in Kerala.'},
                ].map((p,i)=>(
                  <div key={i} className="rounded-[18px] bg-white border border-[#0f2c4d]/10 p-5">
                    <div className="w-9 h-9 rounded-full bg-[#0f2c4d]/[0.06] grid place-items-center"><p.icon className="w-4.5 h-4.5" /></div>
                    <div className="mt-4 font-semibold text-[14px]">{p.title}</div>
                    <div className="mt-2 text-[13px] leading-[1.5] opacity-65">{p.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[16px] bg-[#0f2c4d] text-white p-5 md:p-6 flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2 text-[13px]"><Check className="w-4 h-4 text-[#c9a86a]" /> Bulk embroidery in-house</div>
                <div className="flex items-center gap-2 text-[13px]"><Check className="w-4 h-4 text-[#c9a86a]" /> Custom sizing – XS to 5XL</div>
                <div className="flex items-center gap-2 text-[13px]"><Check className="w-4 h-4 text-[#c9a86a]" /> GST billing & institutional quotes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-white border-t border-[#0f2c4d]/5">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-16 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-[11px] font-bold tracking-[0.18em] opacity-50">PRODUCT RANGE</div>
              <h2 className="serif mt-3 text-[34px] md:text-[44px] leading-[0.95] tracking-[-0.02em]">Uniforms for Every Institution</h2>
            </div>
            <div className="text-[14px] opacity-60 max-w-[36ch]">Six dedicated lines. One quality promise. From LKG pinafores to OT scrubs and factory coveralls – all stitched in Angamaly.</div>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {products.map((prod, idx) => (
              <div key={idx} className="group rounded-[22px] border border-[#0f2c4d]/10 bg-[#fbfbfd] hover:bg-white hover:shadow-[0_18px_50px_rgba(15,44,77,0.08)] transition-all p-6 md:p-7">
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-[12px] bg-white border border-[#0f2c4d]/10 grid place-items-center shadow-sm group-hover:bg-[#0f2c4d] group-hover:text-white transition-colors">
                    <prod.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.14em] px-2.5 py-1 rounded-full bg-[#0f2c4d]/5">0{idx+1}</span>
                </div>
                <div className="mt-5 font-semibold text-[17px] tracking-[-0.01em]">{prod.title}</div>
                <div className="mt-2 text-[13.5px] leading-[1.6] opacity-65">{prod.desc}</div>
                <div className="mt-5 space-y-2.5">
                  {prod.bullets.map((b,i)=>(
                    <div key={i} className="flex gap-2.5 text-[12.5px]">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-[#c9a86a] shrink-0" />
                      <span className="opacity-75 leading-[1.4]">{b}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 h-px bg-[#0f2c4d]/10" />
                <div className="mt-4 flex items-center gap-2 text-[12px] font-semibold tracking-[0.02em]">
                  <span className="opacity-60">Fabric:</span>
                  <span className="px-2 py-1 rounded-full bg-white border text-[11px]">{idx<2 ? 'Poplin / Poly-Cotton' : idx===2 ? 'Twill / Drill 240GSM' : idx>2 ? 'Poly-Viscose / Cotton' : 'All options'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="bg-[#0f2c4d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(800px_400px_at_0%_0%,white,transparent),radial-gradient(600px_300px_at_100%_100%,#c9a86a,transparent)]" />
        <div className="relative mx-auto max-w-[1240px] px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-white/50">WHY INSTITUTIONS TRUST US</div>
              <h2 className="serif mt-4 text-[34px] md:text-[44px] leading-[0.9] tracking-[-0.02em]">Not just a supplier.<br/><span className="text-[#c9a86a] italic font-normal">A uniform partner.</span></h2>
              <p className="mt-5 text-[14px] leading-[1.7] text-white/70 max-w-[38ch]">We understand Kerala's institutional buying cycle – bulk season pressure, custom branding needs, and tight deadlines. Built for that.</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-[16px] bg-white/5 border border-white/10 p-4">
                  <div className="text-[26px] font-bold">100 / Day</div>
                  <div className="text-[11px] tracking-[0.12em] opacity-60 font-semibold mt-1">STITCHING CAPACITY</div>
                </div>
                <div className="rounded-[16px] bg-[#c9a86a] text-[#0f2c4d] p-4">
                  <div className="text-[26px] font-bold">48h</div>
                  <div className="text-[11px] tracking-[0.12em] font-bold mt-1 opacity-80">SAMPLE TURNAROUND</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {icon: Users, title:'Bulk Orders, No Hassle', desc:'50 to 5000 sets. Dedicated cutting & stitching lines for large orders. Single point contact.'},
                {icon: Scissors, title:'Custom Tailoring & Embroidery', desc:'In-house embroidery machines – logos, names, house badges. Any size from kids to 5XL.'},
                {icon: Layers, title:'Premium Fabrics Only', desc:'We reject 12% of fabric lots in QC. Only colour-fast, low-shrink, breathable lots go to stitching.'},
                {icon: Award, title:'Affordable & Kerala-Wide', desc:'Factory-direct pricing from Angamaly. Pan-Kerala supply throughout Kerala – Trivandrum to Kasaragod.'},
              ].map((f,i)=>(
                <div key={i} className="rounded-[20px] bg-white/[0.06] border border-white/10 p-6 backdrop-blur">
                  <div className="w-10 h-10 rounded-[11px] bg-white text-[#0f2c4d] grid place-items-center"><f.icon className="w-5 h-5" /></div>
                  <div className="mt-5 font-semibold text-[15px]">{f.title}</div>
                  <div className="mt-2 text-[13px] leading-[1.6] text-white/70">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f8f9fb] border-t border-[#0f2c4d]/5">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-16 md:py-20">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-[#0f2c4d]/20" />
            <div className="text-[11px] font-bold tracking-[0.18em] opacity-50">HOW WE WORK</div>
          </div>
          <div className="mt-6 grid md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-[34px] left-[10%] right-[10%] h-px bg-[#0f2c4d]/10" />
            {[
              {n:'01', t:'Consultation', d:'Share institution type, quantity, colors & logo. We advise fabric & costing.'},
              {n:'02', t:'Fabric & Measurement', d:'Swatches shared & size chart approval – supply throughout Kerala.'},
              {n:'03', t:'Stitching & QC', d:'Bulk cutting, stitching, embroidery & 3-stage quality check at our Angamaly unit.'},
              {n:'04', t:'Delivery', d:'Pressed, tagged & packed sets delivered throughout Kerala with GST bill.'},
            ].map((s,i)=>(
              <div key={i} className="relative rounded-[18px] bg-white border border-[#0f2c4d]/10 p-6">
                <div className="w-8 h-8 rounded-full bg-[#0f2c4d] text-white grid place-items-center text-[12px] font-bold">{s.n}</div>
                <div className="mt-4 font-semibold">{s.t}</div>
                <div className="mt-2 text-[13px] leading-[1.6] opacity-65">{s.d}</div>
              </div>
            ))}
          </div>

          {/* Trust banner - generic, no specific institution names */}
          <div className="mt-12 rounded-[18px] bg-white border border-[#0f2c4d]/10 px-6 py-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#0f2c4d]/5 grid place-items-center"><Building2 className="w-4 h-4" /></div>
              <div className="text-[13px] font-semibold tracking-[0.02em]">Trusted by 50+ Schools, Colleges, Hospitals & Industries Throughout Kerala</div>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold tracking-[0.08em] opacity-60">
              <span className="px-3 py-1 rounded-full bg-[#f8f9fb] border">SCHOOLS</span>
              <span className="px-3 py-1 rounded-full bg-[#f8f9fb] border">COLLEGES</span>
              <span className="px-3 py-1 rounded-full bg-[#f8f9fb] border">HOSPITALS</span>
              <span className="px-3 py-1 rounded-full bg-[#f8f9fb] border">INDUSTRIES</span>
              <span className="px-3 py-1 rounded-full bg-[#0f2c4d] text-white border-[#0f2c4d]">~100 UNIFORMS / DAY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white border-t border-[#0f2c4d]/5">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-12">
            <div>
              <div className="text-[11px] font-bold tracking-[0.18em] opacity-50">GET A QUOTE</div>
              <h2 className="serif mt-3 text-[34px] md:text-[44px] leading-[0.95] tracking-[-0.02em]">Let's stitch your<br/>institution's pride.</h2>
              <p className="mt-4 text-[14px] opacity-65 max-w-[44ch]">Tell us your requirement – we will send fabric swatches, costing and delivery timeline within 24 hours. Supplying throughout Kerala. Angamaly factory visit welcome.</p>

              <form onSubmit={handleWhatsAppEnquiry} className="mt-8 grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="grid gap-2">
                    <span className="text-[11px] font-bold tracking-[0.12em] opacity-60">YOUR NAME *</span>
                    <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Your Name" className="h-11 rounded-full border border-[#0f2c4d]/15 bg-[#f8f9fb] px-4 text-[14px] outline-none focus:border-[#0f2c4d] focus:bg-white transition" />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-[11px] font-bold tracking-[0.12em] opacity-60">INSTITUTION / ORGANIZATION *</span>
                    <input required value={form.institution} onChange={e=>setForm({...form, institution:e.target.value})} placeholder="e.g., St. Mary's HSS, Lisie Hospital" className="h-11 rounded-full border border-[#0f2c4d]/15 bg-[#f8f9fb] px-4 text-[14px] outline-none focus:border-[#0f2c4d] focus:bg-white transition" />
                  </label>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <label className="grid gap-2">
                    <span className="text-[11px] font-bold tracking-[0.12em] opacity-60">PHONE NUMBER *</span>
                    <input required value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="+91 92492 79111" type="tel" className="h-11 rounded-full border border-[#0f2c4d]/15 bg-[#f8f9fb] px-4 text-[14px] outline-none focus:border-[#0f2c4d] focus:bg-white transition" />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-[11px] font-bold tracking-[0.12em] opacity-60">UNIFORM TYPE *</span>
                    <select value={form.type} onChange={e=>setForm({...form, type:e.target.value})} className="h-11 rounded-full border border-[#0f2c4d]/15 bg-[#f8f9fb] px-4 text-[14px] outline-none focus:border-[#0f2c4d] focus:bg-white transition">
                      <option>School Uniforms</option>
                      <option>College Uniforms</option>
                      <option>Industrial Uniforms</option>
                      <option>Doctor Coats/Scrubs</option>
                      <option>Nursing Uniforms</option>
                      <option>Others</option>
                    </select>
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-[11px] font-bold tracking-[0.12em] opacity-60">QUANTITY *</span>
                  <input required value={form.quantity} onChange={e=>setForm({...form, quantity:e.target.value})} placeholder="e.g., 350 sets" className="h-11 rounded-full border border-[#0f2c4d]/15 bg-[#f8f9fb] px-4 text-[14px] outline-none focus:border-[#0f2c4d] focus:bg-white transition" />
                </label>

                <label className="grid gap-2">
                  <span className="text-[11px] font-bold tracking-[0.12em] opacity-60">MESSAGE (OPTIONAL)</span>
                  <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Colors, embroidery details, deadline..." rows={4} className="rounded-[18px] border border-[#0f2c4d]/15 bg-[#f8f9fb] p-4 text-[14px] outline-none focus:border-[#0f2c4d] focus:bg-white transition resize-none" />
                </label>

                <div className="flex flex-col gap-3 pt-2">
                  <button type="submit" className="h-[48px] w-full justify-center px-7 rounded-full bg-[#25D366] text-white text-[14px] font-bold flex items-center gap-2.5 hover:bg-[#20bd5a] transition shadow-[0_8px_20px_rgba(37,211,102,0.3)]">
                    <MessageCircle className="w-[18px] h-[18px]" /> Send Enquiry on WhatsApp
                  </button>
                  <div className="text-[11px] opacity-50 text-center">To +91 92492 79111 • We reply within 2 hours • Pan-Kerala Supply</div>
                </div>
              </form>
            </div>

            <div className="space-y-4">
              <div className="rounded-[22px] bg-[#0f2c4d] text-white p-7 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-[#c9a86a]/20 blur-[30px] rounded-full" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[12px] bg-white text-[#0f2c4d] grid place-items-center font-bold">W</div>
                    <div>
                      <div className="font-bold tracking-[0.12em] text-[13px]">WHITELINE UNIFORMS</div>
                      <div className="text-[11px] tracking-[0.16em] opacity-60">STITCHING TRUST, WEARING EXCELLENCE</div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="flex gap-3">
                      <MapPin className="w-4 h-4 text-[#c9a86a] mt-0.5 shrink-0" />
                      <div className="text-[13px] leading-[1.6] text-white/80">
                        Whiteline Uniforms,<br/>
                        Adam Bypass Complex,<br/>
                        Opp. LF Hospital, M.C Road,<br/>
                        Angamaly, Kerala - 683572
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="w-4 h-4 text-[#c9a86a] mt-0.5" />
                      <div className="text-[13px] text-white/80">
                        <a href="tel:+919249279111" className="hover:text-white transition underline underline-offset-4">+91 92492 79111</a><br/>
                        <span className="text-[11px] opacity-60">WhatsApp preferred</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Clock3 className="w-4 h-4 text-[#c9a86a] mt-0.5" />
                      <div className="text-[13px] text-white/80">Mon – Sat, 9:00 AM – 7:00 PM<br/>Pan-Kerala delivery • Factory visit by appointment</div>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-[12px] bg-white/10 border border-white/10 py-3">
                      <div className="text-[12px] font-bold">100/DAY</div>
                      <div className="text-[10px] opacity-60 mt-0.5">CAPACITY</div>
                    </div>
                    <div className="rounded-[12px] bg-white/10 border border-white/10 py-3">
                      <div className="text-[12px] font-bold">MADE</div>
                      <div className="text-[10px] opacity-60 mt-0.5">IN ANGAMALY</div>
                    </div>
                    <div className="rounded-[12px] bg-[#c9a86a] text-[#0f2c4d] py-3">
                      <div className="text-[12px] font-bold">PAN</div>
                      <div className="text-[10px] font-semibold mt-0.5 opacity-80">KERALA</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[18px] bg-[#f8f9fb] border border-[#0f2c4d]/10 p-5">
                <div className="text-[12px] font-bold tracking-[0.12em]">VISIT OUR UNIT • PAN-KERALA SUPPLY</div>
                <div className="mt-3 aspect-[16/9] rounded-[14px] bg-[linear-gradient(135deg,#0f2c4d_0%,#1e4a7a_50%,#c9a86a_100%)] relative overflow-hidden grid place-items-center">
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
                  <div className="relative text-white text-center px-6">
                    <div className="text-[13px] font-semibold tracking-[0.12em]">ANGAMALY FACTORY</div>
                    <div className="mt-2 text-[11px] opacity-80 leading-[1.5]">Cutting • Stitching • Embroidery<br/>QC • Packing – Supplying throughout Kerala</div>
                  </div>
                </div>
                <div className="mt-3 text-[11px] opacity-60 leading-[1.5]">Adam Bypass Complex, Opp. LF Hospital, M.C Road, Angamaly. Bulk buyers can check live production and fabric stock. Pan-Kerala delivery.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b1f36] text-white border-t border-white/5">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-12">
          <div className="grid md:grid-cols-[1.2fr_0.8fr_0.8fr] gap-10">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-[10px] bg-white text-[#0f2c4d] grid place-items-center font-bold">W</div>
                <div>
                  <div className="font-bold text-[14px] tracking-[0.14em]">WHITELINE UNIFORMS</div>
                  <div className="text-[10px] tracking-[0.2em] opacity-50">ANGAMALY • KERALA</div>
                </div>
              </div>
              <div className="mt-4 text-[13px] leading-[1.6] text-white/60 max-w-[36ch]">Premium uniform manufacturer from Angamaly. Stitching trust for schools, colleges, hospitals and industries across Kerala since 2014.</div>
              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px]"><span className="w-2 h-2 rounded-full bg-[#c9a86a]" /> Stitching Trust, Wearing Excellence</div>
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.18em] opacity-40">QUICK LINKS</div>
              <div className="mt-4 grid gap-2.5 text-[13px] text-white/70">
                {[
                  ['About Us','about'],
                  ['Our Products','products'],
                  ['Why Choose Us','why'],
                  ['Get Quote','contact'],
                ].map(([l,id])=>(
                  <button key={l} onClick={()=>scrollTo(id)} className="text-left hover:text-white transition">{l}</button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.18em] opacity-40">PRODUCTS</div>
              <div className="mt-4 grid gap-2.5 text-[13px] text-white/70">
                <div>School Uniforms</div>
                <div>College & Industrial</div>
                <div>Doctor & Nursing</div>
                <div>Custom Embroidery</div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-white/40">
            <div>© 2026 Whiteline Uniforms, Angamaly. All rights reserved. Made in Angamaly, Kerala.</div>
            <div className="flex gap-4">
              <span>Adam Bypass Complex, Angamaly</span>
              <span>•</span>
              <span>Pan-Kerala Supply</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[60] max-w-[90vw]">
          <div className="rounded-full bg-[#0f2c4d] text-white px-5 py-3 text-[13px] font-medium shadow-[0_16px_40px_rgba(0,0,0,0.2)] flex items-center gap-2">
            <BadgeCheck className="w-4 h-4 text-[#c9a86a]" /> {toast}
          </div>
        </div>
      )}
    </div>
  );
}
