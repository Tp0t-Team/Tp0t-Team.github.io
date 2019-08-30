let cmdList = [
    ['author', '关于作者'],
    [' CTF  ', '战队的 ctf 训练平台及一些靶场'],
    [' join ', '社团娱乐群'],
    [' info ', '社团介绍'],
    [' wiki ', '上个世纪写的面向新生写的 wiki，一年未更新（缺了点时效性了）'],
    ['honor ', '战队荣誉'],
    [' team ', '战队介绍'],
    [' reg  ', '社团报名']
]

let cmdFunc = {
    home() {
        return (
            'Welcome to Tp0t.\n' +
            '<span class="system">Welcome </span> 欢迎来到南理工网络空间安全协会官网\n' +
            '<span class="info">社团性质</span> 吃喝玩乐打比赛\n' +
            '<span class="warning">成立时间</span> 2018.9\n' +
            '<span class="error">HACK IT </span> hack for fun\n' +
            '输入 "help" 来获取已经支持的命令列表，可直接输入命令来执行相应功能哟'
        )
    },
    help() {
        return cmdList
            .map(
                (value) =>
                    `<span class="success">${value[0]}</span> ---> ${value[1]}`
            )
            .reduce((pre, cur) => pre + '\n' + cur)
    },
    author() {
        return 'v1.0 @Mio, 长亭的巨佬\n' + 'v2.0 @azurity, 啥都不会'
    },
    ctf() {
        return '由于[数据删除]的干扰，旧平台已过期，新的平台还在 coding(咕咕咕)，如果你看到[数据删除]，请叫他滚去写平台'
    },
    join() {
        return '<span class="success">Group</span> 欢迎大家来水群啦：832959425，感兴趣的同学务必加群哦'
    },
    info() {
        return cmdFunc.home()
    },
    wiki() {
        window.open(
            'http://104.224.167.8/dokuwiki/doku.php?id=start',
            'about:blank'
        )
        return ''
    },
    honor() {
        return 'coming soon...'
    },
    team() {
        let desp = [
            ['战队名称', 'system', 'Tp0t（取自 HTTP 协议 418 响应码)'],
            ['成立时间', 'info', '2017.4'],
            [
                '四个方向',
                'warning',
                'Web | Bin(二进制) | Misc(杂项) | Crypto(密码学)'
            ],
            [
                '两个分组',
                'error',
                'Web(现任组长 @Zenis) | 二进制(现任组长 @Mitheril)'
            ],
            ['欢迎加入', 'success', '']
        ]
        return desp
            .map(
                (value) =>
                    `<span class="${value[1]}">${value[0]}</span> ${value[2]}`
            )
            .reduce((pre, cur) => pre + '\n' + cur)
    },
    reg() {
        return 'coming soon...'
    }
}

Termpage.init(
    document.getElementById('window'),
    (command) => {
        command = command.toLowerCase().trim()
        let cmd = command.split(' ')[0]
        if (cmdFunc[cmd]) {
            return cmdFunc[cmd](command)
        } else {
            return 'Command not found'
        }
    },
    {
        prompt: '<span class="prompt">visitor@Tp0t:~$</span>',
        initialCommand: 'home',
        autoFocus: true
    }
)
