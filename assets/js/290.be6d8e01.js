(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{758:function(v,_,D){"use strict";D.r(_);var P=D(29),t=Object(P.a)({},(function(){var v=this,_=v.$createElement,D=v._self._c||_;return D("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[D("h1",{attrs:{id:"为什么-dns-协议使用-udp-只使用了-udp-吗"}},[D("a",{staticClass:"header-anchor",attrs:{href:"#为什么-dns-协议使用-udp-只使用了-udp-吗"}},[v._v("#")]),v._v(" 为什么 DNS 协议使用 UDP？只使用了 UDP 吗？")]),v._v(" "),D("hr"),v._v(" "),D("p",[v._v("为什么 DNS 协议使用 UDP 呢？这个问题可能大部分同学在各种博客或者面试过程中都或多或少遇见过，张口就来，UDP 快啊，DNS 使用 UDP 使得打开网页速度更快。")]),v._v(" "),D("p",[v._v("那各位有没有想过，既然 UDP 更快，为什么 HTTP 不使用 UDP 呢？")]),v._v(" "),D("p",[v._v("另外，为什么 DNS 协议使用 UDP 这个问题本身其实并不完全正确，DNS 并非只使用 UDP 协议，"),D("strong",[v._v("它同时占用了 UDP 和 TCP 的 53 端口")]),v._v("，作为单个应用层的协议，DNS 同时使用两种传输协议也属实是个另类了。")]),v._v(" "),D("h3",{attrs:{id:"dns-为什么同时使用-tcp-和-udp"}},[D("a",{staticClass:"header-anchor",attrs:{href:"#dns-为什么同时使用-tcp-和-udp"}},[v._v("#")]),v._v(" DNS 为什么同时使用 TCP 和 UDP")]),v._v(" "),D("p",[v._v("我们从 TCP 与 UDP 的比较说起，老生常谈的话题，不过相信大部分同学都会忽略掉一个点，等下会指出来。")]),v._v(" "),D("p",[v._v("OK，轻松环节，闭着眼睛背：")]),v._v(" "),D("p",[v._v("1）TCP 需要三次握手建立连接，四次挥手释放连接；UDP 不需要，面向无连接")]),v._v(" "),D("p",[v._v("2）TCP 首部需要 20 个字节；而 UDP 首部只有 8 个字节")]),v._v(" "),D("p",[v._v("3）TCP 具有一系列保证可靠传输的机制；而 UDP 尽最大努力交付，不提供可靠传输的机制，如果在数据传输的过程中出现部分数据的丢失，UDP 协议本身并不能做出任何检测或补救措施")]),v._v(" "),D("p",[v._v("4）正是由于 UDP 没有了可靠传输机制，所以速度远远快于 TCP，在某些情况下 UDP 是一种最有效的工作方式，一般用于即时通信，比如： 语音电话、 直播等等；而 TCP 一般用于文件传输、发送和接收邮件、远程登录等准确性要求比较高的场景")]),v._v(" "),D("p",[v._v("上面这些是最基本的吧。")]),v._v(" "),D("p",[v._v("接下来讲的这个点，也就是很多人容易忽略的点，和 DNS 为什么需要同时使用 UDP 和 TCP 这个问题息息相关：")]),v._v(" "),D("ul",[D("li",[v._v("那就是 "),D("strong",[v._v("TCP 是面向字节流的，而 UDP 是面向报文的")])])]),v._v(" "),D("p",[v._v("解释一下这句话，我们知道，TCP 具有序列号机制，发送方会把一个大的 HTTP 报文按序号分割成若干报文段并加上 TCP 首部，也就是封装成 TCP 报文段。那么接收方在收到这些 TCP 报文段后，就会按照序号以原来的顺序重组 HTTP 报文。这就是面向字节流的 TCP。")]),v._v(" "),D("p",[v._v("而所谓 UDP 面向报文，发送方的 UDP 对应用层交付下来的 HTTP 报文， 在添加 UDP 首部后也就是封装成 UDP 报文，就向下交付给网络层 IP 协议。"),D("strong",[v._v("不做任何的拆分与合并")]),v._v("，主要就是因为 UDP 没有像 TCP 一样的序列号机制来标识报文，所以默认只有一个 UDP 报文。")]),v._v(" "),D("p",[v._v("UDP 这么做就会导致一个问题。")]),v._v(" "),D("p",[v._v("互联网上物理链路的最小传输单元 = 576 字节，为了在物理链路上顺利传输，UDP 报文不能超过 576 字节，为此，"),D("strong",[v._v("UDP 报文被限制在 512 字节以内")]),v._v("。")]),v._v(" "),D("p",[v._v("而 DNS 由于大面积使用了 UDP，这样一旦 DNS 报文超过 512 字节，基于 UDP 的 DNS 报文就只有抛弃多出来的 64 字节，截短为 512 字节，那么用户得到的 DNS 报文就是不完整的。")]),v._v(" "),D("p",[v._v("如何解决这个问题呢？")]),v._v(" "),D("p",[v._v("没错，最简单的方式就是使用 TCP。尽管速度可能相之 UDP 较慢，但对于得到完整的 DNS 报文，速度慢一点也可以忍受。")]),v._v(" "),D("h3",{attrs:{id:"dns-分别在什么情况下使用-udp-和-tcp"}},[D("a",{staticClass:"header-anchor",attrs:{href:"#dns-分别在什么情况下使用-udp-和-tcp"}},[v._v("#")]),v._v(" DNS 分别在什么情况下使用 UDP 和 TCP")]),v._v(" "),D("p",[v._v("了解了 TCP 面向字节流而 UDP 面向报文的这个特性之后，在"),D("strong",[v._v("域名解析")]),v._v("的时候，也就是客户端向 DNS 服务器查询域名获取 IP 地址的时候，DNS 协议关于 UDP 和 TCP 的选择通常可以分为以下两种情况：")]),v._v(" "),D("p",[v._v("1）若客户端"),D("strong",[v._v("事先知道")]),v._v(" DNS 响应报文的长度会大于 512 字节，则应当直接使用 TCP 建立连接")]),v._v(" "),D("p",[v._v("2）若客户端"),D("strong",[v._v("事先不知道")]),v._v(" DNS 响应报文的长度，一般会先使用 UDP 协议发送 DNS 查询报文，若 DNS 服务器发现 DNS 响应报文的长度大于 512 字节，则多出来的部分会被 UDP 抛弃（截断 TrunCation），那么服务器会把这个部分被抛弃的 DNS 报文首部中的 TC 标志位置为 1，以通知客户端该 DNS 报文已经被截断。客户端收到之后会重新发起一次 TCP 请求，从而使得它将来能够从 DNS 服务器收到完整的响应报文。")]),v._v(" "),D("p",[v._v("当然了，在域名解析的时候，一般返回的 DNS 响应报文都不会超过 512 字节，用 UDP 传输即可。事实上，很多 DNS 服务器进行配置的时候，也仅支持 UDP 查询包。")]),v._v(" "),D("p",[v._v("不过，DNS 不仅存在域名解析的过程，还有"),D("strong",[v._v("区域传输")]),v._v("的过程，而在进行区域传输的时候 DNS 会强制使用 TCP 协议。")]),v._v(" "),D("p",[v._v("什么是区域传输？")]),v._v(" "),D("p",[v._v("这就不得不提一下"),D("strong",[v._v("主域名服务器和辅助域名服务器")]),v._v("。")]),v._v(" "),D("p",[v._v("设置域名服务器时，服务器管理员可以选择将域名服务器指定为主服务器还是辅助服务器（也称为从服务器）。")]),v._v(" "),D("p",[v._v("主域名服务器负责维护一个区域的所有域名信息，是特定的所有信息的权威信息源，数据可以修改。主服务器直接从本地文件获取此信息。只能在主服务器上更改区域的 DNS 记录，然后主服务器才能更新辅助服务器。")]),v._v(" "),D("p",[v._v("当主域名服务器出现故障、关闭或负载过重时，辅助域名服务器作为主域名服务器的备份提供域名解析服务。辅助域名服务器中的区域文件中的数据是从主域名服务器中复制过来的，无法自行修改。")]),v._v(" "),D("p",[v._v("其实就是主从的概念，各位应该也都比较熟悉了。主域名服务器用来写，辅助域名服务器用来读，"),D("strong",[v._v("提供负载均衡的能力，缓解主域名服务器的压力")]),v._v("。")]),v._v(" "),D("p",[v._v("那么所谓区域传输（zone transfer）呢，就是辅助域名服务器与主域名服务器通信，并同步数据信息的过程。")]),v._v(" "),D("p",[v._v("辅域名服务器会定时向主域名服务器进行查询以便了解数据是否有变动。如有变动，则会执行一次区域传输。区域传输使用 TCP 而不是 UDP，因为"),D("strong",[v._v("数据同步传送的数据量比一个 DNS 请求和响应报文的数据量要多得多")]),v._v("。")]),v._v(" "),D("p",[v._v("文章开头提到的"),D("strong",[v._v("既然 UDP 更快，为什么 HTTP 不使用 UDP 呢")]),v._v("？这个问题的答案也大抵如此。")]),v._v(" "),D("p",[v._v("由于互联网的不安全性，我们需要数字证书并携带数字签名来保证数据的安全性，为此，整个 HTTP 报文的大小已经远远超过 512 字节，无法使用 UDP 传输。")]),v._v(" "),D("h3",{attrs:{id:"小结"}},[D("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[v._v("#")]),v._v(" 小结")]),v._v(" "),D("p",[v._v("综上，总结下，虽然 UDP 速度更快，DNS 协议也确实大面积使用了 UDP，但是由于 UDP 面向报文、只能传输小于 512 字节的特性，DNS 并非只使用了 UDP，具体的 TCP 和 UDP 使用场景如下：")]),v._v(" "),D("ul",[D("li",[v._v("DNS 在域名解析的过程中，会根据 DNS 响应报文的大小选择使用 TCP 还是 UDP。但是一般情况下，返回的 DNS 响应报文都不会超过 512 字节，所以事实上，很多 DNS 服务器进行配置的时候，也仅支持 UDP 查询包；")]),v._v(" "),D("li",[v._v("DNS 在进行区域传输的时候使用 TCP 协议。")])])])}),[],!1,null,null,null);_.default=t.exports}}]);