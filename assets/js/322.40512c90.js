(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{790:function(_,v,a){"use strict";a.r(v);var s=a(29),t=Object(s.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"美团一面-四种事务隔离级别分别是怎么实现的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#美团一面-四种事务隔离级别分别是怎么实现的"}},[_._v("#")]),_._v(" 美团一面，四种事务隔离级别分别是怎么实现的")]),_._v(" "),a("hr"),_._v(" "),a("p",[_._v("前面其实单独写过事务隔离级别和 MVCC 的文章，但是感觉仍然没法把知识串起来，今天正好借着这道面试题来巩固一下知识体系，虽然文章比较长，不过都是大伙熟悉的知识，帮助大家理清思路而已~")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211209114024.png",alt:""}})]),_._v(" "),a("blockquote",[a("p",[_._v("老规矩，背诵版在文末。点击阅读原文可以直达我收录整理的各大厂面试真题")])]),_._v(" "),a("h2",{attrs:{id:"引子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引子"}},[_._v("#")]),_._v(" 引子")]),_._v(" "),a("p",[_._v("众所周知，事务就是要保证一组数据库操作，要么全部成功，要么全部失败。提到事务，你肯定立马脱口而出 ACID（原子性 Atomicity、一致性 Consistency、隔离性 Isolation、持久性 Durability）")]),_._v(" "),a("p",[a("strong",[_._v("本文的主旨，就是其中的 Isolation，也就是 “隔离性”")]),_._v("。")]),_._v(" "),a("p",[_._v("当数据库上有多个事务同时执行的时候，前面介绍过锁机制，可以用锁来实现事务的隔离性要求，使得事务可以并发地工作，"),a("strong",[_._v("锁提高了并发，但是却会带来潜在的并发一致性问题")]),_._v("：")]),_._v(" "),a("ul",[a("li",[_._v("丢失更新（Last To Modify）")]),_._v(" "),a("li",[_._v("脏读（Dirty Read）")]),_._v(" "),a("li",[_._v("不可重复读（Unrepeatable Read）")]),_._v(" "),a("li",[_._v("幻读（Phantom Read）")])]),_._v(" "),a("p",[_._v("那么为了解决这些问题，就有了 “隔离级别” 的概念。")]),_._v(" "),a("p",[_._v("万事终归有利有弊，隔离级别越高，隔离得越严实，并发一致性问题就越少，那么相应的数据库付出的性能代价也就越大。所以，很多时候，我们都要在这二者之间寻找一个平衡点。")]),_._v(" "),a("h2",{attrs:{id:"四种并发一致性问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四种并发一致性问题"}},[_._v("#")]),_._v(" 四种并发一致性问题")]),_._v(" "),a("h3",{attrs:{id:"丢失更新-last-to-modify"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#丢失更新-last-to-modify"}},[_._v("#")]),_._v(" 丢失更新 Last To Modify")]),_._v(" "),a("p",[_._v("丢失更新非常好理解，简单来说其就是"),a("strong",[_._v("一个事务的更新操作会被另一个事务的更新操作所覆盖")]),_._v("，从而导致数据的不一致。")]),_._v(" "),a("p",[_._v("举个例子：")]),_._v(" "),a("p",[_._v("1）事务 T1 将行记录 r 更新为 v1，但是事务 T1 并未提交")]),_._v(" "),a("p",[_._v("2）与此同时，事务 T2 将行记录 r 更新为 v2，事务 T2 未提交")]),_._v(" "),a("p",[_._v("3）事务 T1 提交")]),_._v(" "),a("p",[_._v("4）事务 T2 提交")]),_._v(" "),a("p",[_._v("如下图所示，显然，事务 T1 丢失了自己的修改。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211004100135.png",alt:""}})]),_._v(" "),a("p",[_._v("但是，事实上，这种情况准确来讲并不会发生。")]),_._v(" "),a("p",[_._v("因为我们说过对于行进行更新操作的时候，需要对行或其他粗粒度级别的对象加锁，因此当事务 T1 修改行 r 但是没提交的时候，事务 T2 对行 r 进行更新操作的时候是会被阻塞住的，直到事务 T1 提交释放锁。")]),_._v(" "),a("p",[_._v("所以，"),a("strong",[_._v("从数据库层面来讲，数据库本身是可以帮助我们阻止丢失更新问题的发生的")]),_._v("。")]),_._v(" "),a("p",[_._v("不过，在真实的开发环境中，我们还经常会遇到"),a("strong",[_._v("逻辑意义上的丢失更新")]),_._v("。举个例子：")]),_._v(" "),a("p",[_._v("1）事务 T1 查询一行数据 r，放入本地内存，并显示给一个用户 User1")]),_._v(" "),a("p",[_._v("2）事务 T2 也查询该行数据，并将取得的数据显示给另一个用户 User2")]),_._v(" "),a("p",[_._v("3）User1 修改了行记录 r 为 v1，更新数据库并提交")]),_._v(" "),a("p",[_._v("4）User2 修改了行记录 r 为 v2，更新数据库并提交")]),_._v(" "),a("p",[_._v("显然，最终这行记录的值是 v2，User1 的更新操作被 User2 覆盖掉了，丢失了他的修改。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211004102612.png",alt:""}})]),_._v(" "),a("p",[_._v("可能还是云里雾里，我来举个"),a("strong",[_._v("更现实点的例子")]),_._v("吧，一个部门共同查看一个在线文档，员工 A 发现自己的性别信息有误，于是将其从 “女” 改成了 “男”，就在这时，HR 也发现了员工 A 的部门信息有误，于是将其从 ”测试“ 改成了 ”开发“，然后，员工 A 和 HR 同时点了提交，但是 HR 的网络稍微慢一点，再次刷新，员工 A 就会发现，擦，我的性别怎么还是 ”女“？")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211004104246.png",alt:""}})]),_._v(" "),a("h3",{attrs:{id:"脏读-dirty-read"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脏读-dirty-read"}},[_._v("#")]),_._v(" 脏读 Dirty Read")]),_._v(" "),a("p",[_._v("所谓脏读，就是说"),a("strong",[_._v('一个事务读到了另外一个事务中的 "脏数据"，脏数据就是指事务未提交的数据')])]),_._v(" "),a("p",[_._v("如下图所示，在事务并没有提交的前提下，事务 T1 中的两次 SELECT 操作取得了不同的结果：")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211004105756.png",alt:""}})]),_._v(" "),a("p",[_._v("注意，如果想要再现脏读这种情况，需要把隔离级别调整在 Read UnCommitted（读取未提交）。所以事实上脏读这种情况基本不会发生，因为现在大部分数据库的隔离级别都至少设置成 READ COMMITTED")]),_._v(" "),a("h3",{attrs:{id:"不可重复读-unrepeatableread"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不可重复读-unrepeatableread"}},[_._v("#")]),_._v(" 不可重复读 Unrepeatableread")]),_._v(" "),a("p",[_._v("不可重复读是指在一个事务内多次读取同一数据集合。在这个事务还没有结束时，另外一个事务也访问该同一数据集合，并做了一些修改操作。因此，"),a("strong",[_._v("在第一个事务中的两次读数据之间，由于第二个事务的修改，那么第一个事务两次读到的数据可能是不一样的")]),_._v("。")]),_._v(" "),a("p",[_._v("举个例子：事务 T1 读取一行数据 r，T2 将该行数据修改成了 v1。如果 T1 再次读取这行数据，此时读取的结果和第一次读取的结果是不同的")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211004110930.png",alt:""}})]),_._v(" "),a("p",[_._v("不可重复读和脏读的区别是：脏读是读到未提交的数据，而不可重复读读到的却是已经提交的数据，但是其违反了事务一致性的要求。")]),_._v(" "),a("h3",{attrs:{id:"幻读-phantom-read"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#幻读-phantom-read"}},[_._v("#")]),_._v(" 幻读 Phantom Read")]),_._v(" "),a("p",[_._v("幻读本质上是属于不可重复读的一种情况，区别在于，不可重复读主要是针对数据的更新（即事务的两次读取结果值不一样），而幻读主要是针对数据的增加或减少（即事务的两次读取结果返回的数量不一样）")]),_._v(" "),a("p",[_._v("举个例子：事务 T1 读取某个范围的数据，事务 T2 在这个范围内插入了一些新的数据，然后 T1 再次读取这个范围的数据，"),a("strong",[_._v("此时读取的结果比第一次读取的结果返回的记录数要多")])]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211004111504.png",alt:""}})]),_._v(" "),a("h2",{attrs:{id:"四种事务隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四种事务隔离级别"}},[_._v("#")]),_._v(" 四种事务隔离级别")]),_._v(" "),a("p",[_._v("SQL 标准定义了四种越来越严格的事务隔离级别，用来解决我们上述所说的四种事务的并发一致性问题。")]),_._v(" "),a("p",[_._v("1）"),a("strong",[_._v("READ UNCOMMITTED")]),_._v(" 读取未提交：一个事务还没提交时，它做的变更就能被别的事务看到")]),_._v(" "),a("p",[_._v("上面提到过，数据库本身其实已经具备阻止丢失更新的能力，也就是说，即使是最低的隔离级别也可以阻止丢失更新问题。所以：")]),_._v(" "),a("ul",[a("li",[_._v("这个隔离级别可以阻止 "),a("u",[_._v("丢失更新")])])]),_._v(" "),a("p",[_._v("2）"),a("strong",[_._v("READ COMMITTED")]),_._v(" 读取已提交：一个事务提交之后，它做的变更才会被其他事务看到。换句话说，一个事务所做的修改在提交之前对其它事务是不可见的。")]),_._v(" "),a("ul",[a("li",[_._v("这个隔离级别可以阻止 "),a("u",[_._v("丢失更新 + 脏读")])])]),_._v(" "),a("p",[_._v("3）"),a("strong",[_._v("REPEATABLE READ")]),_._v(" 可重复读（InnoDB 存储引擎默认的隔离级别）：保证在同一个事务中多次读取同一数据的结果是一样的。当然了，在可重复读隔离级别下，未提交变更对其他事务也是不可见的。")]),_._v(" "),a("blockquote",[a("p",[_._v("书中就是这么解释的，好像也挺通俗易懂的，那为了方便下面的行文，我再给一个更简单的解释：")]),_._v(" "),a("p",[_._v("可重复读就是：一个事务执行过程中看到的数据，总是跟这个事务在启动时看到的数据是一致的。或者简单来说，事务在执行期间看到的数据前后是一致的。")])]),_._v(" "),a("ul",[a("li",[_._v("这个隔离级别可以阻止 "),a("u",[_._v("丢失更新 + 脏读 + 不可重复读")])])]),_._v(" "),a("p",[_._v("4）"),a("strong",[_._v("SERIALIZABL")]),_._v(" 可串行化：顾名思义，强制事务串行执行，对于同一行记录，“写” 会加 “写锁”，“读” 会加 “读锁”，当出现读写锁冲突的时候，后访问的事务必须等前一个事务执行完成，才能继续执行。这样多个事务互不干扰，不会出现并发一致性问题")]),_._v(" "),a("ul",[a("li",[_._v("这个隔离级别可以阻止 "),a("u",[_._v("丢失更新 + 脏读 + 不可重复读 + 幻读")])])]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211004115926.png",alt:""}})]),_._v(" "),a("p",[_._v("可以看到四种隔离级别能阻止的并发一致性问题越来越多，但并不代表越高的隔离级别就越好，因为事务隔离级别越高，数据库付出的性能代价也就相应地越大。")]),_._v(" "),a("blockquote",[a("p",[_._v("另外，多提一嘴，InnoDB 存储引擎在 REPEATABLE READ 可重复读的隔离级别下，使用 Next-Key Lock 锁的算法避免了幻读的产生, 具体可以看这篇文章 "),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/snEP-mwx6MkBBWmPH4ZvmA",target:"_blank",rel:"noopener noreferrer"}},[_._v("幻读为什么会被 MySQL 单独拎出来解决？"),a("OutboundLink")],1),_._v("。也就是说，InnoDB 存储引擎在其默认的 REPEATABLE READ 事务隔离级别下就已经能完全保证事务的隔离性要求了，即达到了 SQL 标准的 SERIALIZABLE 隔离级别。")])]),_._v(" "),a("p",[_._v("举个例子，看下图，我们来看看在不同的隔离级别下，事务 A 对同一个字段的查询会得到哪些不同的返回结果：")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20211209104207.png",alt:"image-20211209104207832"}})]),_._v(" "),a("p",[_._v("1）READ UNCOMMITTED 读取未提交： V1 V2、V3 都是 2。事务 B 虽然还没有提交，但是修改的结果结果已经被 A 看到了")]),_._v(" "),a("p",[_._v("2）READ COMMITTED 读取已提交：V1 是 1，然后事务 B 对字段的修改提交了，能被 A 看到，所以，V2 V3 的值都是 2")]),_._v(" "),a("p",[_._v("3）REPEATABLE READ 可重复读：V1 V2 是 1，V3 是 2。回想下这句话你就懂了：一个事务执行过程中看到的数据，总是跟这个事务在启动时看到的数据是一致的")]),_._v(" "),a("p",[_._v("4）SERIALIZABL 可串行化：事务 B 执行 “将字段 a 的值改为 2” 的时候会被锁住。直到事务 A 提交后，事务 B 才可以继续执行。所以从事务 A 的角度看， V1 V2 的值是 1，V3 的值是在事务 2 提交后的，所以 V3 是 2。")]),_._v(" "),a("h2",{attrs:{id:"四种隔离级别的具体实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四种隔离级别的具体实现"}},[_._v("#")]),_._v(" 四种隔离级别的具体实现")]),_._v(" "),a("p",[_._v("读取未提交和可串行化的实现没什么好说的，一个是啥也不干，一个是直接无脑加锁避开并行化 让你啥也干不成。")]),_._v(" "),a("p",[_._v("重头戏就是读取已提交和可重复读是如何实现的。这就是我们要说的 MVCC 了，也就是面试中的超级高频题。")]),_._v(" "),a("p",[_._v("我先来简单说一下，对于这两个隔离级别，"),a("strong",[_._v("数据库会为每个事务创建一个视图 (ReadView)，访问的时候以视图的逻辑结果为准")]),_._v("：")]),_._v(" "),a("ul",[a("li",[_._v("在 “读取已提交” 隔离级别下，这个视图是在每个 SQL 语句开始执行的时候创建的")]),_._v(" "),a("li",[_._v("在 “可重复读” 隔离级别下，这个视图是在事务启动时就创建的，整个事务存在期间都用这个视图（这就是为什么说在可重复读隔离级别下，一个事务执行过程中看到的数据，总是跟这个事务在启动时看到的数据是一致的）")])]),_._v(" "),a("p",[_._v("那么问题了就来了，"),a("strong",[_._v("已经执行了这么多的操作，事务该如何重新回到之前视图记录的状态")]),_._v("？"),a("strong",[_._v("数据库会通过某种手段记录这之间执行的种种操作吗")]),_._v("？")]),_._v(" "),a("p",[_._v("这就是 undo log 版本链做的事 👇")]),_._v(" "),a("h3",{attrs:{id:"undo-log-版本链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undo-log-版本链"}},[_._v("#")]),_._v(" undo log 版本链")]),_._v(" "),a("p",[_._v("在 MySQL 中，每条记录在更新的时候都会同时记录一条回滚操作（也就是 undo log），当前记录上的最新值，通过回滚操作，都可以得到前一个状态的值。")]),_._v(" "),a("p",[_._v("简单理解，"),a("strong",[_._v("undo log 就是每次操作的反向操作")]),_._v("，比如比如当前事务执行了一个插入 id = 100 的记录的操作，那么 undo log 中存储的就是删除 id = 100 的记录的操作。")]),_._v(" "),a("p",[_._v("也就是说，B+ 索引树上对应的记录只会有一个最新版本，但是 InnoDB 可以"),a("strong",[_._v("根据 undo log 得到数据的历史版本")]),_._v("。"),a("strong",[_._v("同一条记录在系统中可以存在多个版本")]),_._v("，就是数据库的"),a("strong",[_._v("多版本并发控制")]),_._v("（MVCC）")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210920224337.png",alt:""}})]),_._v(" "),a("p",[_._v("那么，还有个问题，undo log 是如何和某条行记录产生联系的呢？换句话说，我怎么能通过这条行记录找到它拥有的 undo log 呢？")]),_._v(" "),a("p",[_._v("具体来说，"),a("strong",[_._v("InnoDB 存储引擎中每条行记录其实都拥有两个隐藏的字段："),a("code",[_._v("trx_id")]),_._v(" 和 "),a("code",[_._v("roll_pointer")])]),_._v("：")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("trx_id")]),_._v(" 就是最近更新这条行记录的事务 ID")]),_._v(" "),a("li",[a("code",[_._v("roll_pointer")]),_._v(" 就是指向之前生成的 undo log 的指针")])]),_._v(" "),a("p",[_._v('掏出我们的 user 表，来举个例子，假设 id = 100 的事务 A 插入一条行记录（id = 1, username = "Jack", age = 18），那么，这行记录的两个隐藏字段 '),a("code",[_._v("trx_id = 100")]),_._v("  和 "),a("code",[_._v("roll_pointer")]),_._v(" 指向一个空的 undo log，因为在这之前并没有事务操作 id = 1 的这行记录。如图所示：")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210923234807.png",alt:""}})]),_._v(" "),a("p",[_._v("然后，id = 200 的事务 B 修改了这条行记录，把 age 从 18 修改成了 20，于是，这条行记录的 "),a("code",[_._v("trx_id")]),_._v(" 就变成了 200，"),a("code",[_._v("rooll_pointer")]),_._v(" 就指向事务 A 生成的 undo log ：")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210924000838.png",alt:""}})]),_._v(" "),a("p",[_._v("接着，id = 300 的事务 C 再次修改了这条行记录，把 age 从 20 修改成了 30，如下图：")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210924000726.png",alt:""}})]),_._v(" "),a("p",[_._v("可以看到，每次修改行记录都会更新 trx_id 和 roll_pointer 这两个隐藏字段，之前的多个数据快照对应的 undo log 会通过 roll_pointer 指针串联起来，从而形成一个"),a("strong",[_._v("版本链")]),_._v("。")]),_._v(" "),a("br"),_._v(" "),a("p",[_._v("那么问题又来了，一个记录会被一堆事务进行修改，一个记录上会存在许许多多的 undo log，"),a("strong",[_._v("那么对于其中某一个事务来说，它能看见哪些 undo log")]),_._v("？或者说，"),a("strong",[_._v("对于其中某一个事务来说，它能够根据哪些 undo log 执行回滚操作")]),_._v("？")]),_._v(" "),a("p",[_._v("让我们来详细解释一下这个视图（ReadView）机制 👇")]),_._v(" "),a("h3",{attrs:{id:"readview-机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#readview-机制"}},[_._v("#")]),_._v(" ReadView 机制")]),_._v(" "),a("p",[a("strong",[_._v("ReadView 机制就是用来判断当前事务能够看见哪些版本的")]),_._v("，一个 ReadView 主要包含如下几个部分：")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("m_ids")]),_._v("：生成 ReadView 时有哪些事务在执行但是还没提交的（称为 “"),a("strong",[_._v("活跃事务")]),_._v("”），这些活跃事务的 id 就存在这个字段里")]),_._v(" "),a("li",[a("code",[_._v("min_trx_id")]),_._v("：m_ids 里最小的值")]),_._v(" "),a("li",[a("code",[_._v("max_trx_id")]),_._v("：生成 ReadView 时 InnoDB 将分配给下一个事务的 ID 的值（事务 ID 是递增分配的，越后面申请的事务 ID 越大）")]),_._v(" "),a("li",[a("code",[_._v("creator_trx_id")]),_._v("：当前创建 ReadView 事务的 ID")])]),_._v(" "),a("p",[_._v("接下来，再掏出 user 表，通过一个例子来理解下 ReaView 机制是如何做到判断当前事务能够看见哪些版本的：")]),_._v(" "),a("p",[_._v('假设表中已经被之前的事务 A（id = 100）插入了一条行记录（id = 1, username = "Jack", age = 18），如图所示：')]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210923234807.png",alt:""}})]),_._v(" "),a("p",[_._v("接下来，有两个事务 B（id = 200） 和 C（id = 300）过来"),a("strong",[_._v("并发执行")]),_._v("，事务 B 想要更新（update）这行 id = 1 的记录，而事务 C（select）想要查询这行数据，这两个事务都执行了相应的操作但是还没有进行提交：")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210924183516.png",alt:""}})]),_._v(" "),a("p",[_._v("如果现在事务 B 开启了一个 ReadView，在这个 ReadView 里面：")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("m_ids")]),_._v(" 就包含了当前的活跃事务的 id，即事务 B 和事务 C 这两个 id，200 和 300")]),_._v(" "),a("li",[a("code",[_._v("min_trx_id")]),_._v(" 就是 200")]),_._v(" "),a("li",[a("code",[_._v("max_trx_id")]),_._v(" 是下一个能够分配的事务的 id，那就是 301")]),_._v(" "),a("li",[a("code",[_._v("creator_trx_id")]),_._v(" 是当前创建 ReadView 事务 B 的 id 200")])]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210924183529.png",alt:""}})]),_._v(" "),a("p",[_._v("现在事务 B 进行第一次查询（select 操作不会生成 undo log 的哈），会"),a("strong",[_._v("把这行记录的隐藏字段 "),a("code",[_._v("trx_id")]),_._v(" 和 ReadView 的 "),a("code",[_._v("min_trx_id")]),_._v(" 进行下判断")]),_._v("，此时，发现 trx_id 是 100，小于 ReadView 里的 "),a("code",[_._v("min_trx_id")]),_._v("（200），这说明在事务 B 开始之前，修改这行记录的事务 A 已经提交了，所以"),a("strong",[_._v("开始于事务 A 提交之后的事务 B、是可以查到事务 A 对这行记录的更新的")]),_._v("。")]),_._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[_._v("row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("trx_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[_._v("<")]),_._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("ReadView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("min_trx_id\n")])])]),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210924183655.png",alt:""}})]),_._v(" "),a("p",[_._v("接着事务 C 过来修改这行记录，把 age = 18 改成了 age = 20，所以这行记录的 "),a("code",[_._v("trx_id")]),_._v(" 就变成了 300，同时 "),a("code",[_._v("roll_pointer")]),_._v(" 指向了事务 C 修改之前生成的 undo log：")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210924183846.png",alt:""}})]),_._v(" "),a("p",[_._v("那这个时候事务 B 再次进行查询操作，会发现"),a("strong",[_._v("这行记录的 "),a("code",[_._v("trx_id")]),_._v("（300）大于 ReadView 的 "),a("code",[_._v("min_trx_id")]),_._v("（200），并且小于 "),a("code",[_._v("max_trx_id")]),_._v("（301）")]),_._v("。")]),_._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[_._v("row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("trx_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[_._v(">")]),_._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("ReadView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("min_trx_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[_._v("&&")]),_._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("trx_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[_._v("<")]),_._v(" max_trx_id\n")])])]),a("p",[_._v("这说明一个问题，就是更新这行记录的事务很有可能也存在于 ReadView 的 m_ids（活跃事务）中。所以事务 B 会去判断下 ReadView 的 m_ids 里面是否存在 "),a("code",[_._v("trx_id = 300")]),_._v(" 的事务，显然是存在的，这就表示这个 id = 300 的事务是跟自己（事务 B）在同一时间段并发执行的事务，也就说明这行 age = 20 的记录事务 B 是不能查询到的。")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210924201851.png",alt:""}})]),_._v(" "),a("p",[_._v("既然无法查询，那该咋整？事务 B 这次的查询操作能够查到啥呢？")]),_._v(" "),a("p",[_._v("没错，undo log 版本链")]),_._v(" "),a("p",[_._v("这时事务 B 就会顺着这行记录的 roll_pointer 指针往下找，就会找到最近的一条 "),a("code",[_._v("trx_id = 100")]),_._v(" 的 undo log，而自己的 id 是 200，即说明这个 trx_id = 100 的 undo log 版本必然是在事务 B 开启之前就已经提交的了。所以事务 B 的这次查询操作读到的就是这个版本的数据即 age = 18。")]),_._v(" "),a("p",[_._v("通过上述的例子，我们得出的结论是，"),a("strong",[_._v("通过 undo log 版本链和 ReadView 机制，可以保证一个事务不会读到并发执行的另一个事务的更新")]),_._v("。")]),_._v(" "),a("br"),_._v(" "),a("p",[_._v("那自己修改的值，自己能不能读到呢？")]),_._v(" "),a("p",[_._v("这当然是废话，肯定可以读到呀。上面的例子我们只涉及到了 ReadView 中的前三个字段，而 "),a("code",[_._v("creator_trx_id")]),_._v(" 就与自己读自己的修改有关，所以这里还是图解出来让大家更进一步理解下 ReadView 机制：")]),_._v(" "),a("p",[_._v("假设事务 C 的修改已经提交了，然后事务 B 更新了这行记录，把 age = 20 改成了 age = 66，如下图所示：")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210924203315.png",alt:""}})]),_._v(" "),a("p",[_._v("然后，事务 B 再来查询这条记录，发现 "),a("code",[_._v("trx_id = 200")]),_._v(" 与 ReadView 里的 "),a("code",[_._v("creator_trx_id = 200")]),_._v(" 一样，这就说明这是我自己刚刚修改的啊，当然可以被查询到。")]),_._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[_._v("row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("trx_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("ReadView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("creator_trx_id\n")])])]),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210924203635.png",alt:""}})]),_._v(" "),a("p",[_._v("那如果在事务 B 的执行期间，突然开了一个 id = 500 的事务 D，然后更新了这行记录的 age = 88 并且还提交了，然后事务 B 再去读这行记录，能读到吗？")]),_._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210924205057.png",alt:""}})]),_._v(" "),a("p",[_._v("答案是不能的。")]),_._v(" "),a("p",[_._v("因为这个时候事务 B 再去查询这行记录，就会发现 "),a("code",[_._v("trx_id = 500")]),_._v(" 大于 ReadView 中的 "),a("code",[_._v("max_trx_id = 301")]),_._v("，这说明事务 B 执行期间，有另外一个事务更新了数据，所以不能查询到另外一个事务的更新。")]),_._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[_._v("row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("trx_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[_._v(">")]),_._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("ReadView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("max_trx_id\n")])])]),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210924205212.png",alt:""}})]),_._v(" "),a("p",[_._v("那通过上述的例子，我们得出的结论是，"),a("strong",[_._v("通过 undo log 版本链和 ReadView 机制，可以保证一个事务只可以读到该事务自己修改的数据或该事务开始之前的数据")]),_._v("。")]),_._v(" "),a("hr"),_._v(" "),a("blockquote",[a("p",[_._v("🥸 "),a("strong",[_._v("面试官")]),_._v("：讲一下数据库的四种隔离级别，以及具体的实现")]),_._v(" "),a("p",[_._v("😎 "),a("strong",[_._v("小牛肉")]),_._v("：数据库的四种隔离级别主要是用来解决四种并发一致性问题的，隔离级别越高，能够处理的并发一致性问题越多，相应的数据库付出的性能代价也就越高。")]),_._v(" "),a("p",[_._v("最低的隔离级别是读取未提交，一个事务还没提交时，它做的变更就能被别的事务看到：可以解决丢失更新问题（所谓丢失更新问题，就是指一个事务的更新操作会被另一个事务的更新操作所覆盖）；")]),_._v(" "),a("p",[_._v("然后是读取已提交，一个事务提交之后，它做的变更才会被其他事务看到：可以解决丢失更新和脏读问题（所谓脏读，就是一个事务读到了另外一个事务未提交的数据）；")]),_._v(" "),a("p",[_._v("然后是 InnoDB 默认的隔离级别可重复读，一个事务执行过程中看到的数据，总是跟这个事务在启动时看到的数据是一致的：可以解决丢失更新、脏读和不可重复读问题（所谓不可重复读，就是指第一个事务中的两次读数据之间，由于第二个事务的修改，那么第一个事务两次读到的数据是不一样的）。另外，InnoDB 的这个默认隔离级别，会通过 Next-Lock key 来解决幻读问题，所以其实是可以达到 SQL 标准的可串行化隔离级别的；")]),_._v(" "),a("p",[_._v("最后是可串行化，强制事务串行执行，对于同一行记录，“写” 会加 “写锁”，“读” 会加 “读锁”，当出现读写锁冲突的时候，后访问的事务必须等前一个事务执行完成，才能继续执行。这样可以避免并发一致性问题，解决丢失更新、脏读、不可重复读和幻读问题（所谓幻读，和不可重复读差不多，不过幻读侧重于记录数量的增减，不可重复读侧重于记录的修改）")]),_._v(" "),a("p",[_._v("对于读取已提交和可重复读这两个隔离级别来说，其底层实现就是多版本并发控制 MVCC。")]),_._v(" "),a("p",[_._v("具体来说，对于这两个隔离级别，数据库会为每个事务创建一个视图 (ReadView)，访问的时候以视图的逻辑结果为准。通过 undo log 版本链使得事务可以回滚到视图记录的状态。")]),_._v(" "),a("p",[_._v("而这两个隔离级别的区别就在于，它们生成 ReadView 的时机是不同的：")]),_._v(" "),a("ul",[a("li",[_._v("在 “读取已提交” 隔离级别下，这个视图是在每个 SQL 语句开始执行的时候创建的")]),_._v(" "),a("li",[_._v("在 “可重复读” 隔离级别下，这个视图是在事务启动时就创建的，整个事务存在期间都用这个视图")])])])])}),[],!1,null,null,null);v.default=t.exports}}]);