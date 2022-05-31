// 监控键盘
document.addEventListener('keydown', function (event) {
    // 获取Dom元素
    let Options = document.querySelectorAll(".select-tip");    // 选项
    let Pre = document.querySelector(".pre");                  // 上一题
    let Next = document.querySelector(".next");                // 下一题
    let Submit = document.querySelector('.sub-btn');           // 提交

    switch (event.key) {
        case '1':
            dispatch(Options[0], 'click');
            break;
        case '2':
            dispatch(Options[1], 'click');
            break;
        case '3':
            dispatch(Options[2], 'click');
            break;
        case '4':
            dispatch(Options[3], 'click');
            break;
        case '5':
            dispatch(Options[4], 'click');
            break;
        case 'ArrowRight':
            dispatch(Next, 'click');
            break;
        case 'ArrowLeft':
            dispatch(Pre, 'click');
            break;
        case 'Enter':
            if(Submit != null) {
                dispatch(Submit, 'click');
            } else {
                dispatch(Next, 'click');
            }
            break;
        default:
            console.log('快捷键未绑定');
            break;
    }

});

/**
 * 模拟事件
 * @param {Element} element
 * @param {String} eventName
 */
function dispatch(el, type) {
    try {
        const evt = document.createEvent('MouseEvent')
        evt.initEvent(type, true, true);
        el.dispatchEvent(evt);
    } catch (e) {
        alert(e)
    };
}