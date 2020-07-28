const helpers = plop => {
    plop.setDefaultInclude({helpers: true})

    plop.load("plop-helper-date")
    plop.load("plop-helper-list")
    plop.load("plop-helper-slugify")
}

module.exports = helpers
