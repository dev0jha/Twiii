export interface LafdaCardData {
  id: string;
  title: string;
  description: string;
  views: number;
  trendingRank?: number;
  tags: string[];
  votes: number;
  userVote?: "up" | "down" | null;
}

export const mockLafdaData: LafdaCardData[] = [
  {
    id: "1",
    title:
      "Dhruv Ratee versus manu arora is a debate that has been going on for years.",
    description:
      "Dhruv Ratee versus manu arora is a debate that has been going on for years. Who is the better cricketer? Dhruv Ratee is a better cricketer than manu arora.",
    views: 59342,
    trendingRank: 1,
    tags: ["cricket", "sports", "india", "pakistan"],
    votes: 100,
  },
  {
    id: "2",
    title: "Who is the better cricketer?",
    description:
      "Dhruv Ratee versus manu arora is a debate that has been going on for years. Who is the better cricketer? Dhruv Ratee is a better cricketer than manu arora.",
    views: 24323,
    trendingRank: 2,
    tags: ["cricket", "sports", "india", "pakistan"],
    votes: 100,
  },
  {
    id: "3",
    title: "React Dev Roasts Vue Community, Gets Ratio'd Into Oblivion",
    description:
      "A React fanboy decided to trash Vue.js in a Twitter thread. The Vue community united and delivered the most savage ratio in tech Twitter history. The original tweet got deleted but screenshots live forever.",
    views: 43432,
    trendingRank: 3,
    tags: ["ai", "technology", "jobs", "future"],
    votes: 354,
    userVote: null,
  },
  {
    id: "4",
    title: "Bootcamp Grad Claims 10x Engineer Status, Gets Humbled",
    description:
      "A 3-month bootcamp graduate posted their 'revolutionary' todo app and declared themselves a 10x engineer. Senior devs descended like vultures with code reviews that made grown developers cry.",
    views: 3523,
    tags: ["food", "lifestyle"],
    votes: 144,
    userVote: null,
  },
  {
    id: "5",
    title: "CSS-in-JS vs Tailwind: The Framework War Nobody Asked For",
    description:
      "A simple 'Tailwind is just inline styles' tweet triggered a 48-hour Twitter war between CSS purists and utility-first evangelists. Multiple tech influencers got involved and chaos ensued.",
    views: 2124,
    trendingRank: 4,
    tags: ["gaming", "technology", "entertainment", "consoles"],
    votes: 164,
    userVote: null,
  },
  {
    id: "6",
    title: "Startup CTO Exposed for Outsourcing Everything to Fiverr",
    description:
      "A whistleblower revealed that their 'genius' CTO was just a middleman outsourcing all development to $5 Fiverr gigs. The startup's $2M funding round suddenly made a lot more sense to investors.",
    views: 2124,
    tags: ["crypto", "finance", "investment"],
    votes: 69,
    userVote: null,
  },
];