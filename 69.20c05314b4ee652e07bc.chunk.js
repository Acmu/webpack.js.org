(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{363:function(n,s,a){"use strict";a.r(s),s.default='<p>本指南包含一些改进构建/编译性能的实用技巧。</p>\n<hr>\n<h2>通用环境</h2>\n<p>无论你是在 <a href="/guides/development">开发环境</a> 还是在 <a href="/guides/production">生产环境</a> 下运行构建脚本，以下最佳实践都会有所帮助。</p>\n<h3>更新到最新版本</h3>\n<p>使用最新的 webpack 版本。我们会经常进行性能优化。webpack 的最新稳定版本是：</p>\n<p><a href="https://github.com/webpack/webpack/releases"><img src="https://img.shields.io/github/package-json/v/webpack/webpack.svg?label=webpack&#x26;style=flat-square&#x26;maxAge=3600" alt="latest webpack version"></a></p>\n<p>将 <strong>Node.js</strong> 更新到最新版本，也有助于提高性能。除此之外，将你的 package 管理工具（例如 <code>npm</code> 或者 <code>yarn</code>）更新到最新版本，也有助于提高性能。较新的版本能够建立更高效的模块树以及提高解析速度。</p>\n<h3>loader</h3>\n<p>将 loader 应用于最少数量的必要模块。而非如下:</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>通过使用 <code>include</code> 字段，仅将 loader 应用在实际需要将其转换的模块：</p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        include<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3>引导(bootstrap)</h3>\n<p>每个额外的 loader/plugin 都有其启动时间。尽量少地使用工具。</p>\n<h3>解析</h3>\n<p>以下步骤可以提高解析速度：</p>\n<ul>\n<li>减少 <code>resolve.modules</code>, <code>resolve.extensions</code>, <code>resolve.mainFiles</code>, <code>resolve.descriptionFiles</code> 中条目数量，因为他们会增加文件系统调用的次数。</li>\n<li>如果你不使用 symlinks（例如 <code>npm link</code> 或者 <code>yarn link</code>），可以设置 <code>resolve.symlinks: false</code>。</li>\n<li>如果你使用自定义 resolve plugin 规则，并且没有指定 context 上下文，可以设置 <code>resolve.cacheWithContext: false</code>。</li>\n</ul>\n<h3>dll</h3>\n<p>使用 <code>DllPlugin</code> 为更改不频繁的代码生成单独的编译结果。这可以提高应用程序的编译速度，尽管它增加了构建过程的复杂度。</p>\n<h3>小即是快(smaller = faster)</h3>\n<p>减少编译结果的整体大小，以提高构建性能。尽量保持 chunk 体积小。</p>\n<ul>\n<li>使用数量更少/体积更小的 library。</li>\n<li>在多页面应用程序中使用 <code>SplitChunksPlugin</code>。</li>\n<li>在多页面应用程序中使用 <code>SplitChunksPlugin</code>，并开启 <code>async</code> 模式。</li>\n<li>移除未引用代码。</li>\n<li>只编译你当前正在开发的那些代码。</li>\n</ul>\n<h3>worker 池(worker pool)</h3>\n<p><code>thread-loader</code> 可以将非常消耗资源的 loader 分流给一个 worker pool。</p>\n<blockquote class="warning">\n<p>不要使用太多的 worker，因为 Node.js 的 runtime 和 loader 都有启动开销。最小化 worker 和 main process(主进程) 之间的模块传输。进程间通讯(IPC, inter process communication)是非常消耗资源的。</p>\n</blockquote>\n<h3>持久化缓存</h3>\n<p>使用 <code>cache-loader</code> 启用持久化缓存。使用 <code>package.json</code> 中的 <code>"postinstall"</code> 清除缓存目录。</p>\n<blockquote class="tip">\n<p>我们支持 yarn PnP v3 <a href="https://next.yarnpkg.com/features/pnp"><code>yarn 2 berry</code></a>，来进行持久缓存</p>\n</blockquote>\n<h3>自定义 plugin/loader</h3>\n<p>Profile them to not introduce a performance problem here.</p>\n<h3>Progress plugin</h3>\n<p>It is possible to shorten build times by removing <code>ProgressPlugin</code> from webpack\'s configuration. Keep in mind, <code>ProgressPlugin</code> might not provide as much value for fast builds as well, so make sure you are leveraging the benefits of using it.</p>\n<hr>\n<h2>开发环境</h2>\n<p>以下步骤对于<em>开发环境</em>特别有帮助。</p>\n<h3>增量编译</h3>\n<p>使用 webpack 的 watch mode(监听模式)。而不使用其他工具来 watch 文件和调用 webpack 。内置的 watch mode 会记录时间戳并将此信息传递给 compilation 以使缓存失效。</p>\n<p>在某些配置环境中，watch mode 会回退到 poll mode(轮询模式)。监听许多文件会导致 CPU 大量负载。在这些情况下，可以使用 <code>watchOptions.poll</code> 来增加轮询的间隔时间。</p>\n<h3>在内存中编译</h3>\n<p>下面几个工具通过在内存中（而不是写入磁盘）编译和 serve 资源来提高性能：</p>\n<ul>\n<li><code>webpack-dev-server</code></li>\n<li><code>webpack-hot-middleware</code></li>\n<li><code>webpack-dev-middleware</code></li>\n</ul>\n<h3>stats.toJson 加速</h3>\n<p>webpack 4 默认使用 <code>stats.toJson()</code> 输出大量数据。除非在增量步骤中做必要的统计，否则请避免获取 <code>stats</code> 对象的部分内容。<code>webpack-dev-server</code> 在 v3.1.3 以后的版本，包含一个重要的性能修复，即最小化每个增量构建步骤中，从 <code>stats</code> 对象获取的数据量。</p>\n<h3>devtool</h3>\n<p>需要注意的是不同的 <code>devtool</code> 设置，会导致性能差异。</p>\n<ul>\n<li><code>"eval"</code> 具有最好的性能，但并不能帮助你转译代码。</li>\n<li>如果你能接受稍差一些的 map 质量，可以使用 <code>cheap-source-map</code> 变体配置来提高性能</li>\n<li>使用 <code>eval-source-map</code> 变体配置进行增量编译。</li>\n</ul>\n<p>=> 在大多数情况下，最佳选择是 <code>eval-cheap-module-source-map</code>。</p>\n<h3>避免在生产环境下才会用到的工具</h3>\n<p>某些 utility, plugin 和 loader 都只用于生产环境。例如，在开发环境下使用 <code>TerserPlugin</code> 来 minify(压缩) 和 mangle(混淆破坏) 代码是没有意义的。通常在开发环境下，应该排除以下这些工具：</p>\n<ul>\n<li><code>TerserPlugin</code></li>\n<li><code>ExtractTextPlugin</code></li>\n<li><code>[hash]</code>/<code>[chunkhash]</code></li>\n<li><code>AggressiveSplittingPlugin</code></li>\n<li><code>AggressiveMergingPlugin</code></li>\n<li><code>ModuleConcatenationPlugin</code></li>\n</ul>\n<h3>最小化 entry chunk</h3>\n<p>webpack 只会在文件系统中输出已经更新的 chunk。某些配置选项（HMR, <code>output.chunkFilename</code> 的 <code>[name]</code>/<code>[chunkhash]</code>, <code>[hash]</code>）来说，除了对已经更新的 chunk 无效之外，对于 entry chunk 也不会生效。</p>\n<p>确保在生成 entry chunk 时，尽量减少其体积以提高性能。下面的代码块将只提取包含 runtime 的 chunk，<em>其他 chunk 都作为其子 chunk</em>:</p>\n<pre><code class="hljs language-js"><span class="token keyword">new</span> <span class="token class-name">CommonsChunkPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'manifest\'</span><span class="token punctuation">,</span>\n  minChunks<span class="token punctuation">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h3>避免额外的优化步骤</h3>\n<p>webpack 通过执行额外的算法任务，来优化输出结果的体积和加载性能。这些优化适用于小型代码库，但是在大型代码库中却非常耗费性能：</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  optimization<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    removeAvailableModules<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    removeEmptyChunks<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    splitChunks<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3>输出结果不携带路径信息</h3>\n<p>webpack 会在输出的 bundle 中生成路径信息。然而，在打包数千个模块的项目中，这会导致造成垃圾回收性能压力。在 <code>options.output.pathinfo</code> 设置中关闭：</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    pathinfo<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3>Node.js 版本 8.9.10-9.11.1</h3>\n<p> Node.js v8.9.10 - v9.11.1 中的 ES2015 <code>Map</code> 和 <code>Set</code> 实现，存在 <a href="https://github.com/nodejs/node/issues/19769">性能回退</a>。webpack 大量地使用这些数据结构，因此这次回退也会影响编译时间。</p>\n<p>之前和之后的 Node.js 版本不受影响。</p>\n<h3>TypeScript loader</h3>\n<p>现在，<code>ts-loader</code> 已经开始使用 TypeScript 内置 watch mode API，可以明显减少每次迭代时重新构建的模块数量。<code>experimentalWatchApi</code> 与普通 TypeScript watch mode 共享同样的逻辑，并且在开发环境使用时非常稳定。此外开启 <code>transpileOnly</code>，用于真正快速增量构建。</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  test<span class="token punctuation">:</span> <span class="token regex">/\\.tsx?$/</span><span class="token punctuation">,</span>\n  use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      loader<span class="token punctuation">:</span> <span class="token string">\'ts-loader\'</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        transpileOnly<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        experimentalWatchApi<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>注意：<code>ts-loader</code> 文档建议使用 <code>cache-loader</code>，但是这实际上会由于使用硬盘写入而减缓增量构建速度。</p>\n<p>为了重新获得类型检查，请使用 <a href="https://www.npmjs.com/package/fork-ts-checker-webpack-plugin"><code>ForkTsCheckerWebpackPlugin</code></a>。</p>\n<p>ts-loader 的 github 仓库中有一个 <a href="https://github.com/TypeStrong/ts-loader/tree/master/examples/fork-ts-checker-webpack-plugin">完整示例</a>。</p>\n<hr>\n<h2>生产环境</h2>\n<p>以下步骤对于<em>生产环境</em>特别有帮助。</p>\n<blockquote class="warning">\n<p><strong>不要为了很小的性能收益，牺牲应用程序的质量！</strong>注意，在大多数情况下，优化代码质量比构建性能更重要。</p>\n</blockquote>\n<h3>多个 compilation 对象</h3>\n<p>在创建多个 compilation 时，以下工具可以帮助到你：</p>\n<ul>\n<li><a href="https://github.com/trivago/parallel-webpack"><code>parallel-webpack</code></a>：它允许在一个 worker 池中运行 compilation。</li>\n<li><code>cache-loader</code>：可以在多个 compilation 之间共享缓存。</li>\n</ul>\n<h3>source map</h3>\n<p>source map 相当消耗资源。你真的需要它们？</p>\n<hr>\n<h2>工具相关问题</h2>\n<p>下列工具存在某些可能会降低构建性能的问题：</p>\n<h3>Babel</h3>\n<ul>\n<li>最小化项目中的 preset/plugin 数量。</li>\n</ul>\n<h3>TypeScript</h3>\n<ul>\n<li>在单独的进程中使用 <code>fork-ts-checker-webpack-plugin</code> 进行类型检查。</li>\n<li>配置 loader 跳过类型检查。</li>\n<li>使用 <code>ts-loader</code> 时，设置 <code>happyPackMode: true</code> / <code>transpileOnly: true</code>。</li>\n</ul>\n<h3>Sass</h3>\n<ul>\n<li><code>node-sass</code> 中有个来自 Node.js 线程池的阻塞线程的 bug。 当使用 <code>thread-loader</code> 时，需要设置 <code>workerParallelJobs: 2</code>。</li>\n</ul>\n'}}]);