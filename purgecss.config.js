module.exports = {
  content: ["public/**/*.html", "public/**/*.js"],
  css: ["public/assets/main.webpacked.css"],
  output: "public/assets/main.webpacked.css",
  // Clases de modo oscuro y que se añaden dinámicamente por data-attribute
  whitelist: ["dark-mode"],
  extractors: [
    {
      extractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
        return broadMatches.concat(innerMatches);
      },
      extensions: ["html", "js"],
    },
  ],
};
