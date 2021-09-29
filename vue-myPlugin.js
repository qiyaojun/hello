/*
* vue的插件库
* */

(function () {
    const MyPlugin = {}

    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
            console.log('vue函数对象的方法');
        }

        // 2. 添加全局资源
        Vue.directive('my-directive', function (el,binding) {
            el.textContent = binding.value.toUpperCase();
        })

        // // 3. 注入组件选项
        // Vue.mixin({
        //     created: function () {
        //         // 逻辑...
        //     }
        //     ...
        // })

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {
            // 逻辑...
            console.log('Vue实例对象的方法');
        }
    }

    window.MyPlugin = MyPlugin;
})()