const {override,addWebpackAlias} = require('customize-cra');
const path = require('path');
module.exports = override(
  addWebpackAlias({
    ["assets"]: path.resolve(__dirname, "./src/assets/"),
    ["components"]: path.resolve(__dirname, "./src/components/"),
    ["utils"]: path.resolve(__dirname, "./src/utils/"),
    ["context"]: path.resolve(__dirname, "./src/context/")
  }),
)