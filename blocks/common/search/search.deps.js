({
    shouldDeps : [
        'form',
        'events',
        {
            block: 'keyboard',
            elem: 'codes'
        },
        {
            block : 'input',
            mods : {
                type : 'search'
                // 'has-clear': true
            }
        },
        { elems : ['submit', 'open', 'close'] }
    ]
})
