// ==UserScript==
// @name         Hi_Hi_CycIone
// @version      1.0.2
// @description  Free game cheat for Tanki Online.
// @author       TOHBA
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com

// @require      https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui.umd.js
// @require      https://raw.githubusercontent.com/flyover/imgui-js/master/dist/imgui_impl.umd.js

// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow

// ==/UserScript==

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://github.com/T0HBA/Shizoval_Copy/raw/main/TOHBA.min.js',
    nocache: true,
    onload: data => eval(data.responseText)
})