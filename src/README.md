# Vector usage

lecture d'une map de taille HxW
```
  const map = {};
  for (let y = 0; y < H; y++)
    for (let x = 0; x < W; x++) map[V(x, y)] = input[y].split("")[x];

```

recherche d'une cellule unique en particulier
```
const start = getKeyByValue(map, "P");
```

Déclaration des directions
```
let dir = {
  L: V(-1, 0),
  R: V(1, 0),
  U: V(0, -1),
  D: V(0, 1),
};

dir.UL = V(dir.U + dir.L);
dir.UR = V(dir.U + dir.R);
dir.DL = V(dir.D + dir.L);
dir.DR = V(dir.D + dir.R);
```