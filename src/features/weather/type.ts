export interface Geo {
  country: { id: number; name: string } | null;
  district: unknown;
  locality: unknown;
  province: { id: number; name: string }| null;
}

export interface Fact {
  temp: number;
  icon: Icon;
}

export interface Coords {
  lat: number;
  lon: number;
}

export type Icon = string | null
