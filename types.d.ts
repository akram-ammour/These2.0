type Category = {
  category: string;
  // id: number | null;
  image?: string;
};

type These = {
  ord: number;
  year: number;
  title: string;
  author: string;
  langue: "Français (fre)" | "Anglais (eng)";
  category: string[] | undefined | null; // if no category i'm gonna put the thesis in the unassigned category which has an id of -1
  tags: string[];
  president: string;
  rapporteur: string;
  jury: string[];
  membreAssocie: string | string[] | null;
  profs: string[];
  href: string;
  // cote: string;
};
type sort =
  | ""
  | "orderDesc"
  | "titleAsc"
  | "titleDesc"
  | "authorAsc"
  | "authorDesc";
