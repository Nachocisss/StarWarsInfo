export interface startwarsProps {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films?: (string)[] | null;
    species?: (string)[] | null;
    vehicles?: (string)[] | null;
    starships?: (string)[] | null;
    created: string;
    edited: string;
    url: string;
  }
  