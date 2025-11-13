import React from 'react'
import { motion } from 'framer-motion'
import { Twitter, MessageCircle, Globe, Copy, ArrowRight, PawPrint, Sparkles, Flame } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`relative w-full ${className}`}>{children}</section>
)

const Container = ({ children, className = '' }) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
)

const GradientText = ({ children }) => (
  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
    {children}
  </span>
)

function App() {
  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      alert('CA copied. Go unleash the meow! 😼')
    } catch (e) {
      console.error(e)
    }
  }

  // Updated Contract Address from user
  const ca = 'FLxxxxxxxxxxxxxxxxxxxxxxxxxpump'

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200/60">
        <Container className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 grid place-items-center text-white">
              <PawPrint size={18} />
              <motion.span
                className="absolute -top-1 -right-1 text-rose-500"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2.2 }}
              >
                <Flame size={14} />
              </motion.span>
            </div>
            <div className="font-extrabold tracking-tight text-lg flex items-center gap-1">
              Michi <GradientText>Mayhem</GradientText>
              <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-rose-100 text-rose-600 border border-rose-200">
                😼🔥 angry-cat
              </span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-purple-600 transition">About</a>
            <a href="#tokenomics" className="hover:text-purple-600 transition">Tokenomics</a>
            <a href="#how" className="hover:text-purple-600 transition">How to Buy</a>
            <a href="#roadmap" className="hover:text-purple-600 transition">Roadmap</a>
            <a href="#socials" className="hover:text-purple-600 transition">Socials</a>
          </nav>
          <a href="#buy" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-4 py-2 text-sm font-semibold shadow hover:opacity-90 transition">
            Ape $MICHI <ArrowRight size={16} />
          </a>
        </Container>
      </header>

      {/* Hero with Spline cover */}
      <Section id="home" className="relative">
        <div className="relative h-[72vh] sm:h-[78vh] lg:h-[86vh]">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          {/* Overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-white" />
          <Container className="relative h-full flex items-center">
            <div className="w-full max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
              >
                The Angriest Space Cat is <GradientText>On-Chain</GradientText> 😼🔥
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl"
              >
                Welcome to Michi Mayhem ($MICHI) — a neon-fueled furball with laser eyes, turbo zoomies, and unlimited meow-mentum. If it pumps, we purr. If it dumps, we hiss and meme harder.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <a href="#buy" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-3 text-base font-semibold shadow-lg">
                  Buy on DEX <ArrowRight size={18} />
                </a>
                <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white/70 px-6 py-3 text-base font-semibold hover:bg-white">
                  Why is the cat angry?
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-rose-700 text-xs"
              >
                <Flame size={14} /> Warning: easily excitable catcoin
              </motion.div>
            </div>
          </Container>
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                What is <GradientText>$MICHI</GradientText>?
              </h2>
              <p className="mt-4 text-gray-700 text-lg">
                A sci‑fi meme cat who got too close to a particle accelerator and now speaks charts. Built for chaos, boosted by community, and powered by angry‑cute energy.
              </p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><Sparkles className="text-pink-500 mt-1" size={18}/> Neon glow, cosmic zoomies, meme propulsion</li>
                <li className="flex items-start gap-3"><Sparkles className="text-purple-500 mt-1" size={18}/> Community raids, spaces, purrfessional shenanigans</li>
                <li className="flex items-start gap-3"><Sparkles className="text-blue-500 mt-1" size={18}/> Utility: be cute, be loud, be everywhere</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-2xl opacity-20" />
              <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-2xl bg-gradient-to-br from-pink-50 to-white p-6">
                    <div className="text-3xl font-extrabold">0%</div>
                    <div className="mt-1 text-sm text-gray-600">Tax</div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6">
                    <div className="text-3xl font-extrabold">1B</div>
                    <div className="mt-1 text-sm text-gray-600">Supply</div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-white p-6">
                    <div className="text-3xl font-extrabold">LP</div>
                    <div className="mt-1 text-sm text-gray-600">Locked</div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-rose-50 to-white p-6">
                    <div className="text-3xl font-extrabold">CA</div>
                    <div className="mt-1 text-sm text-gray-600">Renounced</div>
                  </div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-gray-200 p-3">
                  <div className="text-xs sm:text-sm font-mono truncate w-full">{ca}</div>
                  <button onClick={() => handleCopy(ca)} className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-3 py-2 text-xs sm:text-sm whitespace-nowrap">
                    <Copy size={14}/> Copy CA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Tokenomics */}
      <Section id="tokenomics" className="py-20 bg-gradient-to-b from-white to-purple-50/60">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center">Tokenomics</h2>
          <p className="text-center text-gray-600 mt-2">Built for community chaos and cute sustainability.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Community', desc: '90% fair launch to the open market. No presale, no VCs.' },
              { title: 'Liquidity', desc: '5% LP locked — cuddle puddle protected.' },
              { title: 'Treasury', desc: '5% for memes, raids, listings, and laser pointer R&D.' },
            ].map((item, i) => (
              <div key={i} className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-10" />
                <div className="relative">
                  <div className="text-xl font-bold">{item.title}</div>
                  <div className="mt-2 text-gray-700">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How to buy */}
      <Section id="how" className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">How to Buy</h2>
              <ol className="mt-6 space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <div className="h-7 w-7 rounded-full bg-pink-500 text-white grid place-items-center font-bold">1</div>
                  Get a wallet (MetaMask etc.), feed it some ETH (or your chain token). No catnip.
                </li>
                <li className="flex gap-3">
                  <div className="h-7 w-7 rounded-full bg-purple-500 text-white grid place-items-center font-bold">2</div>
                  Open your favorite DEX and paste our CA. Don’t fat‑paw the slippage.
                </li>
                <li className="flex gap-3">
                  <div className="h-7 w-7 rounded-full bg-blue-500 text-white grid place-items-center font-bold">3</div>
                  Confirm. Welcome to the litter box. Meme responsibly.
                </li>
              </ol>
              <div className="mt-8 flex flex-wrap gap-3">
                <a id="buy" href="#" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-3 font-semibold">
                  Launch DEX <ArrowRight size={18}/>
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 font-semibold">
                  View Chart
                </a>
              </div>
              <div className="mt-4 text-xs text-gray-600">Always verify you are using the correct CA: <span className="font-mono">{ca}</span></div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-2xl opacity-20" />
              <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-2xl bg-gradient-to-br from-pink-50 to-white p-6">
                    <div className="text-2xl font-extrabold">0%</div>
                    <div className="mt-1 text-sm text-gray-600">Buy/Sell Tax</div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white p-6">
                    <div className="text-2xl font-extrabold">Renounced</div>
                    <div className="mt-1 text-sm text-gray-600">Contract</div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-white p-6">
                    <div className="text-2xl font-extrabold">Locked</div>
                    <div className="mt-1 text-sm text-gray-600">Liquidity</div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-rose-50 to-white p-6">
                    <div className="text-2xl font-extrabold">1B</div>
                    <div className="mt-1 text-sm text-gray-600">Total Supply</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Roadmap */}
      <Section id="roadmap" className="py-20 bg-gradient-to-b from-purple-50/60 to-white">
        <Container>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-center">Roadmap (angry cat edition)</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Phase 1 — Meowmentum', points: ['Launch + fair distribution', 'Meme raids and spaces', 'Community contests']},
              { title: 'Phase 2 — Paw-tnerships', points: ['Listings & verifications', 'IRL stunts (maybe)', 'More utility (but cute)']},
              { title: 'Phase 3 — Moon & Nap', points: ['Bigger campaigns', 'Animal charity', 'World domination (then nap)']},
            ].map((card, i) => (
              <div key={i} className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-10" />
                <div className="relative">
                  <div className="text-xl font-bold mb-3">{card.title}</div>
                  <ul className="space-y-2 text-gray-700">
                    {card.points.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-purple-500"/> {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Socials (no chrome extension / mini games / merch / tools icons as requested) */}
      <Section id="socials" className="py-20">
        <Container>
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-2xl opacity-20" />
            <div className="relative flex flex-col items-center text-center">
              <h3 className="text-3xl font-extrabold tracking-tight">Join the Chaos</h3>
              <p className="mt-2 text-gray-700 max-w-2xl">Enter the angry‑cat dojo. Bring memes. Hydrate. Be kind. No laser pointers during meetings.</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-3"><Twitter size={18}/> Twitter</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3"><MessageCircle size={18}/> Telegram</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3"><Globe size={18}/> Website</a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-200/70">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Michi Mayhem. All vibes reserved.</div>
          <div className="text-sm text-gray-600">This is a meme, not financial advice. Hiss responsibly.</div>
        </Container>
      </footer>
    </div>
  )
}

export default App
