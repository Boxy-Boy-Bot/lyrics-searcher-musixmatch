"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const util_2 = require("util");
const cheerio_1 = __importDefault(require("cheerio"));
const sources_1 = __importDefault(require("./sources"));
function songlyrics(title) {
    return __awaiter(this, void 0, void 0, function* () {
        title = title.toLowerCase();
        const f = '%s site:%s';
        try {
            for (const source of sources_1.default) {
                const site = `${source.hostname}${source.path}`;
                const url = yield (0, util_1.searchDuckduckgo)((0, util_2.format)(f, title, site));
                if (url.includes(site.toLowerCase())) {
                    const res = yield (0, util_1.request)(url);
                    let lyrics = source.parse(cheerio_1.default.load(res));
                    if (lyrics) {
                        const sourceLyrics = {
                            name: source.name,
                            url: `https://${source.hostname}`,
                            link: url,
                        };
                        const result = { lyrics: (0, util_1.spacingLyrics)(lyrics[0]), info: lyrics[1].page, source: sourceLyrics };
                        return result;
                    }
                }
            }
        }
        catch (err) { }
        throw new Error("No lyrics found!");
    });
}
exports.default = songlyrics;
