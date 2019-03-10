import { SCROLL_DIRECTION } from "./classes";
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
/** v-perfect-scrollbar组件的功能服务。
 * 其中部分方法的实现参考了zefoy大神的代码（https://github.com/zefoy/ngx-perfect-scrollbar.git）
 *
 */
export const VPerfectScrollbarService = (function () {
    function VPerfectScrollbarService() { }

    /** 滚动动画,流畅地滚动组件中的内容
     *
     *
     * @params {*} instance 滚动条实例
     * @params {SCROLL_DIRECTION} target 要执行的操作
     * @params {number} value 滚动的距离值（以px为单位）
     * @params {number} [speed] 滚动速度
     * @memberof VPerfectScrollbarService
     */
    VPerfectScrollbarService.prototype.animateScrolling = function (instance, target, value, speed) {
        if (!instance) {
            return;
        }
        let animation = null;
        this.requestAnimationFrame(instance, animation, target, value, speed);
    };

    /** 销毁滚动条实例
     *
     *
     * @params {*} instance 滚动条实例
     * @memberof VPerfectScrollbarService
     */
    VPerfectScrollbarService.prototype.destroyPerfectScrollbar = function (instance) {
        if (instance) {
            instance.destroy();
        }
    };

    /** 初始化滚动条
     *
     *
     * @params {HTMLElement} el 要添加滚动条的html元素
     * @params {Object} options 滚动条配置
     * @params {*} [instance] 滚动条实例
     * @returnses {*}
     * @memberof VPerfectScrollbarService
     */
    VPerfectScrollbarService.prototype.initPerfectScrollbar = function (el, options, instance) {
        this.destroyPerfectScrollbar(instance);
        instance = new PerfectScrollbar(el, options);
        return instance;
    };

    /** animateScrolling()的内部实现
     *
     *
     * @params {*} instance 滚动条实例
     * @params {number} animation 
     * @params {SCROLL_DIRECTION} target 目标
     * @params {number} value 值
     * @params {number} [speed] 滚动速度
     * @returnses {number}
     * @memberof VPerfectScrollbarService
     */
    VPerfectScrollbarService.prototype.requestAnimationFrame = function (instance, animation, target, value, speed) {
        if (!instance) {
            return;
        }
        const htmlElement = instance.element;
        if (animation) {
            window.cancelAnimationFrame(animation);
            animation = null;
        }

        if (!speed || typeof window === 'undefined') {
            htmlElement[target] = value;
        } else if (value !== htmlElement[target]) {
            let newValue = 0;
            let scrollCount = 0;

            let oldTimestamp = performance.now();
            let oldValue = htmlElement[target];

            const cosParameter = (oldValue - value) / 2;

            const step = (newTimestamp) => {
                scrollCount += Math.PI / (speed / (newTimestamp - oldTimestamp));

                newValue = Math.round(value + cosParameter + cosParameter * Math.cos(scrollCount));

                // Only continue animation if scroll position has not changed
                if (htmlElement[target] === oldValue) {
                    if (scrollCount >= Math.PI) {
                        animation = this.requestAnimationFrame(instance, animation, target, value, 0);
                    } else {
                        htmlElement[target] = newValue;

                        // On a zoomed out page the resulting offset may differ
                        oldValue = htmlElement[target];

                        oldTimestamp = newTimestamp;

                        animation = window.requestAnimationFrame(step);
                    }
                }
            };

            window.requestAnimationFrame(step);
        }

        return animation;
    };

    /** 将内容滚动到指定位置
     *
     *
     * @params {*} instance 滚动条实例
     * @params {number} x x轴方向滚动多长距离（以px为单位）
     * @params {number} [y] y轴方向滚动多长距离（以px为单位）
     * @params {number} [speed] 滚动速度
     * @memberof VPerfectScrollbarService
     */
    VPerfectScrollbarService.prototype.scrollTo = function (instance, x, y, speed) {
        if (y == null && speed == null) {
            this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_TOP, x, speed);
        } else {
            if (x != null) {
                this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_LEFT, x, speed);
            }
            if (y != null) {
                this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_TOP, y, speed);
            }
        }
    };

    /** 将内容滚动到底部指定位置（以px为单位）
     *
     *
     * @params {*} instance 滚动条实例
     * @params {number} [offset] y轴方向偏移底部多长距离（以px为单位）
     * @params {number} [speed] 滚动速度
     * @memberof VPerfectScrollbarService
     */
    VPerfectScrollbarService.prototype.scrollToBottom = function (instance, offset, speed) {
        const htmlElement = instance.element;
        const top = htmlElement.scrollHeight - htmlElement.clientHeight;
        this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_TOP, top - (offset || 0), speed);
    };

    /** 滚动到指定dom元素的位置
     *
     *
     * @params {*} instance 滚动条实例
     * @params {string} qs 指定元素的选择器
     * @params {number} [offsetX] x轴偏移量（以px为单位）
     * @params {number} [offsetY] y轴偏移量（以px为单位）
     * @params {number} [speed] 滚动速度
     * @memberof NgSipsdPerfectScrollbarComponent
     */
    VPerfectScrollbarService.prototype.scrollToElement = function (instance, qs, offsetX, offsetY, speed) {
        const htmlElement = instance.element;
        const element = htmlElement.querySelector(qs);

        if (element) {
            const elementPos = element.getBoundingClientRect();
            const scrollerPos = htmlElement.getBoundingClientRect();

            if (htmlElement.classList.contains('ps--active-x')) {
                const currentPos = htmlElement[SCROLL_DIRECTION.SCROLL_LEFT];
                const position = elementPos.left - scrollerPos.left + currentPos;
                this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_LEFT, position + (offsetX || 0), speed);
            }

            if (htmlElement.classList.contains('ps--active-y')) {
                const currentPos = htmlElement[SCROLL_DIRECTION.SCROLL_TOP];
                const position = elementPos.top - scrollerPos.top + currentPos;
                this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_TOP, position + (offsetY || 0), speed);
            }
        }
    };

    /** 将内容滚动到左边指定位置（以px为单位）
     *
     *
     * @params {*} instance 滚动条实例
     * @params {number} [offset] x轴方向偏移左边多长距离
     * @params {number} [speed] 滚动速度
     * @memberof VPerfectScrollbarService
     */
    VPerfectScrollbarService.prototype.scrollToLeft = function (instance, offset, speed) {
        this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_LEFT, (offset || 0), speed);
    };

    /** 将内容滚动到右边指定位置（以px为单位）
     *
     *
     * @params {*} instance 滚动条实例
     * @params {number} [offset] x轴方向偏移右边多长距离（以px为单位）
     * @params {number} [speed] 滚动速度
     * @memberof VPerfectScrollbarService
     */
    VPerfectScrollbarService.prototype.scrollToRight = function (instance, offset, speed) {
        const htmlELement = instance.element;
        const left = htmlELement.scrollWidth - htmlELement.clientWidth;
        this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_LEFT, left - (offset || 0), speed);
    };

    /** 将内容滚动到顶部指定位置（以px为单位）
     *
     *
     * @params {*} instance 滚动条实例
     * @params {number} [offset] y轴方向偏移顶部多长的距离（以px为单位）
     * @params {number} [speed] 滚动速度
     * @memberof VPerfectScrollbarService
     */
    VPerfectScrollbarService.prototype.scrollToTop = function (instance, offset, speed) {
        this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_TOP, (offset || 0), speed);
    };

    /** 将内容在x轴方向滚动到指定位置（以px为单位）
     *
     *
     * @params {*} instance 滚动条实例
     * @params {number} x x轴方向滚动多长距离（以px为单位）
     * @params {number} [speed] 滚动速度
     * @memberof VPerfectScrollbarService
     */
    VPerfectScrollbarService.prototype.scrollToX = function (instance, x, speed) {
        this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_LEFT, x, speed);
    };

    /** 将内容在y轴方向滚动到指定位置（以px为单位）
     *
     *
     * @params {*} instance 滚动条实例
     * @params {number} y y轴方向滚动多长距离（以px为单位）
     * @params {number} [speed] [speed] 滚动速度
     * @memberof VPerfectScrollbarService
     */
    VPerfectScrollbarService.prototype.scrollToY = function (instance, y, speed) {
        this.animateScrolling(instance, SCROLL_DIRECTION.SCROLL_TOP, y, speed);
    };
    return VPerfectScrollbarService;
}());
