const RootLinking = {
    prefixes: ['iogm://', 'https://iogm.biz.id'],
    config: {
        screens: {
            "shop-guest-HomeScreen": {
                path: "shop-guest-HomeScreen"
            },
            "shop-guest-Show": {
                path: "shop-guest-Show/:category/:type"
            },
        },
    },
};

export default RootLinking;
