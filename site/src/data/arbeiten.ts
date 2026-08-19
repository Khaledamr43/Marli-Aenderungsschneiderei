/**
 * Arbeiten-Galerie — Sektion "Änderungen & Maßarbeit".
 * Fotos sind Platzhalter (freie Produktfotos, keine echten Kundenstücke) —
 * bei echten Vorher/Nachher-Aufnahmen durch reale Fotos ersetzen.
 * `fotoFit: 'contain'` zeigt das ganze Foto ohne Beschnitt (mit Rand),
 * falls das Motiv zu hochformatig für die 4:5-Karte ist.
 */
import type { ImageMetadata } from 'astro';
import jackeFoto from '../bilder/arbeit-jacke-navy.jpg';
import jeansFoto from '../bilder/arbeit-jeans-denim.jpg';
import abendkleidFoto from '../bilder/arbeit-abendkleid-navy.jpg';
import kleidFoto from '../bilder/arbeit-kleid-punkte.jpg';

export interface Arbeit {
  titel: string;
  foto: ImageMetadata;
  fotoFit?: 'cover' | 'contain';
}

export const arbeiten: Arbeit[] = [
  { titel: 'Jacke tailliert', foto: jackeFoto },
  { titel: 'Jeans gekürzt', foto: jeansFoto },
  { titel: 'Abendkleid enger genäht', foto: abendkleidFoto },
  { titel: 'Kleid neu gesäumt', foto: kleidFoto, fotoFit: 'contain' },
];

export const leistungen: string[] = [
  'Kürzen',
  'Enger / Weiter',
  'Reißverschluss',
  'Futter',
  'Brautmode',
  'Leder',
  'Reparaturen',
  'Mäntel & Jacken',
  'Blusen',
  'Herrenmode',
  'Kinderkleidung',
  'Gardinen',
];
