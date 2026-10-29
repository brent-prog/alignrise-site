import type { Metadata } from "next";
import Image from "next/image";
import "./about.css";

export const metadata: Metadata = {
  title: "About AlignRISE | Built to Help Good Businesses Last",
  description: "Why Brent Pattison created AlignRISE: a practical, self-directed business alignment system to help entrepreneurs build businesses that can thrive beyond their founders.",
  alternates: { canonical: "https://alignrise.ca/about/" },
  openGraph: {
    title: "The AlignRISE Story | Build Something That Lasts",
    description: "A business can be profitable and still depend entirely on its owner. Here's why AlignRISE was created to help entrepreneurs build something that lasts.",
    url: "https://alignrise.ca/about/",
    type: "article",
  },
};

const chapters = [
  {
    label: "THE ENTREPRENEUR",
    title: "You built something remarkable.",
    paragraphs: [
      "I have enormous respect for entrepreneurs. Someone can be a brilliant plumber, accountant, manufacturer, architect or baker, take a risk on their own abilities, and build a business people are willing to pay for. That's a pretty amazing thing.",
      "I've met owners who have built very successful businesses, created jobs, supported their families and earned the freedom to enjoy the life they've worked for. They should be proud of that.",
      "But as I've gotten to know more of these business owners, there's a question I keep coming back to. It's a simple one, and the answer often surprises me.",
    ],
  },
  {
    label: "THE QUESTION",
    title: "What's your business actually worth?",
    paragraphs: [
      "Ask someone what their house is worth and they'll usually give you a pretty good estimate. Ask them what their business is worth, the very thing that generated the money to buy that house, and sometimes they have no idea.",
      "A business can generate substantial income and still be difficult to sell. The owner might be the chief salesperson, the de facto CFO and the person everyone calls when a decision has to be made. Even when they've hired good people, they may never have fully delegated the decisions that matter.",
      "Here's another question I like to ask: what would happen if you took a two-month vacation without your phone or computer? Would the business keep serving customers, making good decisions and growing?",
      "When the critical knowledge and decisions live with one person, a buyer sees risk. That can change what they're willing to pay. More importantly, it can put the business itself at risk when that person steps away.",
    ],
    quote: "A business that makes you money isn't necessarily a business that can succeed without you.",
  },
  {
    label: "COMING HOME",
    title: "I knew the world. I barely knew my own business community.",
    paragraphs: [
      "I spent much of my career working for an American-based company, travelling around the world, building operations and developing leaders. I worked with major organizations like Sprint, AT&T, Capital One and T-Mobile. At one point, the operation I'd helped build for Sprint had grown from 75 people to around 4,000 across six countries.",
      "When I left iQor, I'd already lived in Guelph, Ontario, for roughly twenty years. Yet when I looked at my LinkedIn connections, I realized I had only a handful of business relationships in the city I called home.",
      "So I started getting involved. I joined the Chamber of Commerce and a local BNI chapter, attended networking events throughout Guelph and the Kitchener-Waterloo area, and organized opportunities to connect people while supporting local community organizations.",
      "Over the next several years, I met hundreds of entrepreneurs. I loved hearing what they'd created and what they wanted to achieve. Many were interested in the business frameworks and operating experience I could share. But most weren't in a position to hire someone with my consulting background on an ongoing basis.",
      "I wanted to find a better way to help them.",
    ],
  },
  {
    label: "THE FUNDAMENTALS",
    title: "The principles are similar. The businesses aren't.",
    paragraphs: [
      "When I left the corporate world, I also seriously explored buying a small business. I studied the Harvard Business Review guide to buying a small business, along with books and methodologies like The E-Myth, Traction, EOS and Scaling Up.",
      "I don't just read these things. I study them, compare them and ask how their ideas relate to what I've learned from decades of running operations and working with some of the world's largest companies.",
      "What kept striking me was how consistent the fundamentals really are. Know why the business exists and who it serves. Define the value it creates. Make it clear who is responsible for what. Build repeatable, trainable processes. Document the knowledge. Measure the right results. Develop people and keep improving.",
      "I wasn't trying to invent a new set of laws for running a business. I wanted to make the principles that already work easier for an entrepreneur to understand and apply.",
      "Because although those principles are widely applicable, every business is unique. And especially in a smaller company, that uniqueness often starts with the person who built it.",
    ],
  },
  {
    label: "WHY ALIGNRISE",
    title: "A system you can run yourself.",
    paragraphs: [
      "I'd spent years developing the 3P business assessment and improvement methodology around People, Product and Profit, and the leadership, management and coaching systems needed to support them. I could use it in my consulting work. But the people I kept meeting in my own community needed something they could use without paying for an ongoing consulting engagement.",
      "I also understood something else about entrepreneurs. They took the risks. They built the business. They want to make their own decisions and maintain control of what they've created.",
      "I felt that myself when testing business operating software. Why was I putting so much information about my own business into someone else's system? I wanted useful tools, not another dependency.",
      "So I began turning the consulting methodology into AlignRISE: a flexible, self-directed toolkit to assess the business across its core functions, see where alignment is missing, set goals, prioritize improvements and turn those priorities into practical action.",
      "That includes the things business owners don't always have time or experience to formalize: roles and responsibilities, documented processes, meaningful scorecards, clear goals and a consistent rhythm for accountability. Today's AI tools can help with the work, but the owner should remain responsible for the decisions.",
    ],
    quote: "Nobody knows their business better than the person who built it.",
  },
  {
    label: "YOUR BUSINESS. YOUR DECISIONS.",
    title: "You decide how much help you want.",
    paragraphs: [
      "Some owners will want to work through the AlignRISE toolkit themselves. Some may prefer a concentrated assessment to identify the biggest gaps and get moving. Others might benefit from periodic check-ins with someone who understands the methodology and can challenge their thinking or hold them accountable to the commitments they've made.",
      "That's their decision. My goal isn't to tell an entrepreneur how to run their business or make them dependent on me. It's to give them a practical way to make informed, accountable decisions about the business they know best.",
      "They decide what success looks like. They decide what matters most, how quickly they want to make changes and where they want help. The system exists to make those choices clearer and easier to act on.",
    ],
  },
  {
    label: "THE LEGACY",
    title: "Build something that lasts.",
    paragraphs: [
      "Here's what I ultimately want AlignRISE to accomplish: I want more good businesses to survive.",
      "I don't want to see a successful business shut its doors because the owner decides they're done. Or an owner pass away and leave their family with a company that generated a good living for years, but can't be sold or operated without them.",
      "I want more entrepreneurs to build businesses that remain profitable, can transition to new leadership and ownership, and keep creating value for their employees, customers and communities. Whether an owner wants to sell, arrange succession or simply enjoy more freedom, I want the business to have a future beyond their personal involvement.",
      "And I want them to be proud of more than the financial security they created. They took a skill or an idea, turned it into something other people valued, and built an organization capable of continuing that work.",
      "That's the reason I've put so much effort into AlignRISE. It began with the remarkable entrepreneurs I've met in the community I call home. I hope it helps many more, wherever they're building their businesses.",
    ],
    quote: "You built something worth being proud of. Let's make sure you build something that lasts.",
  },
];

export default function AboutPage() {
  return (
    <main className="aboutPage">
      <nav className="nav" aria-label="Main navigation">
        <a className="navBrand" href="/" aria-label="AlignRISE home"><span className="navWordmark"><span>Align</span><strong>RISE</strong></span></a>
        <div className="aboutNavLinks"><a href="/">Home</a><a href="/#system">The System</a><a href="/#review">How It Works</a><a href="/about/" aria-current="page">About</a></div>
        <a className="navCta" href="/foundation">Get Started</a>
      </nav>
      <section className="aboutHero">
        <div className="aboutHeroInner">
          <div>
            <p className="eyebrow">About AlignRISE™ / The founder's story</p>
            <Image src="/alignrise-logo.svg" alt="AlignRISE" width={185} height={185} className="aboutHeroLogo" priority />
            <h1>Build something <em>that lasts.</em></h1>
            <p className="aboutHeroLead">I created AlignRISE because I've met too many remarkable entrepreneurs whose businesses deserve to be worth more, and to last longer, than the owners themselves.</p>
            <a href="#story-1" className="aboutJump">Here's why I built it ↓</a>
          </div>
          <div className="aboutHeroAside"><span>01 / THE QUESTION</span><strong>What is your business actually worth?</strong><p>And what would happen to it if you weren't there tomorrow?</p></div>
        </div>
      </section>
      <div className="aboutChapterIndex" aria-label="Story chapters">{chapters.map((chapter,i)=><a key={chapter.label} href={`#story-${i+1}`}>{String(i+1).padStart(2,"0")} <span>{chapter.label}</span></a>)}</div>
      {chapters.map((chapter,i)=>(
        <section id={`story-${i+1}`} key={chapter.label} className={`aboutChapter ${i%2 ? "aboutChapterAlt" : ""}`}>
          <div className="aboutChapterInner">
            <div className="aboutChapterHeading"><p className="aboutChapterLabel">{String(i+1).padStart(2,"0")} / {chapter.label}</p><h2>{chapter.title}</h2></div>
            <div className="aboutChapterProse">{chapter.paragraphs.map((p,j)=><p key={j}>{p}</p>)}{chapter.quote && <blockquote>{chapter.quote}</blockquote>}</div>
          </div>
        </section>
      ))}
      <section className="aboutOutro">
        <Image src="/alignrise-icon.svg" alt="" width={70} height={70} />
        <p className="eyebrow">Your business. Your future.</p>
        <h2>Make the business stronger.<br/>Make the future yours.</h2>
        <p>AlignRISE gives you a practical way to assess the business, identify the gaps and build the systems to make it more valuable and less dependent on you.</p>
        <div className="aboutOutroActions"><a className="buttonPrimary" href="/foundation">Explore AlignRISE</a><a className="aboutGhostButton" href="/">Back to the main site</a></div>
        <p className="aboutFounder">Brent Pattison · Creator of AlignRISE™ · Guelph, Ontario</p>
      </section>
      <footer className="aboutFooter"><a href="/">Align<strong>RISE</strong></a><span>© {new Date().getFullYear()} AlignRISE™ by 3P Solutions</span><a href="https://keepbusinesssimple.com/about/">Keep Business Simple story</a></footer>
    </main>
  );
}
