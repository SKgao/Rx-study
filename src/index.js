import { of } from 'rxjs'
import { map, filter, concat } from 'rxjs/operators'

const source$ = of(1, 2, 3).pipe(
    map(e => e * 2),
    filter(e => e < 5),
    concat([10])
)

source$.subscribe(console.log)