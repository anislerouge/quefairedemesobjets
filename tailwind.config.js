/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["jinja2/**/*html", "templates/**/*html", "static/to_compile/**/*{j,t}s"],
    prefix: "qfdmo-",
    corePlugins: {
        preflight: false,
    },
    safelist: [
        "qfdmo-bg-green-tilleul-verveine",
        "qfdmo-bg-green-bourgeon",
        "qfdmo-bg-green-emeraude",
        "qfdmo-bg-green-menthe",
        "qfdmo-bg-green-archipel",
        "qfdmo-bg-blue-ecume",
        "qfdmo-bg-blue-cumulus",
        "qfdmo-bg-purple-glycine",
        "qfdmo-bg-pink-macaron",
        "qfdmo-bg-pink-tuile",
        "qfdmo-bg-yellow-tournesol",
        "qfdmo-bg-yellow-moutarde",
        "qfdmo-bg-orange-terre-battue",
        "qfdmo-bg-brown-cafe-creme",
        "qfdmo-bg-brown-caramel",
        "qfdmo-bg-brown-opera",
        "qfdmo-bg-beige-gris-galet",
        "qfdmo-bg-green-500",
        "qfdmo-bg-red-500",
    ],
    theme: {
        colors: {
            // https://www.systeme-de-design.gouv.fr/elements-d-interface/fondamentaux-de-l-identite-de-l-etat/couleurs-palette
            white: "white",
            info: {
                "975-active": "#c2cfff",
            },
            "blue-france": "#2323ff",
            "light-gray": "#e5e5e5",
            "green-tilleul-verveine": "#B7A73F",
            "green-bourgeon": "#68A532",
            "green-emeraude": "#00A95F",
            "green-menthe": "#009081",
            "green-archipel": "#009099",
            "blue-ecume": "#465F9D",
            "blue-cumulus": "#417DC4",
            "purple-glycine": "#A558A0",
            "pink-macaron": "#E18B76",
            "pink-tuile": "#CE614A",
            "yellow-tournesol": "#cab300",
            "yellow-moutarde": "#C3992A",
            "orange-terre-battue": "#E4794A",
            "brown-cafe-creme": "#D1B781",
            "brown-caramel": "#C08C65",
            "brown-opera": "#BD987A",
            "beige-gris-galet": "#AEA397",
            "red-500": "#EB4444",
        },
        maxWidth: {
            readable: "80ch",
            "120w": "60rem",
        },
        spacing: {
            // https://www.systeme-de-design.gouv.fr/elements-d-interface/fondamentaux-techniques/espacements
            0: 0,
            "1v": "0.25rem",
            "1w": "0.5rem",
            "3v": "0.75rem",
            "2w": "1rem",
            "3w": "1.5rem",
            "4w": "2rem",
            "5w": "2.5rem",
            "6w": "3rem",
            "7w": "3.5rem",
            "8w": "4rem",
            "9w": "4.5rem",
            "12w": "6rem",
            "15w": "7.5rem",
        },
        extend: {
            aria: {
                // Remove when https://github.com/tailwindlabs/tailwindcss/pull/10966 in a release
                busy: "busy=true",
            },
            minWidth: ({ theme }) => ({ ...theme("spacing") }),
        },
    },
    plugins: [],
}
