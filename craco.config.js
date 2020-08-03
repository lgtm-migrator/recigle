module.exports = {
  style: {
    modules: {
      localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
    },
  },
  babel: {
    plugins: [
      [
        "babel-plugin-react-css-modules",
        {
          filetypes: {
            ".scss": {
              syntax: "postcss-scss",
            },
          },
        },
      ],
    ],
  },
};
