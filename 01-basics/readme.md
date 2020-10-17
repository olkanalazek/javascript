# komentarze

```
// a one line comment
 
/* this is a longer, 
 * multi-line comment
 */
```

# deklaracje

### var

- nie używać
- zamiast `var` użyć `let`

```
var imie = 'Ola';
```

### let

- block-scoped (zasięg danego bloku)
- można zmieniać wartość

```
let imie = 'Ola';

imie = 'Werka';
```

### const

- block-scoped (zasięg danego bloku)
- read-only (tylko do odczytu)

```
const imie = 'Ola';

imie = 'Werka'; // zmiana wartości niedozwolona
```
