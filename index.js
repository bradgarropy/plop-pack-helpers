const slugify = require("slugify")
const {format} = require("date-fns")

const helpers = plop => {
    plop.setDefaultInclude({
        actionTypes: false,
        generators: false,
        helpers: true,
        partials: false,
    })

    plop.setHelper("slug", text => {
        const options = {
            lower: true,
            remove: /[']/g,
        }

        const slug = slugify(text, options)
        return slug
    })

    plop.setHelper("date", () => {
        const date = format(Date.now(), "yyyy-MM-dd")
        return date
    })

    plop.setHelper("list", text => {
        const list = text
            .split(",")
            .map(e => e.trim())
            .join(", ")

        return list
    })

    plop.setHelper("icon", text => {
        let icon

        switch (text) {
            case "coding":
                icon = "💻"
                break

            case "life":
                icon = "😎"
                break

            case "tech":
                icon = "🔌"
                break
        }

        return icon
    })
}

module.exports = helpers
