module.exports = {
    vueCompilerOptions:{
        // 设置白名单，忽略自定义元素
        isCustomElement: tag => tag === 'piechart'
    }
}