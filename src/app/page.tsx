import LeadForm from "@/components/LeadForm";
import ScrollReveal from "@/components/ScrollReveal";
import AuroraBlur from "@/components/AuroraBlur";
import ChromaCard from "@/components/ChromaCard";
import CountUp from "@/components/CountUp";
import GradientText from "@/components/GradientText";
import SpotlightCard from "@/components/SpotlightCard";
import Marquee from "@/components/Marquee";
import {
  IconBank,
  IconBolt,
  IconChart,
  IconShield,
  IconBriefcase,
  IconColumns,
  IconRefresh,
  IconWrench,
  IconDoc,
  IconGlobe,
  IconHandshake,
  IconSparkle,
  IconLock,
  IconStar,
  IconBuilding,
  IconArrowRight,
} from "@/components/Icons";

export default function Page() {
  return (
    <>
      <ScrollReveal />

      {/* TOP BAR */}
      <div className="top-bar">
        Limited availability this week — No application fees · No hard credit
        pull · Funding possible in 24–48 hours —{" "}
        <a href="#form">Pre-Qualify Now →</a>
      </div>

      {/* NAV */}
      <nav>
        <a
          href="https://bigthinkcapital.com"
          target="_blank"
          rel="noreferrer"
          className="logo-link"
          aria-label="Big Think Capital"
        >
          <img
            src="/logo.png"
            alt="Big Think Capital"
            className="logo-img"
          />
        </a>
        <div className="nav-right">
          <a className="btn-nav" href="#form" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            Get Funded <IconArrowRight size={16} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero-outer" style={{ position: "relative", overflow: "hidden" }}>
        <AuroraBlur />
        <div className="hero" id="form" style={{ position: "relative", zIndex: 1 }}>
          <div>
            <div className="badge">
              <span className="live-dot"></span>
              Funding available today
            </div>

            <h1>
              Get Up to $500K
              <br />
              in Business Funding —
              <br />
              <GradientText className="accent">Even If Your Bank Said No</GradientText>
            </h1>

            <p className="hero-desc">
              No banks. No hard credit pull. No application fees.
              <br />
              Pre-qualify in 60 seconds — funding available as soon as today.
            </p>

            <div className="trust-anchor">
              $1.5B+ funded · 45,000+ clients · 4.9 on Trustpilot
            </div>

            <div className="pain-bullets">
              <div className="pain-item">
                <span className="pain-check">✓</span> Denied by a bank or
                traditional lender
              </div>
              <div className="pain-item">
                <span className="pain-check">✓</span> Need $25K–$500K fast —
                this week
              </div>
              <div className="pain-item">
                <span className="pain-check">✓</span> Strong revenue but low or
                thin credit
              </div>
              <div className="pain-item">
                <span className="pain-check">✓</span> Don&apos;t want a hard
                pull on your credit
              </div>
              <div className="pain-item">
                <span className="pain-check">✓</span> Cash flow gaps killing
                your momentum
              </div>
              <div className="pain-item">
                <span className="pain-check">✓</span> Big opportunity you
                can&apos;t afford to miss
              </div>
            </div>

            <div className="stat-strip">
              <div className="stat-block">
                <span className="stat-num">
                  <CountUp to={1.5} decimals={1} prefix="$" suffix="B+" duration={1400} />
                </span>
                <span className="stat-lbl">Total Funded</span>
              </div>
              <div className="stat-block">
                <span className="stat-num">
                  <CountUp to={45} suffix="K+" duration={1400} />
                </span>
                <span className="stat-lbl">Clients</span>
              </div>
              <div className="stat-block">
                <span className="stat-num">24–48hr</span>
                <span className="stat-lbl">Approval</span>
              </div>
              <div className="stat-block">
                <span className="stat-num">
                  <CountUp to={4.9} decimals={1} duration={1400} />
                </span>
                <span className="stat-lbl">Trustpilot</span>
              </div>
            </div>

            <div className="trust-chips">
              <span className="tc">
                <span className="tc-icon">✓</span> No hard credit pull
              </span>
              <span className="tc">
                <span className="tc-icon">✓</span> Rates from 7%
              </span>
              <span className="tc">
                <span className="tc-icon">✓</span> No min. credit score
              </span>
              <span className="tc">
                <span className="tc-icon">✓</span> Up to $1,000,000
              </span>
              <span className="tc">
                <span className="tc-icon">✓</span> No application fees
              </span>
            </div>
          </div>

          {/* FORM */}
          <LeadForm />
        </div>
      </div>

      {/* TICKER */}
      <div className="ticker-bar">
        <Marquee duration={50}>
          {[
            ["$182K", "Working Capital", "Houston, TX"],
            ["$750K", "SBA Loan", "Miami, FL"],
            ["$94K", "Equipment Loan", "Denver, CO"],
            ["$310K", "Line of Credit", "Atlanta, GA"],
            ["$1.1M", "Term Loan", "Los Angeles, CA"],
            ["$55K", "Working Capital", "Chicago, IL"],
            ["$490K", "Business Expansion", "Dallas, TX"],
          ].map(([amt, product, loc], i) => (
            <span className="t-item" key={i}>
              <strong>{amt}</strong> {product} · {loc}{" "}
              <span className="t-sep">|</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* THIS IS FOR YOU IF */}
      <section className="for-you-section">
        <div className="container">
          <div className="for-you-grid">
            <div className="for-you-left">
              <div className="s-label" style={{ marginBottom: 12 }}>
                This Is For You If…
              </div>
              <h2
                className="s-title"
                style={{ marginBottom: 20, fontSize: "clamp(26px,3vw,38px)" }}
              >
                Sound Familiar?
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  maxWidth: 380,
                }}
              >
                You don&apos;t need a perfect credit score or a Wall Street
                connection. You need a lender who actually gets it.
              </p>
            </div>
            <div className="for-you-checks">
              <div className="fyc-item">
                <span className="fyc-icon"><IconBank size={22} /></span>
                <div>
                  <div className="fyc-title">
                    Your bank said no — or gave you the runaround
                  </div>
                  <div className="fyc-sub">
                    Traditional banks reject 80% of small business loan
                    applications. We fund what they won&apos;t.
                  </div>
                </div>
              </div>
              <div className="fyc-item">
                <span className="fyc-icon"><IconBolt size={22} /></span>
                <div>
                  <div className="fyc-title">
                    You need capital this week — not next quarter
                  </div>
                  <div className="fyc-sub">
                    Opportunities don&apos;t wait. Neither do we. Funding
                    possible in as little as 24–48 hours.
                  </div>
                </div>
              </div>
              <div className="fyc-item">
                <span className="fyc-icon"><IconChart size={22} /></span>
                <div>
                  <div className="fyc-title">
                    Your revenue is strong but credit is thin
                  </div>
                  <div className="fyc-sub">
                    We look at the full picture — cash flow, revenue, and
                    trajectory. Not just a number.
                  </div>
                </div>
              </div>
              <div className="fyc-item">
                <span className="fyc-icon"><IconShield size={22} /></span>
                <div>
                  <div className="fyc-title">
                    You don&apos;t want a hard pull on your credit
                  </div>
                  <div className="fyc-sub">
                    We pre-qualify with a soft pull only. Zero impact on your
                    score to see your options.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MICRO CASE PROOFS */}
      <section className="case-proof-section">
        <div className="container">
          <div
            className="s-label"
            style={{ marginBottom: 12, display: "block" }}
          >
            Real Approvals. Real Businesses.
          </div>
          <h2
            className="s-title"
            style={{ marginBottom: 10, fontSize: "clamp(24px,3vw,36px)" }}
          >
            People Just Like You Got Funded
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "var(--muted)",
              marginBottom: 32,
            }}
          >
            These aren&apos;t cherry-picked success stories. This is a Tuesday
            at Big Think Capital.
          </p>
          <div className="case-grid">
            <ChromaCard className="case-card">
              <div className="case-amount">$120K</div>
              <div className="case-label">Approved in 48 Hours</div>
              <div className="case-divider"></div>
              <div className="case-detail"><IconBuilding size={16} /> Construction company, Texas</div>
              <div className="case-detail"><IconChart size={16} /> 580 credit score</div>
              <div className="case-detail"><IconSparkle size={16} /> $45K/month revenue</div>
              <div className="case-quote">
                &ldquo;Banks said we weren&apos;t creditworthy. Big Think had us
                funded before the weekend.&rdquo;
              </div>
            </ChromaCard>
            <ChromaCard className="case-card">
              <div className="case-amount">$85K</div>
              <div className="case-label">Funded Same Day</div>
              <div className="case-divider"></div>
              <div className="case-detail"><IconBuilding size={16} /> Restaurant owner, New York</div>
              <div className="case-detail"><IconChart size={16} /> 610 credit score</div>
              <div className="case-detail"><IconSparkle size={16} /> $38K/month revenue</div>
              <div className="case-quote">
                &ldquo;I needed working capital to cover payroll. They moved
                faster than I thought possible.&rdquo;
              </div>
            </ChromaCard>
            <ChromaCard className="case-card">
              <div className="case-amount">$310K</div>
              <div className="case-label">Approved in 24 Hours</div>
              <div className="case-divider"></div>
              <div className="case-detail"><IconBuilding size={16} /> Logistics company, Georgia</div>
              <div className="case-detail"><IconChart size={16} /> 640 credit score</div>
              <div className="case-detail"><IconSparkle size={16} /> $120K/month revenue</div>
              <div className="case-quote">
                &ldquo;We had a contract that required immediate capital. Big
                Think made it happen.&rdquo;
              </div>
            </ChromaCard>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div className="s-label">Simple Process</div>
          <h2 className="s-title">Funded in 3 Steps</h2>
          <p className="s-desc">
            We&apos;ve stripped out everything that slows banks down. From first
            click to funded account in as little as 24 hours.
          </p>
          <div className="steps-row">
            <div className="step-block reveal">
              <div className="step-num">01</div>
              <h3>Apply in 60 Seconds</h3>
              <p>
                Complete a quick online form — or call us directly. Soft credit
                pull only, no impact on your score. No bank visits, no mountains
                of paperwork.
              </p>
            </div>
            <div className="step-block reveal">
              <div className="step-num">02</div>
              <h3>Talk to Your Expert</h3>
              <p>
                A dedicated Big Think Capital funding specialist calls you
                within hours, reviews your options, and walks you through the
                best offers for your business.
              </p>
            </div>
            <div className="step-block reveal">
              <div className="step-num">03</div>
              <h3>Get Funded Fast</h3>
              <p>
                Choose your offer, sign electronically, and receive capital as
                soon as the next business day. No waiting, no guessing — just
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* PRODUCTS */}
      <section className="section">
        <div className="container">
          <div className="s-label">Funding Solutions</div>
          <h2 className="s-title">
            Every Type of Capital,
            <br />
            Under One Roof
          </h2>
          <p className="s-desc">
            One application unlocks multiple offers. We match you to the right
            product — not just the fastest close.
          </p>
          <div className="prod-grid">
            {[
              {
                icon: <IconBriefcase size={22} />,
                t: "Business Term Loans",
                d: "Fixed payments, clear timeline. Ideal for expansion, equipment, or consolidating debt. Rates from 7%.",
                r: "Up to $1,000,000",
              },
              {
                icon: <IconBank size={22} />,
                t: "SBA Loans",
                d: "Government-backed, low-interest, long-term. For real estate, major expansion, or refinancing existing debt.",
                r: "Up to $5,000,000",
              },
              {
                icon: <IconRefresh size={22} />,
                t: "Line of Credit",
                d: "Revolving access to funds. Draw what you need, repay, and borrow again. Only pay interest on what you use.",
                r: "Up to $500,000",
              },
              {
                icon: <IconBolt size={22} />,
                t: "Working Capital",
                d: "Fast cash for daily operations, payroll, or seasonal slowdowns. Repayments that flex with your revenue.",
                r: "Up to $500,000",
              },
              {
                icon: <IconWrench size={22} />,
                t: "Equipment Financing",
                d: "Fund machinery, vehicles, or tech without draining reserves. The equipment itself serves as collateral.",
                r: "Up to $500,000",
              },
              {
                icon: <IconDoc size={22} />,
                t: "Invoice Financing",
                d: "Turn outstanding invoices into immediate cash. Stop waiting on slow-paying clients to fund operations.",
                r: "Up to $5,000,000",
              },
            ].map((p) => (
              <SpotlightCard className="prod-card reveal" key={p.t}>
                <div className="prod-icon">{p.icon}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                <div className="prod-range">{p.r}</div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* WHY BIG THINK */}
      <section className="section">
        <div className="container">
          <div className="s-label">Why Big Think Capital</div>
          <h2 className="s-title">
            Banks Say No.
            <br />
            We Find a Way.
          </h2>
          <p className="s-desc">
            We&apos;re the direct source behind the biggest loan platforms —
            minus the middlemen, delays, and runaround.
          </p>
          <div className="why-grid">
            {[
              {
                icon: <IconBolt size={22} />,
                t: "Same-Day Decisions",
                d: "Our real-time underwriting evaluates your application immediately. Most decisions arrive the same day you apply — no waiting, no chasing.",
              },
              {
                icon: <IconShield size={22} />,
                t: "Soft Pull Only",
                d: "We check your eligibility using a soft credit pull — so you can explore your options risk-free without touching your credit score.",
              },
              {
                icon: <IconGlobe size={22} />,
                t: "One App, Multiple Lenders",
                d: "We're connected to an international network of lenders. One form gives you access to every product we offer — no shopping around required.",
              },
              {
                icon: <IconHandshake size={22} />,
                t: "A Dedicated Expert in Your Corner",
                d: "Your funding specialist is an advisor, not a salesperson. They guide you to the best fit — even if that means telling you to wait.",
              },
            ].map((w) => (
              <div className="why-card reveal" key={w.t}>
                <div className="why-icon">{w.icon}</div>
                <div>
                  <h3>{w.t}</h3>
                  <p>{w.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="s-label">Client Reviews</div>
          <h2 className="s-title">
            4.9 Stars on Trustpilot.
            <br />
            3,500+ Verified Reviews.
          </h2>
          <p className="s-desc">
            Real business owners. Real results. See why thousands choose Big
            Think Capital.
          </p>
          <div className="testi-grid">
            {[
              {
                text: "They overlooked underwriting hurdles that other companies couldn't handle and helped me take my business to the next level. Funding was next day — they held my hand the entire way.",
                author: "Marcus R.",
                role: "Construction Business Owner · Texas",
              },
              {
                text: "Daniel assisted me even while he was in the hospital. He and the entire Big Think Capital team made me feel like family and showed me they were truly looking out for my best interests.",
                author: "Amanda S.",
                role: "Healthcare Business Owner · Florida",
              },
              {
                text: "The loan only took a few days to get approved and funded. Joe and Nic kept me in the loop the whole time, walked me through every step. Absolutely working with Big Think Capital again.",
                author: "Kevin M.",
                role: "Restaurant Owner · New York",
              },
            ].map((t) => (
              <div className="testi-card reveal" key={t.author}>
                <div className="testi-stars" style={{ display: "flex", gap: 2 }}>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <IconStar key={i} size={16} />
                  ))}
                </div>
                <p className="testi-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testi-author">{t.author}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <div className="btm-cta">
        <h2>
          Ready to <span>Get Funded?</span>
        </h2>
        <p>
          Apply in 60 seconds. Get matched to offers today. Funded as soon as
          tomorrow.
        </p>
        <div className="btm-btns">
          <a className="btn-gold" href="#form" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            Start My Application <IconArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo-wrap">
          <img
            src="/logo.png"
            alt="Big Think Capital"
            className="footer-logo-img"
          />
        </div>
        <div>© 2025 Big Think Capital · All rights reserved</div>
        <div>
          Rates from 7% · No credit impact to apply · Equal Opportunity Lender
        </div>
      </footer>
    </>
  );
}
