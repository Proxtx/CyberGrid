import { ready } from "/modules/uibuilder/main.js";

let grid = document.getElementById("grid");
await ready(grid);

grid.component.applyGrid(
  `66543210000000(10)(10)
66543210000000(10)(10)
66000000000000(10)(10)
77000000000000(10)(10)
88000000000011(10)(10)
99000000000011(10)(10)
(10)(10)(10)(10)(11)(11)(12)(12)(12)(12)(11)(11)(10)(10)(10)(10)
(10)(10)(10)(10)(11)(11)(12)(12)(12)(12)(11)(11)(10)(10)(10)(10)
(10)(10)(10)(10)(11)(11)(12)(12)(12)(12)(11)(11)(10)(10)(10)(10)
(10)(10)(10)(10)(11)(11)(12)(12)(12)(12)(11)(11)(10)(10)(10)(10)
(10)(10)11000000000099
(10)(10)11000000000088
(10)(10)00000000000077
(10)(10)00000000000066
(10)(10)00000001234566
(10)(10)00000001234566

nnssssss000000p0
nnssssss0000H0p0
ssnnnnnnnn0000p0
ssnnnnnnnnn0ssp0
ssnnnnnnnnns00p0
ssnnnnnnnnns0Jp0
nnpspspnpnsnsnpp
nnpspspnpnsnsnpp
nnpspspnpnsnsnpp
nnpspspnpnsnsnpp
0pJ0snnnnnnnnnss
0p00snnnnnnnnnss
0pss0nnnnnnnnnss
0p0000nnnnnnnnss
0p0H0000sssssspp
0p000000sssssspp`,
  "Bridge"
);
