interface Name {
  name: string;
}

interface Url {
  url: string;
}

interface Films {
  films: string[];
}

interface Vehicles {
  vehicles: string[];
}

interface Species {
  species: string[];
}

export interface Planet extends Name, Films, Url {
  climate: string;
  diameter: string;
  gravity: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
}

export interface Person extends Name, Films, Species, Url, Vehicles {
  birth_year: string;
  eye_color: string;
  gender: 'male' | 'female' | 'n/a';
  hair_color: string;
  height: string;
  homeworld: string;
  skin_color: string;
}
