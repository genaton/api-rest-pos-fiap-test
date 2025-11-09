module.exports = {
  default: {
    paths: ["tests/bdd/*.feature"],

    require:[
        "tests/bdd/steps/*js"
    ],
    requireModule:[
        "@babel/register"
    ],
    language: "pt",
    dryRun: false
  },
};
