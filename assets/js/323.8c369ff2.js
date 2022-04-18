(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{791:function(s,a,t){"use strict";t.r(a);var e=t(29),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"幻读为什么会被-mysql-单独拎出来解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#幻读为什么会被-mysql-单独拎出来解决"}},[s._v("#")]),s._v(" 幻读为什么会被 MySQL 单独拎出来解决？")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("所谓幻读，即一个事务在前后两次查询同一个范围的时候，后一次查询看到了前一次查询没有看到的行，这个回答估计大伙儿已经背烂了，但是它具体有什么后果呢？为什么会被 MySQL 单独拎出来解决呢？MySQL 又是如何解决的呢？")]),s._v(" "),t("blockquote",[t("p",[s._v("老规矩，背诵版在文末。")])]),s._v(" "),t("h2",{attrs:{id:"当前读和快照读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#当前读和快照读"}},[s._v("#")]),s._v(" 当前读和快照读")]),s._v(" "),t("p",[s._v("在了解幻读以及 MySQL 是如何解决幻读这个问题前，我们需要知道，什么是"),t("strong",[s._v("当前读")]),s._v("、什么是"),t("strong",[s._v("快照读")]),s._v("。")]),s._v(" "),t("p",[s._v("快照读：读取快照中的数据，不需要进行加锁。看到快照这两个字，各位肯定马上就想到 MVCC 了，是这样，MVCC 作用于读取已提交和可重复读（默认）这两个隔离级别，这俩隔离级别下的普通 select 操作就是快照读")]),s._v(" "),t("p",[s._v("当前读：读取的是最新版本的数据, 并且对读取的记录加锁, 阻塞其他事务同时改动相同记录，避免出现安全问题。")]),s._v(" "),t("p",[s._v("除了读取已提交和可重复读这俩隔离级别下的普通 select 操作，其余操作都是当前读：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lock")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("share")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mode")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("共享读锁"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v("\n")])])]),t("p",[s._v("举个例子，来直观感受下快照读和当前读，以可重复读隔离级别为例，假设我们目前有一张 user 表，有如下的数据：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211124161017.png",alt:""}})]),s._v(" "),t("p",[s._v("开启两个事务：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211124161505.png",alt:""}})]),s._v(" "),t("p",[s._v("事务 1 先来个快照读看看：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211124161543.png",alt:""}})]),s._v(" "),t("p",[s._v("没毛病，很正常。")]),s._v(" "),t("p",[s._v("事务 2 修改 age = 99，然后提交：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211124161627.png",alt:""}})]),s._v(" "),t("p",[s._v("你猜，这时候，事务 1 快照读出来的数据应该是多少？")]),s._v(" "),t("p",[s._v("是的，仍然是旧数据：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211124161712.png",alt:""}})]),s._v(" "),t("p",[s._v("那事务 1 “当前读” 出来的数据肯定是最新的了：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211124161807.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"幻读到底有什么问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#幻读到底有什么问题"}},[s._v("#")]),s._v(" 幻读到底有什么问题")]),s._v(" "),t("p",[s._v("所谓幻读，即一个事务在前后两次查询同一个范围的时候，后一次查询看到了前一次查询没有看到的行。")]),s._v(" "),t("p",[s._v("在可重复读隔离级别下，普通的查询是快照读，当前事务是不会看到别的事务插入的数据的。因此，"),t("strong",[s._v("幻读问题在 “当前读” 下才会出现")]),s._v("。")]),s._v(" "),t("blockquote",[t("p",[s._v('也有很多的文章说用 MVCC 来解决 "快照读" 下的幻读问题，我觉得没必要纠结吧，甚至可能面试官更可能愿意听到 MVCC 的原理。')]),s._v(" "),t("p",[s._v("不过，话说回来，没有 MVCC 机制，哪来快照读这个东西？")])]),s._v(" "),t("p",[s._v("那么，幻读到底有什么问题？它具体有什么后果呢？")]),s._v(" "),t("p",[s._v("不多废话，直接上例子：")]),s._v(" "),t("p",[s._v('我们有一张表 user(id, username, age)，已经有两条数据 (1, "Jack", 20), (2, "Tom", 18)')]),s._v(" "),t("p",[s._v("有如下三个事务：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211124172554.png",alt:""}})]),s._v(" "),t("p",[s._v("众所周知，select for update 语句会加行锁，"),t("strong",[s._v("假设，注意这里是假设奥")]),s._v("！！！假设事务 1 的 "),t("code",[s._v("select * from user where name = 'Jack' for update")]),s._v(" 只在 id = 1 的这一行上加行锁")]),s._v(" "),t("p",[s._v("可以看到，事务 1 执行了三次查询，都是要查出 name = \"Jack\" 的记录行。注意我们假设这里只在 name = 'Jack' 行上加行锁")]),s._v(" "),t("ul",[t("li",[s._v("第一次查询只返回了 id = 1 这一行")]),s._v(" "),t("li",[s._v('在第二次查询之前，事务 2 把 id = 2 这一行的 name 值改成了 "Jack"，因此事务 1 第二次查询的结果是 id = 1 和 id = 2 这两行')]),s._v(" "),t("li",[s._v('在第三次查询之前，事务 3 插入了一个 name = "Jack" 的新数据，因此事务 1 第三次查询的结果是 id = 1、id = 2 以及 id = 3 这三行')])]),s._v(" "),t("p",[s._v("显然，第三次查询读到的 id = 3 这一行的现象，就是幻读")]),s._v(" "),t("p",[t("strong",[s._v("但其实从逻辑上来说，这似乎是没有问题的")]),s._v("。")]),s._v(" "),t("p",[s._v("因为这三个查询都是加了 for update，都是当前读。而当前读的规则，就是要能读到所有已经提交的记录的最新值，所以第二次查询和第三次查询就是应该看到事务 2 和事务 3 的操作效果。")]),s._v(" "),t("br"),s._v(" "),t("p",[s._v("那么，幻读到底有啥问题？")]),s._v(" "),t("p",[t("strong",[s._v("首先是语义上的")]),s._v('。事务 1 在第一次查询的时候就声明了，我要把所有 name = "Jack" 的行锁住，拒绝别的事务对 name = "Jack" 的行进行读写操作。')]),s._v(" "),t("p",[s._v("但是，实际上，这个语义被破坏了，举个例子，我再往事务 2 里加一条 SQL 语句（黄色框框）：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211129102716.png",alt:""}})]),s._v(" "),t("p",[s._v('事务 2 的第二条语句的意思是 "把 id = 2 这一行的 age 值改成了 40"，这行的 name 值是 "Jack"。')]),s._v(" "),t("p",[s._v("而在这之前，事务 1 只是给 id = 1 的这一行加了行锁，并没有给 id = 2 这行加锁。所以，事务 2 是可以执行这条 update 语句的。")]),s._v(" "),t("p",[s._v('这样，事务 2 先将 id = 2 的 name 改为 Jack，然后再将 age 改为 40，破坏了事务 1 对要把所有 "name = Jack 的行锁住" 的声明')]),s._v(" "),t("br"),s._v(" "),t("p",[s._v("其次，最重要的是，是"),t("strong",[s._v("数据一致性")]),s._v("的问题。")]),s._v(" "),t("p",[s._v("众所周知，加锁是为了保证数据的一致性，这个一致性，不仅包括数据的一致性，还包括数据和日志的一致性，举个例子：")]),s._v(" "),t("p",[s._v("给事务 1 再加上一条 SQL 语句（黄色框框）")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211129104503.png",alt:""}})]),s._v(" "),t("p",[s._v("我在上图中圈出了四个时刻， T1 T2 T3 和 T4，我们来分析下经过这四个时刻的数据库状态：")]),s._v(" "),t("ol",[t("li",[s._v("经过 T1 时刻，id = 1 这一行变成 (1, Tom, 20)，注意这是在 T4 才正式提交的")]),s._v(" "),t("li",[s._v("经过 T2 时刻，id = 2 这一行变成 (2, Jack, 40)")]),s._v(" "),t("li",[s._v("经过 T3 时刻，表里面多了一行 (3, Jack, 30)")])]),s._v(" "),t("p",[s._v("再来看看这时候 binlog 日志里面的内容，binlog 就是记录下我们做了哪些操作嘛：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("T2 时刻，事务 2 提交，写入了 2 条 update 语句；")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Jack"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"40"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*(2, Jack, 40)*/")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("T3 时刻，事务 3 提交，写入了 1 条语句；")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Jack"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*(3, Jack, 30)*/")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("T4 时刻，事务 1 提交，binlog 中写入了 "),t("code",[s._v('update user set name = "Tom" where name = "Jack"')]),s._v(" 这条语句")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Tom"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Jack"')]),s._v("\n")])])]),t("p",[s._v('就是说，把所有 name = Jack 的行，都给我改成 name = "Tom"')])])]),s._v(" "),t("p",[s._v("这样，问题就来喽，binlog 一般都是用于备库同步主库的对吧，这个 binlog 一执行，那岂不是原先 (2, Jack, 40) 和 (3, Jack, 30) 这两行的 name 全都变成了 Tom。")]),s._v(" "),t("p",[s._v("也就是说，id = 2 和 id = 3 这两行，发生了数据不一致。")]),s._v(" "),t("br"),s._v(" "),t("p",[s._v("注意！这个数据不一致到底是怎么发生的？是假设事务 1 的 "),t("code",[s._v("select * from user where name = 'Jack' for update")]),s._v(" 只在 id = 1 的这一行上加行锁导致的。")]),s._v(" "),t("p",[s._v("很显然，分析到这里，我们已经明白，只锁这一行是不合理的。那好办，让 select for update 把所有扫描到的行都给锁住不就行了？")]),s._v(" "),t("p",[s._v("这样，事务 2 在 T2 时刻就会被阻塞住，直到事务 1 在 T4 时刻 commit 释放锁")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211129105557.png",alt:"image-20211129105557057"}})]),s._v(" "),t("p",[s._v("由于 session A 把所有的行都加了写锁，所以 session B 在执行第一个 update 语句的时候就被锁住了。需要等到 T6 时刻 session A 提交以后，session B 才能继续执行。")]),s._v(" "),t("p",[s._v("But，这样看似没问题，是否真的没问题呢？")]),s._v(" "),t("p",[s._v("来看 binlog，执行序列是这样的：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("事务 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(":\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Jack"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*(3, Jack, 30)*/")]),s._v("\n\n事务 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(":\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Tom"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Jack"')]),s._v("\n\n事务 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Jack"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" age "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"40"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*(2, Jack, 40)*/")]),s._v("\n")])])]),t("p",[s._v("可以看到，事务 2 的问题确实是解决了，Jack 保住了，仍然是 (2, Jack, 40)")]),s._v(" "),t("p",[s._v('但是！！！注意事务 3，在数据库里面的结果是 (3, "Jack", 30)，而根据 binlog 的执行结果是 (3, Tom, 30)，也就是说幻读的问题还是没有解决。')]),s._v(" "),t("p",[s._v("那为什么我们已经把所有能够扫描到的记录都加上了锁，还是阻止不了 id = 3 这一行的插入和更新呢？")]),s._v(" "),t("p",[s._v("很简单。"),t("strong",[s._v("在我们给所有行加锁的时候，id = 3 这一行还不存在，数据库扫描不到，也就当然加不上锁了")]),s._v("。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211129110845.png",alt:""}})]),s._v(" "),t("p",[s._v("这也是为什么幻读问题会被单独拿出来解决的原因，即使我们把所有的的记录都加上锁，还是阻止不了新插入的记录。")]),s._v(" "),t("h2",{attrs:{id:"mysql-如何解决幻读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-如何解决幻读"}},[s._v("#")]),s._v(" MySQL 如何解决幻读")]),s._v(" "),t("p",[s._v("现在你知道了，产生幻读的原因是，行锁只能锁住行，但是新插入记录这个动作，操作的是锁住的行之间的 “间隙”。因此，为了解决幻读问题，InnoDB 只好引入新的锁，也就是间隙锁 (Gap Lock)。")]),s._v(" "),t("p",[s._v("这样，当你执行 select * from user where name = 'Jack' for update 的时候，就不止是给数据库中已有的 n 个记录加上了行锁，还同时加了 n + 1 个间隙锁（这两个合起来也成为 Next-Key Lock 临键锁）。也就是说，在数据库一行行扫描的过程中，不仅扫描到的行加上了行锁，还给行两边的空隙也加上了锁。这样就确保了无法再插入新的记录。")]),s._v(" "),t("blockquote",[t("p",[s._v("这里多提一嘴，update、delete 语句用不上索引是很恐怖的。")]),s._v(" "),t("p",[s._v("对非索引字段进行 select .. for update、update 或者 delete 操作，由于没有索引，走全表查询，就会对所有行记录 以及 所有间隔 都进行上锁。而对于索引字段进行上述操作，只有索引字段本身和附近的间隔会被加锁。")])]),s._v(" "),t("br"),s._v(" "),t("p",[s._v("总结下 MySQL 解决幻读的手段：")]),s._v(" "),t("p",[s._v("隔离级别：可重复读")]),s._v(" "),t("ul",[t("li",[t("u",[s._v("快照读 MVCC")]),s._v(" + "),t("u",[s._v("当前读 Next-Lock Key")]),s._v("(只在可重复读隔离级别下生效)")])]),s._v(" "),t("p",[s._v("隔离级别：SERIALIZABLE")]),s._v(" "),t("ul",[t("li",[s._v("在这个隔离级别下，事务在读操作时，先加表级别的共享锁，直到事务结束才释放；事务在写操作时，先加表级别的排它锁，直到事务结束才释放。也就是说，串行化锁定了整张表，幻读不存在的")])]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("最后放上这道题的背诵版：")]),s._v(" "),t("blockquote",[t("p",[s._v("🥸 "),t("strong",[s._v("面试官")]),s._v("：幻读有什么问题，MySQL 是如何解决幻读的")]),s._v(" "),t("p",[s._v("😎 "),t("strong",[s._v("小牛肉")]),s._v("：幻读就是一个事务在前后两次查询同一个范围的时候，后一次查询看到了前一次查询没有看到的行。")]),s._v(" "),t("p",[s._v("幻读的后果就是数据库中的数据和 binlog 的执行结果会不一致，其原因就在于，我们无法阻止新插入的数据。就是说，我们在给扫描到的行加锁的时候，你等会要插入的行还不存在，也就没法对他进行加锁，那么这个新插入的数据，可能在主库中是这个样子，从库执行完 binlog 后其实是会被修改的。")]),s._v(" "),t("p",[s._v("这也就是为啥幻读会被单独拎出来解决的原因了。")]),s._v(" "),t("p",[s._v('幻读问题在 "当前读" 下才会出现。')]),s._v(" "),t("p",[s._v("所谓当前读就是，读取的是最新版本的数据, 并且对读取的记录加锁, 阻塞其他事务同时改动相同记录，避免出现安全问题。")]),s._v(" "),t("p",[s._v("与之对应的，快照读，读取的是快照中的数据，不需要进行加锁。读取已提交和可重复读这俩隔离级别下的普通 select 操作就是快照读。其实就是 MVCC 机制，或者说，在快照读下，采用 MVCC 机制解决幻读。")]),s._v(" "),t("p",[s._v("然后，对于当前读这种情况，前面我们说，由于无法阻止新插入的数据，所以无法解决幻读问题，所以，我们考虑，不仅对扫描到的行进行加锁，还对行之间的间隙进行加锁，这样就能杜绝新数据的插入和更新。这个其实就是记录锁 Record Lock 和间隙锁 Gap Lock，也被称为临键锁 Next-Lock Key。")]),s._v(" "),t("p",[s._v("额临键锁只在可重复读也就是 InnoDB 的默认隔离级别下生效。也可以采用更高的可串行化隔离级别，所有的操作都是串行执行的，可以直接杜绝幻读问题。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);