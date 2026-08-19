/**
 * Kundenstimmen — Sektion "Kundenstimmen".
 * Erste Stimme aus der Figma-Design-System-Dokumentation übernommen,
 * die übrigen im gleichen Ton ergänzt (echte Zitate stehen noch aus).
 * Fotos sind Platzhalter (freie Placeholder-Portraits, keine echten
 * Kundinnen) — bei echten Kundenstimmen durch reale Fotos ersetzen.
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
];
