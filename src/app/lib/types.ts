export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  lineup: Artist[];
  slug: string;
}

export interface Artist {
  id: string;
  name: string;
  genre: string;
  image: string;
  slug: string;
}

export interface Venue {
  id: string;
  name: string;
  address: string;
  capacity: number;
}
