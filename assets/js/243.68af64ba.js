(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{711:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"📃-题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#📃-题目描述"}},[t._v("#")]),t._v(" 📃 题目描述")]),t._v(" "),a("p",[t._v("题目链接：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/ZVAVXX/",target:"_blank",rel:"noopener noreferrer"}},[t._v("剑指 Offer II 009. 乘积小于 K 的子数组 - 力扣（LeetCode） (leetcode-cn.com)"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/subarray-product-less-than-k/",target:"_blank",rel:"noopener noreferrer"}},[t._v("713. 乘积小于K的子数组 - 力扣（LeetCode） (leetcode-cn.com)"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("给定一个正整数数组 nums和整数 k ，请找出该数组内乘积小于 k 的连续的子数组的个数。")]),t._v(" "),a("p",[t._v("示例 1:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入: nums = [10,5,2,6], k = 100\n输出: 8\n解释: 8 个乘积小于 100 的子数组分别为: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]。\n需要注意的是 [10,5,2] 并不是乘积小于100的子数组。\n")])])]),a("p",[t._v("示例 2:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入: nums = [1,2,3], k = 0\n输出: 0\n")])])]),a("h2",{attrs:{id:"🔔-解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔔-解题思路"}},[t._v("#")]),t._v(" 🔔 解题思路")]),t._v(" "),a("p",[t._v("和上道题 "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/2VG8Kg/",target:"_blank",rel:"noopener noreferrer"}},[t._v("剑指 Offer II 008. 和大于等于 target 的最短子数组 - 力扣（LeetCode） (leetcode-cn.com)"),a("OutboundLink")],1),t._v(" 大差不差，稍微有些变化，上道题是要找到最小的窗口，所以当窗口中的和小于目标的时候（窗口收缩的时机），我们就可以进行收缩以进一步找到更小的窗口")]),t._v(" "),a("p",[t._v("而这道题并不需要最值，只要窗口中的乘积小于 k 就行，所以当窗口中元素的乘积 >= k 时（窗口收缩时机），需要收缩窗口以找到乘积小于 k 的窗口")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("numSubarrayProductLessThanK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 滑动窗口中的乘积")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" window "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 乘积小于 k 的连续的子数组的个数")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 增大窗口")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" newNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 增大窗口后处理 window")]),t._v("\n            window "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" newNum\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// windows need shrink: 如果窗口中元素的乘积 >= k，收缩窗口")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" window "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缩小窗口")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" removeNum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 缩小窗口后处理 window")]),t._v("\n                window "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/=")]),t._v(" removeNum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 窗口收缩至此，window < k, [left, right) 之间的每个数都可以单独成为子数组")]),t._v("\n            res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n             \n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"💥-复杂度分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#💥-复杂度分析"}},[t._v("#")]),t._v(" 💥 复杂度分析")]),t._v(" "),a("ul",[a("li",[t._v("空间复杂度：O(1)")]),t._v(" "),a("li",[t._v("时间复杂度：O(N)")])])])}),[],!1,null,null,null);s.default=e.exports}}]);