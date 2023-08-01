/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  sassOptions: {
    includePaths: ["src/styles"],
    prependData: `
          @import "./styles/variables/all.scss";
          @import "./styles/helpers/resolutions.scss";
          @import "./styles/helpers/mixins.scss";
        `,
  },
};

module.exports = nextConfig;
