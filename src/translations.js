
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    sk: {
        h1_home: "Ľudový generátor vzorov. A obchod.",
        nav_lang: "SK",
        nav_create: "Tvoriť",
        nav_about: "O projekte",
        nav_contact: "Kontakt",
        nav_login: "Prihlásiť",
        pick_product_h1: "Pekné vzory sú na to, aby sa používali.",
        pick_product_p: "A pekné veci sú na to, aby sa nosili. Vyber si kam chceš svoj budúci vzor umiestniť. Nemôže predsa zostať len tak na internetoch. To by bola večná škoda.",

        btn_next: "Ďalej",
        btn_skip: "Preskočiť",
        btn_choose: "Vybrať"
    },
    en: {
        h1_home: "Folklore patterns generator. And shop.",
        nav_lang: "EN",
        nav_create: "Create",
        nav_about: "About us",
        nav_contact: "Contact",
        nav_login: "Login",
        pick_product_h1: "Beautiful patterns are meant to be used.",
        pick_product_p: "And beautiful clothes or accessories are meant to be worn. Choose application of your to-be pattern. It just can not vanish on internets. Would be a shame, wouldn't it?",

        btn_next: "Next",
        btn_skip: "Skip this step",
        btn_choose: "Select"
    } 
    
});

export default new LocalizedStrings({
    strings
});