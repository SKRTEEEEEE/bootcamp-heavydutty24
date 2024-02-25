import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { map, of } from "rxjs";

export { Injectable } from "@angular/core"

@Injectable({providedIn: "root"})
export class ShyftApiService {
    private readonly _httpClient: HttpClient = inject(HttpClient);
    private readonly _header: { "x-api-key": string} = {"x-api-key": "uRkHgnKWWnuGMKV4"};
    private readonly _mint = "7EYnhQoR9YM3N7UoaKRoA44Uy8JeaZV3qyouov87awMs";

    getAccount(publicKey: string | undefined | null) {
        if(!publicKey){
            return of(null);
        }

        //usamos el metodo getBalace de la api de shift
        const url = new URL('https://api.shyft.to/sol/v1/wallet/token_balance');
        //seteamos los searchParams por separado para un mejor code
        url.searchParams.set('network', 'mainnet-beta');
        url.searchParams.set('wallet', publicKey);
        url.searchParams.set("token", this._mint)

        //Con es pipe y el map, lo que hacemos es devolver solo el result
        return this._httpClient.get<{result: { balance: number; info: {image:string}}}>(url.toString(), {headers: this._header})
        .pipe(map((response)=>response.result))
    }

}