var log = function() {
    console.log.apply(console, arguments)
}

var templete = function(action, index) {
    // var button = `<button class="class-button-action" type="button" data-index=${index}>${action}</button>`
    var head = `<img class="img-head" src=${action} alt=/>`

    return head
}

var insertCss = function() {
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
}

var insertContainer = function(title) {
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
                    <button class="class-button-modal" type="button" data-type="cancel">Ok</button>
                </div>
            </div>
        </div>
    `
    $('body').append(insertBody)
}

var inputUsername = function() {
    var t = `
             <span class="loungeUsernameNote">Please input your name in here.</span>
             <input class="loungeUsername" type="text" name="name" value="">
             `
    $('.modal-message').append(t)
}


var GuaActions = function(title, actions, callback) {
    log('GuaActions')

    // insertCss()
    insertContainer(title)


    var t = templete(title, actions[i])
    for (var i = 0; i < actions.length; i++) {
        var path = 'profilePic/' + actions[i]
        var t = templete(path, i)
        $('.modal-message').append(t)
    }

    $(".class-button-modal").attr("disabled", true);

    $('.img-head').on('mouseover', function(){
        log('mouseover')
        $('.img-head').removeClass('img-head-i-border')
        $(this).addClass('img-head-i-border')
    })

    $('.img-head').on('click', function(){
        log('click')
        $('.img-head').unbind()
        window.userProfilePic = $(this).attr('src')
        $('.img-head').fadeOut()
        inputUsername()
        $('.loungeUsername').fadeIn(0)
        // $('.img-head').remove()
        $('.modal-title').text('Now,Please input your name.')

        $('.loungeUsernameNote').on('click', function(){
            log('keydown')
            $(this).remove()
            $('.loungeUsername').focus()
        })

        $('.loungeUsername').on('keyup',function(){
            var len = $(this).val().length
            if(len > 0) {
                $(".class-button-modal").attr("disabled", false);
            } else {
                $(".class-button-modal").attr("disabled", true);
            }
        })
    })

    $('.modal-control').on('click', function(){
        log('ok')
        window.username = $('.loungeUsername').val()
        $('.modal-remove').remove()
    })
}
