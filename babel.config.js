module.exports = api => {
    api.cache(false);
    let presets = [
        ["@babel/env",{
        targets: "last 2 versions"
    }], "@babel/react"];
    let plugins = [];

    return {
        presets,
        plugins
    }
}