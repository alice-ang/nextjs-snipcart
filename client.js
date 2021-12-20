const sanityClient = require("@sanity/client");

module.exports = sanityClient({
  projectId: "e9sloyp2", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
  token:
    "skFAawGiAuBxkgvQ4x5ckrNnLpJtOZ9ZmZOHVDenijgsXxfbslz3XwzXezbGGoEcW6smLGrzfpD56ktyhf3CE2FjpFkXKzH0z41Qy71vBuXrAAbTGRgtrR9Rl7LX6EOADzM5MSqAunmYNsldUQRbeEPTtMuJaZrbPc2TxO1iZNDI0aNxIRd3", // or leave blank for unauthenticated usage
  apiVersion: "2021-08-31", // use a UTC date string
});
