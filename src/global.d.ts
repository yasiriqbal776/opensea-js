// NO IMPORTS HERE
// Should be top-level

// Taken from wyvern and 0x
declare module 'web3_beta'
declare module 'web3-provider-engine'
declare module 'web3-provider-engine/subproviders/rpc'

/* tslint:enable */
declare module '*.json' {
    const json: any
    /* tslint:disable */
    export default json;
    /* tslint:enable */
}

declare module 'wyvern-schemas' {
    interface FungibleToken {
        name: string
        symbol: string
        decimals: number
        address: string
        imageUrl?: string
        ethPrice?: string
    }

    interface NetworkFungibleTokens {
        canonicalWrappedEther: FungibleToken
        otherTokens: FungibleToken[]
    }

    interface SchemaFunctions<T> {
        transfer: (asset: T) => any
        transferQuantity?: (asset: T, quanity: number) => any
        ownerOf?: (asset: T) => any
        countOf?: (asset: T) => any
        assetsOfOwnerByIndex: any[]
        initializeProxy?: (owner: string) => any
    }

    interface SchemaField {
        name: string
        type: string
        description: string
        values?: any[]
        readOnly?: boolean
    }

    interface Schema<T> {
        version: number
        deploymentBlock: number
        name: any
        description: string
        thumbnail: string
        website: string
        fields: SchemaField[]
        unifyFields?: (fields: any) => any
        checkAsset?: (asset: T) => boolean
        assetFromFields: (fields: any) => T
        assetToFields?: (asset: T) => any
        allAssets?: (web3: any) => Promise<T[]>
        functions: SchemaFunctions<T>
        events: any
        formatter: (obj: T, web3: any) => Promise<any>
        hash: (obj: T) => any
    }

    export const tokens: { [key: string]: NetworkFungibleTokens }
    export const schemas: { [key: string]: Array<Schema<any>> }
    export const encodeCall: (method: any, args: any[]) => any
    export const encodeSell: (method: any, asset: object, address: string) => any
    export const encodeBuy: (method: any, asset: object, address: string) => any
    export const encodeAtomicizedSell: (method: any, assets: object[], address: string, atomicizer: any) => any
    export const encodeAtomicizedBuy: (method: any, assets: object[], address: string, atomicizer: any) => any
}
