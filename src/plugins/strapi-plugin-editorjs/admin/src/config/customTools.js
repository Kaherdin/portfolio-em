import PluginId from "../pluginId";

import Embed from "@editorjs/embed";
import InlineImage from "editorjs-inline-image";
import Table from "@editorjs/table";

import List from "@editorjs/list";
import LinkTool from "@editorjs/link";
import Raw from "@editorjs/raw";
// import Header from '@editorjs/header'
import NestedList from "@editorjs/nested-list";

const Header = require("editorjs-header-with-alignment");
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import ColorPlugin from "editorjs-text-color-plugin";
import Subscript from "editorjs2-subscript";
const Superscript = require("editorjs2-superscript");
const Paragraph = require("editorjs-paragraph-with-alignment");

!(function (e, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define([], n)
    : "object" == typeof exports
    ? (exports.AnchorTune = n())
    : (e.AnchorTune = n());
})(self, function () {
  return (() => {
    "use strict";
    var e = {
        424: (e, n, t) => {
          t.d(n, { Z: () => o });
          var r = t(645),
            a = t.n(r)()(function (e) {
              return e[1];
            });
          a.push([
            e.id,
            ".cdx-anchor-tune-wrapper {\r\n    background: rgba(232,232,235,.49);\r\n    border: 1px solid rgba(226,226,229,.2);\r\n    border-radius: 6px;\r\n    padding: 3px 2px;\r\n    display: grid;\r\n    grid-template-columns: auto auto 1fr;\r\n    grid-template-rows: auto;\r\n}\r\n\r\n.cdx-anchor-tune-icon {\r\n    line-height: 1;\r\n    padding: 0 3px;\r\n}\r\n\r\n.cdx-anchor-tune-icon svg {\r\n    vertical-align: baseline;\r\n}\r\n\r\n.cdx-anchor-tune-input {\r\n    width: 100%;\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    background-color: initial;\r\n}\r\n",
            "",
          ]);
          const o = a;
        },
        645: (e) => {
          e.exports = function (e) {
            var n = [];
            return (
              (n.toString = function () {
                return this.map(function (n) {
                  var t = e(n);
                  return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t;
                }).join("");
              }),
              (n.i = function (e, t, r) {
                "string" == typeof e && (e = [[null, e, ""]]);
                var a = {};
                if (r)
                  for (var o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    null != i && (a[i] = !0);
                  }
                for (var c = 0; c < e.length; c++) {
                  var s = [].concat(e[c]);
                  (r && a[s[0]]) ||
                    (t &&
                      (s[2]
                        ? (s[2] = "".concat(t, " and ").concat(s[2]))
                        : (s[2] = t)),
                    n.push(s));
                }
              }),
              n
            );
          };
        },
        379: (e, n, t) => {
          var r,
            a = (function () {
              var e = {};
              return function (n) {
                if (void 0 === e[n]) {
                  var t = document.querySelector(n);
                  if (
                    window.HTMLIFrameElement &&
                    t instanceof window.HTMLIFrameElement
                  )
                    try {
                      t = t.contentDocument.head;
                    } catch (e) {
                      t = null;
                    }
                  e[n] = t;
                }
                return e[n];
              };
            })(),
            o = [];
          function i(e) {
            for (var n = -1, t = 0; t < o.length; t++)
              if (o[t].identifier === e) {
                n = t;
                break;
              }
            return n;
          }
          function c(e, n) {
            for (var t = {}, r = [], a = 0; a < e.length; a++) {
              var c = e[a],
                s = n.base ? c[0] + n.base : c[0],
                l = t[s] || 0,
                u = "".concat(s, " ").concat(l);
              t[s] = l + 1;
              var d = i(u),
                h = { css: c[1], media: c[2], sourceMap: c[3] };
              -1 !== d
                ? (o[d].references++, o[d].updater(h))
                : o.push({ identifier: u, updater: v(h, n), references: 1 }),
                r.push(u);
            }
            return r;
          }
          function s(e) {
            var n = document.createElement("style"),
              r = e.attributes || {};
            if (void 0 === r.nonce) {
              var o = t.nc;
              o && (r.nonce = o);
            }
            if (
              (Object.keys(r).forEach(function (e) {
                n.setAttribute(e, r[e]);
              }),
              "function" == typeof e.insert)
            )
              e.insert(n);
            else {
              var i = a(e.insert || "head");
              if (!i)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                );
              i.appendChild(n);
            }
            return n;
          }
          var l,
            u =
              ((l = []),
              function (e, n) {
                return (l[e] = n), l.filter(Boolean).join("\n");
              });
          function d(e, n, t, r) {
            var a = t
              ? ""
              : r.media
              ? "@media ".concat(r.media, " {").concat(r.css, "}")
              : r.css;
            if (e.styleSheet) e.styleSheet.cssText = u(n, a);
            else {
              var o = document.createTextNode(a),
                i = e.childNodes;
              i[n] && e.removeChild(i[n]),
                i.length ? e.insertBefore(o, i[n]) : e.appendChild(o);
            }
          }
          function h(e, n, t) {
            var r = t.css,
              a = t.media,
              o = t.sourceMap;
            if (
              (a ? e.setAttribute("media", a) : e.removeAttribute("media"),
              o &&
                "undefined" != typeof btoa &&
                (r +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                    " */"
                  )),
              e.styleSheet)
            )
              e.styleSheet.cssText = r;
            else {
              for (; e.firstChild; ) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(r));
            }
          }
          var f = null,
            p = 0;
          function v(e, n) {
            var t, r, a;
            if (n.singleton) {
              var o = p++;
              (t = f || (f = s(n))),
                (r = d.bind(null, t, o, !1)),
                (a = d.bind(null, t, o, !0));
            } else
              (t = s(n)),
                (r = h.bind(null, t, n)),
                (a = function () {
                  !(function (e) {
                    if (null === e.parentNode) return !1;
                    e.parentNode.removeChild(e);
                  })(t);
                });
            return (
              r(e),
              function (n) {
                if (n) {
                  if (
                    n.css === e.css &&
                    n.media === e.media &&
                    n.sourceMap === e.sourceMap
                  )
                    return;
                  r((e = n));
                } else a();
              }
            );
          }
          e.exports = function (e, n) {
            (n = n || {}).singleton ||
              "boolean" == typeof n.singleton ||
              (n.singleton =
                (void 0 === r &&
                  (r = Boolean(
                    window && document && document.all && !window.atob
                  )),
                r));
            var t = c((e = e || []), n);
            return function (e) {
              if (
                ((e = e || []),
                "[object Array]" === Object.prototype.toString.call(e))
              ) {
                for (var r = 0; r < t.length; r++) {
                  var a = i(t[r]);
                  o[a].references--;
                }
                for (var s = c(e, n), l = 0; l < t.length; l++) {
                  var u = i(t[l]);
                  0 === o[u].references && (o[u].updater(), o.splice(u, 1));
                }
                t = s;
              }
            };
          };
        },
      },
      n = {};
    function t(r) {
      var a = n[r];
      if (void 0 !== a) return a.exports;
      var o = (n[r] = { id: r, exports: {} });
      return e[r](o, o.exports, t), o.exports;
    }
    (t.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return t.d(n, { a: n }), n;
    }),
      (t.d = (e, n) => {
        for (var r in n)
          t.o(n, r) &&
            !t.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
      }),
      (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n));
    var r = {};
    return (
      (() => {
        t.d(r, { default: () => i });
        var e = t(379),
          n = t.n(e),
          a = t(424);
        function o(e, n) {
          for (var t = 0; t < n.length; t++) {
            var r = n[t];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        n()(a.Z, { insert: "head", singleton: !1 }), a.Z.locals;
        var i = (function () {
          function e(n) {
            var t = n.api,
              r = n.data;
            !(function (e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.api = t),
              (this.data = { anchor: void 0 }),
              r && r.anchor && (this.anchor = r.anchor),
              (this._CSS = {
                classWrapper: "cdx-anchor-tune-wrapper",
                classIcon: "cdx-anchor-tune-icon",
                classInput: "cdx-anchor-tune-input",
              });
          }
          var n, t, r;
          return (
            (n = e),
            (r = [
              {
                key: "isTune",
                get: function () {
                  return !0;
                },
              },
            ]),
            (t = [
              {
                key: "anchor",
                get: function () {
                  return this.data.anchor || "";
                },
                set: function (e) {
                  (e = e.replace(/[^a-z0-9_-]/gi, "")).length > 0
                    ? (this.data.anchor = e)
                    : (this.data.anchor = void 0);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    n = document.createElement("div");
                  n.classList.add(this._CSS.classWrapper);
                  var t = document.createElement("div");
                  t.classList.add(this._CSS.classIcon),
                    (t.innerHTML =
                      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve" width="12px" height="12px"><g><g xmlns="http://www.w3.org/2000/svg"><g id="hash"><path style="" d="M30,12V8h-5.004l1-8h-4l-1,8h-7.998l1-8h-4l-1,8H2v4h6.498L7.5,20H2v4h5l-1,8h4l1-8h8l-1.002,8H22    l1-8h7v-4h-6.5l0.996-8H30z M19.5,20h-8l0.998-8h7.998L19.5,20z" fill="#878787" data-original="#030104" class=""/></g></g></svg>');
                  var r = document.createElement("input");
                  return (
                    (r.placeholder = this.api.i18n.t("Anchor")),
                    r.classList.add(this._CSS.classInput),
                    (r.value = this.anchor),
                    r.addEventListener("input", function (n) {
                      (e.anchor = n.target.value), (n.target.value = e.anchor);
                    }),
                    n.appendChild(t),
                    n.appendChild(r),
                    n
                  );
                },
              },
              {
                key: "save",
                value: function () {
                  if (this.data.anchor) return this.data;
                },
              },
            ]) && o(n.prototype, t),
            r && o(n, r),
            e
          );
        })();
      })(),
      r.default
    );
  })();
});

const customTools = () => {
  return {
    embed: Embed,
    anchorTune: AnchorTune,
    list: {
      class: List,
      inlineToolbar: true,
    },
    paragraph: {
      class: Paragraph,
      inlineToolbar: true,
    },
    marker: {
      class: Marker,
      inlineToolbar: true,
    },
    delimiter: Delimiter,
  };
};

export default customTools;

// nestedlist: {
//   class: NestedList,
//   inlineToolbar: true,
//   config: {
//     defaultStyle: "unordered",
//   },
// },
// subscript: {
//   class: Subscript,
// },
// superscript: {
//   class: Superscript,
// },
// Color: {
//   class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
//   config: {
//     colorCollections: [
//       "#8cd5b0", //primary-300
//       "#3fb97b", //primary-500
//       "#266f4a", //primary-700
//       "#0d2519", //primary-900
//       "#a3a4cd", //secondary-300
//       "#6667ab", //secondary-500
//       "#3d3e67", //secondary-700
//       "#141522", //secondary-900
//       "#dedede", //gray-300
//       "#adb5bd", //gray-500
//       "#495057", //gray-700
//       "#4B4237",
//       "#D5A021",
//       "#EDE7D9",
//       "#BFDBF7",
//       "#732C2C",
//       "#420C14 ",
//       "#FFF",
//       "#000",
//     ],
//     defaultColor: "#FF1300",
//     type: "text",
//   },
// },
// LinkTool: {
//   class: LinkTool,
//   config: {
//     endpoint: `/api/${PluginId}/link`,
//   },
// },

// header: {
//   class: Header,
//   inlineToolbar: true,
//   tunes: ["anchorTune"],
// },
// quote: {
//   class: Quote,
//   inlineToolbar: true,
//   config: {
//     quotePlaceholder: "Quote",
//     captionPlaceholder: "Quote`s author",
//   },
// },
