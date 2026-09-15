# Testbilder für die Kursübersicht

30 Platzhalterbilder, `kurs-01.jpg` bis `kurs-30.jpg`, jeweils 800 × 600 px
(Seitenverhältnis 4:3, genau wie auf der Originalseite).

Öffne `uebersicht.html` im Browser, um alle auf einen Blick zu sehen.

## Einbinden

Das Seitenverhältnis kommt vom Container, nicht vom Bild – so bleibt die
Karte auch dann in Form, wenn du später ein Bild mit anderen Maßen einsetzt:

```html
<img src="bilder/kurs-01.jpg" alt="" class="aspect-[4/3] w-full object-cover">
```

`object-fit: cover` sorgt dafür, dass das Bild den Bereich füllt und dabei
beschnitten statt verzerrt wird. Ohne diese Angabe werden Bilder gestaucht,
sobald die Proportionen nicht exakt passen.

### Zum alt-Attribut

Diese Bilder sind reine Dekoration und transportieren keine Information.
Deshalb bekommen sie ein **leeres** `alt=""` – dann überspringt ein
Screenreader sie. Ein `alt="Bild"` oder `alt="Kursbild"` wäre schlechter
als gar nichts, weil es vorgelesen wird, ohne etwas zu sagen.

## Selbst neue erzeugen

Im Ordner `html/` liegt zu jedem Bild die Quelldatei. Jede ist eine
einzelne HTML-Seite mit 800 × 600 px und ein paar absolut positionierten
`<div>`-Blöcken – mehr steckt nicht dahinter. Ändere Farben oder Blöcke
und mach einen Screenshot, wenn du eine Variante brauchst.
