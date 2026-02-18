import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { SimplePokemon } from '../interfaces/simple-pokemon.interface';
import { PokeAPIResponse } from '../interfaces/pokemon-api.response';
import { Pokemon } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private http = inject(HttpClient);

  public loadPage(page: number): Observable<SimplePokemon[]> {
    if (page !== 0) {
      --page;
    }
    page = Math.max(0, page);

    return this.http.get<PokeAPIResponse>(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`
    ).pipe(
      map(resp => {
        const simplePokemons: SimplePokemon[] = resp.results.map(pokemon => ({
          id: pokemon.url.split('/').at(-2) ?? '',
          name: pokemon.name
        }));

        return simplePokemons;
      }),
      // tap(console.log)
    )
  }

  public loadPokemon(id: string) {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

}
