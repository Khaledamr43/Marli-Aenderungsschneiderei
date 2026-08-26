/**
 * Kundenstimmen — Pool von zehn Zitaten, aus dem die Sektion pro Seitenaufruf
 * zufällig drei auswählt (siehe Testimonials.astro).
 * Erste Stimme aus der Figma-Design-System-Dokumentation übernommen,
 * die übrigen im gleichen Ton ergänzt (echte Zitate stehen noch aus).
 * Fotos sind Platzhalter (freie Placeholder-Portraits, keine echten
 * Kundinnen) — nur drei Fotos vorhanden, werden über die zehn Einträge
 * hinweg wiederverwendet. Bei echten Kundenstimmen durch reale Fotos
 * ersetzen.
 */
import type { ImageMetadata } from 'astro';
import andreaFoto from '../bilder/testimonial-andrea.jpg';
import sabineFoto from '../bilder/testimonial-sabine.jpg';
import juliaFoto from '../bilder/testimonial-julia.jpg';

export interface Kundenstimme {
  zitat: string;
  name: string;
  ort: string;
  foto: ImageMetadata;
}

export const kundenstimmen: Kundenstimme[] = [
  {
    zitat:
      'Meine Lieblingsjeans hat endlich die richtige Länge – und man sieht überhaupt nicht, dass sie gekürzt wurde.',
    name: 'Andrea K.',
    ort: 'Kundin aus Kolbermoor',
    foto: andreaFoto,
  },
  {
    zitat:
      'Mein Brautkleid saß nach der Änderung, als wäre es für mich geschneidert. Große Sorgfalt bis ins Detail.',
    name: 'Sabine R.',
    ort: 'Kundin aus Rosenheim',
    foto: sabineFoto,
  },
  {
    zitat:
      'Im Second-Hand-Regal finde ich immer wieder Einzelstücke in Top-Zustand – und kleine Änderungen gibt es gleich dazu.',
    name: 'Julia M.',
    ort: 'Kundin aus Kolbermoor',
    foto: juliaFoto,
  },
  {
    zitat:
      'Der Reißverschluss meiner Lieblingsjacke war kaputt – jetzt hält er wieder, und man merkt gar nicht, dass er ausgetauscht wurde.',
    name: 'Petra S.',
    ort: 'Kundin aus Bad Aibling',
    foto: andreaFoto,
  },
  {
    zitat:
      'Für mein Vorstellungsgespräch brauchte ich schnell einen passenden Blazer – im Second-Hand-Regal fand ich genau das Richtige, direkt angepasst.',
    name: 'Nina F.',
    ort: 'Kundin aus Raubling',
    foto: sabineFoto,
  },
  {
    zitat:
      'Mein Kleid für die Hochzeit meiner Schwester wurde perfekt gekürzt, termingerecht und mit viel Liebe zum Detail.',
    name: 'Melanie T.',
    ort: 'Kundin aus Stephanskirchen',
    foto: juliaFoto,
  },
  {
    zitat:
      'Im Second-Hand-Bereich habe ich einen Ledermantel in Top-Zustand entdeckt – ein echter Glücksfund.',
    name: 'Claudia W.',
    ort: 'Kundin aus Bruckmühl',
    foto: andreaFoto,
  },
  {
    zitat:
      'Der Anzug meines Mannes musste kurzfristig enger gemacht werden – kein Problem, alles hat perfekt gepasst.',
    name: 'Birgit H.',
    ort: 'Kundin aus Kolbermoor',
    foto: sabineFoto,
  },
  {
    zitat:
      'Nach dem Abnehmen musste mein Lieblingsrock enger gemacht werden – jetzt sitzt er wieder wie am ersten Tag.',
    name: 'Simone L.',
    ort: 'Kundin aus Rosenheim',
    foto: juliaFoto,
  },
  {
    zitat:
      'Auch für die Kinder gibt es im Second-Hand-Regal schöne Stücke – nachhaltig und günstig zugleich.',
    name: 'Katrin B.',
    ort: 'Kundin aus Bad Aibling',
    foto: andreaFoto,
  },
];
