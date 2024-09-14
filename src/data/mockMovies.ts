import { Movie } from "../types/movie";

export const mockMovies: Movie[] = [
  {
    movieId: 1,
    title: 'Star Wars: The Rise of Skywalker',
    rating: 9.3,
    releaseDate: '2020',
    posterUrl: 'https://imageio.forbes.com/specials-images/imageserve/5df92d2625ab5d0007cea565/-Star-Wars-The-Rise-Of-Skywalker--banner/0x0.jpg?crop=867,487,x37,y32,safe&height=399&width=711&fit=bounds',
    description: 'The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.',
    actors: [
      { name: 'Daisy Ridley', character: 'Rey', photoUrl: 'https://example.com/daisy-ridley.jpg' },
      { name: 'Adam Driver', character: 'Kylo Ren', photoUrl: 'https://example.com/adam-driver.jpg' },
      { name: 'John Boyega', character: 'Finn', photoUrl: 'https://example.com/john-boyega.jpg' },
    ],
    genre: ['Action', 'Adventure', 'Fantasy'],
  },
  {
    movieId: 2,
    title: 'The Godfather',
    rating: 9.2,
    releaseDate: '2021',
    posterUrl: 'https://lumiere-a.akamaihd.net/v1/images/image_ccd6a58d.jpeg',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    actors: [
      { name: 'Marlon Brando', character: 'Don Vito Corleone', photoUrl: 'https://example.com/marlon-brando.jpg' },
      { name: 'Al Pacino', character: 'Michael Corleone', photoUrl: 'https://example.com/al-pacino.jpg' },
      { name: 'James Caan', character: 'Sonny Corleone', photoUrl: 'https://example.com/james-caan.jpg' },
    ],
    genre: ['Crime', 'Drama'],
  },
  {
    movieId: 3,
    title: 'The Dark Knight',
    rating: 9.0,
    releaseDate: '2022',
    posterUrl: 'https://i5.walmartimages.com/asr/9e8c3b1f-4217-4fdc-8071-95c24487fc02.f241660ccc0a732955a1de5e9985d3a2.jpeg',
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    actors: [
      { name: 'Christian Bale', character: 'Bruce Wayne / Batman', photoUrl: 'https://example.com/christian-bale.jpg' },
      { name: 'Heath Ledger', character: 'The Joker', photoUrl: 'https://example.com/heath-ledger.jpg' },
      { name: 'Aaron Eckhart', character: 'Harvey Dent / Two-Face', photoUrl: 'https://example.com/aaron-eckhart.jpg' },
    ],
    genre: ['Action', 'Crime', 'Drama'],
  },
  {
    movieId: 4,
    title: 'The Dark Knight Rises',
    rating: 9.0,
    releaseDate: '2023',
    posterUrl: 'https://images.thedirect.com/media/photos/1am_real3d.jpg',
    description: 'Eight years after the fall of Batman, Gotham City is threatened by the arrival of Bane, a terrorist who aims to finish what the Joker started.',
    actors: [
      { name: 'Christian Bale', character: 'Bruce Wayne / Batman', photoUrl: 'https://example.com/christian-bale.jpg' },
      { name: 'Tom Hardy', character: 'Bane', photoUrl: 'https://example.com/tom-hardy.jpg' },
      { name: 'Anne Hathaway', character: 'Selina Kyle / Catwoman', photoUrl: 'https://example.com/anne-hathaway.jpg' },
    ],
    genre: ['Action', 'Adventure'],
  },
];
