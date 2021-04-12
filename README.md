# Universal Toggler
Elemente schalten durch einen Klick oder durch das Erscheinen im Viewport. 

Ein beliebiges Element kann als Schalter für andere beliebige Elemente eingestellt werden, um beispielsweise Elemente ein- und auszublenden. Wenn einem Element die Klassen click_toggler und toggle_xyz gegeben wird, werden allen anderen Elementen welche die Klasse toggle_xyz haben beim Klick auf das click_toggler-Element die Klassen toggle_status_initial oder toggle_status_toggled zugewiesen.

Beispiel:

Einem Bild-Inhaltselement werden die Klasse click_toggler und toggle_text_unter_bild hinzugefügt.

Einem Text-Inhaltselement unter dem Bild wird die Klasse toggle_text_unter_bild hinzugefügt.

Wenn nun auf das Bild-Inhaltselement geklickt wird, bekommt das Text-Inhaltselement die Klasse toggle_status_toggled. Wenn man noch mal draufklickt bekommt es die Klasse toggle_status_initial.
