require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone stove cruise pumpkin coconut include knife equal giggle'; 
let testAccounts = [
"0xbe0f2e9c877bdee04f578a7eb8263a02be3333768c9392b779296b501c8dd072",
"0xeb5c6b60cfb827999c2568c2992258abbc7b4aef3633c8d372287573bde8323e",
"0x2c1032c920a8f1bc8430a1e4a043ca1fc41f5d9373434d978e61cbc44b67272d",
"0x7303deb00f4cc95642b7503e002a99b90b65d92239a4d5ca4c1a384eeb7b76fa",
"0xfc118976e93b3b7f96338b5ddb8e3d80177a7d3776e25be29a68cd488ccf37cc",
"0x022d086bf35c92f51fdf47cb90dc1aa76f6856be73b581c19c2ad2fd79f35fd0",
"0x93c14378a6a2cba3f632d7a84e9982e763ee5a0e23718dcd0aae09474b3a35c9",
"0xe9305ca63d96d4618a1c82525fa02e8ba62fba465d51cac69a1627f60fcd83de",
"0xd9e87527a440e8aa53e0b9b86abe0ab2df563e52958583fbc5bbc7b27b3f2abc",
"0xc18e1bbf585ad72aa9cb52f9eaeab5c951c4c11e9c0396c6b61f5a53ba0fa155"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


