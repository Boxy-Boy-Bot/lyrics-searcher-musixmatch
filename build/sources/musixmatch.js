"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const musixmatch = {
    name: 'Musixmatch',
    hostname: 'www.musixmatch.com',
    path: '/lyrics',
    parse: function ($) {
        var _a, _b;
        const content = $('body > script:nth(0)').html();
        if (!content)
            throw new Error('No content');
        const selector = 'var __mxmState = ';
        const startIndex = content.indexOf(selector) + selector.length;
        const raw = content.slice(startIndex).slice(0, -1);
        const json = JSON.parse(raw);
        if (!((_b = (_a = json === null || json === void 0 ? void 0 : json.page) === null || _a === void 0 ? void 0 : _a.lyrics) === null || _b === void 0 ? void 0 : _b.lyrics))
            throw new Error('No content');
        const lyrics = json.page.lyrics.lyrics;
        return [lyrics.body, json];
    },
};
exports.default = musixmatch;
