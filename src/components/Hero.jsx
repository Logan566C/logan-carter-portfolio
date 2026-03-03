import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Linkedin } from 'lucide-react'

const Hero = () => {
  const { scrollY } = useScroll()
  const scrollOpacity = useTransform(scrollY, [0, 220], [1, 0])

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background — ski lift photo */}
      <div className="absolute inset-0">
        <img
          src="/images/ski-lift.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/40" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full pt-20">
          <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-8 lg:gap-16 items-center">

            {/* ── Left: text ── */}
            <div>
              {/* Role tag */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-cu-gold font-mono tracking-[0.25em] text-xs sm:text-sm uppercase mb-4"
              >
                MECHANICAL ENGINEERING · UNIVERSITY OF COLORADO BOULDER
              </motion.p>

              {/* Big first name */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                <h1 className="text-[7rem] sm:text-[10rem] lg:text-[13rem] font-black leading-none tracking-tighter text-white uppercase">
                  LOGAN
                </h1>
              </motion.div>

              {/* Gold accent */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="flex items-center gap-5 -mt-4 mb-2"
              >
                <div className="h-px w-14 bg-cu-gold" />
                <span className="text-cu-gold font-mono tracking-[0.25em] text-base sm:text-lg uppercase">
                  CU BOULDER
                </span>
                <div className="h-px w-14 bg-cu-gold" />
              </motion.div>

              {/* Ghost last name */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="overflow-hidden -mt-4 mb-6"
              >
                <span className="text-[5rem] sm:text-[8rem] lg:text-[10rem] font-black leading-none tracking-tighter text-white/[0.07] uppercase select-none">
                  CARTER
                </span>
              </motion.div>

              {/* Info line */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="text-white/60 text-base sm:text-lg mb-10 font-light tracking-wide"
              >
                Mechanical Engineering · Math &amp; Aerospace Minors · Boulder, CO
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#projects"
                  className="px-8 py-4 bg-cu-gold text-black font-bold text-sm tracking-[0.15em] uppercase hover:bg-cu-gold-light transition-colors duration-200"
                >
                  EXPLORE WORK
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border border-cu-gold text-cu-gold font-bold text-sm tracking-[0.15em] uppercase hover:bg-cu-gold/10 transition-colors duration-200"
                >
                  GET IN TOUCH
                </a>
                <a
                  href="https://www.linkedin.com/in/logan-carter-35h/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-white/30 text-white/70 font-bold text-sm tracking-[0.15em] uppercase hover:border-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  LINKEDIN
                </a>
              </motion.div>
            </div>

            {/* ── Right: portrait ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-72 h-[420px]">
                {/* Outer gold frame */}
                <div className="absolute -inset-1.5 border border-cu-gold/35" />
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-7 h-7 border-l-2 border-t-2 border-cu-gold" />
                <div className="absolute top-0 right-0 w-7 h-7 border-r-2 border-t-2 border-cu-gold" />
                <div className="absolute bottom-0 left-0 w-7 h-7 border-l-2 border-b-2 border-cu-gold" />
                <div className="absolute bottom-0 right-0 w-7 h-7 border-r-2 border-b-2 border-cu-gold" />

                {/* Photo */}
                <img
                  src="/images/profile/logan.jpg"
                  alt="Logan Carter"
                  className="w-full h-full object-cover object-top"
                />

                {/* Bottom label overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent pt-12 pb-4 px-4">
                  <p className="font-mono text-[9px] text-cu-gold tracking-[0.3em] uppercase">
                    Logan Carter
                  </p>
                  <p className="font-mono text-[8px] text-white/45 tracking-wider mt-0.5">
                    Mechanical Engineer · CU Boulder
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll cue — vertical on right */}
      <motion.div
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-8 right-8 z-10 hidden lg:flex flex-col items-center gap-3"
      >
        <span
          className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={18} className="text-cu-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
