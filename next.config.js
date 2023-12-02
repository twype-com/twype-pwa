/** @type {import('next').NextConfig} */
const webpack = require("webpack")
const DFXWebPackConfig = require("./dfx.webpack.config")

DFXWebPackConfig.initCanisterIds()

const EnvPlugin = new webpack.EnvironmentPlugin({
  DFX_NETWORK: "local"
})

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(EnvPlugin)
    return config
  },
  output: "export"
}

module.exports = nextConfig
