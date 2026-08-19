/**
 * Second-Hand-Auswahl — Sektion "Second-Hand Auswahl".
 * Fotos sind Platzhalter (freie Produktfotos, keine echten Second-Hand-
 * Stücke) — bei echtem Warenbestand durch reale Fotos ersetzen.
 */
import type { ImageMetadata } from 'astro';
import cocktailkleidFoto from '../bilder/secondhand-cocktailkleid-schwarz.jpg';
import jerseykleidFoto from '../bilder/secondhand-jerseykleid-pink.jpg';
import maxikleidFoto from '../bilder/secondhand-maxikleid-leo.jpg';
import minikleidFoto from '../bilder/secondhand-minikleid-punkte.jpg';
import musterkleidFoto from '../bilder/secondhand-musterkleid-schwarzweiss.jpg';
import bluseFoto from '../bilder/secondhand-bluse-floral.jpg';
import rockFoto from '../bilder/secondhand-rock-gruen.jpg';
import mantelFoto from '../bilder/secondhand-mantel-camel.jpg';

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
