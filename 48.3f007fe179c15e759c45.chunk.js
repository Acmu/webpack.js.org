(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{342:function(n,s,a){"use strict";a.r(s),s.default='<p>从 webpack 4 开始，会根据你选择的 <a href="/concepts/mode/"><code>mode</code></a> 来执行不同的优化，\n不过所有的优化还是可以手动配置和重写。</p>\n<h2><code>optimization.minimize</code></h2>\n<p><code>boolean</code></p>\n<p>告知 webpack 使用 <a href="/plugins/terser-webpack-plugin/">TerserPlugin</a> 或其它在 <a href="#optimizationminimizer"><code>optimization.minimizer</code></a>\n定义的插件压缩 bundle。</p>\n<p><code>production</code> 模式下，这里默认是 <code>true</code>。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    minimize<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="tip">\n<p>了解 <a href="/concepts/mode/">mode</a> 工作机制。</p>\n</blockquote>\n<h2><code>optimization.minimizer</code></h2>\n<p><code>[TerserPlugin]</code> 或 <code>[function (compiler)]</code></p>\n<p>允许你通过提供一个或多个定制过的 <a href="/plugins/terser-webpack-plugin/">TerserPlugin</a> 实例，\n覆盖默认压缩工具(minimizer)。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> TerserPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'terser-webpack-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    minimizer<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        cache<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        parallel<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        sourceMap<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 如果在生产环境中使用 source-maps，必须设置为 true</span>\n        terserOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          <span class="token comment">// https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>或，使用函数的形式：</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    minimizer<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">(</span>compiler<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> TerserPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'terser-webpack-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">/* 你的选项 */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>compiler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2><code>optimization.splitChunks</code></h2>\n<p><code>object</code></p>\n<p>对于动态导入模块，默认使用 webpack v4+ 提供的全新的通用分块策略(common chunk strategy)。请在 <a href="/plugins/split-chunks-plugin/">SplitChunksPlugin</a>\n页面中查看配置其行为的可用选项。</p>\n<h2><code>optimization.runtimeChunk</code></h2>\n<p><code>object</code> <code>string</code> <code>boolean</code></p>\n<p>将 <code>optimization.runtimeChunk</code> 设置为 <code>true</code> 或 <code>"multiple"</code>，会为每个仅含有 runtime 的入口起点添加一个额外 chunk。\n此设置是如下设置的别名：</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    runtimeChunk<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      name<span class="token punctuation">:</span> entrypoint <span class="token operator">=></span> <span class="token template-string"><span class="token string">`runtime~</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>entrypoint<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>值 <code>"single"</code> 会创建一个在所有生成 chunk 之间共享的运行时文件。此设置是如下设置的别名：</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    runtimeChunk<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'runtime\'</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>通过将 <code>optimization.runtimeChunk</code> 设置为 <code>object</code>，对象中可以设置只有 <code>name</code> 属性，其中属性值可以是名称或者返回名称的函数，\n用于为 runtime chunks 命名。</p>\n<p>默认值是 <code>false</code>：每个入口 chunk 中直接嵌入 runtime。</p>\n<blockquote class="warning">\n<p>对于每个 runtime chunk，导入的模块会被分别初始化，因此如果你在同一个页面中引用多个入口起点，请注意此行为。你或许应该将其设置为 <code>single</code>，或者使用其他只有一个 runtime 实例的配置。</p>\n</blockquote>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    runtimeChunk<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      name<span class="token punctuation">:</span> entrypoint <span class="token operator">=></span> <span class="token template-string"><span class="token string">`runtimechunk~</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>entrypoint<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2><code>optimization.noEmitOnErrors</code></h2>\n<p><code>boolean</code></p>\n<p>在编译出错时，使用 <code>optimization.noEmitOnErrors</code> 来跳过生成阶段(emitting phase)。这可以确保没有生成出错误资源。而 stats 中所有 assets\n中的 <code>emitted</code> 标记都是 <code>false</code>。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    noEmitOnErrors<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="warning">\n<p>果你正在使用 webpack <a href="/api/cli/">CLI</a>，在此插件开启时，webpack 处理过程不会因为错误代码而退出。如果你希望在使用 CLI 时 webpack "失败(fail)"，\n请查看 <a href="/api/cli/#advanced-options"><code>bail</code> 选项</a>。</p>\n</blockquote>\n<h2><code>optimization.namedModules</code></h2>\n<p><code>boolean = false</code></p>\n<p>告知 webpack 使用可读取模块标识符(readable module identifiers)，来帮助更好地调试。webpack 配置中如果没有设置此选项，默认会在 <a href="/concepts/mode/">mode</a> <code>development</code> 启用，在 <a href="/concepts/mode/">mode</a> <code>production</code> 禁用。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    namedModules<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2><code>optimization.namedChunks</code></h2>\n<p><code>boolean = false</code></p>\n<p>告知 webpack 使用可读取 chunk 标识符(readable chunk identifiers)，来帮助更好地调试。webpack 配置中如果没有设置此选项，默认会在 <a href="/concepts/mode/">mode</a> <code>development</code> 启用，在 <a href="/concepts/mode/">mode</a> <code>production</code> 禁用。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    namedChunks<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2><code>optimization.moduleIds</code></h2>\n<p><code>boolean = false</code> <code>string: \'natural\' | \'named\' | \'deterministic\' | \'size\'</code></p>\n<p>告知 webpack 当选择模块 id 时需要使用哪种算法。将 <code>optimization.moduleIds</code> 设置为  <code>false</code> 会告知 webpack 没有任何内置的算法会被使用，但自定义的算法会由插件提供。<code>optimization.moduleIds</code> 的默认值是 <code>false</code>。</p>\n<p>下面的字符串值均被支持：</p>\n<table>\n<thead>\n<tr>\n<th>选荐值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><div class="title"><p>选荐值</p><p>描述</p></div>\n<div class="content"><p><code>natural</code><p class="description mobile">按使用顺序的数字 id。</p></p></div></td>\n<td class="description desktop">按使用顺序的数字 id。</td>\n</tr>\n<tr>\n<td><div class="title"><p>选荐值</p><p>描述</p></div>\n<div class="content"><p><code>named</code><p class="description mobile">对调试更友好的可读的 id。</p></p></div></td>\n<td class="description desktop">对调试更友好的可读的 id。</td>\n</tr>\n<tr>\n<td><div class="title"><p>选荐值</p><p>描述</p></div>\n<div class="content"><p><code>deterministic</code><p class="description mobile">被哈希转化成的小位数值模块名。</p></p></div></td>\n<td class="description desktop">被哈希转化成的小位数值模块名。</td>\n</tr>\n<tr>\n<td><div class="title"><p>选荐值</p><p>描述</p></div>\n<div class="content"><p><code>size</code><p class="description mobile">专注于让初始下载包大小更小的数字 id。</p></p></div></td>\n<td class="description desktop">专注于让初始下载包大小更小的数字 id。</td>\n</tr>\n</tbody>\n</table>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    moduleIds<span class="token punctuation">:</span> <span class="token string">\'hashed\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p><code>deterministic</code> 选项有益于长期缓存，但对比于 <code>hashed</code> 来说，它会导致更小的文件 bundles。数字值的长度会被选作用于填满最多80%的id空间。\n当  <code>optimization.moduleIds</code> 被设置成 <code>deterministic</code>，默认最小3位数字会被使用。\n要覆盖默认行为，要将 <code>optimization.moduleIds</code> 设置成 <code>false</code>，\n并且要使用 <code>webpack.ids.DeterministicModuleIdsPlugin</code>。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    moduleIds<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ids<span class="token punctuation">.</span>DeterministicModuleIdsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      maxLength<span class="token punctuation">:</span> <span class="token number">5</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="warning">\n<p><code>moduleIds: \'deterministic\'</code> 在 webpack 5 中被添加，而且 <code>moduleIds: \'hashed\'</code> 相应地会在 webpack 5 中废弃。</p>\n</blockquote>\n<blockquote class="warning">\n<p><code>moduleIds: total-size</code> 在 webpack 5 中被废弃。</p>\n</blockquote>\n<h2><code>optimization.chunkIds</code></h2>\n<p><code>boolean = false</code> <code>string: \'natural\' | \'named\' | \'size\' | \'total-size\' | \'deterministic\'</code></p>\n<p>告知 webpack 当选择模块 id 时需要使用哪种算法。将 <code>optimization.chunkIds</code> 设置为  <code>false</code> 会告知 webpack 没有任何内置的算法会被使用，但自定义的算法会由插件提供。<code>optimization.chunkIds</code> 的默认值是 <code>false</code>：</p>\n<ul>\n<li>如果 <a href="#optimizationoccurrenceorder"><code>optimization.occurrenceOrder</code></a> 被启用 <code>optimization.chunkIds</code> 会被设置成 <code>\'total-size\'</code></li>\n<li>不考虑上一条的条件，如果 <a href="#optimizationnamedchunks"><code>optimization.namedChunks</code></a> 被启用 <code>optimization.chunkIds</code> 会被设置成 <code>\'named\'</code></li>\n<li>如果环境是开发环境，那么 <code>optimization.chunkIds</code> 会被设置成 <code>\'named\'</code>,\n但当在生产环境中时，它会被设置成 <code>\'deterministic\'</code></li>\n<li>如果上述的条件都不符合, <code>optimization.chunkIds</code> 会被默认设置为 <code>\'natural\'</code></li>\n</ul>\n<p>下述选项字符串值均为被支持:</p>\n<table>\n<thead>\n<tr>\n<th>选项值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><div class="title"><p>选项值</p><p>描述</p></div>\n<div class="content"><p><code>\'natural\'</code><p class="description mobile">按使用顺序的数字 id。</p></p></div></td>\n<td class="description desktop">按使用顺序的数字 id。</td>\n</tr>\n<tr>\n<td><div class="title"><p>选项值</p><p>描述</p></div>\n<div class="content"><p><code>\'named\'</code><p class="description mobile">对调试更友好的可读的 id。</p></p></div></td>\n<td class="description desktop">对调试更友好的可读的 id。</td>\n</tr>\n<tr>\n<td><div class="title"><p>选项值</p><p>描述</p></div>\n<div class="content"><p><code>\'deterministic\'</code><p class="description mobile">在不同的编译中不变的短数字 id。有益于长期昏村。</p></p></div></td>\n<td class="description desktop">在不同的编译中不变的短数字 id。有益于长期昏村。</td>\n</tr>\n</tbody>\n</table>\n<p>在生产模式中会默认开启。\n<code>\'size\'</code>                | 专注于让初始下载包大小更小的数字 id。\n<code>\'total-size\'</code>          | 专注于让总下载包大小更小的数字 id。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    chunkIds<span class="token punctuation">:</span> <span class="token string">\'named\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>默认地，当 <code>optimization.chunkIds</code> 被设置为 <code>\'deterministic\'</code> 时，最少3位数字会被使用。要覆盖默认的行为，\n要将 <code>optimization.chunkIds</code> 设置为 <code>false</code>，同时要使用 <code>webpack.ids.DeterministicChunkIdsPlugin</code>。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    chunkIds<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ids<span class="token punctuation">.</span>DeterministicChunkIdsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      maxLength<span class="token punctuation">:</span> <span class="token number">5</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2><code>optimization.nodeEnv</code></h2>\n<p><code>boolean = false</code> <code>string</code></p>\n<p>告知 webpack 将 <code>process.env.NODE_ENV</code> 设置为一个给定字符串。如果 <code>optimization.nodeEnv</code> 不是 <code>false</code>，则会使用 <a href="/plugins/define-plugin/">DefinePlugin</a>，<code>optimization.nodeEnv</code> <strong>默认值</strong>取决于 <a href="/concepts/mode/">mode</a>，如果为 falsy 值，则会回退到 <code>"production"</code>。</p>\n<p>可能的值有：</p>\n<ul>\n<li>任何字符串：用于设置 <code>process.env.NODE_ENV</code> 的值。</li>\n<li>false：不修改/设置 <code>process.env.NODE_ENV</code>的值。</li>\n</ul>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    nodeEnv<span class="token punctuation">:</span> <span class="token string">\'production\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2><code>optimization.mangleWasmImports</code></h2>\n<p><code>boolean = false</code></p>\n<p>在设置为 <code>true</code> 时，告知 webpack 通过将导入修改为更短的字符串，来减少 WASM 大小。这会破坏模块和导出名称。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    mangleWasmImports<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2><code>optimization.removeAvailableModules</code></h2>\n<p><code>boolean = false</code></p>\n<p>如果模块已经包含在所有父级模块中，告知 webpack 从 chunk 中检测出这些模块，或移除这些模块。将 <code>optimization.removeAvailableModules</code> 设置为 <code>true</code> 以启用这项优化。在 <a href="/configuration/mode/"><code>生产</code> 模式</a> 中默认会被开启。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    removeAvailableModules<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<blockquote class="warning">\n<p><code>optimization.removeAvailableModules</code> 会削减了 webapck 的性能表现，而且将会在下一个主要发布版本中，在 <code>生产</code> 模式下会被禁用。\n如果你想获得额外的构建性能，请在 <code>生产</code> 模式中禁用它。</p>\n</blockquote>\n<h2><code>optimization.removeEmptyChunks</code></h2>\n<p><code>boolean = true</code></p>\n<p>如果 chunk 为空，告知 webpack 检测或移除这些 chunk。将 <code>optimization.removeEmptyChunks</code> 设置为 <code>false</code> 以禁用这项优化。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    removeEmptyChunks<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2><code>optimization.mergeDuplicateChunks</code></h2>\n<p><code>boolean = true</code></p>\n<p>告知 webpack 合并含有相同模块的 chunk。将 <code>optimization.mergeDuplicateChunks</code> 设置为 <code>false</code> 以禁用这项优化。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    mergeDuplicateChunks<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2><code>optimization.flagIncludedChunks</code></h2>\n<p><code>boolean</code></p>\n<p>告知 webpack 确定和标记出作为其他 chunk 子集的那些 chunk，其方式是在已经加载过较大的 chunk 之后，就不再去加载这些 chunk 子集。<code>optimization.flagIncludedChunks</code> 默认会在 <code>生产</code> <a href="/concepts/mode/">模式</a> 中启用，其他情况禁用。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    flagIncludedChunks<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2><code>optimization.occurrenceOrder</code></h2>\n<p><code>boolean</code></p>\n<p>告知 webpack 去确定那些会引致更小的初始化文件 bundle 的模块顺序。<code>optimization.occurrenceOrder</code>\n默认会在 <code>生产</code> <a href="/concepts/mode/">模式</a> 中启用，其他情况禁用。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    occurrenceOrder<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2><code>optimization.providedExports</code></h2>\n<p><code>boolean</code></p>\n<p>告知 webpack 去确定那些由模块提供的导出内容，为 <code>export * from ...</code> 生成更多高效的代码。\n默认 <code>optimization.providedExports</code> 会被启用。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    providedExports<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2><code>optimization.usedExports</code></h2>\n<p><code>boolean = true</code></p>\n<p>告知 webpack 去决定每个模块使用的导出内容。这取决于 <a href="#optimizationoccurrenceorder"><code>optimization.providedExports</code></a> 选项。由 <code>optimization.usedExports</code> 收集的信息会被其它优化手段或者代码生成使用，比如未使用的导出内容不会被生成，\n当所有的使用都适配，导出名称会被处理做单个标记字符。\n在压缩工具中的无用代码清除会受益于该选项，而且能够去除未使用的导出内容。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    usedExports<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2><code>optimization.concatenateModules</code></h2>\n<p><code>boolean</code></p>\n<p>告知 webpack 去寻找模块图形中的片段，哪些是可以安全地被合并到单一模块中。这取决于 <a href="#optimizationprovidedexports"><code>optimization.providedExports</code></a> 和 <a href="#optimizationusedexports"><code>optimization.usedExports</code></a>。\n默认 <code>optimization.concatenateModules</code> 在 <code>生产</code> <a href="/configuration/mode/">模式</a> 下被启用，而在其它情况下被禁用。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    concatenateModules<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2><code>optimization.sideEffects</code></h2>\n<p><code>boolean = true</code></p>\n<p>告知 webpack 去辨识 <code>package.json</code> 中的  <a href="https://github.com/webpack/webpack/blob/master/examples/side-effects/README.md"><code>副作用</code></a> 标记或规则，以跳过那些当导出不被使用且被标记不包含副作用的模块。</p>\n<p><strong>package.json</strong></p>\n<pre><code class="hljs language-json"><span class="token punctuation">{</span>\n  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"awesome npm module"</span><span class="token punctuation">,</span>\n  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>\n  <span class="token property">"sideEffects"</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span></code></pre>\n<blockquote class="tip">\n<p>请注意的是 <code>（副作用）sideEffects</code> 需要在 npm 模块的 <code>package.json</code> 文件中，但并不意味着你需要在你自己的引用那个大模块的项目中的\n<code>package.json</code> 中将 <code>sideEffects</code> 设置成 <code>false</code>。</p>\n</blockquote>\n<p><code>optimization.sideEffects</code> 取决于 <a href="#optimizationprovidedexports"><code>optimization.providedExports</code></a> 被设置成启用。这个依赖会有构建时间的损耗，但去掉模块会对性能有正面的影响，因为更少的代码被生成。该优化的效果取决于你的代码库，\n可以尝试这个特性以获取一些可能的性能优化。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    sideEffects<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2><code>optimization.portableRecords</code></h2>\n<p><code>boolean</code></p>\n<p><code>optimization.portableRecords</code> 告知 webpack 生成带有相对路径的记录(records)使得可以移动上下文目录。</p>\n<p>默认 <code>optimization.portableRecords</code> 被禁用。如果下列至少一个选项在 webpack 中被设置，该选项也会自动启用：<a href="/configuration/other-options/#recordspath"><code>recordsPath</code></a>, <a href="/configuration/other-options/#recordsinputpath"><code>recordsInputPath</code></a>,\n<a href="/configuration/other-options/#recordsoutputpath"><code>recordsOutputPath</code></a>。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    portableRecords<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2><code>optimization.mangleExports</code></h2>\n<p><code>boolean</code></p>\n<p><code>optimization.mangleExports</code> 允许控制导出处理(export mangling)。</p>\n<p>默认 <code>optimization.mangleExports</code> 会在 <code>生产</code> <a href="/configuration/mode/">模式下</a> 启用而其它情况会被禁用。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    mangleExports<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2><code>optimization.innerGraph</code></h2>\n<p><code>boolean = true</code></p>\n<p><code>optimization.innerGraph</code> 告知 webpack 是否对未使用的导出内容，实施内部图形分析(graph analysis)。</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    innerGraph<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n'}}]);