# webpack

- webpack
  - plugin和loader
    由于webpack 只能 打包commonjs的js文件，对于其他资源无法加载，所以需要loder
    loader 主要用来的资源加载处理不同的文件， 作用于一种文件， 也是对webpack的扩展， 但是只是转化文件
      style-loader 将css输入出到style标签里
      css-loader 处理@import 和 url()
      babel-loader 将其他语言转化为js语言和编译下一代js语言
      ts-loader  将其他语言转化为js语言和编译下一代js语言
      file-loader 可以复制和放置资源位置，并可以指定文件名模板
    plugin 直接作用于webpack， 是对webpack的一些扩展，相当给webpack添加功能可以,打包优化，资源管理和注入环境变量
  
  - 优化打包速度
    缩小编译范围，减少不必要的编译工作
    搭载 webpack-parallel-uglify-plugin 插件，这个过程可以倍速提升。我们都知道 node 是单线程的，但node能够fork子进程，基于此，webpack-parallel-uglify-plugin 能够把任务分解给多个子进程去并发的执行，子进程处理完后再把结果发送给主进程，从而实现并发编译，进而大幅提升js压缩速度
