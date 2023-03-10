export interface Country {
  name: { common: string };
  capital: string;
  region: string;
  population: number;
  flags: {
    svg: string;
    alt: string;
  };
  subregion: string;
  unMember: boolean;
  area: number;
  coatOfArms: {
    svg: string;
  };
}

export interface Flag {
  svg: string;
  alt: string;
}

export interface SelectOption {
  value: string;
  label: string;
}
