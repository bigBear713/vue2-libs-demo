export const EventListenService = (function () {
    function EventListenService() { }

    /** 监听鼠标单击事件
     *
     *
     * @param {*} target 要进行事件监听的目标
     * @param {*} listen 是否监听，false时会将监听的事件移除
     * @param {*} callFunc 大小改变时（listen=true）要触发的事件，或者不监听时（listen=false）要移除的函数
     */
    EventListenService.prototype.click = function (target, listen, callFunc) {
        const eventName = 'click';
        this.listenEvent(target, eventName, listen, callFunc);
    };
    /** 监听事件
     *
     * @param {*} target 要进行事件监听的目标
     * @param {*} eventName 监听事件名
     * @param {*} listen 是否监听，false时会将监听的事件移除
     * @param {*} callFunc 大小改变时（listen=true）要触发的事件，或者不监听时（listen=false）要移除的函数
     */
    EventListenService.prototype.listenEvent = function (target, eventName, listen, callFunc) {
        if (true === listen) {
            target.addEventListener(eventName, callFunc);
        } else {
            target.removeEventListener(eventName, callFunc);
        }
    };
    /** 监听鼠标进入事件
     *
     *
     * @param {*} target 要进行事件监听的目标
     * @param {*} listen 是否监听，false时会将监听的事件移除
     * @param {*} callFunc 大小改变时（listen=true）要触发的事件，或者不监听时（listen=false）要移除的函数
     */
    EventListenService.prototype.mouseenter = function (target, listen, callFunc) {
        const eventName = 'mouseenter';
        this.listenEvent(target, eventName, listen, callFunc);
    };
    /** 监听鼠标离开事件
     *
     *
     * @param {*} target 要进行事件监听的目标
     * @param {*} listen 是否监听，false时会将监听的事件移除
     * @param {*} callFunc 大小改变时（listen=true）要触发的事件，或者不监听时（listen=false）要移除的函数
     */
    EventListenService.prototype.mouseleave = function (target, listen, callFunc) {
        const eventName = 'mouseleave';
        this.listenEvent(target, eventName, listen, callFunc);
    };
    /** 监听鼠标移动事件
     *
     *
     * @param {*} target 要进行事件监听的目标
     * @param {*} listen 是否监听，false时会将监听的事件移除
     * @param {*} callFunc 大小改变时（listen=true）要触发的事件，或者不监听时（listen=false）要移除的函数
     */
    EventListenService.prototype.mousemove = function (target, listen, callFunc) {
        const eventName = 'mousemove';
        this.listenEvent(target, eventName, listen, callFunc);
    };
    /** 监听鼠标松开事件
     *
     *
     * @param {*} target 要进行事件监听的目标
     * @param {*} listen 是否监听，false时会将监听的事件移除
     * @param {*} callFunc 大小改变时（listen=true）要触发的事件，或者不监听时（listen=false）要移除的函数
     */
    EventListenService.prototype.mouseup = function (target, listen, callFunc) {
        const eventName = 'mouseup';
        this.listenEvent(target, eventName, listen, callFunc);
    };
    /** 监听大小改变
     *
     * @param {*} target 要进行事件监听的目标
     * @param {*} listen 是否监听，false时会将监听的事件移除
     * @param {*} callFunc 大小改变时（listen=true）要触发的事件，或者不监听时（listen=false）要移除的函数
     */
    EventListenService.prototype.resize = function (target, listen, callFunc) {
        const eventName = 'resize';
        this.listenEvent(target, eventName, listen, callFunc);
    };

    return EventListenService;
}());