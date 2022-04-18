(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{531:function(t,s,a){"use strict";a.r(s);var n=a(29),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("对于面试的话，其实掌握 0-1 背包和完全背包就够用了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220128114223.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_0-1-背包问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-1-背包问题"}},[t._v("#")]),t._v(" 0-1 背包问题")]),t._v(" "),a("h3",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),a("ul",[a("li",[t._v("给你一个可装载重量为 "),a("code",[t._v("W")]),t._v(" 的背包，和 "),a("code",[t._v("N")]),t._v(" 个物品")]),t._v(" "),a("li",[t._v("每个物品有重量和价值两个属性，且"),a("strong",[t._v("每个物品只有一件")]),t._v("。其中第 "),a("code",[t._v("i")]),t._v(" 个物品的重量为 "),a("code",[t._v("w[i]")]),t._v("，价值为 "),a("code",[t._v("v[i]")])]),t._v(" "),a("li",[t._v("现在让你用这个背包装物品，最多能装的价值是多少？")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20201007093550.png"}}),t._v(" "),a("p",[t._v("举个简单的例子，输入如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("N = 3 个物品, W = 4 背包最大容量\nweight = [2, 1, 3] 每个物体的体积\nvalue = [4, 2, 3] 每个物体的价值\n")])])]),a("p",[t._v("题目中的"),a("strong",[t._v("物品不可以分割，要么装进包里，要么不装，不能说切成两块装一半。这就是 0-1 背包这个名词的来历")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[t._v("#")]),t._v(" 解题思路")]),t._v(" "),a("p",[t._v("辅助数组 "),a("strong",[a("code",[t._v("dp[i][j]")]),t._v(" 的定义如下：从下标为 [0 ~ i] 的物品里任意取，放进容量为 j 的背包，价值总和最大是多少")]),t._v("。")]),t._v(" "),a("p",[t._v("举个例子，如果 "),a("code",[t._v("dp[3][5] = 6")]),t._v("，其含义为：对于给定的一系列物品中，若只对前 3 个物品进行选择，当背包容量为 5 时，最多可以装下的价值为 6。"),a("strong",[t._v("根据这个定义，我们想求的最终答案就是")]),a("code",[t._v("dp[N - 1][W]")]),t._v("。")]),t._v(" "),a("p",[t._v("状态转移方程：")]),t._v(" "),a("p",[t._v("1）对于下标为 "),a("code",[t._v("i")]),t._v(" 的物品，如果当前背包容量装不下，只能选择不装入背包，"),a("code",[t._v("dp[i][j]")]),t._v(" 应该等于"),a("code",[t._v("dp[i-1][j]")])]),t._v(" "),a("p",[t._v("2）若当前背包容量可以装得下：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("如果你没有把这下标为 "),a("code",[t._v("i")]),t._v(" 的物品装入背包")]),t._v("，"),a("code",[t._v("dp[i][j]")]),t._v(" 应该等于 "),a("code",[t._v("dp[i-1][j]")]),t._v("。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("如果你把这下标为 "),a("code",[t._v("i")]),t._v(" 的物品装入了背包")]),t._v("，那么 "),a("code",[t._v("dp[i][j]")]),t._v(" 应该等于 "),a("code",[t._v("dp[i-1][j-weight[i]] + v[i]")]),t._v("。")]),t._v(" "),a("p",[t._v("解释下，如果我们将下标为 i 的物品装入背包，那么对于 "),a("code",[t._v("dp[i - 1][j]")]),t._v(" 来说（也就是从下标为 [0 ~ i - 1] 的物品里任意取，放进容量为 j 的背包），"),a("strong",[t._v("我们需要预留出 j - weight[i] 的空间用来存放下标为 i 的物品")]),t._v("，也就是 "),a("code",[t._v("dp[i - 1][j - weight[i]]")])])])]),t._v(" "),a("p",[a("strong",[t._v("基本情况 base case")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("背包容量为空时，能装的最大价值为 0  即 "),a("code",[t._v("dp[i][0] = 0")])]),t._v(" "),a("blockquote",[a("p",[t._v("💡 在 Java 中，"),a("code",[t._v("dp = new int[][];")]),t._v(" 会将 dp 数组全部初始化成 0，所以赋值为 0 的操作不必手动进行")])])]),t._v(" "),a("li",[a("p",[t._v("物品只有一个的时候，背包能装的最大价值就是这个物品的价值，即 "),a("code",[t._v("dp[0][j] = value[0]")])])])]),t._v(" "),a("h3",{attrs:{id:"具体代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体代码"}},[t._v("#")]),t._v(" 具体代码")]),t._v(" "),a("p",[t._v("根据上面的状态转移方程，在计算 "),a("code",[t._v("dp[i][j]")]),t._v(" 之前，我们需要先计算 "),a("code",[t._v("dp[i-1][j]")]),t._v(" 和 "),a("code",[t._v("dp[i-1][j-weight[i]]")]),t._v(" ，直接从 0 开始顺序遍历即可保证计算顺序。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220128121219.png",alt:""}})]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KnapsackProblem")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" weight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" bagweight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test01bagproblem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bagweight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @param weight 物品对应重量\n     * @param value 物品对应价值\n     * @param bagweight 背包容量\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test01bagproblem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" bagweight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 物品数量")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" wlen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("wlen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bagweight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// base case")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只有一个物品，则背包能装的最大价值就是这个物品的价值")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当然背包的容量需要 > weight[0]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" bagweight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// loop")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" wlen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 物品")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" bagweight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 背包容量")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 装不下这个物品")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 装得下这个物品，择优选择装还是不装")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                        dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("wlen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bagweight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("dp 数组如下，最后结果就是 35")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220128124416.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"状态压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态压缩"}},[t._v("#")]),t._v(" 状态压缩")]),t._v(" "),a("p",[t._v("根据上面的状态转移方程，在计算 "),a("code",[t._v("dp[i][j]")]),t._v(" 之前，我们只需要计算 "),a("code",[t._v("dp[i - 1][..]")]),t._v(" 的值，因此我们可以将辅助数组 "),a("code",[t._v("dp")]),t._v(" 从二维降到一维，去掉第 1 维（即 "),a("code",[t._v("i")]),t._v(" 的那一维），节约空间复杂度。")]),t._v(" "),a("p",[t._v("这就是滚动数组的由来，需要满足的条件是上一层可以重复利用，直接拷贝到当前层。")]),t._v(" "),a("p",[t._v("这样，压缩后的一维数组 "),a("code",[t._v("dp[j]")]),t._v(" 表示：容量为 j 的背包能装的最大价值")]),t._v(" "),a("p",[t._v("对于每一个物品 i ，如果这个物品的重量小于背包容量的话，那么它可以选择装入背包或者不装入：")]),t._v(" "),a("ol",[a("li",[t._v("不装入当前物品 i：dp[j] = dp[j]")]),t._v(" "),a("li",[t._v("装入当前物品 i：dp[j] = dp[j - weight[i]] + value[i]")])]),t._v(" "),a("p",[t._v("两者选择最大的那一个就可以了")]),t._v(" "),a("blockquote",[a("p",[t._v("如果这个物品的重量大于背包容量，那显然没得选，只能不装入背包，即 dp[j] 保持不变，就不需要在代码中体现出来啦")])]),t._v(" "),a("p",[t._v("base case：dp[0] = 0")]),t._v(" "),a("p",[t._v("并且由判断条件可知只有在 "),a("code",[t._v("j - weight[i] >= 0")]),t._v(" 时，才会考虑是否将该物品加入背包。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param weight 物品对应重量\n * @param value 物品对应价值\n * @param bagweight 背包容量\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test01bagproblem2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" bagweight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 物品数量")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" wlen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bagweight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// loop")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" wlen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历物品")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bagweight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 倒序遍历背包容量")]),t._v("\n            dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                             dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bagweight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("需要注意的是，"),a("strong",[t._v("为保证每个物品只能使用一次，我们 "),a("u",[t._v("倒序")]),t._v(" 遍历所有 "),a("code",[t._v("j")]),t._v(" 的值，类似于递归的方式，这样在更新 "),a("code",[t._v("dp[j]")]),t._v(" 的时候，"),a("code",[t._v("dp[j - weight[i-1]]")]),t._v(" 的值尚未被修改，就不会出现一个物品重复使用的问题")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220129113659.png",alt:"需要注意的地方"}})]),t._v(" "),a("p",[t._v("解释一下为什么要倒序枚举（从大重量背包到小重量）：")]),t._v(" "),a("p",[a("strong",[t._v("倒序遍历是为了保证物品 i 只被放入一次！")]),t._v("。但如果一旦正序遍历了，那么物品 i 就会被重复加入多次！")]),t._v(" "),a("p",[t._v("举一个例子：物品 0 的重量 weight[0] = 1，价值 value[0] = 15")]),t._v(" "),a("p",[t._v("如果正序遍历")]),t._v(" "),a("p",[t._v("dp[1] = dp[1 - weight[0]] + value[0] = dp[0] + value[0] = 15")]),t._v(" "),a("p",[t._v("dp[2] = dp[2 - weight[0]] + value[0] = dp[1] + value[0] = dp[0] + "),a("code",[t._v("value[0]")]),t._v(" + "),a("code",[t._v("value[0]")]),t._v("= 30")]),t._v(" "),a("p",[t._v("此时 dp[2] 中物品 0 被放入了两次，所以不能正序遍历。")]),t._v(" "),a("p",[t._v("为什么倒序遍历，就可以保证物品只放入一次呢？")]),t._v(" "),a("p",[t._v("倒序就是先算 dp[2]")]),t._v(" "),a("p",[t._v("dp[2] = dp[2 - weight[0]] + value[0] = dp[1] + value[0] = 15 （dp 数组初始化为0，此时的 dp[1] 还没有正式纳入计算）")]),t._v(" "),a("p",[t._v("dp[1] = dp[1 - weight[0]] + value[0] = dp[0] + value[0] = 15")]),t._v(" "),a("p",[t._v("所以从后往前循环，每次取得状态不会和之前取得状态重合，这样每种物品就只取一次了。")]),t._v(" "),a("p",[a("strong",[t._v("那么问题又来了，为什么二维dp数组历的时候不用倒序呢？")])]),t._v(" "),a("p",[t._v("因为对于二维dp，"),a("code",[t._v("dp[i][j]")]),t._v(" 都是通过上一层即 "),a("code",[t._v("dp[i - 1][j]")]),t._v(" 计算而来，本层的 "),a("code",[t._v("dp[i][j]")]),t._v(" 并不会被覆盖")]),t._v(" "),a("h2",{attrs:{id:"完全背包问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完全背包问题"}},[t._v("#")]),t._v(" 完全背包问题")]),t._v(" "),a("h3",{attrs:{id:"问题描述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述-2"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),a("p",[t._v("有 N 种物品和一个容量为 W 的背包，每种物品都有无限个，第 "),a("code",[t._v("i")]),t._v(" 种物品的价值为 "),a("code",[t._v("v[i]")]),t._v("，重量为 "),a("code",[t._v("w[i]")]),t._v("，求解：选哪些物品放入背包，可使得背包中的价值最大，并且不超过背包容量。")]),t._v(" "),a("p",[t._v("💡 显然，和 0-1 背包问题最大的不同点就在于："),a("strong",[t._v("完全背包问题中的物品拥有无限个")])]),t._v(" "),a("p",[t._v("我们直接以 LeetCode 中的实例分析："),a("a",{attrs:{href:"https://leetcode-cn.com/problems/coin-change-2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("518. 零钱兑换 II"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("❓ 给定不同面额的硬币和一个总金额。写出函数来"),a("u",[t._v("计算可以凑成总金额的硬币组合数")]),t._v("。假设"),a("strong",[t._v("每一种面额的硬币有无限个")]),t._v("。")]),t._v(" "),a("p",[t._v("示例 1:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入: amount = 5, coins = [1, 2, 5]\n输出: 4\n解释: 有四种方式可以凑成总金额:\n5=5\n5=2+2+1\n5=2+1+1+1\n5=1+1+1+1+1\n")])])]),a("p",[t._v("示例 2:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入: amount = 3, coins = [2]\n输出: 0\n解释: 只用面额2的硬币不能凑成总金额3。\n")])])]),a("p",[t._v("示例 3:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入: amount = 10, coins = [10] \n输出: 1\n")])])]),a("p",[t._v("⭐ "),a("strong",[t._v("我们可以把这个问题转化为背包问题的描述形式")]),t._v("："),a("u",[t._v("有一个背包，最大容量为 "),a("code",[t._v("amount")]),t._v("，有一系列物品 "),a("code",[t._v("coins")]),t._v("，每个物品的重量为 "),a("code",[t._v("coins[i]")]),t._v("，"),a("strong",[t._v("每个物品的数量无限")]),t._v("。请问有多少种方法，能够把背包恰好装满 ？")])]),t._v(" "),a("h3",{attrs:{id:"解题思路-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路-2"}},[t._v("#")]),t._v(" 解题思路")]),t._v(" "),a("p",[t._v("回顾下 01 背包的核心代码：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// loop")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" wlen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历物品")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bagweight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 倒序遍历背包容量")]),t._v("\n        dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                         dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们知道 01 背包内嵌的循环是从大到小遍历，为了保证每个物品仅被添加一次。")]),t._v(" "),a("p",[a("strong",[t._v("而完全背包的物品是可以添加多次的，所以要从小到大去遍历")]),t._v("，即：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// loop")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" wlen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历物品")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" bagweight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 顺序遍历背包容量")]),t._v("\n        dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                         dp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" weight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"遍历顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遍历顺序"}},[t._v("#")]),t._v(" 遍历顺序")]),t._v(" "),a("p",[a("strong",[t._v("完全背包问题中，其实还有一个需要考虑的点，就是遍历的顺序")])]),t._v(" "),a("p",[t._v("之前我们的模板都是先遍历物品再遍历背包容量")]),t._v(" "),a("p",[t._v("这里先不展开讲，具体可以看道题 "),a("a",{attrs:{href:"https://leetcode-cn.com/problems/combination-sum-iv/",target:"_blank",rel:"noopener noreferrer"}},[t._v("377. 组合总和 Ⅳ - 力扣（LeetCode） (leetcode-cn.com)"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("⭐ 我们只需要记住：")]),t._v(" "),a("ul",[a("li",[t._v("如果 [1, 2] 和 [2, 1] 属于一种答案（即"),a("strong",[t._v("组合问题")]),t._v("），那么"),a("strong",[t._v("先遍历物品还是遍历背包容量都是可以的")])]),t._v(" "),a("li",[t._v("如果 [1, 2] 和 [2, 1] 属于两种答案（即"),a("strong",[t._v("排列问题")]),t._v("），那么"),a("strong",[t._v("需要先遍历背包容量再遍历物品")])])]),t._v(" "),a("h2",{attrs:{id:"多重背包问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多重背包问题"}},[t._v("#")]),t._v(" 多重背包问题")])])}),[],!1,null,null,null);s.default=p.exports}}]);