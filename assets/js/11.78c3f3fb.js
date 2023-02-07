(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{594:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"node-模块机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-模块机制"}},[s._v("#")]),s._v(" node 模块机制")]),s._v(" "),a("p",[s._v("早期 Node.js 的模块标准采用 CommonJS 模块规范，在后续的版本更新中，开始支持 ES Modules 模块规范。有几种方式在 Node.js 中使用 ES Modules 模块：")]),s._v(" "),a("ul",[a("li",[s._v("将文件后缀名改为 .mjs")]),s._v(" "),a("li",[s._v('package.json 新增 "type": "module" 字段')])]),s._v(" "),a("h2",{attrs:{id:"es-modules-和-commonjs-的相互引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es-modules-和-commonjs-的相互引用"}},[s._v("#")]),s._v(" ES Modules 和 CommonJS 的相互引用")]),s._v(" "),a("p",[s._v("ESM 是编译时加载（静态加载）,它的加载、解析、执行是异步的。CJS 是运行时加载（动态加载），它的加载、解析、执行是同步的（require() 是一个同步方法）。")]),s._v(" "),a("h3",{attrs:{id:"cjs-模块加载-esm-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cjs-模块加载-esm-模块"}},[s._v("#")]),s._v(" CJS 模块加载 ESM 模块")]),s._v(" "),a("p",[s._v("由于 ESM 为异步加载，CJS 为同步加载，所以不能用 require() 去加载 ESM 模块，只能用同是异步加载且支持 CJS 以及 ESM 的 import() 来加载。")]),s._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import() 返回一个 Promise")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("res")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"esm-模块加载-cjs-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#esm-模块加载-cjs-模块"}},[s._v("#")]),s._v(" ESM 模块加载 CJS 模块")]),s._v(" "),a("p",[s._v("ESM 的 import 可以直接加载 CJS 模块，但只能整体加载。")]),s._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" m "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" o "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"es-modules-注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es-modules-注意事项"}},[s._v("#")]),s._v(" ES Modules 注意事项")]),s._v(" "),a("p",[s._v("为了使 ES Modules 能不做修改就在服务器和浏览器端通用，Node.js 规定 ES Modules 中不能使用一些 Node.js 中的内部变量，比如：")]),s._v(" "),a("ul",[a("li",[s._v("require")]),s._v(" "),a("li",[s._v("__dirname")]),s._v(" "),a("li",[s._v("__filename")])])])}),[],!1,null,null,null);t.default=e.exports}}]);