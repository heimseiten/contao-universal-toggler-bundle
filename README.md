# Universal Toggler
Elemente schalten durch einen Klick oder durch das Erscheinen im Viewport. 

Ein beliebiges Element kann als Schalter für andere beliebige Elemente eingestellt werden, um beispielsweise Elemente ein- und auszublenden. Wenn einem Element die Klassen click_toggler und toggle_xyz gegeben wird, werden allen anderen Elementen welche die Klasse toggle_xyz haben beim Klick auf das click_toggler-Element die Klassen t_active oder t_inactive zugewiesen.

Beispiel:

Einem Bild-Inhaltselement werden die Klasse click_toggler und toggle_text_unter_bild hinzugefügt.

Einem Text-Inhaltselement unter dem Bild wird die Klasse toggle_text_unter_bild hinzugefügt.

Wenn nun auf das Bild-Inhaltselement geklickt wird, bekommt das Text-Inhaltselement die Klasse t_inactive. Wenn man noch mal draufklickt bekommt es die Klasse t_active.

Nun könnte man in einer css-Datei folgendes einstellen um das Text-Inhaltselement ein und auszublenden: 

.t_active { opacity: 1; transition: all 0.25s ease-in-out; }

.t_inactive { opacity: 0; transition: all 0.25s ease-in-out; }


