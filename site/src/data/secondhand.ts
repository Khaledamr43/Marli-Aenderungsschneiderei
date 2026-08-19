/**
 * Second-Hand-Auswahl — Sektion "Second-Hand Auswahl".
 * Fotos sind Platzhalter (freie Produktfotos, keine echten Second-Hand-
 * Stücke) — bei echtem Warenbestand durch reale Fotos ersetzen.
 */
import type { ImageMetadata } from 'astro';
import cocktailkleidFoto from '../images/secondhand-cocktailkleid-schwarz.jpg';
import jerseykleidFoto from '../images/secondhand-jerseykleid-pink.jpg';
import maxikleidFoto from '../images/secondhand-maxikleid-leo.jpg';
import minikleidFoto from '../images/secondhand-minikleid-punkte.jpg';
import musterkleidFoto from '../images/secondhand-musterkleid-schwarzweiss.jpg';
import bluseFoto from '../images/secondhand-bluse-floral.jpg';
import rockFoto from '../images/secondhand-rock-gruen.jpg';
import mantelFoto from '../images/secondhand-mantel-camel.jpg';

export interface SecondhandStueck {
  titel: string;
  foto: ImageMetadata;
}

export const secondhandStuecke: SecondhandStueck[] = [
  { titel: 'Cocktailkleid', foto: cocktailkleidFoto },
  { titel: 'Jerseykleid', foto: jerseykleidFoto },
  { titel: 'Maxikleid', foto: maxikleidFoto },
  { titel: 'Minikleid', foto: minikleidFoto },
  { titel: 'Musterkleid', foto: musterkleidFoto },
  { titel: 'Bluse', foto: bluseFoto },
  { titel: 'Rock', foto: rockFoto },
  { titel: 'Wollmantel', foto: mantelFoto },
];
