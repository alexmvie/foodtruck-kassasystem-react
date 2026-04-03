für version 1.1.0 benötigen wir eine umstrukturierung

starte dazu einen neuen git-branch!

\*\*\* problem
momentan haben wir das produkt bubble waffle. dann haben wir den button extras, wo man eigentlich auswählt, was alles auf eine waffle kommt.

dass das syste so nicht funktioniert wird klar wenn man boniert:

1 bubble waffle
1 belgian waffle
1 schlagobers
1 portion eis

nun weiss man in der küche nicht, zu welcher waffel was gehört.

\*\*\* mein lösungsansatz:
bubble waffle
belgian waffle
soft eis
kaffee
werden menüs.

bei click wird zu beginn das produkt boniert. zb 1 x bubble waffle
dann werden die extras (menüs) zur auswahl angezeigt:

bubble waffle

- mit extras
  --- schlagobers, portion eis
  --- marshmellow, oreo, smarties, krokant, matcha
  --- banane, erdbeere, heidelbeere, himbeere
  --- schoko, nutella, karamell, himbeer, waldbeere, erdbeere
  --- zimt, staubzucker
  --> wenn fertig wird mit klick auf ZURÜCK bestätigt. app springt zurück auf main menu, dieser artikel gilt als abgeschlossen.

- ohne extras
  (hier wird dann nur die waffel boniert)
  --> app springt zurück auf main menu

in der bestellung anzeige soll folgendes passieren:
unsere artikel mit extras müssen optisch als gruppe dargestellt werden.
also ein parent (bubble waffle) mit seinen childs (schlagobers, portion eis,...)

ändere am bestehenden system nur das was unbedingt notwendig ist!
ändere nichts, was ich nicht vorgegeben habe!
ändere keine bestehenden grafischen elemente ausser die neue ansicht für child-parent-artikel

v.1.1.1
das system - parent-child-artikel funktioniert perfekt wie gewünscht!

nun beschreiben wir jeden einzelnen artikel mit seiner struktur und den dazugehörigen preisen.
zahlen vor den artikeln kennzeichnen die zeile in der diese gemeinsam stehen sollen

1 bubble waffle: 
1 (== belgian waffle)
- base: 8.00€
- extras:
  - 1 schlagobers: 1.00€
  - 1 schlagobers vegan: 2.00€
  - 1 portion eis: 2.00€
  - 2 marshmellow: 1.00€
  - 2 oreo: 1.00€
  - 2 smarties: 1.00€
  - 2 krokant: 1.00€
  - 2 matcha: 2.00€
  - 3 banane: 1.00€
  - 3 erdbeere: 1.00€
  - 3 heidelbeere: 1.00€
  - 3 himbeere: 1.00€
  - 4 schoko: 1.00€
  - 4 nutella: 1.00€
  - 4 karamell: 1.00€
  - 4 himbeer: 1.00€
  - 4 waldbeere: 1.00€
  - 4 erdbeere: 1.00€
  - 5 zimt: 0.00€
  - 5 staubzucker: 0.00€

1 soft eis:
- base: 4.00€
- extras:
  - 1 schlagobers: 1.00€
  - 1 schlagobers vegan: 2.00€
  - 1 portion eis: 2.00€
  - 2 marshmellow: 1.00€
  - 2 oreo: 1.00€
  - 2 smarties: 1.00€
  - 2 krokant: 1.00€
  - 2 matcha: 2.00€
  - 3 banane: 1.00€
  - 3 erdbeere: 1.00€
  - 3 heidelbeere: 1.00€
  - 3 himbeere: 1.00€
  - 4 schoko: 1.00€
  - 4 nutella: 1.00€
  - 4 karamell: 1.00€
  - 4 himbeer: 1.00€
  - 4 waldbeere: 1.00€
  - 4 erdbeere: 1.00€
  - 5 zimt: 0.00€
  - 5 staubzucker: 0.00€

2 kaffee:
  - espresso: 3.50€
    - extras:
      - 1 hafermilch: 0.00€
      - 1 kokos: 0.00€
      - 1 laktosefrei: 0.00€
      - 4 koffeinfrei: 0.00€
      - 2 vanille: 1.00€
      - 2 karamell: 1.00€
      - 3 schlagobers: 1.00€
      - 3 schlagobers vegan: 2.00€
  - doppelter espresso: 5.50€
    - extras:
      - 1 hafermilch: 0.00€
      - 1 kokos: 0.00€
      - 1 laktosefrei: 0.00€
      - 4 koffeinfrei: 0.00€
      - 2 vanille: 1.00€
      - 2 karamell: 1.00€
      - 3 schlagobers: 1.00€
      - 3 schlagobers vegan: 2.00€
  - verlängerter: 3.50€
    - extras:
      - 1 hafermilch: 0.00€
      - 1 kokos: 0.00€
      - 1 laktosefrei: 0.00€
      - 4 koffeinfrei: 0.00€
      - 2 vanille: 1.00€
      - 2 karamell: 1.00€
      - 3 schlagobers: 1.00€
      - 3 schlagobers vegan: 2.00€
  - cappuccino: 4.50€
    - extras:
      - 1 hafermilch: 1.00€
      - 1 kokos: 1.00€
      - 1 laktosefrei: 0.00€
      - 4 koffeinfrei: 0.00€
      - 2 vanille: 1.00€
      - 2 karamell: 1.00€
      - 3 schlagobers: 1.00€
      - 3 schlagobers vegan: 2.00€
  - latte macchiato: 5.00€
    - extras:
      - 1 hafermilch: 1.00€
      - 1 kokos: 1.00€
      - 1 laktosefrei: 0.00€
      - 4 koffeinfrei: 0.00€
      - 2 vanille: 1.00€
      - 2 karamell: 1.00€
      - 3 schlagobers: 1.00€
      - 3 schlagobers vegan: 2.00€
  - matcha: 6.50€
    - extras:
      - 1 hafermilch: 1.00€
      - 1 kokos: 1.00€
      - 1 laktosefrei: 0.00€
      - 4 koffeinfrei: 0.00€
      - 2 vanille: 1.00€
      - 2 karamell: 1.00€
      - 3 schlagobers: 1.00€
      - 3 schlagobers vegan: 2.00€
  - chai: 6.50€
    - extras:
      - 1 hafermilch: 1.00€
      - 1 kokos: 1.00€
      - 1 laktosefrei: 0.00€
      - 4 koffeinfrei: 0.00€
      - 2 vanille: 1.00€
      - 2 karamell: 1.00€
      - 3 schlagobers: 1.00€
      - 3 schlagobers vegan: 2.00€
  - kakao: 5.50€
    - extras:
      - 1 hafermilch: 1.00€
      - 1 kokos: 1.00€
      - 1 laktosefrei: 0.00€
      - 4 koffeinfrei: 0.00€
      - 2 vanille: 1.00€
      - 2 karamell: 1.00€
      - 3 schlagobers: 1.00€
      - 3 schlagobers vegan: 2.00€

2 süsses:
  - 1 kuchen: 4.00€
  - 1 vegan cookies: 3.00€
  - 1 protein balls: 3.00€
  - 1 mandorle: 3.00€

3 drinks:
  - 1 Aperol: 6.50€
  - 1 Limoncello: 6.50€
  - 1 Hugo: 6.50€
  - 2 Frizzante: 5.00€
  - 2 Spritzer: 3.00€
  - 2 Bier: 4.00€
  - 3 Glühwein: 5.50€
  - 3 Glüh Gin: 8.50€
  - Hot Aperol: 8.50€

3 af drinks:
  - mineral: 3.00€
  - cola: 4.00€
  - apfelsaft gesp.: 4.00€
  - eistee: 4.00€
  - limonade: 5.50€
  - smoothie: 6.50€
  
4 extras:
- 1 schlagobers: 1.00€
- 1 schlagobers vegan: 2.00€
- 1 portion eis: 2.00€
- 2 marshmellow: 1.00€
- 2 oreo: 1.00€
- 2 smarties: 1.00€
- 2 krokant: 1.00€
- 2 matcha: 2.00€
- 3 banane: 1.00€
- 3 erdbeere: 1.00€
- 3 heidelbeere: 1.00€
- 3 himbeere: 1.00€
- 4 schoko sauce: 1.00€
- 4 nutella sauce: 1.00€
- 4 karamell sauce: 1.00€
- 4 himbeer sauce: 1.00€
- 4 waldbeere sauce: 1.00€
- 5 zimt: 0.00€
- 5 staubzucker: 0.00€
- 6 hafermilch: 1.00€
- 6 kokos: 1.00€
- 6 laktosefrei: 0.00€
- 6 koffeinfrei: 0.00€
- 7 vanille sirup: 1.00€
- 7 karamell sirup: 1.00€ 

allgemein für alle produkte und extras:
jede reihe muss eine andere farbe haben, alle buttons in dieser reihe müssen die selbe farbe haben



