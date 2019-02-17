# 项目说明
- 这是一个基于vue2版本的工程，结合webpackage实现组件包的封装和使用。在这边可能没什么意义，但可以自己搭建一个npm服务器，将组件包放进去，就可以像常规组件，第三方插件一样使用和管理。
- 过程中参考了[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin.git)和[element](https://github.com/ElemeFE/element.git)
- 这边版本直接为2.0.0，是因为想大版本跟vue保持一致，而小版本就主要跟项目自身相关了。

# 项目的运行
1. 首先在github上获取代码：通过git命令` git clone https://github.com/wjx774326739/vue2-libs-demo.git`克隆仓库，或者直接下载代码压缩包;
2. 安装依赖包：`npm install `
3. 运行示例工程：`npm start`
4. 当前工程中，创建了一个子工程vue2-libs，代码在根目录下projects中。我将通过该子工程，实现对组件的封装和打包，最终得到一个.tgz格式的压缩文件。通过对该文件的引用，将实现类似于常规第三方库的引用和管理。
5. 当执行`npm run package:vue2-libs`时，将对子工程vue2-libs进行一系列的操作，包含代码的编、将编译后的代码打包成.tgz的压缩文件等。打包后的文件默认存放在根目录下的libs的同名文件夹中。因为我已通过该命令对这些操作进行整合，所以只要运行该命令便可。如果想对其中一些设置进行调整，该相应的命令便可。
6. 因为这些命令中使用了一些linux命令，因此如果在win环境下，建议使用 git bash（安装时需勾选相应的配置）等支持linux命令的终端运行。
7. 当想对vue2-libs中的组件进行调整，并在使用示例中查看时，在调整完组件内容后，运行`npm run package:vue2-libs`命令便可，会自动替换node_modules中的代码。
8. 因为.tgz压缩文件为二进制文件，git无法识别前后差异，因此谨慎提交打包后的.tgz文件，否则后期git日志文件可能变得很大。因此工程中的libs文件夹中的.tgz文件本人也不能保证时最新的，下载本工程后，最好执行`npm run package:vue2-libs`命令确保node_modules中的为最新代码。

# 项目部署
- 以开发模式编译部署整个示例工程：执行命令：`npm run build`
- 以生产模式模式编译部署整个示例工程：执行命令：`npm run build:prod`

# [vue2-libs更新日志](/projects/vue2-libs/changelog.md)

# [vue-libs-demo更新日志](/static/changelog.md)

# 组件说明：
- [v-shade](/src/app/components/shade-demo/readme.md)

# 指令说明
- [vPrismjs](/src/app/components/prismjs-demo/readme.md)