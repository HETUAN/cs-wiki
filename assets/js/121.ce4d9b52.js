(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{589:function(v,_,t){"use strict";t.r(_);var n=t(29),r=Object(n.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("题目是这样的：")]),v._v(" "),t("ul",[t("li",[v._v("32 位无符号整数的范围是 $[0, 2^{32} - 1]$，即 $[0, 4 294 967 295]$，现在有一个正好包含 40 亿个无符号整数的文件，所以在整个范围中必然有未出现过的数。可使用的内存有限，怎么找到所有未出现过的数？")])]),v._v(" "),t("p",[v._v("大数据小内存问题，很容易想到位图法")]),v._v(" "),t("p",[v._v("我们申请一个长度为 $2^{32} - 1$ 的 bit 类型的位数组, 位数组上的每个位置只可以表示 0 或 1 状态。首先遍历这 40 亿个无符号数，例如，遇到 1000，就把 bitArr[1000] 设置为 1，这样，遍历第二遍的时候所有值为 0 的下标就是未出现的数。")]),v._v(" "),t("p",[v._v("简单算一下这种做法需要多大的内存空间：")]),v._v(" "),t("p",[v._v("8 个 bit 为 1B，所以长度为 42 9496 7295 的 bit 类型的数组占用 5 3687 0911 B 的空间，按照 1MB = 1024 * 1024 B 来算，那就是大概 500 多 MB 的空间大小")]),v._v(" "),t("p",[v._v("寻思一下，能不能有使用空间更小的做法？")]),v._v(" "),t("br"),v._v(" "),t("p",[v._v("=> $2^{26} * 2^6 = 2^{32}$")]),v._v(" "),t("p",[v._v("我们把 $[0, 2^{32} - 1]$ 这个区间分为 $2^{6} = 64$ 份（当然你可以分得更多），这样，每个区间就是处理 $2^{26} (6710 8864)$ 个数，例如：第 0 区间 $[0, 2^{26} - 1]$、第 1 区间 $[2^{26}, 2^{27} - 1]$，......")]),v._v(" "),t("p",[v._v("因为题目说一共只有 40 亿个数，而我们划分的区间是多于 40 亿的，所以，这样平均分的结果就是，肯定有几个区间是填不满 $2^{26}$ 个数的。")]),v._v(" "),t("p",[v._v("更简单地解释下，比如我们按照 6 个数划分 3 个区间来算，每个区间就是存 2 个数对吧，但是假设现在实际上只有 5 个数，那么肯定有一个区间是存不满 2 个数的。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220405161835.png",alt:""}})]),v._v(" "),t("p",[v._v("所以，如果一个区间填不满，也就意味着这个区间缺少了数，我们把这些区间拿出来，再依次按照位图法的那一套处理下，就能得到这些区间中未出现的数。")]),v._v(" "),t("p",[v._v("具体过程如下：")]),v._v(" "),t("p",[v._v("1）申请一个长度为 64 的"),t("strong",[v._v("整型数组")]),v._v(" "),t("code",[v._v("countArr[0..63]")]),v._v(", countArr[i] 用来统计区间 i 上的数有多少个，如果小于 $2^{26}$，说明这个区间上缺少了数")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220405160730.png",alt:""}})]),v._v(" "),t("p",[v._v("2）遍历 40 亿个数，根据当前数是多少来决定哪一个区间上的计数增加。例如，如果当前数是 3422552090，$3422552090 / 2^{26} = 51$，所以下标未 51 区间上的计数增加，即 countArr[51]++")]),v._v(" "),t("p",[v._v("3）遍历完这 40 亿个数之后，遍历一遍 countArr，找出所有小于 $2^{26}$ 的下标，假设是 {0，1}，那就表示第 0 区间 $[0, 2^{26} - 1]$ 和第 1 区间 $[2^{26}, 2^{27} - 1]$ 都存在未出现过的数")]),v._v(" "),t("p",[v._v("至此，我们只使用了一个 int[64]，大小为 "),t("strong",[v._v("64 * 4B = 256B")]),v._v("，占用的内存非常小")]),v._v(" "),t("p",[v._v("4）接下来，我们需要对第 0 区间和第 1 区间进行进一步处理，也就是上面说过的位图法，以第 1 区间 $[2^{26}, 2^{27} - 1]$ 为例：")]),v._v(" "),t("ul",[t("li",[v._v("申请长度为 $2^{26} (6710 8864)$ 的"),t("strong",[v._v("位数组")]),v._v("，这仅仅占用大约 "),t("strong",[v._v("8 MB")]),v._v(" 的空间，记为 "),t("code",[v._v("bitArr[0..67108863]")])]),v._v(" "),t("li",[v._v("再遍历一次 40 亿个数，不过此时的遍历只需要关注落在第 1 区间上的数就行了，记为 num（$num / 2^{26} = 1$），其他区间的数全部忽略")]),v._v(" "),t("li",[v._v("如果 num 在第 1 区间上，将 bitArr[num - 2^26 * 1] 的值设置为 1")]),v._v(" "),t("li",[v._v("这样，遍历完之后，在 bitArr 上必然存在没被设置成 1 的位置，假设第 i 个位置上的值仍然是 0，那么 "),t("code",[v._v("2^26× 1 + i")]),v._v(" 这个数就是一个没出现过的数")])]),v._v(" "),t("p",[v._v("总结来说，其实就是区间计数 + 位图法，"),t("strong",[v._v("对计数不足的区间执行位图法")])])])}),[],!1,null,null,null);_.default=r.exports}}]);