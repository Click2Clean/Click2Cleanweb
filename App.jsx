
import React from 'react'
import { Check, Sparkles, Phone, Shield, Clock, Star } from 'lucide-react'

const Button = ({asChild, children, className='', ...props}) => (
  <a className={`inline-flex items-center justify-center px-4 py-2 text-sm font-semibold border border-gray-900 rounded-2xl hover:-translate-y-px transition ${className}`} {...props}>{children}</a>
)

const Card = ({children, className=''}) => (
  <div className={`bg-white border rounded-2xl shadow-sm ${className}`}>{children}</div>
)
const CardHeader = ({children}) => (<div className="px-5 pt-5">{children}</div>)
const CardTitle = ({children}) => (<h3 className="text-lg font-bold">{children}</h3>)
const CardContent = ({children, className=''}) => (<div className={`px-5 pb-5 ${className}`}>{children}</div>)

export default function App(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6" />
            <span className="font-bold text-xl">Click 2 Clean</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#pricing" className="hover:text-black">Pricing</a>
            <a href="#whyus" className="hover:text-black">Why Us</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+16045550000" className="hidden sm:inline-flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" /> (604) 555‑0000
            </a>
            <Button href="#book" className="bg-black text-white border-black">Book Now</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="book" className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Real‑time, on‑demand cleaning in Surrey & Vancouver
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Tap to book. We show up on schedule. Eco‑friendly products, vetted pros, and a spotless satisfaction guarantee.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#pricing" className="bg-black text-white border-black">See Pricing</Button>
              <Button href="#contact">Get a Quote</Button>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              {[
                { icon: <Shield className="h-4 w-4" />, text: "Bonded & Insured" },
                { icon: <Clock className="h-4 w-4" />, text: "Same‑day Slots" },
                { icon: <Star className="h-4 w-4" />, text: "4.9★ Avg. Rating" },
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-2 bg-white border rounded-xl px-3 py-2">
                  {f.icon}
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-gray-200 to-gray-50 blur-xl" />
            <Card className="relative rounded-3xl shadow-xl">
              <CardHeader>
                <CardTitle>Instant Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid gap-3" action="mailto:info@click2clean.ca" method="post">
                  <div className="grid gap-1">
                    <label className="text-sm">Service</label>
                    <select className="border rounded-xl px-3 py-2">
                      <option>Standard Clean</option>
                      <option>Deep Clean</option>
                      <option>Move‑in / Move‑out</option>
                      <option>Post‑Renovation</option>
                    </select>
                  </div>
                  <div className="grid gap-1">
                    <label className="text-sm">Bedrooms / Bathrooms</label>
                    <input type="text" placeholder="2 bed / 2 bath" className="border rounded-xl px-3 py-2" />
                  </div>
                  <div className="grid gap-1">
                    <label className="text-sm">Preferred Date</label>
                    <input type="date" className="border rounded-xl px-3 py-2" />
                  </div>
                  <div className="grid gap-1">
                    <label className="text-sm">Address</label>
                    <input type="text" placeholder="Street, City" className="border rounded-xl px-3 py-2" />
                  </div>
                  <button className="px-4 py-2 bg-black text-white rounded-2xl text-sm font-semibold border border-black">Request Booking</button>
                  <p className="text-xs text-gray-500">No payment required to request. We confirm in minutes.</p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-gray-600 mt-2">Built for homes, apartments, and small offices.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "Standard Clean", points: ["Kitchens & bathrooms", "Dusting, vacuum, mop", "Trash & tidy"] },
              { title: "Deep Clean", points: ["Baseboards & blinds", "Grout & appliance fronts", "Detailed dusting"] },
              { title: "Move‑in/Move‑out", points: ["Inside fridge/oven", "Cabinets in/out", "Windows (interior)"] },
            ].map((svc, i) => (
              <Card key={i}>
                <CardHeader><CardTitle>{svc.title}</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {svc.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Check className="h-4 w-4" /> {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Simple Pricing</h2>
          <p className="text-gray-600 mt-2">Transparent rates with no surprises.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { tier: "Studio/1BR", price: "$129", cta: "Book Studio" },
              { tier: "2BR", price: "$169", cta: "Book 2BR" },
              { tier: "3BR+", price: "From $209", cta: "Get Quote" },
            ].map((plan, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-baseline justify-between">
                      <span>{plan.tier}</span>
                      <span className="text-2xl font-extrabold">{plan.price}</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Supplies included</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4" /> 100% satisfaction guarantee</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Flexible rescheduling</li>
                  </ul>
                  <div className="mt-4">
                    <a href="#contact" className="w-full inline-flex justify-center px-4 py-2 border border-black rounded-2xl text-sm font-semibold">{plan.cta}</a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="whyus" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Why Choose Click 2 Clean?</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "Trusted Pros", desc: "Background‑checked, trained, and friendly cleaners you can rely on." },
              { title: "On‑Demand", desc: "Real‑time scheduling with same‑day and evening availability." },
              { title: "Eco‑First", desc: "Green products & reusable supplies whenever possible." },
            ].map((f, i) => (
              <Card key={i}>
                <CardHeader><CardTitle>{f.title}</CardTitle></CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">What customers say</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-700 italic">“Showed up right on time and my condo looks brand new. Booking took 2 minutes.”</p>
                  <div className="mt-4 text-sm font-semibold">Aman K. — Surrey</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Get in touch</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div className="space-y-3 text-gray-700">
              <p>Serving Surrey, Vancouver, Burnaby, New Westminster, and nearby.</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> (604) 555‑0000</p>
              <p>Email: <a className="underline" href="mailto:info@click2clean.ca">info@click2clean.ca</a></p>
            </div>
            <Card>
              <CardHeader><CardTitle>Quick message</CardTitle></CardHeader>
              <CardContent>
                <form className="grid gap-3" action="mailto:info@click2clean.ca" method="post">
                  <input className="border rounded-xl px-3 py-2" placeholder="Your name" />
                  <input className="border rounded-xl px-3 py-2" placeholder="Email or phone" />
                  <textarea className="border rounded-xl px-3 py-2" placeholder="How can we help?" rows={4} />
                  <button className="px-4 py-2 bg-black text-white rounded-2xl text-sm font-semibold border border-black" type="submit">Send</button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Click 2 Clean. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="underline">Privacy</a>
            <a href="#" className="underline">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
