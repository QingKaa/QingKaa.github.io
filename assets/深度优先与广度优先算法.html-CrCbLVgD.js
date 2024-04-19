import{_ as a,r as t,o as p,c as e,b as o,a as n,e as l}from"./app-rtcxGVRQ.js";const c="/assets/base-BhrKgIYX.png",i="/assets/dfs-C4SaOH2N.png",r="/assets/bfs-D-iCOCCs.png",u={},k=n("h1",{id:"深度优先与广度优先算法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#深度优先与广度优先算法"},[n("span",null,"深度优先与广度优先算法")])],-1),d=l('<blockquote><p>两种遍历或搜索树的算法，深度优先顾名思义优先遍历树的深度，广度优先则优先遍历树的宽度。</p></blockquote><p>假设有一树如下：<br><img src="'+c+'" alt="树"></p><h2 id="深度优先算法" tabindex="-1"><a class="header-anchor" href="#深度优先算法"><span>深度优先算法</span></a></h2><p>Depth-First-Search，简称 DFS。<br> 在遍历搜索过程中，尽可能深的搜索树的分支。</p><h3 id="以上例子深度优先遍历的顺序为" tabindex="-1"><a class="header-anchor" href="#以上例子深度优先遍历的顺序为"><span>以上例子深度优先遍历的顺序为</span></a></h3><ol><li>根节点 A</li><li>访问第一个子节点 B，B中有两个子节点 C 和 E <ol><li>访问 C 节点，C 中有一个子节点 D <ol><li>访问 D 节点，D为叶子节点，访问结束，返回到父节点C。</li><li>C 无其他子节点，返回到父节点。</li></ol></li><li>访问 E 节点，E为叶子节点，访问结束，返回到B节点。</li><li>B 无其他子节点，返回到父节点。</li></ol></li><li>访问第二个子节点 F，F中有两个子节点 G、H <ol><li>访问第一个子节点G，G为叶子节点，返回到父节点</li><li>访问第二个子节点H，H为叶子节点，返回到父节点</li><li>F 无其他子节点，返回到父节点。</li></ol></li><li>访问第三个子节点 I，I为叶子节点，访问结束，返回到父节点。</li><li>A 无其他子节点，遍历结束。</li></ol><p>访问链：<br><code>A =&gt; B =&gt; C =&gt; D =&gt; E =&gt; F =&gt; G =&gt; H =&gt; I </code><br><img src="'+i+`" alt="DFS"></p><p>一个简单的实现：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="DFS"><pre class="language-javascript"><code><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;D&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;E&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;F&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;G&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;H&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;I&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> children <span class="token punctuation">}</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;  =====&gt; name:&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>dfs<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">dfs</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出结果：</span>
<span class="token comment">//  =====&gt; name: A</span>
<span class="token comment">//  =====&gt; name: B</span>
<span class="token comment">//  =====&gt; name: C</span>
<span class="token comment">//  =====&gt; name: D</span>
<span class="token comment">//  =====&gt; name: E</span>
<span class="token comment">//  =====&gt; name: F</span>
<span class="token comment">//  =====&gt; name: G</span>
<span class="token comment">//  =====&gt; name: H</span>
<span class="token comment">//  =====&gt; name: I</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="广度优先算法" tabindex="-1"><a class="header-anchor" href="#广度优先算法"><span>广度优先算法</span></a></h2><p>Breadth-First-Search，简称 BFS。</p><blockquote><p>是一种用于图和树的搜索/遍历算法，它从起始节点开始，逐层地向外探索其相邻节点，直到找到目标节点或者遍历完整个图；BFS 算法适用于寻找<strong>最短路径</strong>、<strong>检测连通性</strong>、<strong>解决迷宫</strong>等问题，它的时间复杂度为 <code>O(V + E)</code>，其中<code> V</code> 是顶点数，<code>E</code> 是边数。</p></blockquote><h3 id="算法要点" tabindex="-1"><a class="header-anchor" href="#算法要点"><span>算法要点</span></a></h3><blockquote><p>使用队列来保存待访问的节点，开始时将根节点放入队列中，按照层级逐层遍历，即先访问起始节点的所有相邻节点，然后再访问这些相邻节点的相邻节点，以此类推，直到遍历完整个图或树：</p></blockquote><ol><li><strong>起始节点</strong>：从图或树中选择一个起始节点开始搜索。</li><li><strong>队列</strong>：BFS 使用队列来保存待探索的节点。起始时，将起始节点放入队列中。</li><li><strong>标记访问</strong>：为了避免重复访问节点，需要在访问过节点时进行标记，通常使用布尔数组或者哈希集合来记录已经访问过的节点。</li><li><strong>层级遍历</strong>：BFS 按照层级逐层遍历，即先访问起始节点的所有相邻节点，然后再访问这些相邻节点的相邻节点，以此类推，直到遍历完整个图或树。</li><li><strong>节点访问顺序</strong>：在 BFS 中，相邻节点的访问顺序是按照它们被加入队列的顺序进行的，即先进先出（FIFO）。</li><li><strong>循环条件</strong>：BFS 在队列为空之前持续执行，直到找到目标节点或者遍历完整个图。</li><li><strong>路径记录</strong>：如果需要找到起始节点到目标节点的路径，通常在搜索的过程中，需要记录每个节点的父节点，以便在找到目标节点后，通过回溯路径找到起始节点到目标节点的最短路径。</li></ol><h3 id="以上例子广度优先遍历的顺序" tabindex="-1"><a class="header-anchor" href="#以上例子广度优先遍历的顺序"><span>以上例子广度优先遍历的顺序</span></a></h3><ol><li>根节点 A</li><li>访问第一个子节点B</li><li>访问第二个子节点F</li><li>访问第三个子节点I</li><li>访问B节点的子节点 C 和 D</li><li>访问F节点的子节点G 和 H</li><li>访问C节点的子节点 D</li><li>结束</li></ol><p>访问链：<br> A =&gt; B =&gt; F =&gt; I =&gt; C =&gt; E =&gt; G =&gt; H =&gt; D</p><p><img src="`+r+`" alt="BFS"></p><h3 id="简单例子" tabindex="-1"><a class="header-anchor" href="#简单例子"><span>简单例子</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="BFS"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">bfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">tree</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>tree<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> children <span class="token punctuation">}</span> <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;  =====&gt; name:&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    children <span class="token operator">&amp;&amp;</span> children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">child</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 输出结果：</span>
<span class="token comment">//   =====&gt; name: A</span>
<span class="token comment">//   =====&gt; name: B</span>
<span class="token comment">//   =====&gt; name: F</span>
<span class="token comment">//   =====&gt; name: I</span>
<span class="token comment">//   =====&gt; name: C</span>
<span class="token comment">//   =====&gt; name: E</span>
<span class="token comment">//   =====&gt; name: G</span>
<span class="token comment">//   =====&gt; name: H</span>
<span class="token comment">//   =====&gt; name: D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>END</p>`,22);function m(v,g){const s=t("PostInfo");return p(),e("div",null,[k,o(s),d])}const h=a(u,[["render",m],["__file","深度优先与广度优先算法.html.vue"]]),B=JSON.parse('{"path":"/blog/js%E5%9F%BA%E7%A1%80/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E4%B8%8E%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E7%AE%97%E6%B3%95/%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88%E4%B8%8E%E5%B9%BF%E5%BA%A6%E4%BC%98%E5%85%88%E7%AE%97%E6%B3%95.html","title":"深度优先与广度优先算法","lang":"zh-CN","frontmatter":{"title":"深度优先与广度优先算法","date":"2024-04-19","author":"清咖","tags":["算法"],"poster":"/images/poster/dfsAbfs_poster.jpg","category":"js基础"},"headers":[{"level":2,"title":"深度优先算法","slug":"深度优先算法","link":"#深度优先算法","children":[{"level":3,"title":"以上例子深度优先遍历的顺序为","slug":"以上例子深度优先遍历的顺序为","link":"#以上例子深度优先遍历的顺序为","children":[]}]},{"level":2,"title":"广度优先算法","slug":"广度优先算法","link":"#广度优先算法","children":[{"level":3,"title":"算法要点","slug":"算法要点","link":"#算法要点","children":[]},{"level":3,"title":"以上例子广度优先遍历的顺序","slug":"以上例子广度优先遍历的顺序","link":"#以上例子广度优先遍历的顺序","children":[]},{"level":3,"title":"简单例子","slug":"简单例子","link":"#简单例子","children":[]}]}],"git":{"updatedTime":1713511011000,"contributors":[{"name":"清咔","email":"874518796@qq.com","commits":1}]},"filePathRelative":"blog/js基础/深度优先与广度优先算法/深度优先与广度优先算法.md"}');export{h as comp,B as data};
