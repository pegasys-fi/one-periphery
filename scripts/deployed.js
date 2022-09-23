const contracts = {
    bscTest: {
        iZiSwapFactory: '0x90e2B715BE84EFC67e9d2E84619c4b230446FF3f',
	liquidityManager: '0xC0b5CaC9Db0639732Fe5aCB7ee8d15e487c9957A',
	swap: '0x2798973a7d9B7451530f18621eE8Bc69058391a8',
        WETH9: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
        wrapChainToken: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
	    BIT: '0xac360dc0F8EF1C94Ab4034220E0A01567acbFdE4',
	    WBNB: '0xa9754f0D9055d14EB0D2d196E4C51d8B2Ee6f4d3',
	    USDT: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
	    BUSD: '0xd88972676f5D0997c8150A3d2C4634CbaaDD3396',
	    iUSD: '0x60FE1bE62fa2082b0897eA87DF8D2CfD45185D30',
        SLD: '0x45F76eD56082cd0B0A0Ad1E4513214d1219f9998',
        DUET: '0x5D111A3573838f6A24B4b64dbE6A234bE1e6d822',
        dWTI: '0x967b61E062205C2DcbB6146b383119A8827493C3',
        DUSD: '0x5682fBb54565b02a4E72Ce29C5a9B61Dee8a0819',
        USDT18: '0x3eC84d8bDD27Db0FD49462187b0bd8E347bBc1e7',
        KSW: '0xe377BA982D52C598568cE37dd146ced237FFd938',
        REVO: '0x1e19F04008f57344D589494C50Ff8138aD5207Ae',
        LAND: '0x1017D7d37169f98EED32BBB68aD79A3881174e3f',
        FROYO: '0xed2F92D6D2b936ce3Db9e046E57D9119e4A31ECb',
    },
    bsc: {
        iZiSwapFactory: '0xd7de110Bd452AAB96608ac3750c3730A17993DE0',
        WBNB: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
	wrapChainToken: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
	liquidityManager: '0x93C22Fbeff4448F2fb6e432579b0638838Ff9581',
	swap: '0xBd3bd95529e0784aD973FD14928eEDF3678cfad8',
    },
    aurora: {
        iZiSwapFactory: '0x032b241De86a8660f1Ae0691a4760B426EA246d7',
        WETH: '0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb',
        wrapChainToken: '0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb',
        liquidityManager: '0xe6805638db944eA605e774e72c6F0D15Fb6a1347',
        swap: '0x3a2932a74e511C9Dc4CaD60e06eE6D3690Ce2492',
    },
    auroraTest: {
	iZiSwapFactory: '0x64c2F1306b4ED3183E7B345158fd01c19C0d8c5E',
	WETH: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
    },
    arbitrum: {
        iZiSwapFactory: '0x8c7d3063579BdB0b90997e18A770eaE32E1eBb08',
        WETH: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        wrapChainToken: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        liquidityManager: '0x110dE362cc436D7f54210f96b8C7652C2617887D',
        swap: '0x19b683A2F45012318d9B2aE1280d68d3eC54D663',
    },
    cronos: {
        iZiSwapFactory: '0x8c7d3063579BdB0b90997e18A770eaE32E1eBb08',
        WETH: '0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23',
        wrapChainToken: '0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23',
        liquidityManager: '',
        swap: '',
    },
    etc: {
        iZiSwapFactory: '0x25C030116Feb2E7BbA054b9de0915E5F51b03e31',
        wrapChainToken: '0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a',
        liquidityManager: '0x1D377311b342633A970e71a787C50F83858BFC1B',
        swap: '0xe6805638db944eA605e774e72c6F0D15Fb6a1347',
    }
}

module.exports = contracts;
