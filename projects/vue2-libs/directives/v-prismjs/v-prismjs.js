import { VPrismjsService } from "./v-prismjs.service";
export default {
    name: 'prismjs',
    bind() { },
    inserted(el, binding) {
        let vLanguage = binding.value.vLanguage;
        if (!vLanguage) {
            vLanguage = 'javascript';
        }
        const languages = vLanguage.trim().toLowerCase();
        const element = el;
        const languageSign1 = `language-${languages}`;
        const languageSign2 = `lang-${languages}`;

        if (!element.classList.contains(languageSign1) && !element.classList.contains(languageSign2)) {
            element.classList.add(languageSign1);
        }
        const prismjsService = new VPrismjsService();
        prismjsService.highlightElement(element);
    },
    update() { },
    componentUpdated() { },
    unbind() { },
};