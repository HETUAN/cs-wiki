(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{526:function(t,s,a){"use strict";a.r(s);var n=a(29),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"📃-题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#📃-题目描述"}},[t._v("#")]),t._v(" 📃 题目描述")]),t._v(" "),a("p",[t._v("题目链接："),a("a",{attrs:{href:"https://leetcode-cn.com/problems/gas-station/",target:"_blank",rel:"noopener noreferrer"}},[t._v("134. 加油站 - 力扣（LeetCode） (leetcode-cn.com)"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("在一条环路上有 N 个加油站，其中"),a("strong",[t._v("第 i 个加油站有汽油 gas[i] 升")]),t._v("。")]),t._v(" "),a("p",[t._v("你有一辆"),a("strong",[t._v("油箱容量无限")]),t._v("的的汽车，"),a("strong",[t._v("从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升")]),t._v("。你从其中的一个加油站出发，开始时油箱为空。")]),t._v(" "),a("p",[t._v("如果你可以"),a("strong",[t._v("绕环路行驶一周，则返回出发时加油站的编号")]),t._v("，否则返回 -1。")]),t._v(" "),a("p",[t._v("说明:")]),t._v(" "),a("ul",[a("li",[t._v("如果题目有解，该答案即为唯一答案")]),t._v(" "),a("li",[t._v("输入数组均为非空数组，且长度相同")]),t._v(" "),a("li",[t._v("输入数组中的元素均为非负数")])]),t._v(" "),a("p",[t._v("示例 1:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入: \ngas  = [1,2,3,4,5]\ncost = [3,4,5,1,2]\n\n输出: 3\n\n解释:\n从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油\n开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油\n开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油\n开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油\n开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油\n开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。\n因此，3 可为起始索引。\n")])])]),a("p",[t._v("示例 2:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入: \ngas  = [2,3,4]\ncost = [3,4,3]\n\n输出: -1\n\n解释:\n你不能从 0 号或 1 号加油站出发，因为没有足够的汽油可以让你行驶到下一个加油站。\n我们从 2 号加油站出发，可以获得 4 升汽油。 此时油箱有 = 0 + 4 = 4 升汽油\n开往 0 号加油站，此时油箱有 4 - 3 + 2 = 3 升汽油\n开往 1 号加油站，此时油箱有 3 - 3 + 3 = 3 升汽油\n你无法返回 2 号加油站，因为返程需要消耗 4 升汽油，但是你的油箱只有 3 升汽油。\n因此，无论怎样，你都不可能绕环路行驶一周。\n")])])]),a("h2",{attrs:{id:"🔔-解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔔-解题思路"}},[t._v("#")]),t._v(" 🔔 解题思路")]),t._v(" "),a("h3",{attrs:{id:"暴力解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暴力解法"}},[t._v("#")]),t._v(" 暴力解法")]),t._v(" "),a("p",[t._v("暴力解法，遍历每一个加油站为起点的情况，模拟一圈。如果跑了一圈，中途没有断油，而且最后油量大于等于0，说明这个起点是 ok 的。")]),t._v(" "),a("p",[t._v("但代码写起来不是很容易，关键是要模拟跑一圈的过程。")]),t._v(" "),a("p",[a("strong",[t._v("for 循环适合模拟从头到尾的遍历，而 while 循环适合模拟环形遍历")])]),t._v(" "),a("p",[t._v("另外，"),a("strong",[t._v("首先要明确，总油量是否小于总油耗，如果是则肯定不能走一圈。如果否，那肯定能跑一圈，接下来就是选取具体的其实位置")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("canCompleteCircuit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" cost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" totalSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            totalSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" cost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("totalSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 总油量小于总的消耗，无解")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 邮箱中剩余的油")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" restGas "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 循环选择出发时的加油站下标")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以 start 为起点环绕一圈")]),t._v("\n            restGas "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" cost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" loop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("restGas "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" loop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                restGas "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("loop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" cost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("loop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                loop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("loop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果以 start 为起点跑一圈，剩余油量>=0")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("restGas "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" loop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("时间复杂度 O(N^2)")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220111210755.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"贪心解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贪心解法"}},[t._v("#")]),t._v(" 贪心解法")]),t._v(" "),a("p",[t._v("首先"),a("u",[t._v("如果"),a("strong",[t._v("总油量减去总消耗大于等于零那么一定可以跑完一圈")]),t._v("，说明 "),a("strong",[t._v("各个站点的加油站 剩油量 restGas[i] (gas[i] - cost[i]) 相加一定是大于等于零的")])])]),t._v(" "),a("p",[t._v("i 从 0 开始累加 rest[i]，和记为 curSum，一旦 curSum 小于零，说明 [0, i] 区间都不能作为起始位置，起始位置从 i+1 算起，并将 curSum 归零重新计算。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220216101143.png",alt:""}})]),t._v(" "),a("p",[t._v("那么为什么一旦[i，j] 区间和为负数，起始位置就可以是 j+1 呢")]),t._v(" "),a("p",[t._v("结论 👉 "),a("strong",[t._v("如果选择站点 "),a("code",[t._v("i")]),t._v(" 作为起点「恰好」无法走到站点 "),a("code",[t._v("j")]),t._v("，那么 "),a("code",[t._v("i")]),t._v(" 以及 "),a("code",[t._v("i")]),t._v(" 和 "),a("code",[t._v("j")]),t._v(" 其中间的任意站点 "),a("code",[t._v("k")]),t._v(" 都不可能作为起点，起始位置至少要是 j + 1")]),t._v("。")]),t._v(" "),a("p",[t._v("比如说，如果从站点"),a("code",[t._v("1")]),t._v("出发，走到站点"),a("code",[t._v("5")]),t._v("时油箱中的油量「恰好」减到了负数，那么说明站点"),a("code",[t._v("1")]),t._v("「恰好」无法到达站点"),a("code",[t._v("5")]),t._v("；那么你从站点"),a("code",[t._v("2,3,4")]),t._v("任意一个站点出发都无法到达"),a("code",[t._v("5")]),t._v("，因为到达站点"),a("code",[t._v("5")]),t._v("时油箱的油量也必然被减到负数。")]),t._v(" "),a("p",[t._v("证明一下这个结论")]),t._v(" "),a("p",[t._v("假设 "),a("code",[t._v("restGas")]),t._v(" 记录当前油箱中剩余油量，如果从站点"),a("code",[t._v("i")]),t._v("出发（"),a("code",[t._v("restGas= 0")]),t._v("），走到"),a("code",[t._v("j")]),t._v("时"),a("strong",[t._v("恰好")]),t._v("出现 "),a("code",[t._v("restGas< 0")]),t._v(" 的情况，那说明走到 "),a("code",[t._v("i, j")]),t._v(" 之间的任意站点 "),a("code",[t._v("k")]),t._v(" 时都满足 "),a("code",[t._v("restGas > 0")]),t._v("，对吧。")]),t._v(" "),a("p",[t._v("如果把 "),a("code",[t._v("k")]),t._v(" 作为起点的话，相当于在站点 "),a("code",[t._v("k")]),t._v(" 时 "),a("code",[t._v("restGas = 0")]),t._v("，想一下，从 "),a("code",[t._v("i")]),t._v(" 出发走到 "),a("code",[t._v("k")]),t._v(" 好歹还是 "),a("code",[t._v("restGas > 0")]),t._v("，这样都无法达到 "),a("code",[t._v("j")]),t._v("，现在你还让 "),a("code",[t._v("k")]),t._v(" 站点的 "),a("code",[t._v("restGas = 0")]),t._v("了，那更不可能走到 "),a("code",[t._v("j")]),t._v(" 了对吧。也就是说 "),a("code",[t._v("k")]),t._v(" 肯定不能是起点。")]),t._v(" "),a("p",[t._v("综上，这个结论就被证明了。")]),t._v(" "),a("p",[t._v("So，我们可以推出局部最优：")]),t._v(" "),a("ul",[a("li",[t._v("当前累计的油箱中剩余的油 curSum 一旦小于 0，起始位置至少要是 i+1")])]),t._v(" "),a("p",[t._v("全局最优：")]),t._v(" "),a("ul",[a("li",[t._v("根据局部最优找到可以跑一圈的起始位置")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("canCompleteCircuit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" cost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" totalSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            totalSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" cost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("totalSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 总油量小于总的消耗，无解")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 累计的油箱中剩余的油 gas[i] - cost[i]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" curSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 起始加油站下标")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            curSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" gas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" cost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前累加 restGas[i] 的和 curSum 一旦小于 0，起始位置至少要是 i+1")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新起始位置")]),t._v("\n                start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// curSum 归零")]),t._v("\n                curSum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("时间复杂度 O(N)")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220111213850.png",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);