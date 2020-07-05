(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{357:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("高精度计算其实就是模拟四则运算. 实际的应用场景如: 当我们要进行计算的数值十分巨大时, 计算机无法存储对应的位数(溢出), 我们就需要手动对该计算过程进行模拟, 已获得数据值")]),t._v(" "),a("h2",{attrs:{id:"低位存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#低位存储"}},[t._v("#")]),t._v(" 低位存储")]),t._v(" "),a("p",[t._v("在高精度的计算过程中, 我们会将各个位上的数字放到数组的不同位置上. 有俩种存储的方式, 一种为低位存储, 一种为高位存储.")]),t._v(" "),a("ul",[a("li",[t._v("低位存储: 即将低位(个位, 十位算起), 放在数组的开头位置")]),t._v(" "),a("li",[t._v("高位存储: 即将低位(个位, 十位算起), 放在数组的结尾位置")])]),t._v(" "),a("p",[t._v("举个栗子")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 低位存储")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 高位存储")]),t._v("\n")])])]),a("p",[t._v("这里我们进行运算是使用低位存储的方式. 这样设计的好处是, 假设我们计算后需要进位的话, 那么我们往数组的结尾push一个值就可以. 如果是高位存储的话, 那么我们需要unshift一个值. "),a("strong",[t._v("unshift的底层实现是将数组中所有元素往后挪一位")]),t._v(", 然后在下标为0的位置放入进位的值. 效率比低位存储的方式低.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("后面章节中默认参与运算的数据不包含负数. 这一章的核心是帮助大家提高思维转换为代码的能力, 不希望大家被太多细节约束")])])])}),[],!1,null,null,null);s.default=r.exports}}]);