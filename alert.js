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
