module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    assetExts: ["bin", "txt", "jpg", "png", "ttf"],
    sourceExts: ["js", "json", "ts", "tsx", "jsx", "bin"],
  },
};
