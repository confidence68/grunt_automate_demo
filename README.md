# grunt_automate_demo
grunt前端自动化部署，在线压缩合并js、css、images和html

前几天分享了[前端js和css的压缩合并之grunt][1]，然后并简单录制了一个小视频，之后不少朋友QQ留言，问有没有grunt深入地视频教程。哈哈，说实话，上次录制的视频很差，我是随便录制的，没有想到收到不少朋友的好评！好吧，我继续努力，今天有时间和大家继续分享一下grunt。

其实，grunt有很多很多插件，上次我也给大家讲了，grunt的应用，很大程度是grunt插件的应用！

上节课，我载入模块是这么写的！

      //载入concat和uglify插件，分别对于合并和压缩
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-cssmin');

本节课，我引用了matchdep这么一个模块，当然，这个模块是要在package.json中配置，关于package.json有哪些字段，请看这边博客！https://github.com/ericdum/mujiang.info/issues/6

这里面对package.json字段做了一些介绍。个人感觉还可以！

引用了这个模块之后，我们grunt载入插件紧要一句就可以了！如下：

      require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

其他的写法和上节课给大家介绍的差不多！

关于插件的字段介绍，我这里就不一一列举了，例如，html的压缩htmlmin，具体的字段可以查看：https://github.com/kangax/html-minifier#options-quick-reference

html解析的插件grunt-usemin的具体介绍请看：

https://www.npmjs.com/package/grunt-usemin

那关于图片压缩、imagemin的具体介绍请看：

https://www.npmjs.com/package/grunt-contrib-imagemin



  [1]: http://www.haorooms.com/post/qd_grunt_cssjs
