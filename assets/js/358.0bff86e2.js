(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{826:function(v,_,t){"use strict";t.r(_);var a=t(29),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"淘宝暑期实习一面-讲讲分代收集与三个分代假说"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#淘宝暑期实习一面-讲讲分代收集与三个分代假说"}},[v._v("#")]),v._v(" 淘宝暑期实习一面：讲讲分代收集与三个分代假说")]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("前文介绍了两种判定对象是否死亡的两种方法：引用计数法和可达性分析法，判断对象死亡后，咱就得收集它呀对不对，基于前者的垃圾收集算法称为 "),t("code",[v._v("引用计数式垃圾收集")]),v._v("（Reference Counting GC），基于后者的垃圾收集算法称为 "),t("code",[v._v("追踪式垃圾收集")]),v._v("（Tracing GC），这两类垃圾收集算法也常被称作 "),t("code",[v._v("直接垃圾收集")]),v._v("和 "),t("code",[v._v("间接垃圾收集")]),v._v("。")]),v._v(" "),t("p",[v._v("由于主流 JVM 都没有使用引用计数法，所以一般我们讨论的垃圾收集算法就是基于可达性分析的追踪式垃圾收集。")]),v._v(" "),t("p",[v._v("本文先把具体的垃圾收集算法放一放，我们来讲下各种垃圾收集算法的基础：分代收集理论")]),v._v(" "),t("p",[v._v("有了这个理论的指导，我们才可以针对不同的区域，设计出不同的垃圾收集算法")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220313140049.png",alt:""}})]),v._v(" "),t("blockquote",[t("p",[v._v("老规矩，背诵版在文末。点击阅读原文可以直达我收录整理的各大厂面试真题")])]),v._v(" "),t("h2",{attrs:{id:"弱分代假说和强分代假说"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#弱分代假说和强分代假说"}},[v._v("#")]),v._v(" 弱分代假说和强分代假说")]),v._v(" "),t("p",[v._v("当前主流商业 JVM 的垃圾收集器，大多数都遵循了 "),t("strong",[v._v("分代收集")]),v._v("（Generational Collection）的理论进行设计，这里需要解释下，很多博客都会把分代收集当成一种具体的垃圾收集算法，其实并不是，"),t("strong",[v._v("分代收集只是一种理论，一套指导方针，一套符合大多数程序运行实际情况的经验法则")]),v._v("，它建立在两个分代假说之上：")]),v._v(" "),t("ol",[t("li",[v._v("弱分代假说（Weak Generational Hypothesis）：绝大多数对象都是朝生夕灭的，生命很短")]),v._v(" "),t("li",[v._v("强分代假说（Strong Generational Hypothesis）：活得越久也就是熬过越多次垃圾收集过程的对象就越难以消亡")])]),v._v(" "),t("p",[v._v("这两个分代假说共同奠定了多款常用的垃圾收集器的一致的设计原则："),t("strong",[v._v("垃圾收集器应该将 Java 堆划分出不同的区域，然后将回收对象依据其年龄（年龄即对象熬过垃圾收集过程的次数）分配到不同的区域之中存储")]),v._v("：")]),v._v(" "),t("ul",[t("li",[v._v("根据弱分代假说，一个区域中大多数对象都是朝生夕灭、难以熬过一次垃圾收集过程的，那么把它们集中放在一起，每次回收时只需要关注另外的哪些对象（非常少量）能够存活下去，其他的直接无脑回收就行了，这样就能以较低代价回收到大量的空间")]),v._v(" "),t("li",[v._v("根据强分代假说，如果剩下的都是难以消亡的老东西，那把它们集中放在一个区域，虚拟机就可以不用频繁地对这个区域进行垃圾收集了，这就同时兼顾了垃圾收集的时间开销和内存的空间有效利用")])]),v._v(" "),t("p",[v._v("分代分代，分的是哪块区域，是的，就是堆。")]),v._v(" "),t("p",[v._v("具体放到现在的商用 JVM 里，设计者一般至少会把 Java 堆划分为"),t("strong",[v._v("新生代")]),v._v("（Young Generation）和"),t("strong",[v._v("老年代")]),v._v("（Old Generation）两个区域：")]),v._v(" "),t("ul",[t("li",[v._v("在新生代中，每次垃圾收集时都会有大批对象死去")]),v._v(" "),t("li",[v._v("而每次回收后存活的少量对象，将会逐步晋升到老年代中存放")])]),v._v(" "),t("p",[v._v("在 Java 堆划分出不同的区域之后，垃圾收集器就可以每次只回收其中某一个或者某些部分的区域，因而才有了 "),t("code",[v._v("Minor GC")]),v._v("、"),t("code",[v._v("Major GC")]),v._v("、"),t("code",[v._v("Full GC")]),v._v(" 这样的回收类型的划分，解释下这三个概念：")]),v._v(" "),t("p",[v._v("1）"),t("strong",[v._v("部分收集 ("),t("code",[v._v("Partial GC")]),v._v(")")]),v._v("：指目标不是完整收集整个Java堆的垃圾收集，其中又分为：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("新生代收集（"),t("code",[v._v("Minor GC/Young GC")]),v._v("）：指目标只是新生代的垃圾收集")])]),v._v(" "),t("li",[t("p",[v._v("老年代收集（"),t("code",[v._v("Major GC/Old GC")]),v._v("）：指目标只是老年代的垃圾收集。目前只有 CMS 收集器会有单独收集老年代的行为")]),v._v(" "),t("blockquote",[t("p",[v._v("注意 “Major GC” 这个说法现在有点混淆，在不同资料上常有不同所指，读者需按上下文区分到底是指老年代的收集还是整堆收集。")])])]),v._v(" "),t("li",[t("p",[v._v("混合收集（"),t("code",[v._v("Mixed GC")]),v._v("）：指目标是收集整个新生代以及部分老年代的垃圾收集。目前只有 G1 收集器会有这种行为")])])]),v._v(" "),t("p",[v._v("2）"),t("strong",[v._v("整堆收集 ("),t("code",[v._v("Full GC")]),v._v(")")]),v._v("：收集整个 Java 堆和方法区的垃圾收集")]),v._v(" "),t("p",[v._v("也因此呢，针对不同的区域，才能够设计出与里面存储对象存亡特征相匹配的不同的垃圾收集算法：")]),v._v(" "),t("ul",[t("li",[v._v("标记-清除算法（最基础的垃圾收集算法）")]),v._v(" "),t("li",[v._v("标记-复制算法（新生代）")]),v._v(" "),t("li",[v._v("标记-整理算法（老年代）")])]),v._v(" "),t("blockquote",[t("p",[v._v('这里的 "标记" 就是指使用可达性分析来标记死亡/存活对象')])]),v._v(" "),t("p",[v._v("这三种算法具体的留到下篇文章再说")]),v._v(" "),t("h2",{attrs:{id:"跨代引用假说"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跨代引用假说"}},[v._v("#")]),v._v(" 跨代引用假说")]),v._v(" "),t("p",[v._v("其实我们只要仔细思考一下，很容易发现分代收集并非只是简单划分一下内存区域那么容易，它存在一个非常明显的困难："),t("strong",[v._v("对象不是孤立的，对象之间会存在跨代引用")]),v._v("。")]),v._v(" "),t("p",[v._v("假如现在要进行一次只局限于新生代区域内的收集（Minor GC），但新生代中的对象是完全有可能被老年代所引用的，那么这个存储在新生代中被老生代引用的对象，就不应该被标记为死亡对象，所以，我们就不得不在固定的 GC Roots 之外，再额外遍历整个老年代中所有对象来确保可达性分析结果的正确性，反过来也是一样。")]),v._v(" "),t("p",[v._v("遍历整个老年代所有对象的方案虽然理论上可行，但无疑会为内存回收带来很大的性能负担。为了解决这个问题，就需要对分代收集理论添加第三条经验法则：")]),v._v(" "),t("ul",[t("li",[v._v("跨代引用假说（Intergenerational Reference Hypothesis）：跨代引用相对于同代引用来说仅占极少数")])]),v._v(" "),t("p",[v._v("这其实是可根据前两条假说逻辑推理得出的隐含推论："),t("strong",[v._v("存在互相引用关系的两个对象，是应该倾向于同时生存或者同时消亡的")]),v._v("。")]),v._v(" "),t("p",[v._v("举个例子，如果某个新生代对象存在跨代引用，由于老年代对象难以消亡，该引用会使得新生代对象在收集时同样得以存活，进而在年龄增长之后晋升到老年代中，这时跨代引用也随即被消除了。")]),v._v(" "),t("p",[v._v("依据这条假说，我们就不必为了少量的跨代引用去扫描整个老年代，也不必浪费空间专门记录每一个对象是否存在及存在哪些跨代引用，只需在新生代上建立一个全局的数据结构，这个结构被称为 "),t("strong",[v._v("记忆集")]),v._v(" ，Remembered Set）")]),v._v(" "),t("p",[t("strong",[v._v("记忆集把老年代划分成若干小块，标识出老年代的哪一块内存会存在跨代引用")]),v._v("。这样，当发生 Minor GC 时，对于跨代引用问题，不会遍历整个老生代加入 GC Roots 中，只会把记忆集中包含了跨代引用的少量对象加入到 GC Roots 进行扫描。")]),v._v(" "),t("blockquote",[t("p",[v._v("当然，并不只是新生代、老年代之间才有跨代引用的问题，所有涉及部分区域收集（Partial GC）行为的垃圾收集器（比如 G1、ZGC 和 Shenandoah 收集器这种面向 Region 的收集器）都会面临相同的问题。")])]),v._v(" "),t("h3",{attrs:{id:"卡表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卡表"}},[v._v("#")]),v._v(" 卡表")]),v._v(" "),t("p",[v._v("需要注意的是，我们这里所说的"),t("strong",[v._v("记忆集其实只是一种逻辑概念")]),v._v("，一种用于记录从非收集区域指向收集区域的指针集合的数据结构，"),t("strong",[v._v("并不是一种具体的实现")]),v._v("，就好比 Map 和 HashMap 的关系一样，"),t("strong",[v._v("目前最常见的实现方式是卡表（Card Table）")])]),v._v(" "),t("p",[v._v("卡表最简单的形式可以只是一个字节数组，以下这行代码是 HotSpot 默认的卡表标记逻辑：")]),v._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[v._v("CARD_TABLE "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("this")]),v._v(" address "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">>")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("9")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("]")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n")])])]),t("p",[v._v("CARD_TABLE 数组的每一个元素都对应着老年代中一块特定大小的内存块，这个内存块被称作 "),t("strong",[v._v("卡页")]),v._v("（Card Page）。")]),v._v(" "),t("p",[v._v("一般来说，卡页大小都是以 2 的 N 次幂的字节数，通过上面代码可以看出 HotSpot 中每个卡页的大小是 2 的 9 次幂，即 512 字节（地址右移 9 位，相当于用地址除以 512）。")]),v._v(" "),t("p",[v._v("那如果卡表标识内存区域的起始地址是 0x0000 的话，数组 CARD_TABLE 的 第 0 号元素就对应了地址范围 0x0000～0x01FF（十进制 511）的卡页内存块，第 1 号元素就对应了地址范围 0x0200（十进制 512）～0x03FF（1023）的卡页内存块")]),v._v(" "),t("p",[v._v("卡表具体是怎么用的呢？")]),v._v(" "),t("p",[v._v("一个卡页中通常包含不止一个对象，只要卡页内有一个对象（或者更多个对象）的字段存在着跨代指针，那就将卡表中对应的数组元素的值标识为 "),t("code",[v._v("1")]),v._v("，称为这个元素"),t("strong",[v._v("变脏")]),v._v("（Dirty），没有则标识为 "),t("code",[v._v("0")]),v._v("。")]),v._v(" "),t("p",[v._v("在垃圾收集发生时，只要筛选出卡表中变脏的元素，就能轻易得出哪些卡页内存块中包含跨代指针，然后把它们加入 GC Roots 中一并扫描")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220313134849.png",alt:""}})]),v._v(" "),t("h3",{attrs:{id:"写屏障"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写屏障"}},[v._v("#")]),v._v(" 写屏障")]),v._v(" "),t("p",[v._v("我们已经解决了如何使用记忆集来缩减 GC Roots 扫描范围的问题，但还没有解决卡表元素如何维护的问题，换句话说，"),t("strong",[v._v("在对象赋值的那一刻，谁来把卡表元素变脏呢")]),v._v("？")]),v._v(" "),t("p",[v._v("在 HotSpot 虚拟机里是通过 "),t("strong",[v._v("写屏障")]),v._v("（Write Barrier）技术维护卡表状态的")]),v._v(" "),t("blockquote",[t("p",[v._v("注意这里提到的“写屏障” 与 "),t("code",[v._v("volatile")]),v._v(" 解决并发乱序执行问题中的 “内存屏障” 是不一样的，这里的写屏障我觉得可以简单理解为一个虚拟机调用的具体方法。")])]),v._v(" "),t("p",[v._v("写屏障可以看作"),t("strong",[v._v("虚拟机层面对 “引用类型字段赋值” 这个动作的 AOP 切面")])]),v._v(" "),t("p",[v._v("在引用对象赋值时会产生一个"),t("strong",[v._v("环形通知")]),v._v("，在赋值前的部分的通知叫作 "),t("strong",[v._v("写前屏障")]),v._v("（Pre-Write Barrier），在赋值后的通知则叫作 "),t("strong",[v._v("写后屏障（Post-Write Barrier）")]),v._v("。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220313135654.png",alt:""}})]),v._v(" "),t("p",[v._v("HotSpot 虚拟机的许多收集器中都有使用到写屏障，但直至 G1 收集器出现之前，其他收集器都只用到了写后屏障（即在完成引用字段的赋值操作之后，更新卡表状态）。下面这段代码是一段更新卡表状态的简化逻辑：")]),v._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("// 写后屏障更新卡表\nvoid oop_field_store(oop* field, oop new_value) {\n    // 引用字段赋值\n    *field = new_value;\n    // 写后屏障，在这里完成卡表状态更新\n    post_write_barrier(field, new_value);\n}\n")])])]),t("p",[v._v("这就是写屏障更新维护卡表元素的逻辑，很简单对吧~")]),v._v(" "),t("p",[v._v("不过，使用写屏障后，其实会带来两个问题：")]),v._v(" "),t("ol",[t("li",[v._v("额外的开销")]),v._v(" "),t("li",[v._v("伪共享问题")])]),v._v(" "),t("p",[v._v("应用写屏障后，虚拟机就需要为所有赋值操作生成相应的指令，一旦收集器在写屏障中增加了更新卡表操作，无论更新的是不是老年代对新生代对象的引用，每次只要对引用进行更新，就会产生额外的开销。")]),v._v(" "),t("p",[v._v("不过当然，这个开销与 Minor GC 时扫描整个老年代的代价相比还是低很多的。")]),v._v(" "),t("p",[v._v("除了写屏障的开销外，卡表在高并发场景下还面临着 "),t("strong",[v._v("伪共享（False Sharing）问题")]),v._v("。之前写过一篇文章介绍过这个问题，"),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/iiyey2-zfsARox4pkKWGIQ",target:"_blank",rel:"noopener noreferrer"}},[v._v("阿里云一面：并发场景下的底层细节 - 伪共享问题 "),t("OutboundLink")],1),v._v("，简单说下，伪共享是处理并发底层细节时一种经常需要考虑的问题，现代中央处理器的缓存系统中是以缓存行（Cache Line）为单位存储的，当多线程修改互相独立的变量时，如果这些变量恰好共享同一个缓存行，就会彼此之间产生影响。")]),v._v(" "),t("p",[v._v("假设处理器的缓存行大小为 64 字节，由于一个卡表元素占 1 个字节，64 个卡表元素将共享同一个缓存行，对吧。")]),v._v(" "),t("p",[v._v("这 64 个卡表元素对应的卡页总的内存为 32KB（64×512字节），也就是说如果不同线程更新的对象正好处于这 32 KB的内存区域内，就会导致更新卡表时正好写入同一个缓存行而导致伪共享问题。")]),v._v(" "),t("p",[v._v("为了避免伪共享问题，一种简单的解决方案就是更改下写屏障的执行逻辑，在将卡表元素变脏之前，加个判断，就是先检查下卡表标记，"),t("strong",[v._v("只有当该卡表元素未被标记过时才将其标记为变脏")]),v._v("。可以简单用以下代码所示：")]),v._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("if (CARD_TABLE [this address >> 9] != 0) {\n    CARD_TABLE [this address >> 9] = 0;\n}\n")])])]),t("p",[v._v("在 JDK 7 之后，HotSpot 虚拟机增加了一个新的参数  "),t("code",[v._v("-XX：+UseCondCardMark")]),v._v("，用来决定是否开启卡表更新的条件判断。")]),v._v(" "),t("p",[v._v("开启会增加一次额外判断的开销，但能够避免伪共享问题，两者各有性能损耗，是否打开需要根据实际情况来进行权衡")]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("最后放上这道题的背诵版：")]),v._v(" "),t("blockquote",[t("p",[v._v("🥸 "),t("strong",[v._v("面试官")]),v._v("：分代收集是什么意思")]),v._v(" "),t("p",[v._v("😎 "),t("strong",[v._v("小牛肉")]),v._v("：具体的垃圾收集算法其实都是基于这个分代收集理论的。")]),v._v(" "),t("p",[v._v("分代收集是一种理论，是一套符合大多数程序运行实际情况的经验法则，它建立在三个分代假说之上，首先是弱分代假说和强分代假说：")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("弱分代假说")]),v._v("（Weak Generational Hypothesis）：绝大多数对象都是朝生夕灭的，生命很短")]),v._v(" "),t("li",[t("strong",[v._v("强分代假说")]),v._v("（Strong Generational Hypothesis）：活得越久也就是熬过越多次垃圾收集过程的对象就越难以消亡")])]),v._v(" "),t("p",[v._v("基于这两个假说，垃圾收集器应该将 Java 堆划分出不同的区域，然后将回收对象依据其年龄分配到不同的区域之中存储，这样，垃圾收集器就可以每次只回收其中某一个或者某些部分的区域。")]),v._v(" "),t("p",[v._v("具体放到现在的商用 JVM 里，设计者一般至少会把 Java 堆划分为"),t("strong",[v._v("新生代")]),v._v("（Young Generation）和"),t("strong",[v._v("老年代")]),v._v("（Old Generation）两个区域：")]),v._v(" "),t("ul",[t("li",[v._v("在新生代中，每次垃圾收集时都会有大批对象死去")]),v._v(" "),t("li",[v._v("而每次回收后存活的少量对象，将会逐步晋升到老年代中存放")])]),v._v(" "),t("p",[v._v("不过，这样的内存划分其实还存在一个明显的问题，那就是对象并不是孤立的，对象之间会存在跨代引用。")]),v._v(" "),t("p",[v._v("假如现在要进行一次只局限于新生代区域内的收集，但新生代中的对象是完全有可能被老年代所引用的，那么这个存储在新生代中被老生代引用的对象，就不应该被标记为死亡对象，所以，我们就不得不在固定的 GC Roots 之外，再额外遍历整个老年代中所有对象来确保可达性分析结果的正确性，反过来也是一样。")]),v._v(" "),t("p",[v._v("这就引入了分代收集理论的第三个假说："),t("strong",[v._v("跨代引用假说")]),v._v("（Intergenerational Reference Hypothesis），即跨代引用相对于同代引用来说仅占极少数。")]),v._v(" "),t("p",[v._v("依据这条假说，我们就不必为了少量的跨代引用去扫描整个老年代，也不必浪费空间专门记录每一个对象是否存在及存在哪些跨代引用，只需在新生代上建立一个全局的数据结构，这个结构的作用就是把老年代划分成若干小块，标识出老年代的哪一块内存会存在跨代引用。这个结构也被称为 "),t("strong",[v._v("记忆集")]),v._v("。")]),v._v(" "),t("p",[v._v("这样，当发生新生代 GC 时，对于跨代引用问题，就不需要遍历整个老生代加入 GC Roots 中，只需要把记忆集中包含了跨代引用的少量对象加入到 GC Roots 进行扫描就可以了。")]),v._v(" "),t("p",[v._v("不过记忆集只是一个逻辑概念，HotSpot 虚拟机的具体实现是 "),t("strong",[v._v("卡表")]),v._v("。")]),v._v(" "),t("p",[v._v("卡表最简单的形式是一个字节数组，数组的每一个元素都对应着老年代中一块特定大小的内存块，这个内存块被称作卡页，一个卡页中通常包含不止一个对象，只要卡页内有一个对象（或者更多个对象）的字段存在着跨代指针，那就将卡表中对应的数组元素的值标识为 1，称为这个元素变脏，没有则标识为 0。这样，在垃圾收集发生时，只要筛选出卡表中变脏的元素，就能轻易得出哪些卡页内存块中包含跨代指针，然后把它们加入 GC Roots 中一并扫描。")]),v._v(" "),t("p",[v._v("还有一个问题，那就是卡表具体是怎么维护的呢？换句话说，在对象赋值的那一刻，谁来把卡表元素变脏呢？")]),v._v(" "),t("p",[v._v("在 HotSpot 虚拟机里是通过 "),t("strong",[v._v("写屏障")]),v._v("（Write Barrier）技术维护卡表状态的")]),v._v(" "),t("p",[v._v("写屏障可以看作虚拟机层面对 “引用类型字段赋值” 这个动作的 AOP 切面，在引用对象赋值时会产生一个环形通知，在赋值前的部分的通知叫作 写前屏障（Pre-Write Barrier），在赋值后的通知则叫作 写后屏障（Post-Write Barrier）。")]),v._v(" "),t("p",[v._v("使用写屏障后，其实会带来两个问题：")]),v._v(" "),t("p",[v._v("1）额外的开销：这个是很显然的，不过这个开销与 Minor GC 时扫描整个老年代的代价相比还是低很多的")]),v._v(" "),t("p",[v._v("2）高并发场景下的伪共享问题：现代中央处理器的缓存系统中是以缓存行（Cache Line）为单位存储的，当多线程修改互相独立的变量时，如果这些变量恰好共享同一个缓存行，就会彼此之间产生影响。假设处理器的缓存行大小为 64 字节，由于一个卡表元素占 1 个字节，64 个卡表元素将共享同一个缓存行，对吧。这 64 个卡表元素对应的卡页总的内存为 32KB（64×512字节），也就是说如果不同线程更新的对象正好处于这 32 KB 的内存区域内，就会导致更新卡表时正好写入同一个缓存行而导致伪共享问题。")]),v._v(" "),t("p",[v._v("为了避免伪共享问题，一种简单的解决方案就是更改下写屏障的执行逻辑，在将卡表元素变脏之前，加个判断，就是先检查下卡表标记，只有当该卡表元素未被标记过时才将其标记为变脏")]),v._v(" "),t("p",[v._v("JDK 7 之后 HotSpot 虚拟机增加了一个新的参数  "),t("code",[v._v("-XX：+UseCondCardMark")]),v._v("，用来决定是否开启卡表更新的条件判断。开启会增加一次额外判断的开销，但能够避免伪共享问题，两者各有性能损耗，是否打开需要根据实际情况来进行权衡")]),v._v(" "),t("p",[v._v("（后面当然最好讲下具体的三种垃圾收集算法，这里就先不贴了，下篇文章会详细解释~）")])])])}),[],!1,null,null,null);_.default=e.exports}}]);