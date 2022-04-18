(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{816:function(v,_,a){"use strict";a.r(_);var s=a(29),t=Object(s.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"java-线程和操作系统的线程有啥区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-线程和操作系统的线程有啥区别"}},[v._v("#")]),v._v(" Java 线程和操作系统的线程有啥区别？")]),v._v(" "),a("hr"),v._v(" "),a("p",[v._v("不想看解释的小伙伴可直接翻到文末寻找答案。")]),v._v(" "),a("h2",{attrs:{id:"_1-用户空间和内核空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-用户空间和内核空间"}},[v._v("#")]),v._v(" 1. 用户空间和内核空间")]),v._v(" "),a("p",[v._v("关于内核态和用户态可以参考这篇文章："),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/SHALDyqqR0-B0VD63Qp9gg",target:"_blank",rel:"noopener noreferrer"}},[v._v("了解操作系统的那些事儿，从这篇文章开始"),a("OutboundLink")],1),v._v("，这里不再过多赘述。")]),v._v(" "),a("p",[v._v("至于什么是系统空间和用户空间也非常好理解：在操作系统中，内存通常会被分成用户空间（User space）与内核空间（Kernel space）这两个部分。当进程/线程运行在用户空间时就处于用户态，运行在内核空间时就处于内核态：")]),v._v(" "),a("ul",[a("li",[v._v("运行在内核态的程序可以访问用户空间和内核空间，或者说它可以访问计算机的任何资源，不受限制，为所欲为，例如协调 CPU 资源，分配内存资源，提供稳定的环境供应用程序运行等")]),v._v(" "),a("li",[v._v("而应用程序基本都是运行在用户态的，或者说用户态就是提供应用程序运行的空间。运行在用户态的程序只能访问用户空间")])]),v._v(" "),a("p",[a("strong",[v._v("那为什么要区分用户态和内核态呢")]),v._v("？")]),v._v(" "),a("p",[v._v("其实早期操作系统是不区分用户态和内核态的，也就是说应用程序可以访问任意内存空间，如果程序不稳定常常会让系统崩溃，比如清除了操作系统的内存数据。为此大佬们设计出了一套规则：对于那些比较危险的操作需要切到内核态才能运行，比如 CPU、内存、设备等资源管理器程序就应该在内核态运行，否则安全性没有保证。")]),v._v(" "),a("p",[v._v("举个例子，对于文件系统和数据来说，文件系统数据和管理就必须放在内核态，但是用户的数据和管理可以放在用户态。")]),v._v(" "),a("p",[a("strong",[v._v("用户态的程序不能随意操作内核地址空间，这样有效地防止了操作系统程序受到应用程序的侵害")]),v._v("。")]),v._v(" "),a("p",[v._v("那如果处于用户态的程序想要访问内核空间的话怎么办呢？就需要进行系统调用从用户态切换到内核态。")]),v._v(" "),a("h2",{attrs:{id:"_2-操作系统线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-操作系统线程"}},[v._v("#")]),v._v(" 2. 操作系统线程")]),v._v(" "),a("h3",{attrs:{id:"_1-在用户空间中实现线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-在用户空间中实现线程"}},[v._v("#")]),v._v(" ① 在用户空间中实现线程")]),v._v(" "),a("p",[v._v("在"),a("strong",[v._v("早期")]),v._v("的操作系统中，所有的线程都是在用户空间下实现的，操作系统只能看到线程所属的进程，而不能看到线程。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210418213806.png",alt:""}})]),v._v(" "),a("p",[v._v("从我们开发者的角度来理解用户级线程就是说：在这种模型下，我们需要自己定义线程的数据结构、创建、销毁、调度和维护等，这些线程运行在操作系统的某个进程内，然后操作系统直接对进程进行调度。")]),v._v(" "),a("p",[v._v("这种方式的好处一目了然，首先第一点，就是即使操作系统原生不支持线程，我们也可以通过库函数来支持线程；第二点，线程的调度只发生在用户态，避免了操作系统从内核态到用户态的转换开销。")]),v._v(" "),a("p",[v._v("当然缺点也很明显：由于操作系统看不见线程，不知道线程的存在，而 CPU 的时间片切换是以进程为维度的，所以如果进程中某个线程进行了耗时比较长的操作，那么由于用户空间中没有时钟中断机制，就会导致此进程中的其它线程因为得不到 CPU 资源而长时间的持续等待；另外，如果某个线程进行系统调用时比如缺页中断而导致了线程阻塞，此时操作系统也会阻塞住整个进程，即使这个进程中其它线程还在工作。")]),v._v(" "),a("h3",{attrs:{id:"_2-在内核空间中实现线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-在内核空间中实现线程"}},[v._v("#")]),v._v(" ② 在内核空间中实现线程")]),v._v(" "),a("p",[v._v("所谓内核级线程就是运行在内核空间的线程， 直接由内核负责，只能由内核来完成线程的调度。")]),v._v(" "),a("p",[v._v("几乎所有的"),a("strong",[v._v("现代")]),v._v("操作系统，包括 Windows、Linux、Mac OS X 和 Solaris 等，都支持内核线程。")]),v._v(" "),a("p",[v._v("每个内核线程可以视为内核的一个分身，这样操作系统就有能力同时处理多件事情，"),a("strong",[v._v("支持多线程的内核就叫做多线程内核")]),v._v("（Multi-Threads Kernel）。")]),v._v(" "),a("p",[v._v("从我们开发者的角度来理解内核级线程就是说：我们可以直接使用操作系统中已经内置好的线程，线程的创建、销毁、调度和维护等，都是直接由操作系统的内核来实现，我们只需要使用系统调用就好了，不需要像用户级线程那样自己设计线程调度等。")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210418214229.png",alt:""}})]),v._v(" "),a("p",[v._v("上图画的是 1：1 的线程模型，"),a("strong",[v._v("所谓线程模型，也就是用户线程和内核线程之间的关联方式")]),v._v("，线程模型当然不止 1：1 这一种，下面我们来详细解释以下这三种多线程模型：")]),v._v(" "),a("blockquote",[a("p",[v._v("下文翻译自 https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/4_Threads.html")])]),v._v(" "),a("p",[v._v("1）"),a("strong",[v._v("多对一线程模型")]),v._v("：")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210418222101.png",alt:""}})]),v._v(" "),a("ul",[a("li",[v._v("在多对一模型中，多个用户级线程映射到某一个内核线程上")]),v._v(" "),a("li",[v._v("线程管理由用户空间中的线程库处理，这非常有效")]),v._v(" "),a("li",[v._v("但是，如果进行了阻塞系统调用，那么即使其他用户线程能够继续，整个进程也会阻塞")]),v._v(" "),a("li",[v._v("由于单个内核线程只能在单个 CPU 上运行，因此多对一模型不允许在多个 CPU 之间拆分单个进程")])]),v._v(" "),a("p",[v._v("从并发性角度来总结下，虽然多对一模型允许开发人员创建任意多的用户线程，但是由于内核只能一次调度一个线程，所以并未增加并发性。现在已经几乎没有操作系统来使用这个模型了，因为它无法利用多个处理核。")]),v._v(" "),a("p",[v._v("2）"),a("strong",[v._v("一对一线程模型")]),v._v("：")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210418222219.png",alt:""}})]),v._v(" "),a("ul",[a("li",[v._v("一对一模型克服了多对一模型的问题")]),v._v(" "),a("li",[v._v("一对一模型创建一个单独的内核线程来处理每个用户线程")]),v._v(" "),a("li",[v._v("但是，管理一对一模型的开销更大，涉及更多开销和减慢系统速度")]),v._v(" "),a("li",[v._v("此模型的大多数实现都限制了可以创建的线程数")])]),v._v(" "),a("p",[v._v("从并发性角度来总结下，虽然一对一模型提供了更大的并发性，但是开发人员应注意不要在应用程序内创建太多线程（有时系统可能会限制创建线程的数量），因为管理一对一模型的开销更大。"),a("strong",[v._v("Windows (从 Win95 开始) 和 Linux 都实现了线程的一对一模型")]),v._v("。")]),v._v(" "),a("p",[v._v("3）"),a("strong",[v._v("多对多线程模型")]),v._v("：")]),v._v(" "),a("p",[a("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210418222230.png",alt:""}})]),v._v(" "),a("ul",[a("li",[v._v("多对多模型将任意数量的用户线程复用到相同或更少数量的内核线程上，结合了一对一和多对一模型的最佳特性")]),v._v(" "),a("li",[v._v("用户对创建的线程数没有限制")]),v._v(" "),a("li",[v._v("阻止内核系统调用不会阻止整个进程")]),v._v(" "),a("li",[v._v("进程可以分布在多个处理器上")]),v._v(" "),a("li",[v._v("可以为各个进程分配可变数量的内核线程，具体取决于存在的 CPU 数量和其他因素")])]),v._v(" "),a("h2",{attrs:{id:"_3-java-线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-java-线程"}},[v._v("#")]),v._v(" 3. Java 线程")]),v._v(" "),a("p",[v._v("在进入 Java 线程主题之前，有必要讲解一下"),a("strong",[v._v("线程库")]),v._v(" Thread library 的概念。")]),v._v(" "),a("p",[v._v("在上面的模型介绍中，我们提到了通过线程库来创建、管理线程，那么什么是线程库呢？")]),v._v(" "),a("p",[a("strong",[v._v("线程库就是为开发人员提供创建和管理线程的一套 API")]),v._v("。")]),v._v(" "),a("p",[v._v("当然，线程库不仅可以在用户空间中实现，还可以在内核空间中实现。前者涉及仅在用户空间内实现的 API 函数，没有内核支持。后者涉及系统调用，也就是说调用库中的一个 API 函数将会导致对内核的系统调用，并且需要具有线程库支持的内核。")]),v._v(" "),a("p",[v._v("下面简单介绍下三个主要的线程库：")]),v._v(" "),a("p",[v._v("1）POSIX Pthreads：可以作为用户或内核库提供，作为 POSIX 标准的扩展")]),v._v(" "),a("p",[v._v("2）Win32 线程：用于 Window 操作系统的内核级线程库")]),v._v(" "),a("p",[v._v("3）Java 线程："),a("strong",[v._v("Java 线程 API 通常采用宿主系统的线程库来实现")]),v._v("，也就是说在 Win 系统上，Java 线程 API 通常采用 Win API 来实现，在 UNIX 类系统上，采用 Pthread 来实现。")]),v._v(" "),a("p",[v._v("下面我们来详细讲解 Java 线程：")]),v._v(" "),a("p",[v._v("事实上，"),a("strong",[v._v("在 JDK 1.2 之前")]),v._v('，Java 线程是基于称为 "绿色线程"（Green Threads）的用户级线程实现的，也就是说程序员大佬们为 JVM 开发了自己的一套线程库或者说线程管理机制。')]),v._v(" "),a("p",[v._v("而"),a("strong",[v._v("在 JDK 1.2 及以后")]),v._v("，JVM 选择了更加稳定且方便使用的操作系统原生的内核级线程，通过系统调用，将线程的调度交给了操作系统内核。而对于不同的操作系统来说，它们本身的设计思路基本上是完全不一样的，因此它们各自对于线程的设计也存在种种差异，所以 JVM 中明确声明了："),a("strong",[v._v("虚拟机中的线程状态，不反应任何操作系统中的线程状态")]),v._v("。")]),v._v(" "),a("blockquote",[a("p",[v._v("需要注意的是，这里指的是"),a("strong",[v._v("主流平台上的主流商用 Java 虚拟机")]),v._v("，比如 HotSpot。也就是说是存在例外情况的，比如 Solaris 平台上的 HotSpot 虚拟机就提供了 1：1 和 N：M 两种线程模型。")])]),v._v(" "),a("p",[v._v("也就是说，在 JDK 1.2 及之后的版本中，Java 的线程很大程度上依赖于操作系统采用什么样的线程模型，这点在不同的平台上没有办法达成一致，JVM 规范中也并未限定 Java 线程需要使用哪种线程模型来实现，可能是一对一，也可能是多对多或多对一。")]),v._v(" "),a("p",[v._v("总结来说，回答下文题，"),a("strong",[v._v("现今 Java 中线程的本质，其实就是操作系统中的线程，其线程库和线程模型很大程度上依赖于操作系统（宿主系统）的具体实现，比如在 Windows 中 Java 就是基于 Win32 线程库来管理线程，且 Windows 采用的是一对一的线程模型")]),v._v("。")]),v._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[v._v("#")]),v._v(" References")]),v._v(" "),a("ul",[a("li",[v._v("Operating Systems - Threads：https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/4_Threads.html")]),v._v(" "),a("li",[v._v("Java 线程和操作系统线程的关系：https://blog.csdn.net/CringKong/article/details/79994511?utm_medium")]),v._v(" "),a("li",[v._v("《深入理解 Java 虚拟机 - 第 3 版》")])])])}),[],!1,null,null,null);_.default=t.exports}}]);