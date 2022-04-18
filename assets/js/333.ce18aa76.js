(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{801:function(s,a,t){"use strict";t.r(a);var n=t(29),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"java-小白成长记-·-第-5-篇《java-是如何实现封装的-图解访问修饰符》"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-小白成长记-·-第-5-篇《java-是如何实现封装的-图解访问修饰符》"}},[s._v("#")]),s._v(" Java 小白成长记 · 第 5 篇《Java 是如何实现封装的 — 图解访问修饰符》")]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"_0-前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-前言"}},[s._v("#")]),s._v(" 0. 前言")]),s._v(" "),t("blockquote",[t("p",[s._v("这是一个技术疯狂迭代的时代，各种框架层出不穷，然而底层基础才是核心竞争力。博主（小牛肉）在现有的知识基础上，以上帝视角对 Java 语言基础进行复盘，汇总《Java 小白成长记》系列，力争从 0 到 1，全文无坑。")])]),s._v(" "),t("p",[s._v("在第一篇文章 "),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/W3KrCirgCrqrSiOQ8P3tAQ",target:"_blank",rel:"noopener noreferrer"}},[s._v("Java 小白成长记 · 第 1 篇《万物皆对象》"),t("OutboundLink")],1),s._v(" 中我们就已经了解到，面向对象具有四大基本特点：")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("抽象")]),s._v("：对同一类型的对象的共同属性和行为进行概括，形成"),t("strong",[s._v("类（class)")]),s._v(" 。类是构造对象的模板或蓝图。由类构造（construct) 对象的过程称为创建类的"),t("strong",[s._v("实例 （instance )")]),s._v(".")]),s._v(" "),t("li",[t("strong",[s._v("封装")]),s._v("：将抽象出的数据、代码封装在一起，隐藏对象的属性和实现细节，仅对外提供公共访问方式，将变化隔离，便于使用，提高复用性和安全性")]),s._v(" "),t("li",[t("strong",[s._v("继承")]),s._v("：在已有类的基础上，进行扩展形成新的类，提高代码复用性。继承是多态的前提")]),s._v(" "),t("li",[t("strong",[s._v("多态")]),s._v("：所谓多态就是同一函数名具有不同的功能实现方式")])]),s._v(" "),t("p",[s._v("抽象和类的概念想必通过前面四篇文章，大家已经了解的差不多了，那么这篇文章我们就来讲解 Java 作为一种面向对象的编程语言，它是如何实现封装的。")]),s._v(" "),t("h2",{attrs:{id:"_1-什么是封装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是封装"}},[s._v("#")]),s._v(" 1. 什么是封装")]),s._v(" "),t("p",[s._v("在面向对象程序设计方法中，封装（Encapsulation）是指一种将抽象性函数接口的实现细节部分包装、隐藏起来的方法。")]),s._v(" "),t("p",[s._v("通俗来说，可以认为封装就是一个保护屏障，防止某个类的代码和数据被外部类定义的代码随机访问。要访问该类的代码和数据，必须通过"),t("strong",[s._v("严格的访问控制")]),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("封装最主要的功能在于我们能修改自己的实现代码，而不用修改那些调用我们代码的程序片段")]),s._v("。")]),s._v(" "),t("p",[s._v("适当的封装可以让程序更容易理解与维护，也加强了程序的安全性。")]),s._v(" "),t("p",[s._v("OK，总结一下封装的优点：")]),s._v(" "),t("ul",[t("li",[s._v("良好的封装能够减少耦合")]),s._v(" "),t("li",[s._v("类内部的结构可以自由修改")]),s._v(" "),t("li",[s._v("可以对成员变量进行更精确的控制")]),s._v(" "),t("li",[s._v("隐藏信息，实现细节")])]),s._v(" "),t("h2",{attrs:{id:"_2-java-是如何实现封装的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-java-是如何实现封装的"}},[s._v("#")]),s._v(" 2. Java 是如何实现封装的")]),s._v(" "),t("p",[s._v("上文我们提到，要访问某个被封装的类，必须通过严格的访问控制，于是 Java 就为此设计了严格的"),t("strong",[s._v("访问修饰符")]),s._v("（access specifier）用于修饰被封装的类的访问权限，从“最大权限”到“最小权限”依次是：")]),s._v(" "),t("ul",[t("li",[s._v("公开的 - "),t("code",[s._v("public")])]),s._v(" "),t("li",[s._v("受保护的 - "),t("code",[s._v("protected")])]),s._v(" "),t("li",[s._v("包访问权限（没有关键字）")]),s._v(" "),t("li",[s._v("私有的 - "),t("code",[s._v("private")])])]),s._v(" "),t("p",[s._v("首先我们需要了解，"),t("strong",[s._v("类的权限和类中的字段或方法的权限都是可以被修饰的")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("对于类中的字段或方法来说：这四个访问修饰符都可以用来修饰")]),s._v(" "),t("li",[s._v("而对于类来说：只有包访问权限或 "),t("code",[s._v("public")]),s._v(" 可以用来修饰（这点需要注意）")])]),s._v(" "),t("p",[s._v("所以无论如何，万物都有某种形式的访问控制权。")]),s._v(" "),t("h2",{attrs:{id:"_3-包的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-包的概念"}},[s._v("#")]),s._v(" 3. 包的概念")]),s._v(" "),t("p",[s._v("在具体学习访问修饰符之前，我们还需要掌握包的概念，因为尽管 Java 设计了严格的访问修饰符，但是这种机制仍然不够完善，其中存在的问题就是如何将类库组件捆绑到一个内聚的类库单元中，意思就是说如何将某些有关联的类汇总到一个大的组织中进行统一管理。Java 为此引入了包的概念，通过 "),t("code",[s._v("package")]),s._v(" 关键字加以控制，"),t("strong",[s._v("类在相同包下还是在不同包下，会影响访问修饰符")]),s._v("。掌握包的概念之后你才能明白访问修饰符的全部含义。")]),s._v(" "),t("p",[s._v("顾名思义，包（package）就是用来汇聚一组类的，所以包也可以理解为类库。为了把这些类集中在一起，就需要使用关键字 "),t("code",[s._v("package")]),s._v(" 来指明这些类是位于哪个包下面的。")]),s._v(" "),t("p",[s._v("注意：如果你使用了 "),t("code",[s._v("package")]),s._v(" 语句，它必须是文件中除了注释之外的第一行代码。")]),s._v(" "),t("p",[s._v("💬 比如说：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("hiding")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyClass")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("关于类的访问权限会在最后进行讲解，此处大家只需要知道 "),t("code",[s._v("MyClass")]),s._v(" 这个类由于被 "),t("code",[s._v("public")]),s._v(" 修饰，所以可以被任何人访问")])]),s._v(" "),t("p",[s._v("上面这段代码即意味着 "),t("code",[s._v("MyClass")]),s._v(" 这个类是一个名为 "),t("code",[s._v("hiding")]),s._v(" 包的一部分。任何人想要使用该类，必须指明完整的类名或者使用 "),t("code",[s._v("import")]),s._v(" 关键字导入 "),t("code",[s._v("hiding")]),s._v("：")]),s._v(" "),t("p",[s._v("1）第一种方法：使用 "),t("code",[s._v("import")]),s._v(" 关键字（推荐）")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("hiding"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mypackage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ImportedMyClass")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyClass")]),s._v(" m "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("    \n")])])]),t("p",[s._v("2）第二种方法：使用完整的类名")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("hiding"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mypackage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("MyClass")]),s._v(" m "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("hiding"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mypackage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("MyClass")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("由此可见，使用了包之后，不仅可以有效的聚合类，而且可以将单一的全局命名空间分隔开，从而避免名称冲突。")]),s._v(" "),t("h2",{attrs:{id:"_4-访问修饰符详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-访问修饰符详解"}},[s._v("#")]),s._v(" 4. 访问修饰符详解")]),s._v(" "),t("p",[s._v("掌握了包的概念后，我们再回到本文的主题。上文我们说过：这四个访问修饰符都可以用来修饰类中的字段或方法。")]),s._v(" "),t("p",[s._v("也就是说如果 Java 访问权限修饰符 "),t("code",[s._v("public")]),s._v("，"),t("code",[s._v("protected")]),s._v("和 "),t("code",[s._v("private")]),s._v('位于某个类中的字段名和方法名之前，就可以控制它所修饰的对象。如果不提供访问修饰符，就意味着这个字段或方法拥有"包访问权限"。')]),s._v(" "),t("p",[s._v("下面我们详细解释这四个访问修饰符是如何作用于类中的方法和字段的 👇")]),s._v(" "),t("h3",{attrs:{id:"_1-包访问权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-包访问权限"}},[s._v("#")]),s._v(" ① 包访问权限")]),s._v(" "),t("p",[s._v("我们已经了解了什么是包，那么什么是包访问权限呢？")]),s._v(" "),t("p",[s._v("所谓"),t("strong",[s._v("包访问权限")]),s._v("，就是如果不对这个成员（类、字段、方法）提供访问修饰符，那么这个成员就可以被"),t("strong",[s._v("同一个包中的所有方法")]),s._v("访问，但是这个包之外的成员无法访问。包访问权限也称"),t("strong",[s._v("默认访问权限")]),s._v("。")]),s._v(" "),t("p",[s._v("💬 举个例子：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("awt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Window")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" warningString"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])])]),t("blockquote",[t("p",[t("code",[s._v("Cookie")]),s._v(" 类声明为 "),t("code",[s._v("public")]),s._v("，表示所有类都可以访问它")])]),s._v(" "),t("p",[s._v("这意味着 "),t("code",[s._v("java.awt")]),s._v(" 包中的所有类的方法都可以访问变量 "),t("code",[s._v("warningString")]),s._v("， 并将它设置为任意值。")]),s._v(" "),t("p",[s._v("画个图帮助大家直观的理解（假设所有类都是 "),t("code",[s._v("public")]),s._v("）：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210124203259.png",alt:""}})]),s._v(" "),t("p",[s._v("由此可以看出，包访问权限允许将包内所有相关的类组合起来，以使得它们彼此之间可以轻松的相互使用。"),t("strong",[s._v("构建包访问权限机制是将类聚集在包中的重要原因之一")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"_2-public-接口访问权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-public-接口访问权限"}},[s._v("#")]),s._v(" ② public 接口访问权限")]),s._v(" "),t("p",[s._v("当你使用关键字 "),t("code",[s._v("public")]),s._v("，就意味着紧随 "),t("code",[s._v("public")]),s._v(" 后声明的成员（类、字段、方法）对于每个人都是可用的。")]),s._v(" "),t("p",[s._v("💬 例如：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("B")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// A.B 包")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// public 接口访问权限")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cookie constructor"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\t\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bite")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  包访问权限")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bite"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("在另一个类中使用它：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// A 包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("B"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Cookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Dinner")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cookie")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cookew")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// x.bite(); can't access")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("这里定义的 "),t("code",[s._v("Cookie")]),s._v(" 类的构造函数是 "),t("code",[s._v("public")]),s._v(" 的，所有的类都能访问它。而 "),t("code",[s._v("bite")]),s._v("方法未声明访问修饰符，具有包访问权限，即它只给在 "),t("code",[s._v("A.B")]),s._v(" 包中的类提供访问权，所以 "),t("code",[s._v("bite()")]),s._v(" 方法对于在 "),t("code",[s._v("A")]),s._v(" 包中的 "),t("code",[s._v("Dinner")]),s._v("类来说是无法访问的。")]),s._v(" "),t("p",[s._v("画个图帮助大家直观的理解（假设所有类都是 "),t("code",[s._v("public")]),s._v("）：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210124203504.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"_3-private-私有访问权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-private-私有访问权限"}},[s._v("#")]),s._v(" ③ private 私有访问权限")]),s._v(" "),t("p",[s._v("关键字 "),t("code",[s._v("private")]),s._v(" 意味着"),t("strong",[s._v("除了包含该成员的类，其他任何类都无法访问这个成员")]),s._v("。同一包中的其他类无法访问 "),t("code",[s._v("private")]),s._v(" 成员，因此这等于说是自己隔离自己。")]),s._v(" "),t("p",[s._v("💬 举个例子：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Cookie constructor"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\t\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cookie")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("makeACookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Dinner")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Cookie x = new Cookie(); Can't access")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cookie")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("makeACookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可通过static 方法调用")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("画个图帮助大家直观的理解（假设所有类都是 "),t("code",[s._v("public")]),s._v("）：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210124204254.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"_4-protected-继承访问权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-protected-继承访问权限"}},[s._v("#")]),s._v(" ④ protected 继承访问权限")]),s._v(" "),t("p",[t("code",[s._v("protected")]),s._v(" 是这四种访问权限中相对来说比较复杂的一个，并且涉及继承相关的东西，如果对继承毫不了解的小伙伴可以暂时先略过这段内容。")]),s._v(" "),t("p",[s._v("首先，"),t("code",[s._v("protected")]),s._v("也提供包访问权限，也就是说相同包内的其他类可以访问 "),t("code",[s._v("protected")]),s._v("元素，而其他包无法访问。但是有一点例外，即不同于包访问权限的是："),t("strong",[s._v("即使父类和子类不在同一个包下，子类也可以访问父类中具有 "),t("code",[s._v("protected")]),s._v(" 访问权限的成员")]),s._v("。（而对于包访问权限来说，如果子类和父类不在一个包下，子类是无法访问父类中具有包访问权限的成员的）")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("B")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// A.B 包")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bite")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bite"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("子类继承 "),t("code",[s._v("Cookie")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("C")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// C 包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("B"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Cookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ChocolateChip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Cookie")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bite")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// protected method")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("对比包访问权限的例子，如果 "),t("code",[s._v("bite")]),s._v("具有的是包访问权限，显然是无法跨包访问的。而如果将其声明为 "),t("code",[s._v("protected")]),s._v("，那么对于所有继承自 "),t("code",[s._v("Cookie")]),s._v(" 的方法都可以使用它。")]),s._v(" "),t("p",[s._v("画个图帮助大家直观的理解（假设所有类都是 "),t("code",[s._v("public")]),s._v("）：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210124205831.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"_5-总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-总结"}},[s._v("#")]),s._v(" ⑤ 总结")]),s._v(" "),t("p",[s._v("四个访问修饰符介绍完毕，其实无非就是"),t("strong",[s._v("类控制着哪些代码有权访问自己的成员")]),s._v('。其他包中的代码不能一上来就说"嗨，我是 '),t("strong",[s._v("Bob")]),s._v(' 的朋友！"，然后想看到 '),t("strong",[s._v("Bob")]),s._v(" 的 "),t("code",[s._v("protected")]),s._v("、包访问权限和 "),t("code",[s._v("private")]),s._v(" 成员。取得对成员的访问权的唯一方式是：")]),s._v(" "),t("ol",[t("li",[s._v("使成员成为 "),t("code",[s._v("public")]),s._v("。那么无论是谁，无论在哪，都可以访问它。")]),s._v(" "),t("li",[s._v("赋予成员默认包访问权限，不用加任何访问修饰符，然后将其他类放在相同的包内。这样，其他类就可以访问该成员。")]),s._v(" "),t("li",[s._v("继承的类既可以访问 "),t("code",[s._v("public")]),s._v(" 成员，也可以访问 "),t("code",[s._v("protected")]),s._v(" 成员（但不能访问 "),t("code",[s._v("private")]),s._v(" 成员）。只有当两个类处于同一个包内，它才可以访问包访问权限的成员。")]),s._v(" "),t("li",[s._v('提供访问器（accessor）和修改器（mutator）方法（也称为"get/set" 方法），从而读取和改变值。')])]),s._v(" "),t("h2",{attrs:{id:"_5-基于类的访问权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-基于类的访问权限"}},[s._v("#")]),s._v(" 5. 基于类的访问权限")]),s._v(" "),t("p",[s._v("上文已经基本讲完了基于类的访问权限，无非就是只能使用包访问权限和 "),t("code",[s._v("public")]),s._v(" 修饰，效果都是一样的，这里就画两张图帮助大家再回顾一下吧：")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210124211820.png",alt:""}})]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210124211757.png",alt:""}})])])}),[],!1,null,null,null);a.default=e.exports}}]);