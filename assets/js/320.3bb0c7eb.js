(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{788:function(t,e,s){"use strict";s.r(e);var a=s(29),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"三分钟入门-innodb-存储引擎中的表锁和行锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三分钟入门-innodb-存储引擎中的表锁和行锁"}},[t._v("#")]),t._v(" 三分钟入门 InnoDB 存储引擎中的表锁和行锁")]),t._v(" "),s("p",[t._v("各位对 ”锁“ 这个概念应该都不是很陌生吧，Java 语言中就提供了两种锁：内置的 synchronized 锁和 Lock 接口，使用锁的目的就是管理对共享资源的并发访问，保证数据的完整性和一致性，数据库中的锁也不例外。")]),t._v(" "),s("p",[t._v('“锁" 是数据库系统区别于文件系统的一个关键特性，其对象是'),s("strong",[t._v("事务")]),t._v("，用来锁定的是数据库中的对象，如表、页、行等。需要注意的是，"),s("strong",[t._v("每种数据库对于锁的实现都是不同的")]),t._v("，并且对于 MySQL 来说，每种存储引擎都可以实现自己的锁策略和锁粒度，比如 "),s("strong",[t._v("InnoDB 引擎支持行锁和表锁，而 MyISAM 引擎只支持表锁")]),t._v("。")]),t._v(" "),s("p",[t._v("本文所讲的锁针对的是我们最常用的 InnoDB 存储引擎。")]),t._v(" "),s("blockquote",[s("p",[t._v("⭐ "),s("strong",[t._v("锁机制就是用来实现事务的隔离性")])])]),t._v(" "),s("h2",{attrs:{id:"表锁与行锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表锁与行锁"}},[t._v("#")]),t._v(" 表锁与行锁")]),t._v(" "),s("p",[t._v("所谓 “表锁 （Table Lock）”，就是会锁定整张表，它是 MySQL 中最基本的锁策略，并不依赖于存储引擎，就是说"),s("strong",[t._v("不管你是 MySQL 的什么存储引擎，对于表锁的策略都是一样的")]),t._v("，并且表锁是开销最小的策略（因为粒度比较大）。")]),t._v(" "),s("p",[t._v("由于表级锁一次会将整个表锁定，所以可以很好的避免死锁问题。当然，锁的粒度大所带来最大的负面影响就是出现锁资源争用的概率也会最高，导致并发率大打折扣。")]),t._v(" "),s("p",[t._v("而所谓 “行锁（Row Lock）”，也称为记录锁，顾名思义，就是锁住某一行（某条记录 row）。需要的注意的是，MySQL 服务器层并没有实现行锁机制，"),s("strong",[t._v("行级锁只在存储引擎层实现")]),t._v(" ！！！")]),t._v(" "),s("h2",{attrs:{id:"读锁和写锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读锁和写锁"}},[t._v("#")]),t._v(" 读锁和写锁")]),t._v(" "),s("p",[t._v("首先说明一点，"),s("strong",[t._v("对于 InnoDB 引擎来说，读锁和写锁可以加在表上，也可以加在行上")]),t._v("。")]),t._v(" "),s("p",[t._v("对于并发读和并发写的问题，可以通过实现一个由两种类型的锁组成的锁系统来解决。这两种类型的锁通常被称为 "),s("strong",[t._v("共享锁（Shared Lock，S Lock）")]),t._v(" 和 "),s("strong",[t._v("排他锁（Exclusive Lock，X Lock）")]),t._v("，也叫 "),s("strong",[t._v("读锁（readlock）")]),t._v(" 和 "),s("strong",[t._v("写锁（write lock）")]),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("共享锁 / 读锁：允许事务读（"),s("code",[t._v("select")]),t._v("）数据")]),t._v(" "),s("li",[t._v("排他锁 / 写锁：允许事务删除（"),s("code",[t._v("delete")]),t._v("）或更新（"),s("code",[t._v("update")]),t._v("）数据")])]),t._v(" "),s("p",[s("strong",[t._v("读锁是共享的")]),t._v("，或者说是相互不阻塞的。多个事务在同一时刻可以同时读取同一个资源，而互不干扰。"),s("strong",[t._v("写锁是排他的")]),t._v("，也就是说一个写锁会阻塞其他的读锁和写锁，这样就能确保在给定的时间里，只有一个事务能执行写入，并防止其他用户读取正在写入的同一资源。")]),t._v(" "),s("p",[t._v("用行级读写锁来举个例子吧：如果一个事务 T1 已经获得了某个行 r 的读锁，那么此时另外的一个事务 T2 是可以去获得这个行 r 的读锁的，因为读取操作并没有改变行 r 的数据；但是，如果某个事务 T3 想获得行 r 的写锁，则它其必须等待事务 T1、T2 释放掉行 r 上的读锁才行。")]),t._v(" "),s("p",[t._v("兼容关系如下表（兼容是指对同一张表或记录的锁的兼容性情况）：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}}),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("X 锁")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("S 锁")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("X 锁")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不兼容")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不兼容")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("S 锁")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不兼容")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[t._v("兼容")])])])])]),t._v(" "),s("p",[t._v("从上表可以看出，只有共享锁和共享锁是兼容的，而排他锁和谁都是不兼容的。")]),t._v(" "),s("h2",{attrs:{id:"意向锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#意向锁"}},[t._v("#")]),t._v(" 意向锁")]),t._v(" "),s("p",[t._v("InnoDB 存储引擎支持 "),s("strong",[t._v("多粒度（granular）锁定")]),t._v("，就是说"),s("strong",[t._v("允许事务在行级上的锁和表级上的锁同时存在")]),t._v("。")]),t._v(" "),s("p",[t._v("那么为了实现行锁和表锁并存，InnoDB 存储引擎就设计出了 "),s("strong",[t._v("意向锁（Intention Lock）")]),t._v(" 这个东西：")]),t._v(" "),s("blockquote",[s("p",[t._v("Intention locks are "),s("strong",[t._v("table-level locks")]),t._v(" that indicate which type of lock (shared or exclusive) a transaction requires later for a row in a table.")])]),t._v(" "),s("p",[t._v("很好理解：意向锁是一个"),s("strong",[t._v("表级锁")]),t._v("，其作用就是指明接下来的事务将会用到哪种锁。")]),t._v(" "),s("p",[t._v("有两种意向锁：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("意向共享锁（IS Lock）")]),t._v("：当事务想要获得一张表中某几行的共享锁行级锁）时，InnoDB 存储引擎会自动地先获取该表的意向共享锁（表级锁）")]),t._v(" "),s("li",[s("strong",[t._v("意向排他锁（IX Lock）")]),t._v("：当事务想要获得一张表中某几行的排他锁（行级锁）时，InnoDB 存储引擎会自动地先获取该表的意向排他锁（表级锁）")])]),t._v(" "),s("p",[t._v("各位其实可以直接把 ”意向“ 翻译成 ”想要“，想要共享锁、想要排他锁，你就会发现原来就这东西啊（滑稽）。")]),t._v(" "),s("p",[t._v("意向锁之间是相互兼容的：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}}),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("IS 锁")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("IX 锁")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("IS 锁")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("兼容")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("兼容")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("IX 锁")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("兼容")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("兼容")])])])]),t._v(" "),s("p",[t._v("但是与"),s("strong",[t._v("表级读写锁")]),t._v("之间大部分都是不兼容的：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}}),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("X 锁")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("S 锁")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("IS 锁")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不兼容")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("兼容")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("IX 锁")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不兼容")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("不兼容")])])])]),t._v(" "),s("p",[t._v("注意，这里强调一点：上表中的读写锁指的是表级锁，"),s("strong",[t._v("意向锁不会与行级的读写锁互斥！！！")])]),t._v(" "),s("p",[t._v("来理解一下为什么说意向锁不会与行级的读写锁互斥。举个例子，事务 T1、事务 T2、事务 T3 分别想对某张表中的记录行 r1、r2、r3 进行修改，很普通的并发场景对吧，这三个事务之间并不会发生干扰，所以是可以正常执行的。")]),t._v(" "),s("p",[t._v("这三个事务都会先对这张表加意向写锁，因为意向锁之间是兼容的嘛，所以这一步没有任何问题。那如果意向锁和行级读写锁互斥的话，岂不是这三个事务都没法再执行下去了，对吧。")]),t._v(" "),s("p",[t._v("OK，看到这里，我们来思考两个问题：")]),t._v(" "),s("p",[t._v("1）"),s("strong",[t._v("为什么没有意向锁的话，表锁和行锁不能共存？")])]),t._v(" "),s("p",[t._v("2）"),s("strong",[t._v("意向锁是如何让表锁和行锁共存的？")])]),t._v(" "),s("p",[t._v("首先来看第一个问题，假设行锁和表锁能共存，举个例子：事务 T1 锁住表中的某一行（行级写锁），事务 T2 锁住整个表（表级写锁）。")]),t._v(" "),s("p",[t._v("问题很明显，既然事务 T1 锁住了某一行，那么其他事务就不可能修改这一行。这与 ”事务 T2 锁住整个表就能修改表中的任意一行“ 形成了冲突。所以，没有意向锁的时候，行锁与表锁是无法共存的。")]),t._v(" "),s("p",[t._v("再来看第二个问题，有了意向锁之后，事务 T1 在申请行级写锁之前，MySQL 会先自动给事务 T1 申请这张表的意向排他锁，当表上有意向排他锁时其他事务申请表级写锁会被阻塞，也即事务 T2 申请这张表的写锁就会失败。")]),t._v(" "),s("h2",{attrs:{id:"如何加锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何加锁"}},[t._v("#")]),t._v(" 如何加锁")]),t._v(" "),s("p",[t._v("在说加锁之前，我们有必要了解下解锁机制。对于 InnoDB 来说，随时都可以加锁，但是并非随时都可以解锁。具体来说，InnoDB 采用的是"),s("strong",[t._v("两阶段锁定协议（two-phase locking protocol）")]),t._v("：即在事务执行过程中，随时都可以执行加锁操作，但是"),s("strong",[t._v("只有在事务执行 COMMIT 或者 ROLLBACK 的时候才会释放锁")]),t._v("，并且所有的锁是在同一时刻被释放。")]),t._v(" "),s("p",[t._v("说完了解锁机制，再来讲讲加锁机制。")]),t._v(" "),s("p",[t._v("先来看如何加意向锁，它比较特殊，是由 InnoDB 存储引擎自己维护的，用户无法手动操作意向锁，在为数据行加读写锁之前，InooDB 会先获取该数据行所在在数据表的对应意向锁。")]),t._v(" "),s("p",[t._v("再来看如何加表级锁：")]),t._v(" "),s("p",[t._v("1）隐式锁定：对于常见的 DDL 语句（如 "),s("code",[t._v("ALTER")]),t._v("、"),s("code",[t._v("CREATE")]),t._v(" 等），InnoDB 会自动给相应的表加表级锁")]),t._v(" "),s("p",[t._v("2）显示锁定：在执行 SQL 语句时，也可以明确显示指定对某个表进行加锁（"),s("code",[t._v("lock table user read(write)")]),t._v("）")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lock")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("read")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加表级读锁")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unlock")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tables")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 释放表级锁")]),t._v("\n")])])]),s("p",[t._v("如何加行级锁：")]),t._v(" "),s("p",[t._v("1）对于常见的 DML 语句（如 "),s("code",[t._v("UPDATE")]),t._v("、"),s("code",[t._v("DELETE")]),t._v(" 和 "),s("code",[t._v("INSERT")]),t._v(" ），InnoDB 会自动给相应的记录行加写锁")]),t._v(" "),s("p",[t._v("2）默认情况下对于普通 "),s("code",[t._v("SELECT")]),t._v(" 语句，InnoDB 不会加任何锁，但是在 Serializable 隔离级别下会加行级读锁")]),t._v(" "),s("p",[t._v("上面两种是隐式锁定，InnoDB 也支持通过特定的语句进行显式锁定，不过这些语句并不属于 SQL 规范：")]),t._v(" "),s("p",[t._v("3）"),s("code",[t._v("SELECT * FROM table_name WHERE ... FOR UPDATE")]),t._v("，加行级写锁")]),t._v(" "),s("p",[t._v("4）"),s("code",[t._v("SELECT * FROM table_name WHERE ... LOCK IN SHARE MODE")]),t._v("，加行级读锁")]),t._v(" "),s("p",[t._v("另外，需要注意的是，InnoDB 存储引擎的行级锁是基于索引的（这个下篇文章会详细解释），也就是说"),s("strong",[t._v("当索引失效或者说根本没有用索引的时候，行锁就会升级成表锁")]),t._v("。")]),t._v(" "),s("p",[t._v("举个例子，有数据库如下，id 是主键索引：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token identifier"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("新建两个事务，"),s("strong",[t._v("先执行事务 T1 的前两行，也就是不要执行 commit")]),t._v("。我们试图使用 "),s("code",[t._v("select ... for update")]),t._v(' 给 username = "user_three" 的记录行加上记录锁，但是由于 username 并非主键也并非索引，所以实际上这里事务 T1 锁住的是整张表：')]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210801220807.png",alt:"image-20210801220807603"}})]),t._v(" "),s("p",[t._v("由于没有执行 commit，所以这个时候事务 T1 没有释放锁，并且锁住了整张表。此时再来执行事务 2 试图申请 id = 5 的记录锁，你会发现事务 T2 会卡住，最后超时关闭事务：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210801221604.png",alt:"image-20210801221604790"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);