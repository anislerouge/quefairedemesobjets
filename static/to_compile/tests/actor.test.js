/**
 * @jest-environment jsdom
 */

const { Actor } = require("../src/types")
// FIXME : make the ES6 syntax worls with ts-jest and parcel
//import { Actor } from "../src/types"

describe("Actor class", () => {
    test("Actor title from nom", () => {
        let actor = new Actor({ nom: "My name !" })
        expect(actor.popupTitle()).toBe('<h5 class="fr-mb-0">My name !</h5>')
    })
    test("Actor title empty nom_commercial", () => {
        let actor = new Actor({
            nom: "My name !",
            nom_commercial: "",
        })
        expect(actor.popupTitle()).toBe('<h5 class="fr-mb-0">My name !</h5>')
    })
    test("Actor title from commercial nom", () => {
        let actor = new Actor({
            nom: "My name !",
            nom_commercial: "My commercial name !",
        })
        expect(actor.popupTitle()).toBe('<h5 class="fr-mb-0">My commercial name !</h5>')
    })
})
