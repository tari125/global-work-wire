export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogoBg: string;
  location: string;
  salary: string;
  category: "AI & Data" | "Engineering" | "Design" | "DevOps" | "Marketing";
  tags: string[];
  postedTime: string;
  source: "LinkedIn Remote" | "RemoteOK" | "WeWorkRemotely" | "Indeed Global";
  applyUrl: string;
  featured?: boolean;
  verified?: boolean;
  applicantsCount?: number;
}

export const initialJobs: Job[] = [
  {
    id: "gww-01",
    title: "Senior Full Stack AI & Next.js Engineer",
    company: "Anthropic Partner Labs",
    companyLogoBg: "bg-purple-600",
    location: "Worldwide (Remote US / EU)",
    salary: "$145,000 - $190,000 / yr",
    category: "AI & Data",
    tags: ["Next.js 14", "TypeScript", "LLM APIs", "Python", "Tailwind"],
    postedTime: "12 mins ago",
    source: "RemoteOK",
    applyUrl: "https://remoteok.com",
    featured: true,
    verified: true,
    applicantsCount: 14,
  },
  {
    id: "gww-02",
    title: "Lead Cloud Kubernetes Architect",
    company: "FinTech Prime Global",
    companyLogoBg: "bg-blue-600",
    location: "Remote (United Kingdom / Europe)",
    salary: "£95,000 - £125,000 / yr",
    category: "DevOps",
    tags: ["Kubernetes", "AWS", "Terraform", "Docker", "Go"],
    postedTime: "30 mins ago",
    source: "LinkedIn Remote",
    applyUrl: "https://linkedin.com",
    featured: true,
    verified: true,
    applicantsCount: 29,
  },
  {
    id: "gww-03",
    title: "Principal UI/UX & Design Systems Lead",
    company: "Stripe Ecosystem Studio",
    companyLogoBg: "bg-indigo-600",
    location: "Remote (USA / Canada)",
    salary: "$130,000 - $160,000 / yr",
    category: "Design",
    tags: ["Figma", "Design Systems", "Component Architecture", "UX Research"],
    postedTime: "1 hour ago",
    source: "WeWorkRemotely",
    applyUrl: "https://weworkremotely.com",
    verified: true,
    applicantsCount: 42,
  },
  {
    id: "gww-04",
    title: "Staff Machine Learning Research Scientist",
    company: "DeepNeural Innovations",
    companyLogoBg: "bg-emerald-600",
    location: "Remote (North America)",
    salary: "$170,000 - $230,000 / yr",
    category: "AI & Data",
    tags: ["PyTorch", "Diffusion Models", "Transformers", "Distributed Training"],
    postedTime: "2 hours ago",
    source: "Indeed Global",
    applyUrl: "https://indeed.com",
    featured: true,
    verified: true,
    applicantsCount: 19,
  },
  {
    id: "gww-05",
    title: "Growth & SEO Marketing Director",
    company: "SaaS Scale Hypermedia",
    companyLogoBg: "bg-orange-600",
    location: "Remote (Global)",
    salary: "$110,000 - $140,000 / yr",
    category: "Marketing",
    tags: ["Programmatic SEO", "AdSense Strategy", "Organic Funnels", "Data Analytics"],
    postedTime: "3 hours ago",
    source: "RemoteOK",
    applyUrl: "https://remoteok.com",
    verified: true,
    applicantsCount: 38,
  },
  {
    id: "gww-06",
    title: "High-Throughput Distributed Backend Engineer",
    company: "Apex Ledger Networks",
    companyLogoBg: "bg-slate-800",
    location: "Remote (UK / Germany / USA)",
    salary: "€95,000 - €130,000 / yr",
    category: "Engineering",
    tags: ["Rust", "PostgreSQL", "Kafka", "gRPC", "Microservices"],
    postedTime: "4 hours ago",
    source: "LinkedIn Remote",
    applyUrl: "https://linkedin.com",
    verified: true,
    applicantsCount: 51,
  },
];

export interface NewsItem {
  id: string;
  title: string;
  source: "TechCrunch" | "Hacker News" | "Wired" | "VentureBeat";
  sourceColor: string;
  summary: string;
  timestamp: string;
  readTime: string;
  upvotes?: number;
  commentsCount?: number;
  category: "Generative AI" | "Cloud & DevOps" | "Startups & VC" | "Big Tech";
  url: string;
}

export const initialNews: NewsItem[] = [
  {
    id: "news-01",
    title: "Next-Gen Autonomous Agent Architectures Surpass Monolithic Web Backends in Enterprise Deployments",
    source: "TechCrunch",
    sourceColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
    summary: "New industry benchmarks show autonomous API aggregators and self-healing web microservices reduce server infrastructure overhead by 46% while doubling content throughput.",
    timestamp: "14 mins ago",
    readTime: "3 min read",
    upvotes: 482,
    commentsCount: 97,
    category: "Generative AI",
    url: "https://techcrunch.com",
  },
  {
    id: "news-02",
    title: "Why Tier-1 Remote Tech Vacancies Continue Offering Record Compensation Despite Office Mandates",
    source: "Hacker News",
    sourceColor: "text-orange-600 bg-orange-50 border-orange-200",
    summary: "Analysis of 12,000 remote offers reveals US and European engineering companies pay top percentile salaries to access global talent who work asynchronously.",
    timestamp: "45 mins ago",
    readTime: "4 min read",
    upvotes: 735,
    commentsCount: 241,
    category: "Startups & VC",
    url: "https://news.ycombinator.com",
  },
  {
    id: "news-03",
    title: "Programmatic Publisher Networks Report 400% Surge in High-CPC Revenue for Dedicated Niche Aggregators",
    source: "Wired",
    sourceColor: "text-blue-600 bg-blue-50 border-blue-200",
    summary: "Ad tech networks confirm that clean, single-purpose web platforms curating AI developments and transparent job vacancies achieve the highest advertiser bids in 2026.",
    timestamp: "2 hours ago",
    readTime: "2 min read",
    upvotes: 318,
    commentsCount: 64,
    category: "Big Tech",
    url: "https://wired.com",
  },
];
