"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivroCategoria = void 0;
var obj_1 = require("./obj");
var LivroCategoria = /** @class */ (function (_super) {
    __extends(LivroCategoria, _super);
    function LivroCategoria(titulo, autor, ano, categoria) {
        var _this = _super.call(this, titulo, autor, ano) || this;
        _this.categoria = categoria;
        return _this;
    }
    LivroCategoria.prototype.exibirDetalhes = function () {
        console.log("".concat(this.titulo, ", ").concat(this.autor, ", ").concat(this.ano, ", ").concat(this.categoria));
    };
    LivroCategoria.prototype.antigo = function () {
        if (this.ano < 2000) {
            return true;
        }
        else {
            return false;
        }
    };
    return LivroCategoria;
}(obj_1.BaseLivro));
exports.LivroCategoria = LivroCategoria;
