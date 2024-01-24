type Category = {
  category: string;
  id: number | null;
  image?: string;
};

type These = {
  title: string;
  author: string;
  publicationYear: number;
  language: "fr" | "ang";
  category: Category; // if no category i'm gonna put the thesis in the unassigned category which has an id of -1
  keywords?: string[];
  president?: string;
  rapporteur?: string;
  jury?: string[];
  link: string;
  cote: string;
};
