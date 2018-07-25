module.exports = function(config) {
  config.set({
    testRunner: "mocha",
    mutator: "javascript",
    transpilers: [],
    reporter: ["html", "clear-text", "progress"],
    packageManager: "yarn",
    testFramework: "mocha",
    coverageAnalysis: "perTest",
    mutate: ["src/**/*.js"]
  });
};
