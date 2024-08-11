import{_ as t,r as o,o as p,c as i,a as n,b as s,d as c,e as a}from"./app-BBP9mw3F.js";const l={},r=a(`<h1 id="threejsobb" tabindex="-1"><a class="header-anchor" href="#threejsobb"><span>threejsOBB</span></a></h1><h2 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤"><span>使用步骤</span></a></h2><p><strong>1- 引入 OBB库</strong><br><code>import { OBB } from &#39;three/addons/math/OBB.js&#39;;</code></p><p><strong>2- setup OBB on geometry level（在geometry 上设置 obb）</strong><br> 在geometry 上设置 obb</p><div class="language-javaScript line-numbers-mode" data-ext="javaScript" data-title="javaScript"><pre class="language-javaScript"><code>const geometry = new THREE.BoxGeometry( size.x, size.y, size.z );
geometry.userData.obb = new OBB();
geometry.userData.obb.halfSize.copy( size ).multiplyScalar( 0.5 );

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3- 在物体上添加OBB</strong></p><p>使用上面的 geometry 创建mesh，并且关闭 <code>matrixAutoUpdate</code></p><div class="language-javaScript line-numbers-mode" data-ext="javaScript" data-title="javaScript"><pre class="language-javaScript"><code>// 创建物体
const object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0x00ff00 } ) );
// 关闭自动更新
object.matrixAutoUpdate = false;
// 在场景中添加物体
scene.add( object );
// 在物体上绑定OBB
object.userData.obb = new OBB();
// 收集物体
objects.push( object );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4- 在animate 中更新物体与obb</strong></p><div class="language-javaScript line-numbers-mode" data-ext="javaScript" data-title="javaScript"><pre class="language-javaScript"><code>function animate(){
    requestAnimationFrame( animate );
    // 控制器
    controls.update();
    // 时钟
    const delta = clock.getDelta();
    // 遍历收集的 objects
    for(let i = 0, il = objects.length; i &lt; il; i++){
        const object = objects[ i ];
        // 更新物体的 matrix
		object.updateMatrix();
		object.updateMatrixWorld();

        // update OBB
		object.userData.obb.copy( object.geometry.userData.obb );
		object.userData.obb.applyMatrix4( object.matrixWorld );

        // reset
        object.material.color.setHex( 0x00ff00 );
    }

    // collision detection 碰撞检测
    for ( let i = 0, il = objects.length; i &lt; il; i ++ ) {
        const object = objects[ i ];
		const obb = object.userData.obb;
        // 每个物体与其他物体进行碰撞检测
        for ( let j = i + 1, jl = objects.length; j &lt; jl; j ++ ) {
            const objectToTest = objects[ j ];
            const obbToTest = objectToTest.userData.obb;

            // now perform intersection test
            // 判断物体之间是否相交
            if ( obb.intersectsOBB( obbToTest ) === true ) {
                // 有相交的两个改变颜色
                object.material.color.setHex( 0xff0000 );
                objectToTest.material.color.setHex( 0xff0000 );
            }

        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),u={href:"https://threejs.org/examples/?q=obb#webgl_math_obb",target:"_blank",rel:"noopener noreferrer"},d=a(`<p>例子中还使用到一个 <code>obb.intersectRay</code> 的方法来判断射线与物体是否相交。</p><h2 id="更新obb的方式" tabindex="-1"><a class="header-anchor" href="#更新obb的方式"><span>更新OBB的方式</span></a></h2><p>看一下 OBB.js 库的声明文件，可以发现，其中<strong>更新OBB</strong>的方法有以下几种：</p><p><strong>手动设置:</strong><br><code>.set(center: Vector3, halfSize: Vector3, rotation: Matrix3)</code></p><p><strong>通过另外一个OBB设置：</strong><br><code>.copy(obb: OBB): this;</code></p><p><strong>还可以通过一个Box3设置：</strong><br><code>.fromBox3(box3: Box3): this;</code></p><h2 id="碰撞检测的方法" tabindex="-1"><a class="header-anchor" href="#碰撞检测的方法"><span>碰撞检测的方法</span></a></h2><p><strong>通过Box3检测(aabb)：</strong><br><code>intersectsBox3(box3: Box3): boolean;</code></p><p><strong>sphere球碰撞检测：</strong><br><code>intersectsSphere(sphere: Sphere): boolean;</code></p><p><strong>OBB与OBB的碰撞检测：</strong><br><code>intersectsOBB(obb: OBB, epsilon?: number): boolean;</code></p><p><strong>通过Plane平面检测：</strong><br><code>intersectsPlane(plane: Plane): boolean;</code></p><p><strong>obb与Ray射线检测：</strong><br><code>intersectsRay(ray: Ray): boolean;</code></p><p>对此的实现有兴趣可自行查看源码。</p><h2 id="特别注意" tabindex="-1"><a class="header-anchor" href="#特别注意"><span>特别注意</span></a></h2><p>因为是用改变材质颜色来判断是否相交，在一个案例中由于颜色没有使用Clone方法，导致触发相交的时候全部都变颜色了，还以为是因为外部引入的Gltf模型有问题，改模型、调整代码，调试了好久好久。。。<br> 最后拆分出来，一步一步反复测试，配合源码、官方例子，各种方法，才发现是这个问题。</p><p>细节决定成败</p><h2 id="附obb声明文件内容" tabindex="-1"><a class="header-anchor" href="#附obb声明文件内容"><span>附obb声明文件内容</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="OBB.d.ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Box3<span class="token punctuation">,</span> Matrix3<span class="token punctuation">,</span> Matrix4<span class="token punctuation">,</span> Plane<span class="token punctuation">,</span> Ray<span class="token punctuation">,</span> Sphere<span class="token punctuation">,</span> Vector3 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;three&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">OBB</span></span> <span class="token punctuation">{</span>
    center<span class="token operator">:</span> Vector3<span class="token punctuation">;</span>
    halfSize<span class="token operator">:</span> Vector3<span class="token punctuation">;</span>
    rotation<span class="token operator">:</span> Matrix3<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>center<span class="token operator">?</span><span class="token operator">:</span> Vector3<span class="token punctuation">,</span> halfSize<span class="token operator">?</span><span class="token operator">:</span> Vector3<span class="token punctuation">,</span> rotation<span class="token operator">?</span><span class="token operator">:</span> Matrix3<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">set</span><span class="token punctuation">(</span>center<span class="token operator">:</span> Vector3<span class="token punctuation">,</span> halfSize<span class="token operator">:</span> Vector3<span class="token punctuation">,</span> rotation<span class="token operator">:</span> Matrix3<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token function">copy</span><span class="token punctuation">(</span>obb<span class="token operator">:</span> <span class="token constant">OBB</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token function">getSize</span><span class="token punctuation">(</span>result<span class="token operator">:</span> Vector3<span class="token punctuation">)</span><span class="token operator">:</span> Vector3<span class="token punctuation">;</span>
    <span class="token function">clampPoint</span><span class="token punctuation">(</span>point<span class="token operator">:</span> Vector3<span class="token punctuation">,</span> result<span class="token operator">:</span> Vector3<span class="token punctuation">)</span><span class="token operator">:</span> Vector3<span class="token punctuation">;</span>
    <span class="token function">containsPoint</span><span class="token punctuation">(</span>point<span class="token operator">:</span> Vector3<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token function">intersectsBox3</span><span class="token punctuation">(</span>box3<span class="token operator">:</span> Box3<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token function">intersectsSphere</span><span class="token punctuation">(</span>sphere<span class="token operator">:</span> Sphere<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token function">intersectsOBB</span><span class="token punctuation">(</span>obb<span class="token operator">:</span> <span class="token constant">OBB</span><span class="token punctuation">,</span> epsilon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token function">intersectsPlane</span><span class="token punctuation">(</span>plane<span class="token operator">:</span> Plane<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token function">intersectRay</span><span class="token punctuation">(</span>ray<span class="token operator">:</span> Ray<span class="token punctuation">,</span> result<span class="token operator">:</span> Vector3<span class="token punctuation">)</span><span class="token operator">:</span> Vector3 <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token function">intersectsRay</span><span class="token punctuation">(</span>ray<span class="token operator">:</span> Ray<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token function">fromBox3</span><span class="token punctuation">(</span>box3<span class="token operator">:</span> Box3<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token function">equals</span><span class="token punctuation">(</span>obb<span class="token operator">:</span> <span class="token constant">OBB</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token function">applyMatrix4</span><span class="token punctuation">(</span>matrix<span class="token operator">:</span> Matrix4<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function b(v,k){const e=o("ExternalLinkIcon");return p(),i("div",null,[r,n("p",null,[s("以上是threejs官网提供的例子 "),n("a",u,[s("math / obb"),c(e)])]),d])}const h=t(l,[["render",b],["__file","threejsOBB-碰撞检测.html.vue"]]),B=JSON.parse('{"path":"/blog/ThreeJs/threejsOBB-%E7%A2%B0%E6%92%9E%E6%A3%80%E6%B5%8B/threejsOBB-%E7%A2%B0%E6%92%9E%E6%A3%80%E6%B5%8B.html","title":"threejsOBB-碰撞检测","lang":"zh-CN","frontmatter":{"title":"threejsOBB-碰撞检测","date":"2024-08-11","tags":["threejs","OBB"],"author":"清咖","category":"ThreeJs"},"headers":[{"level":2,"title":"使用步骤","slug":"使用步骤","link":"#使用步骤","children":[]},{"level":2,"title":"更新OBB的方式","slug":"更新obb的方式","link":"#更新obb的方式","children":[]},{"level":2,"title":"碰撞检测的方法","slug":"碰撞检测的方法","link":"#碰撞检测的方法","children":[]},{"level":2,"title":"特别注意","slug":"特别注意","link":"#特别注意","children":[]},{"level":2,"title":"附obb声明文件内容","slug":"附obb声明文件内容","link":"#附obb声明文件内容","children":[]}],"git":{"updatedTime":1723391243000,"contributors":[{"name":"清咔","email":"874518796@qq.com","commits":1}]},"filePathRelative":"blog/ThreeJs/threejsOBB-碰撞检测/threejsOBB-碰撞检测.md"}');export{h as comp,B as data};
