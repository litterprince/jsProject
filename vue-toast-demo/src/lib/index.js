import vueToast from './vue-toast-demo.vue'
let Toast = {};
Toast.install = function (Vue, options) {
    var duration = 3000;
    Vue.prototype.$toast = function (message, options) {
        var Profile = Vue.extend(vueToast);
        var vm = new Profile().$mount(document.createElement('div'));
        document.body.appendChild(vm.$el);

        vm.message = message;
        vm.visible = true;

        setTimeout(function () {
            vm.visible = false;
            setTimeout(function () {
                document.body.removeChild(vm.$el);
            }, 300);//动画需要0.3s结束
        }, duration);
    };

    Vue.prototype.$toast.show = function (message, options) {
        Vue.prototype.$toast(message, options);
    };
};
if(window.Vue){
    Vue.use(Toast);
}