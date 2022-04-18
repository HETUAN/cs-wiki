(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{761:function(_,v,t){"use strict";t.r(v);var s=t(29),a=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"经典面试题-在浏览器地址栏输入一个-url-后回车-背后发生了什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#经典面试题-在浏览器地址栏输入一个-url-后回车-背后发生了什么"}},[_._v("#")]),_._v(" 经典面试题：在浏览器地址栏输入一个 URL 后回车，背后发生了什么")]),_._v(" "),t("hr"),_._v(" "),t("h2",{attrs:{id:"_0-前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-前言"}},[_._v("#")]),_._v(" 0. 前言")]),_._v(" "),t("p",[_._v("在浏览器的地址栏输入一个 URL 后回车，背后到底发生了什么才能使得一个界面完美的展现在我们眼前？")]),_._v(" "),t("p",[_._v("今天讲解的这道题目，由于其涉及大量网络协议，可以非常直观的看出诸位小伙伴对计算机网络体系的整体把握程度，所以自然成为了各大公司的面试常客。")]),_._v(" "),t("p",[_._v("在浏览中输入 URL 并且获取响应的过程，其实就是浏览器和该 URL 对应的服务器的网络通信过程。比如我们输入 "),t("code",[_._v("www.baidu.com")]),_._v("，那么会返回一个百度搜索的界面，这其实就是浏览器和百度服务器之间的网络通信过程。浏览器就是客户端，用于发出请求，而百度的服务器就是服务端，用于接收并响应请求。")]),_._v(" "),t("p",[_._v("下面我们就来详细讲解这个庞大的网络通信过程。")]),_._v(" "),t("h2",{attrs:{id:"_1-解析-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-解析-url"}},[_._v("#")]),_._v(" 1. 解析 URL")]),_._v(" "),t("p",[_._v("不知道有没有同学会混淆域名和 URL 的概念，可以这样理解，URL 就是我们输入的网址，而网址里面含有域名。举个例子："),t("code",[_._v("www.baidu.com/veal98")]),_._v(" 是一个网址，而 "),t("code",[_._v("www.baidu.com")]),_._v(" 就是服务器的域名。")]),_._v(" "),t("p",[_._v("URL 各元素的组成如下（当然，下述请求文件的路径名可以省略）：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210207210245.png",alt:""}})]),_._v(" "),t("p",[_._v("这个 URL 请求的目标服务器上的文件路径就是：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210207210750.png",alt:""}})]),_._v(" "),t("p",[_._v("那么首先，浏览器做的第一步就是解析 URL 得到里面的参数，将域名和需要请求的资源分离开来，从而了解需要请求的是哪个服务器，请求的是服务器上什么资源等等。")]),_._v(" "),t("h2",{attrs:{id:"_2-浏览器封装-http-请求报文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-浏览器封装-http-请求报文"}},[_._v("#")]),_._v(" 2. 浏览器封装 HTTP 请求报文")]),_._v(" "),t("p",[_._v("对 "),t("code",[_._v("URL")]),_._v(" 进行解析之后，浏览器确定了目标服务器和文件名，接下来就需要根据这些消息"),t("strong",[_._v("封装")]),_._v("成一个 HTTP 请求报文发送出去。举个 HTTP 请求报文的例子：")]),_._v(" "),t("blockquote",[t("p",[_._v("关于 HTTP 协议详细可见 "),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/98FtlAy0mAtf6tGplQMDqA",target:"_blank",rel:"noopener noreferrer"}},[_._v("HTTP 协议的前世今生"),t("OutboundLink")],1),_._v(" 这篇文章，这里不再赘述")])]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210207212035.png",alt:""}})]),_._v(" "),t("p",[_._v("解释一下"),t("strong",[_._v("封装")]),_._v("，这是一个贯穿整个计算机网络的概念。就是说"),t("u",[_._v("发送端在层与层之间传输数据时，每经过一层必定会被打上一个该层所属的首部信息。反之，接收端在层与层之间传输数据时，每经过一层就会把该层对应的首部信息消去")]),_._v("。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210207230329.png",alt:""}})]),_._v(" "),t("h2",{attrs:{id:"_3-dns-域名解析获取-ip-地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-dns-域名解析获取-ip-地址"}},[_._v("#")]),_._v(" 3. DNS 域名解析获取 IP 地址")]),_._v(" "),t("p",[_._v("封装好 HTTP 请求报文后，在正式还有一项准备工作没有做，那就是获取目标服务器的 IP 地址。")]),_._v(" "),t("p",[_._v("虽然解析得到了域名，理论浏览器已经知道目标服务器是谁了。但是实际上，域名并不是目标服务器真正意义上的地址，互联网上每一台计算机都被全世界唯一 IP 地址标识着，但是 IP 地址并不方便记忆，所以才设计出了域名。")]),_._v(" "),t("p",[_._v("那么就需要解析域名获取目标服务器的 IP 地址。不然空有一个方便记忆的域名咋知道这个请求到底发送到哪里去呢。由域名转换得到 IP 地址就是 DNS 协议做的事情，如下：")]),_._v(" "),t("blockquote",[t("p",[_._v("关于 DNS 详细的内容各位可以回顾 "),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/AfVqL7lEsbRE-YLOPZ4gDQ",target:"_blank",rel:"noopener noreferrer"}},[_._v("超详细 DNS 协议解析"),t("OutboundLink")],1),_._v(" 这篇文章，比如什么是域名，域名服务器，递归查询和迭代查询等等，写的已经足够详细，此处只列出 DNS 的解析过程。")])]),_._v(" "),t("p",[_._v("1）首先搜索"),t("strong",[_._v("浏览器的 DNS 缓存")]),_._v("，缓存中维护着一张域名与 IP 地址的对应表；")]),_._v(" "),t("p",[_._v("2）若没有命中，则继续搜索"),t("strong",[_._v("操作系统的 DNS 缓存")]),_._v("；")]),_._v(" "),t("p",[_._v("3）若仍然没有命中，则操作系统将域名发送至"),t("strong",[_._v("本地域名服务器")]),_._v("，本地域名服务器查询自己的 DNS 缓存，查找成功则返回结果（注意：主机和本地域名服务器之间的查询方式是"),t("strong",[_._v("递归查询")]),_._v("）；")]),_._v(" "),t("p",[_._v("4）若本地域名服务器的 DNS 缓存没有命中，则本地域名服务器向上级域名服务器进行查询，通过以下方式进行"),t("strong",[_._v("迭代查询")]),_._v("（注意：本地域名服务器和其他域名服务器之间的查询方式是迭代查询，防止根域名服务器压力过大）：")]),_._v(" "),t("ul",[t("li",[_._v("首先本地域名服务器向"),t("strong",[_._v("根域名服务器")]),_._v("发起请求，根域名服务器是最高层次的，它并不会直接指明这个域名对应的 IP 地址，而是返回顶级域名服务器的地址，也就是说给本地域名服务器指明一条道路，让他去这里寻找答案")]),_._v(" "),t("li",[_._v("本地域名服务器拿到这个"),t("strong",[_._v("顶级域名服务器")]),_._v("的地址后，就向其发起请求，获取"),t("strong",[_._v("权限域名服务器")]),_._v("的地址")]),_._v(" "),t("li",[_._v("本地域名服务器根据权限域名服务器的地址向其发起请求，最终得到该域名对应的 IP 地址")])]),_._v(" "),t("p",[_._v("4）本地域名服务器将得到的 IP 地址返回给操作系统，同时自己将 IP 地址缓存起来")]),_._v(" "),t("p",[_._v("5）操作系统将 IP 地址返回给浏览器，同时自己也将 IP 地址缓存起来")]),_._v(" "),t("p",[_._v("6）至此，浏览器就得到了域名对应的 IP 地址，并将 IP 地址缓存起来")]),_._v(" "),t("p",[_._v("配合下图直观理解：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210120123619.png",alt:""}})]),_._v(" "),t("p",[_._v("需要注意的是，DNS 使用的是 UDP 协议，也就是说上面各种请求的转发，都是基于 UDP 这个无连接协议的。")]),_._v(" "),t("h2",{attrs:{id:"_4-建立-tcp-连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-建立-tcp-连接"}},[_._v("#")]),_._v(" 4. 建立 TCP 连接")]),_._v(" "),t("p",[_._v("获取到了目标服务器的 IP 地址之后，浏览器就知道我等下请求要发给谁了，这个时候就可以开始发送封装好了的 HTTP 请求报文了，那么既然需要发送请求，必然就需要 TCP 通过三次握手为浏览器和服务器之间建立可靠的连接，"),t("strong",[_._v("保证双方都具有可靠的接收和发送能力")]),_._v("。")]),_._v(" "),t("blockquote",[t("p",[_._v("这里又是一道经典的面试题：TCP 三次握手和四次挥手，详细可见 "),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/u56NcMs68sgi6uDpzJ61yw",target:"_blank",rel:"noopener noreferrer"}},[_._v("关于 TCP 三次握手和四次挥手，满分回答在此"),t("OutboundLink")],1),_._v(" 这篇文章。")])]),_._v(" "),t("p",[_._v("三次握手过程如下图：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210107175526.png",alt:""}})]),_._v(" "),t("h2",{attrs:{id:"_5-浏览器发送请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-浏览器发送请求"}},[_._v("#")]),_._v(" 5. 浏览器发送请求")]),_._v(" "),t("p",[_._v("TCP 三次握手完成后，浏览器与目标服务器之间就建立了一个可靠的虚拟通道，于是浏览器就可以发送自己的 HTTP 请求了。")]),_._v(" "),t("p",[_._v("需要注意的是，HTTP 请求报文或者响应报文在 TCP 连接通道上进行传输的时候，由于这些报文比较大，为了更容易和准确可靠的传输，"),t("strong",[_._v("TCP 会将 HTTP 报文按序号分割成若干报文段并加上 TCP 首部，分别进行传输。接收方在收到这些报文段后，按照序号以原来的顺序重组 HTTP 报文")]),_._v("。")]),_._v(" "),t("h2",{attrs:{id:"_6-负责传输的-ip-协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-负责传输的-ip-协议"}},[_._v("#")]),_._v(" 6. 负责传输的 IP 协议")]),_._v(" "),t("p",[_._v("实际上，TCP 在三次握手建立连接、四次握手断开连接、以及连接建立过程中的收发数据（TCP 报文段）等各阶段操作时，都是通过 IP 协议进行传输的，IP 协议将这些阶段的数据添加 IP 首部封装成 IP 数据报再进行传输。")]),_._v(" "),t("p",[_._v("IP 数据报的首部存有"),t("strong",[_._v("源 IP 地址")]),_._v("和 "),t("strong",[_._v("目标 IP 地址")]),_._v("。所谓源 IP 地址 就是发送方的 IP 地址；目标 IP 地址就是通过 DNS 域名解析得到的目标服务器的 IP 地址。")]),_._v(" "),t("p",[_._v("事实上，"),t("strong",[_._v("IP 协议身处的网络层规定的是：数据报要通过怎样的路径（传输路线）才能到达对方计算机，并传送给对方")]),_._v("。不理解这句话的详细解释马上就来，继续往下读。")]),_._v(" "),t("h2",{attrs:{id:"_7-使用-arp-协议凭借-mac-地址通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-使用-arp-协议凭借-mac-地址通信"}},[_._v("#")]),_._v(" 7. 使用 ARP 协议凭借 MAC 地址通信")]),_._v(" "),t("blockquote",[t("p",[_._v("关于 IP 协议、IP 地址、MAC 地址等详细请看 "),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/NO9RDt1A3T1rz-Q4_Y0gPw",target:"_blank",rel:"noopener noreferrer"}},[_._v("别再恐惧 IP 协议（万字长文 | 多图预警）"),t("OutboundLink")],1),_._v(" 这篇文章。")])]),_._v(" "),t("p",[_._v("上面说了，IP 协议的作用是把各种数据包传送给对方，而要保证确实传送到对方那里，则需要满足各类条件，其中必要的两个就是 IP 地址 和 MAC 地址。")]),_._v(" "),t("p",[_._v("MAC 地址也是用来唯一标识一个接入互联网的设备的，可能不禁有小伙伴要问，既然网络层已经有了唯一标识的 IP 地址，为啥还需要 MAC 地址？")]),_._v(" "),t("p",[_._v("看下面这幅图，在网络上，"),t("strong",[_._v("通信的双方在同一局域网内的情况是很少见的，通常是需要多台计算机和网络设备的中转才能连接到对方。而在进行中转时，就需要利用下一站中转设备的 MAC 地址来搜索下一个中转目标")]),_._v("。")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210114143919.png",alt:""}})]),_._v(" "),t("ul",[t("li",[t("p",[_._v("网络层指定了从哪个主机（「源 IP 地址」）发送到哪个主机（「目的 IP 地址」）。"),t("strong",[_._v("源 IP 地址和目标 IP 地址在传输过程中是不会变化的")])])]),_._v(" "),t("li",[t("p",[_._v("而数据链路层则是根据 MAC 地址在一个接一个的区间中进行传输的，每个区间内的出发地址即「源 MAC 地址」，每个区间内的目的地址即「目的 MAC 地址」。显然，随着数据的传输，"),t("strong",[_._v("源 MAC 地址和目的 MAC 地址会不断的发生变化")])]),_._v(" "),t("p",[_._v("比如上图，"),t("strong",[_._v("网络层告知了 1-2-3 路线，也就是说指明了这几个路由器的 IP 地址。那么数据链路层就会根据这几个 IP 地址对应的 MAC 地址依次找到 1、2、3，并在他们之间传输数据")]),_._v("。")])])]),_._v(" "),t("p",[_._v("🍉 这么说吧，举个形象点的例子：我们把数据链路层当成乘坐高铁从苏州到南京，再在南京转乘到北京，再在北京转乘到西藏的旅客，那么网络层就相当于每个车站的工作人员，"),t("strong",[_._v("在数据链路层每次转乘时，网络层为其购买了一张标有下一个 MAC 地址的车票")]),_._v("。因此，即使旅客（数据链路层）不知道其最终目的地也没有关系，工作人员（网络层）会给你做出指引。")]),_._v(" "),t("p",[_._v("实际上，网络层做出指引的过程，我们将其称为"),t("strong",[_._v("路由控制")]),_._v("，其中又涉及到了路由协议比如 OSPF 等")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210115151809.png",alt:""}})]),_._v(" "),t("p",[_._v("那么，"),t("strong",[_._v("将 IP 地址转化为 MAC 地址")]),_._v("，从而在数据链路层精确的传输数据的协议就是 "),t("strong",[_._v("ARP 协议")]),_._v("。")]),_._v(" "),t("p",[_._v("ARP 是借助 "),t("strong",[_._v("ARP 请求与 ARP 响应")]),_._v("两种类型的包确定 MAC 地址的。并且每个主机都有一个 "),t("strong",[_._v("ARP 高速缓存")]),_._v("，里面有本局域网上的各主机和路由器的 "),t("strong",[_._v("IP 地址到 MAC 地址的映射表")]),_._v("。")]),_._v(" "),t("p",[_._v("如下图所示，假定主机 A 向同一链路上的主机 B 发送 IP 数据报，已知主机 A 和主机 B 的 IP 地址，它们互不知道对方的 MAC 地址：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210123213052.png",alt:""}})]),_._v(" "),t("p",[_._v("1）首先，主机 A 为了获得主机 B 的 MAC 地址，它会先去查询自己的 ARP 高速缓存中有没有主机 B 的相关记录；")]),_._v(" "),t("p",[_._v("2）如果主机 A 的 ARP 高速缓存中没有主机 B 的 IP 地址到 MAC 地址的映射，主机 A 就会通过"),t("strong",[_._v("广播")]),_._v("的方式发送 "),t("strong",[_._v("ARP 请求包")]),_._v("（该包携带自己的 IP 地址 和 MAC 地址 以及 目标主机的 IP 地址），表明自己想要获得主机 B 的 MAC 地址；")]),_._v(" "),t("p",[_._v("2） 由于广播请求可以被同一个链路上的所有主机或路由器接收，因此如果这条链路上某个主机或路由的 IP 地址与这个 ARP 请求包中包含的目标主机的 IP 地址相同，那么这个节点就将自己的 MAC 地址塞入 "),t("strong",[_._v("ARP 响应包")]),_._v("中返回给主机 A；")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210123220759.png",alt:""}})]),_._v(" "),t("blockquote",[t("p",[_._v("当然，ARP 响应包是以单播的形式进行发送的，毕竟 ARP 请求包中已经包含了主机 A 的 IP 地址，所以主机 B 非常清楚这个响应包应该发送给谁。")]),_._v(" "),t("p",[_._v("大部分网络协议在设计的时候，都是保持极度克制的，不需要的交互就砍掉，能合并的信息就合并，能不用广播就用单播，以此让带宽变得更多让网络变得更快。")])]),_._v(" "),t("p",[_._v("3）主机 A 在收到主机 B 发过来的 ARP 响应包后，向其 ARP 高速缓存中写入主机 B 的 IP 地址到 MAC 地址的映射。")]),_._v(" "),t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20200427210248.png"}}),_._v(" "),t("p",[_._v("当然，缓存是有一定期限的，超过这个期限，缓存的内容将被清空。这也使得即使 MAC 地址和 IP 地址的映射关系发生了变化，也依然能够正确的将数据包发送给目标地址。")]),_._v(" "),t("h2",{attrs:{id:"_8-服务器响应请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-服务器响应请求"}},[_._v("#")]),_._v(" 8. 服务器响应请求")]),_._v(" "),t("p",[_._v("浏览器的 HTTP 请求报文通过 TCP 三次握手建立的连接通道被切分成若干报文段分别发送给服务器，服务器在收到这些报文段后，按照序号以原来的顺序重组 HTTP 请求报文。然后处理并返回一个 HTTP 响应。当然，HTTP 响应报文也要经过和 HTTP 请求报文一样的过程。")]),_._v(" "),t("p",[_._v("看下方这个图回顾一下（图片来源《图解 HTTP》）：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20210207224444.png",alt:""}})]),_._v(" "),t("h2",{attrs:{id:"_9-断开-tcp-连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-断开-tcp-连接"}},[_._v("#")]),_._v(" 9. 断开 TCP 连接")]),_._v(" "),t("p",[_._v("浏览器和服务器都不再需要发送数据后，四次挥手断开 TCP 连接，详细可见 "),t("a",{attrs:{href:"https://mp.weixin.qq.com/s/u56NcMs68sgi6uDpzJ61yw",target:"_blank",rel:"noopener noreferrer"}},[_._v("关于 TCP 三次握手和四次挥手，满分回答在此"),t("OutboundLink")],1),_._v(" 这篇文章。")]),_._v(" "),t("h2",{attrs:{id:"_10-浏览器显示界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-浏览器显示界面"}},[_._v("#")]),_._v(" 10. 浏览器显示界面")]),_._v(" "),t("p",[_._v("浏览器接收到服务器返回的数据包，根据浏览器的渲染机制对相应的数据进行渲染")]),_._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),t("p",[_._v("屏蔽掉底层细节，笼统的总结一下上述过程：")]),_._v(" "),t("p",[_._v("应用层：")]),_._v(" "),t("ul",[t("li",[_._v("浏览器封装 HTTP 请求报文")]),_._v(" "),t("li",[_._v("DNS 解析域名获得目标服务器地址")])]),_._v(" "),t("p",[_._v("传输层：")]),_._v(" "),t("ul",[t("li",[_._v("建立连接")]),_._v(" "),t("li",[_._v("把应用层传过来的 HTTP 请求报文进行分割，并在各个报文上打上标记序号及端口号转发给网络层")])]),_._v(" "),t("p",[_._v("网络层：")]),_._v(" "),t("ul",[t("li",[_._v("利用 ARP 协议根据 IP 地址获取作为通信目的地的 MAC 地址后转发给链路层")])]),_._v(" "),t("p",[_._v("服务端在链路层收到数据，按序往上层发送，一直到应用层接收到浏览器发送来的 HTTP 请求报文，然后处理该请求并返回 HTTP 响应报文，浏览器接收到响应报文之后解析渲染界面。最后 TCP 断开连接。")])])}),[],!1,null,null,null);v.default=a.exports}}]);