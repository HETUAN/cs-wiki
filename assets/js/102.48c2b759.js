(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{570:function(v,_,s){"use strict";s.r(_);var t=s(29),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h2",{attrs:{id:"图的表示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图的表示"}},[v._v("#")]),v._v(" 图的表示")]),v._v(" "),s("p",[v._v("图可以分为有向图和无向图")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220314104521.png",alt:""}})]),v._v(" "),s("p",[v._v("通常，图可以用邻接表或邻接矩阵表示。")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("邻接表："),s("strong",[v._v("邻接表为图中的每个节点创建一个容器，第 i 个容器保存所有与第 i 个节点相邻的节点")]),v._v("。例如，上图中的有向图和无向图可以分别用下图（a）和（b）所示的邻接表表示：")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220314104659.png",alt:""}})])]),v._v(" "),s("li",[s("p",[v._v("邻接矩阵：如果一个图中有n个节点，那么它的邻接矩阵M的大小是n×n。如果节点i和节点j之间有一条边，那么 "),s("code",[v._v("M[i][j]")]),v._v(" 等于 1；反之，如果节点i和节点j之间没有边，那么 "),s("code",[v._v("M[i][j]")]),v._v(" 等于0")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220314105515.png",alt:""}})])])]),v._v(" "),s("p",[v._v("如果一个图是用邻接矩阵表示的，那么判断两个节点之间是否有边相连就非常简单，只需要判断矩阵中对应位置是1还是0即可，时间复杂度为O（1）。"),s("strong",[v._v("但如果一个图中的节点数目非常大但比较稀疏（大部分节点之间没有边），那么邻接表的空间效率更高")]),v._v("。")]),v._v(" "),s("p",[v._v("例如，微信有数亿个用户，大部分用户只有几百个好友。可以用一个图表示微信用户的好友关系，每个用户是图中的一个节点，如果两个用户是好友那么他们的节点之间有一条边。")]),v._v(" "),s("ul",[s("li",[v._v("如果用邻接矩阵表示这个图，每个用户在矩阵中对应一行，每行有数亿个格子，而且绝大多数格子的值都是0。")]),v._v(" "),s("li",[v._v("如果用邻接表表示该图，那么一个用户有多少个好友，邻接表就只需要将多少个好友保存到他的好友列表中。")])]),v._v(" "),s("p",[v._v("图还可以分为有权图和无权图。在有权图中，每条边都有一个数值权重，用来表示两个节点的某种关系，如两个节点的距离等。在无权图中所有的边都没有权重。")]),v._v(" "),s("h2",{attrs:{id:"图的搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图的搜索"}},[v._v("#")]),v._v(" 图的搜索")]),v._v(" "),s("p",[v._v("在图中搜索，如找出一条从起始节点到目标节点的路径或遍历所有节点，是与图相关的最重要的算法。")]),v._v(" "),s("p",[v._v("按照搜索顺序不同可以将搜索算法分为"),s("strong",[v._v("广度优先搜索")]),v._v("和"),s("strong",[v._v("深度优先搜索")]),v._v("。")]),v._v(" "),s("h3",{attrs:{id:"bfs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfs"}},[v._v("#")]),v._v(" BFS")]),v._v(" "),s("p",[v._v("广度优先搜索系统地展开并检查图中的所有节点以找寻结果。")]),v._v(" "),s("p",[v._v("实现广度优先搜索算法需要一个先进先出的"),s("strong",[v._v("队列")])]),v._v(" "),s("ul",[s("li",[v._v("搜索的第 1 步是把起始节点添加到队列中")]),v._v(" "),s("li",[v._v("接下来每次从队列中取出一个节点，然后"),s("strong",[v._v("将与该节点相邻并且之前还没有到达过的节点添加到队列中")])]),v._v(" "),s("li",[v._v("重复这个过程，直到所有节点搜索完毕")])]),v._v(" "),s("blockquote",[s("p",[v._v("和层序遍历差不多")])]),v._v(" "),s("p",[v._v("例如，按照广度优先搜索的顺序从节点 1 开始搜索下图中的节点：节点1、节点2、节点3、节点4、节点5、节点6、节点7、节点 8 将依次被访问。")]),v._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220314110021.png"}}),v._v(" "),s("h3",{attrs:{id:"dfs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dfs"}},[v._v("#")]),v._v(" DFS")]),v._v(" "),s("p",[v._v("深度优先搜索算法沿着图中的边尽可能深入地搜索。")]),v._v(" "),s("ul",[s("li",[v._v("深度优先搜索访问图中的某个起始节点 v1 后，从节点v1 出发访问任一相邻并且尚未访问过的节点 v2，再从节点 v2 出发访问相邻并且尚未访问过的节点 v3，以此类推。")]),v._v(" "),s("li",[v._v("如果所有与某个节点 vi 相邻的节点都已经被访问，那么回到节点 vi 的前一个节点 vi-1，继续访问与节点 vi-1 相邻并且还没有访问过的节点。重复这个过程，直到所有节点都搜索完毕。")])]),v._v(" "),s("p",[v._v("例如，按照深度优先搜索的顺序从节点 1 开始搜索上图中的节点，节点 1、节点 2、节点4、节点8、节点5、节点 3、节点 6、节点 7 将依次被访问。")]),v._v(" "),s("h3",{attrs:{id:"解题小经验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解题小经验"}},[v._v("#")]),v._v(" 解题小经验")]),v._v(" "),s("blockquote",[s("p",[v._v("一般来说用 DFS 解决的问题都可以用BFS来解决")]),v._v(" "),s("p",[v._v("BFS＝队列，入队列，出队列；DFS = 栈，压栈，出栈 (递归的写法和回溯差不多）")]),v._v(" "),s("p",[v._v("BFS 是按一层一层来访问的，所以适合求最短路径的步数，你想想层层搜索每进入一层就代表了一步。BFS 优先访问的是兄弟节点，只有这一层全部访问完才能访问下一层，也就是说 BFS 第几层就代表当前可以走到的位置(结点)。而 DFS 是按递归来实现的，它优先搜索深度，再回溯，优先访问的是没有访问过的子节点。")]),v._v(" "),s("p",[v._v("⭐ "),s("strong",[v._v("DFS 多用于连通性问题")]),v._v("，因为其运行思想与人脑的思维很相似，故解决连通性问题更自然。"),s("strong",[v._v("BFS多用于解决最短路径问题")]),v._v("（"),s("code",[v._v("看到 “最短” 就要想到 BFS")]),v._v("），其运行过程中需要储存每一层的信息，所以其运行时需要储存的信息量较大，如果人脑也可储存大量信息的话，理论上人脑也可运行 BFS")]),v._v(" "),s("p",[v._v('总的来说多数情况下运行 BFS 所需的内存会大于 DFS 需要的内存 (DFS一次访问一条路，BFS一次访问多条路)，DFS 容易爆栈 (栈不易"控制")，BFS 通过控制队列可以很好解决 "爆队列" 风险。')]),v._v(" "),s("p",[v._v("它们两者间各自的优势需要通过实际的问题来具体分析，根据它们各自的特点来应用于不同的问题中才能获得最优的性能。")])]),v._v(" "),s("p",[v._v("树也可以看成图。实际上，树是一类特殊的图，树中一定不存在环。但图不一样，图中可能包含环。")]),v._v(" "),s("p",[v._v("当沿着图中的边搜索一个图时，一定要确保程序不会因为沿着环的边不断在环中搜索而陷入死循环。")]),v._v(" "),s("p",[v._v("避免死循环的办法是"),s("strong",[v._v("记录已经搜索过的节点")]),v._v("，"),s("strong",[v._v("在访问一个节点之前先判断该节点之前是否已经访问过，如果之前访问过那么这次就略过不再重复访问")]),v._v("。")]),v._v(" "),s("p",[v._v("⭐ 假设一个图有 v 个节点、e 条边。"),s("strong",[v._v("不管是采用广度优先搜索还是深度优先搜索，每个节点都只会访问一次，并且会沿着每条边判断与某个节点相邻的节点是否已经访问过，因此时间复杂度是 $ O（v+e）$")]),v._v("。")]),v._v(" "),s("h2",{attrs:{id:"拓扑排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拓扑排序"}},[v._v("#")]),v._v(" 拓扑排序")]),v._v(" "),s("p",[v._v("拓扑排序是指对一个"),s("strong",[v._v("有向无环图")]),v._v("的节点进行排序之后得到的序列。")]),v._v(" "),s("p",[s("strong",[v._v("如果存在一条从节点 A 指向节点 B 的边，那么在拓扑排序的序列中节点 A 出现在节点 B 的前面")]),v._v("。")]),v._v(" "),s("p",[v._v("一个有向无环图可以有一个或多个拓扑排序序列，但无向图或有环的有向图都不存在拓扑排序。")]),v._v(" "),s("p",[v._v("一种常用的拓扑排序算法是"),s("strong",[v._v("每次从有向无环图中取出一个"),s("code",[v._v("入度")]),v._v("为 0 的节点添加到拓扑排序序列之中，然后删除该节点及所有以它为起点的边")]),v._v("。重复这个步骤，直到图为空或图中不存在入度为 0 的节点")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("如果最终图为空，那么图是有向无环图，此时就找到了该图的一个拓扑排序序列")])]),v._v(" "),s("li",[s("p",[v._v("如果最终图不为空并且已经不存在入度为 0 的节点，那么图中一定有环（可以使用拓扑排序来判断一个有向图是否有环）。比如下图就是一个有环的有向图")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://staticcdn1-5.umiwi.com/epms_ebook/2ff46b5cca8202420d665723374f71c4.jpg?x-oss-process=image/resize,w_1707,m_lfit",alt:"img"}})])])]),v._v(" "),s("p",[v._v("下图（a）的拓扑排序序列为 [1，2，3，4，5]")]),v._v(" "),s("p",[s("img",{attrs:{src:"https://staticcdn1-5.umiwi.com/epms_ebook/fcf00d900b6226dbf50c5031e647a39f.jpg?x-oss-process=image/resize,w_1707,m_lfit",alt:""}})]),v._v(" "),s("h2",{attrs:{id:"并查集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并查集"}},[v._v("#")]),v._v(" 并查集")]),v._v(" "),s("p",[v._v("并查集是一种树形的数据结构，"),s("strong",[v._v("用来表示不相交集合的数据")]),v._v("。")]),v._v(" "),s("p",[v._v("并查集中的每个子集是一棵树，每个元素是某棵树中的一个节点。树中的每个节点有一个指向父节点的指针，"),s("strong",[v._v("树的根节点的指针指向它自己")]),v._v("。")]),v._v(" "),s("p",[v._v("例如，下图（a）所示是一个由两棵树组成的并查集")]),v._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220325170804.png"}}),v._v(" "),s("p",[v._v("并查集支持两种操作，即合并和查找：")]),v._v(" "),s("ul",[s("li",[s("p",[v._v("合并操作将两个子集合并成一个集合，只需要"),s("strong",[v._v("将一个子集对应的树的根节点的指针指向另一个子集对应的树的根节点")])]),v._v(" "),s("p",[s("img",{attrs:{src:"https://cs-wiki.oss-cn-shanghai.aliyuncs.com/img/20220325170715.png",alt:""}})])]),v._v(" "),s("li",[s("p",[v._v("另一种操作是查找，即确定某个元素 v 处于哪个子集中。并查集中的子集由对应的树的根节点代表。"),s("strong",[v._v("从元素 v 对应的节点开始沿着指向父节点的指针一直找到树的根节点")]),v._v("，即节点的祖先节点。"),s("strong",[v._v("并查集的查找操作经常用来判断两个元素是否属于同一个子集")]),v._v("。如果两个元素的祖先节点相同，那么它们属于同一个子集。")])])]),v._v(" "),s("p",[v._v("并查集经常用来解决图的动态连接问题：")]),v._v(" "),s("ol",[s("li",[v._v("假设一个图中有 n 个节点，最开始的时候这 n 个节点互不连通，形成 n 个只有一个节点的子图。")]),v._v(" "),s("li",[v._v("每次从图中选取两个节点，如果这两个节点不在同一个子图中，添加一条边连接这两个节点，那么它们所在的子图也就连通了。")]),v._v(" "),s("li",[v._v("在添加 m 条边之后，"),s("strong",[v._v("这个图中子图的数目是多少？最大的子图有多少个节点")]),v._v("？这类问题都可以用并查集解决。图中的每个子图对应并查集中的子集，判断图中的两个节点是否在同一个子图就是判断它们对应的元素是否在并查集的同一个子集中，连通图中的两个子图就是合并并查集中的两个子集")])])])}),[],!1,null,null,null);_.default=a.exports}}]);