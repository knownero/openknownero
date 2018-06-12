var config = {
    apiUrl: "//im.knownero.org/api/",
    mainnetExplorerUrl: "https://explorer.knownero.org/",
    testnetExplorerUrl: "https://explorer.knownero.org/",
    stagenetExplorerUrl: "https://explorer.knownero.org/",
    nettype: 0, /* 0 - MAINNET, 1 - TESTNET, 2 - STAGENET */
    coinUnitPlaces: 2,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
    txCoinbaseMinConfirms: 30, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
    coinSymbol: 'KNOW',
    openAliasPrefix: "know",
    coinName: 'know',
    coinUriPrefix: 'know:',
    addressPrefix: 64,
    integratedAddressPrefix: 65,
    subAddressPrefix: 464,
    addressPrefixTestnet: 64,
    integratedAddressPrefixTestnet: 65,
    subAddressPrefixTestnet: 464,
    addressPrefixStagenet: 64,
    integratedAddressPrefixStagenet: 65,
    subAddressPrefixStagenet: 464,
    feePerKB: new JSBigInt('3'),//20^10 - not used anymore, as fee is dynamic.
    dustThreshold: new JSBigInt('1'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 6, // minimum mixin for hardfork v7 is 6 (ring size 7)
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 60,
    debugMode: false
};
