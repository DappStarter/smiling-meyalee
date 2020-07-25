require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note remain quality gesture glimpse flock gauge'; 
let testAccounts = [
"0x2166b6677e6a420d7d95c20450e921dbf3bf522904bea1a0bd15dd67661882a2",
"0x1c6ad308ce8588629a0baac36554da351a9f46c90518019a2c8058557784c47f",
"0xacfff0f6f296ec30a8713639cd619fffb84852f771c04ef681645e2bfe62de29",
"0xd43a478dbb352219aae0a94c44e2544ebde6729d864194982d950fdf8bc0e7f4",
"0xdd69a35dad502a8696666957483b50b77ea656b32ed54c1ad91d6f46fc3941db",
"0x927585f609eabb4b8fd6be3dd622ae75103cf758b117cd4f3c35ed8b7d45c3ba",
"0x2ae93eda9ce2888dd3c9427e742f9390ecfb647a2e15deb0afad44d8c5f9c004",
"0xb607bb7a5f2eae82d2bef523baa9c7e15b4ed42671baf6efe07bc607b1fa8612",
"0xb5f14271aa1e85a99c53ecaecd7219362fc6b891e15388e0b4a3203db4e0d10c",
"0x4aa4a0b151423682635100403446002500da935330370f4741edcf23f748b16e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
