(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{359:function(n,e,o){"use strict";o.r(e),e.default='<p>该索引列出了整个 webpack 生态系统中的常用术语。</p>\n<h2>A</h2>\n<ul>\n<li><a href="/guides/asset-management/"><strong>Asset</strong></a>: 资源是对图像、字体、媒体和任何其他类型文件的统称，通常用于网站和其他应用程序中。这些文件通常在 <a href="/glossary/#o">output</a> 中最终输出为单独的文件，但也可以通过诸如 <a href="/loaders/style-loader">style-loader</a> 或 <a href="/loaders/url-loader">url-loader</a>之类的方法内联。</li>\n</ul>\n<h2>B</h2>\n<ul>\n<li><a href="/guides/getting-started/#creating-a-bundle"><strong>Bundle</strong></a>: bundle 由许多不同的模块生成，包含已经经过加载和编译过程的源文件的最终版本。</li>\n<li><a href="/guides/code-splitting"><strong>Bundle Splitting</strong></a>: 这个过程提供了一种优化构建的方法，允许 webpack 为单个应用程序生成多个 bundle 文件。因此，可以将每个 bundle 文件与影响其他文件的更改进行分离，从而减少重新发布并由此被客户端重新下载的代码量，并且运用览器缓存。</li>\n</ul>\n<h2>C</h2>\n<ul>\n<li><strong>Chunk</strong>: 此 webpack 特定术语在内部用于管理捆绑过程。输出束（bundle）由块组成，其中有几种类型（例如 entry 和 child ）。通常，<em>块</em> 直接与 <em>输出束</em> (bundle）相对应，但是，有些配置不会产生一对一的关系。</li>\n<li><a href="/guides/code-splitting/"><strong>Code Splitting</strong></a>: 代码分离指将代码分成不同的包/块，然后可以按需加载，而不是加载包含所有内容的单个包。</li>\n<li><a href="/concepts/configuration/"><strong>Configuration</strong></a>: webpack 的配置文件是导出一个对象的 JavaScript 文件。 webpack 根据配置对象定义的属性进行解析。</li>\n</ul>\n<h2>D</h2>\n<ul>\n<li><a href="/concepts/dependency-graph"><strong>Dependency Graph</strong></a>: 任何时候，一个文件依赖于另一个文件，webpack 就把此视为文件之间有 <em>依赖关系</em> 。从这些入口起点开始，webpack 递归地构建一个依赖图，这个依赖图包含着应用程序所需的每个模块。</li>\n</ul>\n<h2>E</h2>\n<ul>\n<li><a href="/concepts/entry-points"><strong>Entry Point</strong></a>: 入口起点告诉 webpack 从哪里开始，并遵循着依赖图知道要打包哪些文件。您可以将应用程序的入口起点视为要捆绑的内容的 <em>根上下文</em>。</li>\n</ul>\n<h2>H</h2>\n<ul>\n<li><a href="/concepts/hot-module-replacement"><strong>Hot Module Replacement (HMR)</strong></a>：模块热替换功能会在应用程序运行过程中替换、添加或删除 <code>模块</code>，而无需重新加载整个页面。</li>\n</ul>\n<h2>L</h2>\n<ul>\n<li><a href="/concepts/loaders"><strong>Loaders</strong></a>: loader 用于对模块的源代码进行转换。loader 可以使你在 <code>require()</code> 或"加载"模块时预处理文件。类似于一个 “task-runner”。</li>\n<li><a href="/guides/lazy-loading"><strong>Lazy Loading</strong></a>: 对应用程序的部分（块）进行懒加载的过程。换句话说，只有我们在真正需要它们的时候才进行加载。</li>\n</ul>\n<h2>M</h2>\n<ul>\n<li><a href="/concepts/modules"><strong>Module</strong></a>: Module 是离散功能块，相比于完整程序提供了更小的接触面。精心编写的模块提供了可靠的抽象和封装界限，使得应用程序中每个模块都具有条理清楚的设计和明确的目的。</li>\n<li><a href="/concepts/module-resolution/"><strong>Module Resolution</strong></a>：一个模块可以作为另一个模块的依赖模块。resolver 是一个库(library)，用于帮助找到模块的绝对路径，并在 <code>resolve.modules</code> 中指定的所有目录中搜索该模块.</li>\n<li><a href="/concepts/manifest"><strong>Manifest</strong></a>: 当完成打包并发送到浏览器时，会在运行时通过 Manifest 来解析和加载模块。</li>\n</ul>\n<h2>O</h2>\n<ul>\n<li>\n<p><a href="/concepts/output"><strong>Output</strong></a>: 配置项指定将编译的文件输出到磁盘的位置。</p>\n<blockquote>\n<p><em>注意,即使可以存在多个入口起点，但只指定一个输出配置。</em></p>\n</blockquote>\n</li>\n</ul>\n<h2>P</h2>\n<ul>\n<li><a href="/concepts/plugins"><strong>Plugin</strong></a>: webpack 插件是一个具有 <code>apply</code> 属性的 JavaScript 对象。<code>apply</code> 属性会被 webpack compiler 调用，并且插件可在整个编译生命周期访问。这些包通常会以某种方式扩展编译功能。</li>\n</ul>\n<h2>R</h2>\n<ul>\n<li><a href="/guides/dependency-management/"><strong>Request</strong></a>: 指在 require/import 语句中的表达式，如在 <em>require("./template/" + name + ".ejs")</em> 中的请求是 <em>"./template/" + name + ".ejs"</em> 。</li>\n</ul>\n<h2>S</h2>\n<ul>\n<li><a href="/guides/scaffolding/"><strong>Scaffolding</strong></a>: 此功能允许使用可自定义的第三方初始化包创建 webpack 配置项。</li>\n<li><a href="/guides/shimming/"><strong>Shimming</strong></a>: 并非所有 JS 文件都可以直接与 webpack 一起使用。有些文件可能是不支持的模块格式，甚至不是任何模块格式。<code>shimming</code> 这时就会发挥作用。</li>\n</ul>\n<h2>T</h2>\n<ul>\n<li><a href="/configuration/target/"><strong>Target</strong></a>: 用户配置的部署目标 <a href="/configuration/target/">此处列出</a> 用于为特定环境编译，如浏览器、 NodeJS 或 Electron。</li>\n<li><a href="/guides/tree-shaking/"><strong>Tree Shaking</strong></a>: 删除未使用/多余的代码，或者更准确地说，实时代码导入。像 webpack 这样的编译器将通过分析各种 <code>import</code> 语句和导入代码的使用情况，来确定实际使用了依赖项的哪些部分来实现这一点，删除那些没有使用的 “树” 的部分。</li>\n</ul>\n<h2>V</h2>\n<ul>\n<li><a href="/concepts/entry-points/#separate-app-and-vendor-entries"><strong>Vendor Entry Point</strong></a>: 从 <code>app.js</code> 和 <code>vendors.js</code> 开始创建依赖图。这些依赖图完全是分开且独立的，允许使用 <code>CommonsChunkPlugin</code>，并将应用程序包的任何供应商（vendor）引用提取到你的供应商包中。有助于在 webpack 中实现一种称为 <a href="/guides/caching/">长期供应商缓存</a> 的常见模式。</li>\n</ul>\n<h2>W</h2>\n<ul>\n<li><a href="/"><strong>webpack</strong></a>: 一个用于现代 JavaScript 应用程序的高度可配置的 <a href="/concepts/modules">module</a> 打包工具。</li>\n</ul>\n'}}]);