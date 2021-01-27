# Universal Toggler
Ein beliebiges Element kann als Schalter für andere beliebige Elemente eingestellt werden, um beispielsweise Elemente ein- und auszublenden. Wenn einem Element die Klassen toggler und toggle_xyz gegeben wird, werden allen anderen Elementen welche die Klasse toggle_xyz haben beim Klick auf das toggler-Element die Klassen t_active oder t_inactive zugewiesen.

Beispiel:

Einem Bild-Inhaltselement werden die Klasse toggler und toggle_text_unter_bild hinzugefügt.

Einem Text-Inhaltselement unter dem Bild wird die Klasse toggle_text_unter_bild hinzugefügt.

Wenn nun auf das Bild-Inhaltselement geklickt wird, bekommt das Text-Inhaltselement die Klasse t_inactive. Wenn man noch mal draufklickt bekommt es die Klasse t_active.

Nun könnte man in einer css-Datei folgendes einstellen um das Text-Inhaltselement ein und auszublenden: 

.t_active { display: block; }
.t_inactive { display: none; }


Verträgt sich nicht mit dem Query-Templates j_accordion.
