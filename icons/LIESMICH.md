# Icons für die Kursübersicht

Neun SVG-Dateien, direkt aus der Originalseite entnommen und bereits in
der Tinte-Farbe `#262626` eingefärbt (Tailwind `neutral-800`). Du kannst
sie also sofort öffnen und einbinden, ohne dass sie schwarz oder
unsichtbar sind.

Eine Größe ist bewusst **nicht** gesetzt: die gibst du über CSS vor
(`width`/`height`, in Tailwind `size-5` oder `size-6`).

| Datei | Wo es hingehört | Größe im Original |
|---|---|---|
| `calendar.svg` | Metazeile der Karte (Termin) und Filter „Datum" | 20 px, Filter 20/24 px |
| `clock.svg` | Metazeile der Karte (Uhrzeit oder Dauer) | 20 px |
| `location.svg` | Metazeile der Karte (Ort) | 20 px |
| `arrow-right.svg` | Pfeil-Knopf unten rechts auf der Karte | 18 px im 40er Kreis |
| `format.svg` | Filter „Format" | 24 px |
| `globe.svg` | Filter „Thema" | 24 px |
| `building.svg` | Filter „Anbieter" | 24 px |
| `chevron-down.svg` | Pfeil in allen vier Filter-Knöpfen | 24 px |
| `search.svg` | Suchfeld | 20/24 px |

## Einbinden

Am einfachsten das Markup direkt in die Karte kopieren und die Größe
über eine Klasse steuern:

```html
<span class="flex items-center gap-1">
  <svg class="size-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">…</svg>
  <time datetime="2026-08-11">11.8.26</time>
</span>
```

Über `<img src="calendar.svg">` funktioniert das auch – die Farbe steckt
ja jetzt in der Datei. Die Größe musst du dann am `<img>` setzen.

## Wenn ein Icon die Farbe wechseln soll

Sobald ein Icon seine Farbe von der Umgebung übernehmen soll – etwa
weiß auf dunklem Grund oder eingefärbt beim Überfahren mit der Maus –
tausche in der Datei `fill="#262626"` gegen `fill="currentColor"`. Dann
erbt das Icon die Textfarbe des Elements, in dem es steht. Das
funktioniert allerdings nur bei Inline-SVG, nicht über `<img>`.

## Nicht enthalten

Teilen, Merken und die Punkte-Symbole fehlen bewusst: Diese Funktionen
gehören nicht zum Übungsumfang.
