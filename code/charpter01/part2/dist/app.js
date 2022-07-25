System.register(["./m.js"], function (exports_1, context_1) {
    "use strict";
    var m_js_1, a, b, box1;
    var __moduleName = context_1 && context_1.id;
    function fn1() {
        return this;
    }
    return {
        setters: [
            function (m_js_1_1) {
                m_js_1 = m_js_1_1;
            }
        ],
        execute: function () {
            console.log(m_js_1.hi);
            a = 10;
            b = 433;
            box1 = document.getElementById('#box1');
            box1 === null || box1 === void 0 ? void 0 : box1.addEventListener('click', () => { });
        }
    };
});
