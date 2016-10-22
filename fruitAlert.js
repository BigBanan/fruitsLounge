// 作业 1
//
// 实现一个 GuaAlert 函数, 如下
    /*
    title 是 string
    message 是 string

    这个函数生成一个上课所说的弹窗插入页面
    弹窗包含 title 作为标题 和 message 作为信息
    还包含一个 OK 按钮
    点击 OK 按钮关闭弹窗
    */
var GuaAlert = function(title, message) {
    log('GuaAlert')
    var css = `
    <style class="modal-remove">
        .modal-mask {
            position: fixed;
            background: black;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            opacity: 0.8;
            color: white;
        }
        .modal-alert {
            width: 200px;
            margin: 0 auto;
            opacity: 1;
        }
        .modal-title {
            text-align: center;
            background: lightblue;
            font-size: 27px;
        }
        .modal-message {
            padding: 10px 5px;
            background: white;
        }
        .class-button-modal {
            width: 100%;
            height: 100%;
            font-size: 22px;
            border: 0;
        }
        .vertical-center {
            top: 50%;
            position: relative;
            transform:translateY(-50%)
        }
    </style>
    `
    $('head').append(css)

    var insertBody = `
        <div class="modal-container modal-remove">
            <div class="modal-mask"></div>
            <div class="modal-alert vertical-center">
                <div class="modal-title">
                    ${title}
                </div>
                <div class="modal-message">
                    ${message}
                </div>
                <div class="modal-control">
                    <button class="class-button-modal" type="button" name="button">ok</button>
                </div>
            </div>
        </div>
    `

    $('body').append(insertBody)
    $('.class-button-modal').on('click', function(){
        log('click ok')
        $('.modal-remove').remove()
    })
}

// 作业 2
//
    /*
    title 是 string
    message 是 string
    callback 是一个接受一个 bool 类型参数的函数

    这个函数生成一个上课所说的弹窗插入页面
    弹窗包含 title 作为标题 和 message 作为信息
    还包含一个 OK 按钮 和一个 Cancel 按钮
    点击 OK 按钮关闭弹窗, 调用 callback(true)
    点击 Cancel 按钮关闭弹窗, 调用 callback(false)
    */
var GuaAlert2 = function(title, message, callback) {
    log('GuaAlert2')
    var css = `
    <style class="modal-remove">
        .modal-mask {
            position: fixed;
            background: black;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            opacity: 0.8;
            color: white;
        }
        .modal-alert {
            width: 200px;
            margin: 0 auto;
            opacity: 1;
        }
        .modal-title {
            text-align: center;
            background: lightblue;
            font-size: 27px;
        }
        .modal-message {
            padding: 10px 5px;
            background: white;
        }
        .modal-control {
            /**********使 button 之间的 空格 不被显示出来***********/
            font-size: 0;
        }
        .class-button-modal {
            width: 50%;
            height: 100%;
            font-size: 22px;
            border: 0;
            margin: 0;
        }
        .vertical-center {
            top: 50%;
            position: relative;
            transform:translateY(-50%)
        }
    </style>
    `
    $('head').append(css)

    var insertBody = `
        <div class="modal-container modal-remove">
            <div class="modal-mask"></div>
            <div class="modal-alert vertical-center">
                <div class="modal-title">
                    ${title}
                </div>
                <div class="modal-message">
                    ${message}
                </div>
                <div class="modal-control">
                    <button class="class-button-modal" type="button" data-type="ok">Ok</button>
                    <button class="class-button-modal" type="button" data-type="cancel">Cancel</button>
                </div>
            </div>
        </div>
    `

    $('body').append(insertBody)
    $('.class-button-modal').on('click', function(){
        log('click ok')
        if ($(this).data('type') === 'ok') {
            callback(true)
        } else {
            callback(false)
        }

        $('.modal-remove').remove()
    })
}


// 作业 3
//
    /*
    title 是 string
    callback 是一个如下的函数
    function(clickOk, input) {
        // clickOk 是一个 bool 表明点击的是 OK 还是 Cancel
        // input 是 string
    }

    这个函数生成一个上课所说的弹窗插入页面
    弹窗包含 title 作为标题
    包含一个 input 让用户输入信息
    还包含一个 OK 按钮 和一个 Cancel 按钮
    点击 OK 按钮关闭弹窗, 调用 callback(true, 输入的内容)
    点击 Cancel 按钮关闭弹窗, 调用 callback(false)
    */
var GuaPrompt = function(title, callback) {
    log('GuaPrompt')
    var css = `
    <style class="modal-remove">
        .modal-mask {
            position: fixed;
            background: black;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            opacity: 0.8;
            color: white;
        }
        .modal-alert {
            width: 200px;
            margin: 0 auto;
            opacity: 1;
        }
        .modal-title {
            text-align: center;
            background: lightblue;
            font-size: 27px;
        }
        .modal-message {
            padding: 10px 5px;
            background: white;
        }
        .modal-input {
            width: 100%
        }
        .modal-control {
            /**********使 button 之间的 空格 不被显示出来***********/
            font-size: 0;
        }
        .class-button-modal {
            width: 50%;
            height: 100%;
            font-size: 22px;
            border: 0;
            margin: 0;
        }
        .vertical-center {
            top: 50%;
            position: relative;
            transform:translateY(-50%)
        }
    </style>
    `
    $('head').append(css)

    var insertBody = `
        <div class="modal-container modal-remove">
            <div class="modal-mask"></div>
            <div class="modal-alert vertical-center">
                <div class="modal-title">
                    ${title}
                </div>
                <div class="modal-message">
                    <input class="modal-input" type="text">
                </div>
                <div class="modal-control">
                    <button class="class-button-modal" type="button" data-type="ok">Ok</button>
                    <button class="class-button-modal" type="button" data-type="cancel">Cancel</button>
                </div>
            </div>
        </div>
    `

    $('body').append(insertBody)
    $('.class-button-modal').on('click', function(){
        log('click ok')
        if ($(this).data('type') === 'ok') {
            var input = $('.modal-input').val()
            callback(true, input)
        } else {
            callback(false)
        }
        $('.modal-remove').remove()
    })
}
//

// 作业 4
//
/*
    title 是 string
    actions 是一个包含 string 的数组
    callback 是一个如下的函数
    function(index) {
        // index 是下标, 具体如下
        // index 如果是 -1 表明用户点击了 cancel
    }

    这个函数生成一个弹窗页面
    弹窗包含 title 作为标题
    actions 里面的 string 作为标题生成按钮
    弹窗还包含一个 Cancel 按钮
    点击按钮的时候, 调用 callback(index)
    */
var templete = function(action, index) {
    var button = `<button class="class-button-action" type="button" data-index=${index}>${action}</button>`
    return button
}

var GuaActions = function(title, actions, callback) {
    log('GuaActions')
    var css = `
    <style class="modal-remove">
        .modal-mask {
            position: fixed;
            background: black;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            opacity: 0.8;
            color: white;
        }
        .modal-alert {
            width: 200px;
            margin: 0 auto;
            opacity: 1;
        }
        .modal-title {
            text-align: center;
            background: lightblue;
            font-size: 27px;
        }
        .modal-message {
            padding: 10px 5px;
            background: white;
        }
        .class-button-action {
            width: 100%;
            font-size: 22px;
            border: 1px;
            margin: 1px;
        }
        .modal-control {
            /**********使 button 之间的 空格 不被显示出来***********/
            font-size: 0;
        }
        .class-button-modal {
            width: 100%;
            height: 100%;
            font-size: 22px;
            border: 0;
            margin: 0;
        }
        .vertical-center {
            top: 50%;
            position: relative;
            transform:translateY(-50%)
        }
    </style>
    `
    $('head').append(css)

    var insertBody = `
        <div class="modal-container modal-remove">
            <div class="modal-mask"></div>
            <div class="modal-alert vertical-center">
                <div class="modal-title">
                    ${title}
                </div>
                <div class="modal-message">
                </div>
                <div class="modal-control">
                    <button class="class-button-modal" type="button" data-type="cancel">Cancel</button>
                </div>
            </div>
        </div>
    `
    $('body').append(insertBody)

    var t = templete(title, actions[i])
    for (var i = 0; i < actions.length; i++) {
        var t = templete(actions[i], i)
        $('.modal-message').append(t)
    }

    $('.class-button-action').on('click', function(){
        log('click action')
        var index = $(this).data('index')
        $('.modal-remove').remove()
        callback(index)
    })

    $('.class-button-modal').on('click', function(){
        log('click ok')
        $('.modal-remove').remove()
        callback(-1)
    })
}
