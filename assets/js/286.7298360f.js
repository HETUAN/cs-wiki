(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{754:function(_,v,s){"use strict";s.r(v);var t=s(29),a=Object(t.a)({},(function(){var _=this,v=_.$createElement,s=_._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"原来-tcp-为了保证可靠传输做了这么多"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原来-tcp-为了保证可靠传输做了这么多"}},[_._v("#")]),_._v(" 原来 TCP 为了保证可靠传输做了这么多")]),_._v(" "),s("hr"),_._v(" "),s("h2",{attrs:{id:"_0-前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-前言"}},[_._v("#")]),_._v(" 0. 前言")]),_._v(" "),s("p",[_._v("本节内容有点多，不过关于 TCP 的话，除了三四次握手就是可靠传输了，高频重点知识点，大家还是搞清楚比较好 ~")]),_._v(" "),s("h2",{attrs:{id:"_1-tcp-可靠传输概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-tcp-可靠传输概览"}},[_._v("#")]),_._v(" 1. TCP 可靠传输概览")]),_._v(" "),s("p",[_._v("首先解释一下，什么是可靠传输："),s("strong",[_._v("可靠传输就是保证接收方收到的字节流和发送方发出的字节流是完全一样的")]),_._v("。")]),_._v(" "),s("p",[_._v("网络层是没有可靠传输机制的，尽自己最大的努力进行交付。而传输层使用 TCP 实现可靠传输，TCP 保证可靠传输的机制有如下几种：")]),_._v(" "),s("ul",[s("li",[_._v("1）校验和 Checksum（稍作了解即可）")]),_._v(" "),s("li",[_._v("2）序列号和确认应答机制（重要）")]),_._v(" "),s("li",[_._v("3）重传机制（重要）")]),_._v(" "),s("li",[_._v("4）流量控制（滑动窗口协议）（非常重要）")]),_._v(" "),s("li",[_._v("5）拥塞控制（重要）")])]),_._v(" "),s("p",[_._v("以上除了校验和大家可以只稍作了解之外，其他都是非常重要的，务必烂熟于心。")]),_._v(" "),s("h2",{attrs:{id:"_2-校验和"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-校验和"}},[_._v("#")]),_._v(" 2. 校验和")]),_._v(" "),s("p",[_._v("所谓 TCP 的校验和（Checksum）就是说：由发送端计算待发送 TCP 报文段的校验和，然后接收端对接收到的 TCP 报文段验证其校验和（TCP 的校验和是一个端到端的校验和）。"),s("strong",[_._v("其目的是为了发现 TCP 的首部和数据在发送端到接收端之间是否发生了变动。如果接收方检测到校验和有差错，则该 TCP 报文段会被直接丢弃")]),_._v("。")]),_._v(" "),s("blockquote",[s("p",[_._v("关于校验和是如何计算和验证的，并非高频重点知识，本文就不详细解释了，感兴趣的童鞋可自行百度")])]),_._v(" "),s("p",[_._v("TCP 在计算校验和时，需要加上一个 12 字节的"),s("strong",[_._v("伪首部")]),_._v("。")]),_._v(" "),s("blockquote",[s("p",[_._v("其实 UDP 也有校验和机制，只不过是可选的，而 TCP 的校验和是必须的，TCP 和 UDP 在计算校验和时都需要加上一个 12 字节的伪首部。")])]),_._v(" "),s("p",[_._v("解释下伪首部的概念，伪首部的数据是从 IP 数据报头获取的，共有 12 字节，包含如下信息：源 IP 地址、目的 IP 地址、保留字节 (置 0)、传输层协议号 (TCP 是 6)、TCP 报文长度 (首部 + 数据)：")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210109103333.png",alt:""}})]),_._v(" "),s("p",[s("strong",[_._v("伪首部是为了增加 TCP 校验和的检错能力：如根据目的 IP 地址检查这个 TCP 报文是不是传给我的、根据传输层协议号检查传输层协议是否选对了...... 伪首部只在校验的时候使用")]),_._v("。")]),_._v(" "),s("h2",{attrs:{id:"_3-序列号和确认应答机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-序列号和确认应答机制"}},[_._v("#")]),_._v(" 3. 序列号和确认应答机制")]),_._v(" "),s("p",[_._v("TCP 报文段的首部中有一个序号字段，在之前的文章 "),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/u56NcMs68sgi6uDpzJ61yw",target:"_blank",rel:"noopener noreferrer"}},[_._v("关于 TCP 三次握手和四次挥手，满分回答在此"),s("OutboundLink")],1),_._v(" 已经解释过：指的是该报文段第一个字节的序号（一个字节占一个序号）")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210109170831.png",alt:""}})]),_._v(" "),s("p",[_._v("确认应答机制就是"),s("strong",[_._v("接收方收到 TCP 报文段后就会返回一个确认应答消息")]),_._v("：")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210109105517.png",alt:""}})]),_._v(" "),s("p",[_._v("确认应答机制和重传机制不分家，两者紧密相连。下面我们详细讲解一下重传机制 👇")]),_._v(" "),s("h2",{attrs:{id:"_4-重传机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-重传机制"}},[_._v("#")]),_._v(" 4. 重传机制")]),_._v(" "),s("p",[_._v("在错综复杂的网络，并不一定能如上图那么顺利的传输报文，报文存在丢失的可能性。报文丢失的可能因素有很多种，包括应用故障，路由设备过载，或暂时的服务宕机。报文级别速度是很高的，"),s("strong",[_._v("通常来说报文的丢失是暂时的，因此 TCP 能够发现和恢复报文丢失显得尤为重要")]),_._v("。")]),_._v(" "),s("p",[s("strong",[_._v("重传机制")]),_._v("是 TCP 最基本的错误恢复功能，常见的重传机制有如下：")]),_._v(" "),s("ul",[s("li",[_._v("超时重传")]),_._v(" "),s("li",[_._v("快速重传")])]),_._v(" "),s("h3",{attrs:{id:"_1-超时重传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-超时重传"}},[_._v("#")]),_._v(" ① 超时重传")]),_._v(" "),s("p",[_._v("大概一说到重传大家第一个想到的就是超时重传吧。超时重传就是 TCP 发送方在发送报文的时候，设定一个定时器，如果在规定的时间内没有收到接收方发来的 ACK 确认报文，发送方就会重传这个已发送的报文段。")]),_._v(" "),s("p",[_._v("对于发送方没有正确接收到接收方发来的 ACK 确认报文的情况，有以下两种（也就是在这两种情况下会发生超时重传）：")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("第一种情况："),s("strong",[_._v("报文段丢失")])]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210110143400.png",alt:""}})])]),_._v(" "),s("li",[s("p",[_._v("第二种情况："),s("strong",[_._v("接收方的 ACK 确认报文丢失")])]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210110143439.png",alt:""}})])])]),_._v(" "),s("p",[_._v("超时重传时间我们一般用 "),s("strong",[_._v("RTO")]),_._v("（Retransmission Timeout） 来表示，那么，这个 RTO 设置为多少最合适呢，也就是说经过多长时间进行重传最好？")]),_._v(" "),s("p",[_._v("在这之前，我们先讲解一下 "),s("strong",[_._v("RTT（Round-Trip Time 往返时延）")]),_._v(" 的概念：RTT 就是"),s("strong",[_._v("数据从网络一端传送到另一端所需的时间")]),_._v("，也就是报文段的往返时间。")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210110144145.png",alt:""}})]),_._v(" "),s("p",[_._v("显然，⭐ "),s("strong",[_._v("超时重传时间 RTO 的值应该略大于报文往返  RTT 的值")]),_._v("：")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210110144533.png",alt:""}})]),_._v(" "),s("p",[_._v("我们可以假想一下，如果超时重传时间 RTO 远大于或小于 RTT，会发生什么情况：")]),_._v(" "),s("ul",[s("li",[s("p",[s("strong",[_._v("RTO 远大于 RTT")]),_._v("：网络的空闲时间增大，降低了网络传输效率")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210110145041.png",alt:""}})])]),_._v(" "),s("li",[s("p",[s("strong",[_._v("RTO 小于 RTT")]),_._v("：不必要的重传，导致网络负荷增大")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210110145520.png",alt:""}})])])]),_._v(" "),s("p",[_._v("如果超时重传的数据又超时了该怎么办呢？TCP 的策略是"),s("strong",[_._v("重传的超时间隔加倍")]),_._v("。")]),_._v(" "),s("p",[_._v("也就是说，"),s("strong",[_._v("每进行一次超时重传，都会将下一次重传的超时时间间隔设为先前值的两倍")]),_._v("。")]),_._v(" "),s("p",[_._v("超时触发重传存在的问题是，超时周期可能相对较长。"),s("strong",[_._v("有没有一种机制可以减少超时重传的等待时间呢")]),_._v("？于是 「快速重传」 机制应运而生 👇")]),_._v(" "),s("h3",{attrs:{id:"_2-快速重传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-快速重传"}},[_._v("#")]),_._v(" ② 快速重传")]),_._v(" "),s("p",[s("strong",[_._v("快速重传（Fast Retransmit）机制不以时间为驱动，而是以数据驱动重传")]),_._v("。")]),_._v(" "),s("p",[_._v("快速重传机制的原理：每当接收方收到比期望序号大的失序报文段到达时，就向发送方发送一个"),s("strong",[_._v("冗余 ACK")]),_._v("，指明下一个期待字节的序号。")]),_._v(" "),s("p",[_._v("举个例子：发送方已经发送 1、2、3、4、5报文段")]),_._v(" "),s("ul",[s("li",[_._v("接收方收到报文段 1，返回 1 的 ACK 确认报文（确认号为报文段 2 的第一个字节）")]),_._v(" "),s("li",[_._v("接收方收到报文段 3，仍然返回 1 的 ACK 确认报文（确认号为报文段 2 的第一个字节）")]),_._v(" "),s("li",[_._v("接收方收到报文段 4，仍然返回 1 的 ACK 确认报文（确认号为报文段 2 的第一个字节）")]),_._v(" "),s("li",[_._v("接收方收到报文段 5，仍然返回 1 的 ACK 确认报文（确认号为报文段 2 的第一个字节）")]),_._v(" "),s("li",[s("strong",[_._v("接收方收到 3 个对于报文段 1 的冗余 ACK，认为报文段 2 丢失，于是重传报文段 2")])]),_._v(" "),s("li",[_._v("最后，接收方收到了报文段 2，此时因为报文段 3、4、5 都收到了，所以返回 5 的 ACK 确认报文（确认号为报文段 6 的第一个字节）")])]),_._v(" "),s("p",[_._v("一图胜千言：")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210110151703.png",alt:""}})]),_._v(" "),s("h2",{attrs:{id:"_4-滑动窗口协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-滑动窗口协议"}},[_._v("#")]),_._v(" 4. 滑动窗口协议")]),_._v(" "),s("p",[_._v("可以说不知道滑动窗口协议 = 不知道 TCP。该知识点的分量之重，大家一定好好把握。")]),_._v(" "),s("h3",{attrs:{id:"_1-累积确认"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-累积确认"}},[_._v("#")]),_._v(" ① 累积确认")]),_._v(" "),s("p",[_._v("上文讲快速重传的时候，不知道大家有没有注意到这句话 “最后，接收方收到了报文段 2，此时因为报文段 3、4、5 都收到了，所以返回 6 的 ACK 确认报文 ”。")]),_._v(" "),s("p",[s("strong",[_._v("为什么这里会直接返回报文段 6 的确认应答呢")]),_._v("，之前我们不是说每发送一个 TCP 报文段，就进行一次确认应答吗（只有收到了上一个报文段的确认应答后才能发送下一个报文段的）？按照这个模式，我们应该先返回报文段 3 的确认应答啊。")]),_._v(" "),s("p",[_._v("其实只有收到了上一个报文段的确认应答后才能发送下一个报文段的这种模式效率非常低下。每个报文段的往返时间越长，网络的吞吐量就越低，通信的效率就越低。")]),_._v(" "),s("p",[_._v("举个例子：如果你说完一句话，我在处理其他事情，没有及时回复你，你就等着我做完其他事情后回复你，你才能说下一句话，很显然这不现实。")]),_._v(" "),s("p",[_._v("为此，TCP 引入了 "),s("strong",[_._v("窗口")]),_._v(" 的概念。对于发送方来说，窗口大小就是指"),s("strong",[_._v("无需等待确认应答，可以连续发送数据的最大值")]),_._v("。")]),_._v(" "),s("p",[_._v("⭐ 窗口的实现实际上是操作系统开辟的一个"),s("strong",[_._v("内核缓冲区")]),_._v("，"),s("u",[_._v("发送方在等待确认应答报文返回之前，必须在缓冲区中保留已发送的数据。如果在规定时间间隔内收到确认应答报文，就可以将数据从缓冲区中清除")]),_._v("。")]),_._v(" "),s("p",[_._v("假设窗口大小为 "),s("code",[_._v("5")]),_._v(" 个 TCP 段，那么发送方就可以「连续发送」 "),s("code",[_._v("5")]),_._v(" 个 TCP 段")]),_._v(" "),s("p",[_._v("还是上面那个例子：发送方已经发送 1、2、3、4、5报文段")]),_._v(" "),s("ul",[s("li",[_._v("接收方收到报文段 1，返回 1 的 ACK 确认报文（确认号为报文段 2 的第一个字节）")]),_._v(" "),s("li",[_._v("接收方收到报文段 3，仍然返回 1 的 ACK 确认报文（确认号为报文段 2 的第一个字节）")]),_._v(" "),s("li",[_._v("接收方收到报文段 4，仍然返回 1 的 ACK 确认报文（确认号为报文段 2 的第一个字节）")]),_._v(" "),s("li",[_._v("接收方收到报文段 5，仍然返回 1 的 ACK 确认报文（确认号为报文段 2 的第一个字节）")]),_._v(" "),s("li",[s("strong",[_._v("发送方收到 3 个对于报文段 1 的冗余 ACK（or 等待超时），认为报文段 2 丢失，于是重传报文段 2")])]),_._v(" "),s("li",[_._v("最后，接收方收到了报文段 2，此时因为报文段 3、4、5 都收到了，所以返回 6 的 ACK 确认报文（确认号为报文段 6 的第一个字节）")])]),_._v(" "),s("p",[_._v("简单说，"),s("strong",[_._v("只要发送方收到了 ACK 600 的确认应答，就意味着第 600 字节之前的所有数据「接收方」都收到了")]),_._v("。这个模式就叫"),s("strong",[_._v("累积确认")]),_._v("或者"),s("strong",[_._v("累积应答")]),_._v("。")]),_._v(" "),s("h3",{attrs:{id:"_2-发送方的滑动窗口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-发送方的滑动窗口"}},[_._v("#")]),_._v(" ② 发送方的滑动窗口")]),_._v(" "),s("blockquote",[s("p",[_._v("该小节图片均来自公众号：小林 Coding")])]),_._v(" "),s("p",[_._v("我们先来看看发送方的窗口，下图就是发送方的数据，根据处理的情况分成四个部分：")]),_._v(" "),s("ul",[s("li",[_._v("已发送并收到 ACK 确认应答的数据")]),_._v(" "),s("li",[_._v("已发送但未收到 ACK 确认应答的数据")]),_._v(" "),s("li",[_._v("未发送但总大小在接收方处理范围内的数据")]),_._v(" "),s("li",[_._v("未发送但总大小超过接收方处理范围的数据")])]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210110162301.png",alt:""}})]),_._v(" "),s("p",[_._v("当发送方把数据全部发送出去后，可用窗口的大小就为 0 了，表明可用窗口耗尽，在没收到 ACK 确认之前无法继续发送数据：")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210110162449.png",alt:""}})]),_._v(" "),s("p",[_._v("当收到之前发送的数据 "),s("code",[_._v("32~36")]),_._v(" 字节的 ACK 确认应答后，如果发送窗口的大小没有变化，则"),s("strong",[_._v("滑动窗口往右边移动 5 个字节，因为有 5 个字节的数据被确认应答")]),_._v("，接下来 "),s("code",[_._v("52~56")]),_._v(" 字节又变成了可用窗口，那么后续也就可以发送 "),s("code",[_._v("52~56")]),_._v(" 这 5 个字节的数据了：")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210110162532.png",alt:""}})]),_._v(" "),s("h3",{attrs:{id:"_3-接收方的滑动窗口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-接收方的滑动窗口"}},[_._v("#")]),_._v(" ③ 接收方的滑动窗口")]),_._v(" "),s("p",[_._v("接收方的滑动窗口可分为三个部分：")]),_._v(" "),s("ul",[s("li",[_._v("已成功接收并确认的数据")]),_._v(" "),s("li",[_._v("未收到数据但可以接收的数据")]),_._v(" "),s("li",[_._v("未收到数据且不可以接收的数据（超出接收方窗口大小）")])]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210110163039.png",alt:""}})]),_._v(" "),s("p",[_._v("同样的，接收方的滑动窗口在成功接收并确认的数据后，窗口右移。")]),_._v(" "),s("h2",{attrs:{id:"_5-流量控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-流量控制"}},[_._v("#")]),_._v(" 5. 流量控制")]),_._v(" "),s("p",[_._v("想象一下这个场景：主机 A 一直向主机 B 发送数据，不考虑主机 B 的接收能力，则可能导致主机 B 的接收缓冲区满了而无法再接收数据，从而导致大量的数据丢包，引发重传机制。而在重传的过程中，若主机 B 的接收缓冲区情况仍未好转，则会将大量的时间浪费在重传数据上，降低传送数据的效率。")]),_._v(" "),s("p",[_._v("所以引入了流量控制机制，主机 B 通过告诉主机 A 自己接收缓冲区的大小，来使主机 A 控制发送的数据量。"),s("strong",[_._v("总结来说：所谓流量控制就是控制发送方发送速率，保证接收方来得及接收")]),_._v("。")]),_._v(" "),s("p",[_._v("⭐ "),s("strong",[_._v("TCP 实现流量控制主要就是通过 滑动窗口协议")]),_._v("。")]),_._v(" "),s("p",[_._v("上文我们提到了滑动窗口大小，但是没说窗口大小在哪里设置，其实这个和 TCP 报文首部中的 "),s("strong",[_._v("窗口大小 Window")]),_._v(" 字段有关。回顾一下上篇文章 "),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/u56NcMs68sgi6uDpzJ61yw",target:"_blank",rel:"noopener noreferrer"}},[_._v("关于 TCP 三次握手和四次挥手，满分回答在此"),s("OutboundLink")],1),_._v(" 中讲过的 TCP 报文的首部格式，其中就有一个 16 位的 "),s("strong",[_._v("窗口大小 Window")]),_._v(" 字段：")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210110153454.png",alt:""}})]),_._v(" "),s("p",[_._v("该字段的含义是"),s("strong",[_._v("指自己接收缓冲区的剩余大小")]),_._v("，于是发送端就可以根据这个接收端的处理能力来发送数据，而不会导致接收端处理不过来。")]),_._v(" "),s("p",[_._v("所以，通常来说"),s("strong",[_._v("窗口大小是由接收方来决定的")]),_._v("。")]),_._v(" "),s("p",[_._v("💡 这段话大家一定要理解哦："),s("u",[_._v("接收端会在发送 ACK 确认应答报文时，将自己的即时窗口大小（接收窗口 "),s("code",[_._v("rwnd")]),_._v("）填入，并跟随 ACK 报文一起发送出去。而发送方根据接收到的 ACK 报文中的窗口大小的值改变自己的发送速度。如果接收到窗口大小的值为 0，那么发送方将停止发送数据。并定期的向接收端发送窗口探测数据段，提醒接收端把窗口大小告诉发送端")]),_._v("。")]),_._v(" "),s("p",[_._v("一图胜前言：")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210110164704.png",alt:""}})]),_._v(" "),s("h2",{attrs:{id:"_6-拥塞控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-拥塞控制"}},[_._v("#")]),_._v(" 6. 拥塞控制")]),_._v(" "),s("blockquote",[s("p",[_._v("该小节图片均来自公众号：小林 Coding")])]),_._v(" "),s("p",[_._v("所谓拥塞就是说：在某段时间，对网络中某一资源的需求超过了该资源所能提供的可用部分（"),s("strong",[_._v("即 需大于供")]),_._v(")，网络的性能变差。")]),_._v(" "),s("p",[_._v("如果网络出现拥塞，TCP 报文可能会大量丢失，此时就会大量触发重传机制，从而导致网络拥塞程度更高，严重影响传输。")]),_._v(" "),s("blockquote",[s("p",[_._v("其实只要「发送方」没有在规定时间内接收到 ACK 应答报文，也就是"),s("strong",[_._v("触发了重传机制，就会认为网络出现了拥塞。")])])]),_._v(" "),s("p",[_._v("因此当出现拥塞时，应当控制发送方的速率。这一点和流量控制很像，但是"),s("strong",[_._v("出发点不同")]),_._v("。")]),_._v(" "),s("p",[_._v("流量控制是为了让接收方能来得及接收，而拥塞控制是为了降低整个网络的拥塞程度，"),s("strong",[_._v("防止过多的数据注入到网络中。")])]),_._v(" "),s("p",[_._v("为了调节发送方所要发送数据的量，定义了「"),s("strong",[_._v("拥塞窗口")]),_._v(" "),s("code",[_._v("cwnd")]),_._v("」的概念。拥塞窗口是发送方维护的一个状态变量，它会根据"),s("strong",[_._v("网络的拥塞程度动态变化")]),_._v("：")]),_._v(" "),s("ul",[s("li",[_._v("只要网络中出现了拥塞，"),s("code",[_._v("cwnd")]),_._v(" 就会减少")]),_._v(" "),s("li",[_._v("若网络中没有出现拥塞，"),s("code",[_._v("cwnd")]),_._v(" 就会增大")])]),_._v(" "),s("p",[_._v("在引入拥塞窗口概念之前，发送窗口大小和接收窗口大小基本是相等的关系（取决于接收窗口大小）。"),s("u",[s("strong",[_._v("引入拥塞窗口后，发送窗口的大小就等于拥塞窗口和接收窗口的最小值")])]),_._v("。")]),_._v(" "),s("p",[_._v("TCP 的拥塞控制采用了四种算法：")]),_._v(" "),s("ul",[s("li",[_._v("慢开始")]),_._v(" "),s("li",[_._v("拥塞避免")]),_._v(" "),s("li",[_._v("快重传")]),_._v(" "),s("li",[_._v("快恢复")])]),_._v(" "),s("p",[_._v("下面详细讲解这四种算法 👇")]),_._v(" "),s("h3",{attrs:{id:"_1-慢开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-慢开始"}},[_._v("#")]),_._v(" ① 慢开始")]),_._v(" "),s("p",[s("strong",[_._v("慢开始")]),_._v("的思路就是：TCP 在刚建立连接完成后，如果立即把大量数据字节注入到网络，那么很有可能引起网络阻塞。好的方法是先探测一下，一点一点的提高发送数据包的数量，即由小到大逐渐增大拥塞窗口数值。"),s("strong",[_._v("cwnd 初始值为 1，每经过一个传播轮次，cwnd 加倍")]),_._v("（指数增长）。")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210110170955.png",alt:""}})]),_._v(" "),s("p",[_._v("当然不能一直执行慢启动，这里会设置一个"),s("strong",[_._v("慢启动轮限 ssthresh")]),_._v(" 状态变量：")]),_._v(" "),s("ul",[s("li",[_._v("当 "),s("code",[_._v("cwnd < ssthresh")]),_._v(" 时，继续使用慢启动算法")]),_._v(" "),s("li",[_._v("当 "),s("code",[_._v("cwnd >= ssthresh")]),_._v(" 时，开始使用「拥塞避免算法」👇")])]),_._v(" "),s("h3",{attrs:{id:"_2-拥塞避免"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-拥塞避免"}},[_._v("#")]),_._v(" ② 拥塞避免")]),_._v(" "),s("p",[_._v("拥塞避免算法的思路是让拥塞窗口 "),s("code",[_._v("cwnd")]),_._v(" 缓慢增大，"),s("strong",[_._v("即每经过一个往返时间 "),s("code",[_._v("cwnd")]),_._v(" 加 1")]),_._v("。")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210110171331.png",alt:""}})]),_._v(" "),s("p",[_._v("🚨 注意，无论是慢开始阶段还是拥塞避免，只要出现了网络拥塞（"),s("strong",[_._v("触发超时重传机制")]),_._v("），慢开始轮限 "),s("code",[_._v("sshresh")]),_._v(" 和 拥塞窗口大小 "),s("code",[_._v("cwnd")]),_._v(" 的值会发生变化（乘法减小）：")]),_._v(" "),s("ul",[s("li",[s("code",[_._v("ssthresh")]),_._v(" 设为 "),s("code",[_._v("cwnd/2")])]),_._v(" "),s("li",[s("code",[_._v("cwnd")]),_._v(" 重置为 "),s("code",[_._v("1")])])]),_._v(" "),s("p",[_._v("由于拥塞窗口大小重置为 1 了，所以就会重新开始执行慢启动算法。")]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210110171845.png",alt:""}})]),_._v(" "),s("h3",{attrs:{id:"_3-快重传和快恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-快重传和快恢复"}},[_._v("#")]),_._v(" ③ 快重传和快恢复")]),_._v(" "),s("p",[_._v("快速重传和快速恢复算法一般同时使用。")]),_._v(" "),s("p",[_._v("当触发快速重传机制，即接收方收到三个重复的 ACK 确认的时候，就会执行快重传算法（触发快速重传机制和超时重传机制的情况不同，TCP 认为触发快速重传的情况并不严重，因为大部分没丢，只丢了一小部分），快速重传做的事情有：")]),_._v(" "),s("ul",[s("li",[s("code",[_._v("cwnd = cwnd/2")])]),_._v(" "),s("li",[s("code",[_._v("ssthresh = cwnd")])]),_._v(" "),s("li",[_._v("重新进入拥塞避免阶段")])]),_._v(" "),s("p",[_._v("后来的 “快速恢复” 算法是在上述的“快速重传”算法后添加的，当收到 3 个重复ACK时，TCP 最后进入的不是拥塞避免阶段，而是快速恢复阶段。")]),_._v(" "),s("p",[_._v("快速恢复的思想是“"),s("strong",[_._v("数据包守恒")]),_._v("”原则，即同一个时刻在网络中的数据包数量是恒定的，只有当“老”数据包离开了网络后，才能向网络中发送一 个“新”的数据包，如果发送方收到一个重复的 ACK，那么根据 TCP 的 ACK 机制就表明有一个数据包离开了网络，于是 "),s("code",[_._v("cwnd")]),_._v(" 加 1。如果能够严格按照该原则那么网络中很少会发生拥塞，事实上拥塞控制的目的也就在修正违反该原则的地方。")]),_._v(" "),s("p",[_._v("具体来说快速恢复的主要步骤是：")]),_._v(" "),s("ul",[s("li",[_._v("把 "),s("code",[_._v("cwnd")]),_._v(" 设置为 "),s("code",[_._v("ssthresh")]),_._v(" 的值加 3，然后重传丢失的报文段，加 3 的原因是因为收到 3 个重复的 ACK，表明有 3 个“老”的数据包离开了网络。")]),_._v(" "),s("li",[_._v("再收到重复的 ACK 时，拥塞窗口 "),s("code",[_._v("cwnd")]),_._v(" 增加 1")]),_._v(" "),s("li",[_._v("当收到新的数据包的 ACK 时，把 "),s("code",[_._v("cwnd")]),_._v(" 设置为第一步中的 "),s("code",[_._v("ssthresh")]),_._v(" 的值。原因是因为该 ACK 确认了新的数据，说明从重复 ACK 时的数据都已收到，该恢复过程已经结束，可以回到恢复之前的状态了，也即"),s("u",[_._v("再次进入拥塞避免状态")]),_._v("。")])]),_._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210110175155.png",alt:""}})])])}),[],!1,null,null,null);v.default=a.exports}}]);