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

# evaluating

```
// wyświetlanie wartości

console.log(imie);
console.log('mam na imie', imie);
console.log(`mam na imie ${imie}`);
```

```
// porównywanie
if (imie === 'ola') {             // warunek (imie to 'ola')
    console.log('imie to ola');   // wyświetl wiadomość 1
} else {                          // w przeciwnym wypadku
    console.log('to nie ola');    // wyświetl wiadomość 2
}
```

# scope

```
// blok 1
let imie = 'ola';
let wiek = 10;

if (imie === 'ola') {
    // blok 2

    if (wiek === 10) {
        // blok 3
        let dzien = 'sobota';

        console.log(imie, dzien);   // wyświetli: ola sobota
    }

    console.log(imie, dzien);       // błąd: "dzien" niezadeklarowany
}

console.log(imie, dzien);           // błąd: "dzien" niezadeklarowany

```