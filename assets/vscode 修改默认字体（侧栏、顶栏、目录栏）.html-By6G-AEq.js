import{_ as n,r as s,o as c,c as p,b as o,a as e,d as r,e as i}from"./app-BgB4nYFH.js";const l="/assets/vscode-demo-DbGT-w2E.png",d="/assets/font-info-WM4FVbuk.png",h="/assets/pc-font-CaJx9dd-.png",_="/assets/into-debug-DGD0vX5W.png",m="/assets/debug-page-CHE4LPrV.png",g="/assets/debug-DMqcARN3.png",v="/assets/replace-BV7LCn6L.png",b="/assets/maincss-DPnzzrz-.png",E="/assets/vscode-tips-B8Q3Qm75.png",u={},f=e("h1",{id:"vscode-修改默认字体-侧栏、顶栏、目录栏",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vscode-修改默认字体-侧栏、顶栏、目录栏"},[e("span",null,"vscode 修改默认字体（侧栏、顶栏、目录栏）")])],-1),k=i('<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>放个图片压压惊先：​​</p><p><img src="'+l+'" alt="vscode-demo"></p><p>以下正文开始</p><p>首先侧栏和顶栏的字体是无法通过配置的方式实现自定义字体的。需要修改代码（不复杂）。</p><h2 id="准备字体" tabindex="-1"><a class="header-anchor" href="#准备字体"><span>准备字体：</span></a></h2><p>建议把心仪的字体下载到本地（mac的不知道如何添加，全文以windows操作）。</p><p>字体下载后双击打开，点击安装，自己即会添加到系统之中。然后拿着字体名称。</p><p><img src="'+d+'" alt="font-info"></p><p>当然也可以使用电脑里面的本地字体，打开设置找到字体可查看本地的字体哟： <img src="'+h+'" alt="pc-font"></p><h2 id="调试模式" tabindex="-1"><a class="header-anchor" href="#调试模式"><span>调试模式</span></a></h2><h3 id="进入开发模式" tabindex="-1"><a class="header-anchor" href="#进入开发模式"><span>进入开发模式</span></a></h3><p>【帮助】- 【切换开发人员工具 / Toggle Developer Tools】<br> 此步骤是为了<strong>看实际效果</strong>，可以跳过滴，不影响。 <img src="'+_+'" alt="into-debug"></p><p>开发人员工具界面：<br><img src="'+m+'" alt="debug-page"></p><p>找到 out/vs/workbench/workbench.desktop.main.css 文件。定位到控制字体的类中，mac的搜索 .mac，window 的搜索 .window ，如图所示。这里是设置的字体是整体的，想要细致一点的可以用前端调试的方式找到侧栏对应的类，再修改其中的文字。</p><p>你可以在这个文件上直接编辑，并在vsCode中实时预览效果！！！</p><p>我这里是修改的字体：&#39;Cascadia code&#39;,&#39;极影毁片圆 Medium&#39; 。</p><p>当然，你在这里保存是没用的，这并不会保存到文件系统中：</p><p><img src="'+g+'" alt="debug"></p><h3 id="替换字体" tabindex="-1"><a class="header-anchor" href="#替换字体"><span>替换字体</span></a></h3><p>在你的文件目录上找到这个文件并打开<br><img src="'+v+'" alt="replace"></p><p>文件目录：【你vscode安装位置/resources/app/out/vs/workbench/workbench.desktop.main.css】</p><p>通过搜索.windows 找到刚刚调试的地方，把心仪的字体放上去，应该长这个样子：<br><img src="'+b+'" alt="maincss"></p><p>保存成功（通常保存时候需要管理员权限才能保存）</p><p>重启vsCode即可。</p><p>大功告成。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><ol><li>准备字体并安装到本地电脑上。获取到字体的名称。</li><li>打开【你vscode安装位置/resources/app/out/vs/workbench/workbench.desktop.main.css】文件</li><li>定位到 .windows:lang(zh-Hans) / .windows，在font-family 加上你的字体名称。</li><li>保存并重启vsCode（通常保存时候需要管理员权限才能保存）。</li></ol><p>注意：这样搞了之后每次打开会弹出“<strong>Code 安装似乎损坏。请重新安装。</strong>”的提示，关掉不管就Ok，没有任何问题，每次vscode更新后以上改动会消失，重新弄一次即可。介意者慎用！！！</p><p><img src="'+E+'" alt="vscode-tips"></p><p>END</p>',31),w={href:"https://blog.csdn.net/weixin_39182097/article/details/135866991?spm=1001.2014.3001.5502",target:"_blank",rel:"noopener noreferrer"};function B(x,C){const t=s("PostInfo"),a=s("ExternalLinkIcon");return c(),p("div",null,[f,o(t),k,e("p",null,[e("a",w,[r("CSDN博客"),o(a)])])])}const A=n(u,[["render",B],["__file","vscode 修改默认字体（侧栏、顶栏、目录栏）.html.vue"]]),N=JSON.parse('{"path":"/blog/%E6%9D%82%E4%B8%83%E6%9D%82%E5%85%AB/vscode%20%E4%BF%AE%E6%94%B9%E9%BB%98%E8%AE%A4%E5%AD%97%E4%BD%93%EF%BC%88%E4%BE%A7%E6%A0%8F%E3%80%81%E9%A1%B6%E6%A0%8F%E3%80%81%E7%9B%AE%E5%BD%95%E6%A0%8F%EF%BC%89.html","title":"vscode 修改默认字体（侧栏、顶栏、目录栏）","lang":"zh-CN","frontmatter":{"title":"vscode 修改默认字体（侧栏、顶栏、目录栏）","date":"2024-02-18","tags":["vscode"],"author":"清咖","category":"杂七杂八"},"headers":[{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"准备字体：","slug":"准备字体","link":"#准备字体","children":[]},{"level":2,"title":"调试模式","slug":"调试模式","link":"#调试模式","children":[{"level":3,"title":"进入开发模式","slug":"进入开发模式","link":"#进入开发模式","children":[]},{"level":3,"title":"替换字体","slug":"替换字体","link":"#替换字体","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"updatedTime":1718853748000,"contributors":[{"name":"清咔","email":"874518796@qq.com","commits":4}]},"filePathRelative":"blog/杂七杂八/vscode 修改默认字体（侧栏、顶栏、目录栏）.md"}');export{A as comp,N as data};
