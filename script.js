var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Test sur Vue !'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [{
                id: 0,
                text: 'faire des input'
            },
            {
                id: 1,
                text: 'faire une liste '
            },
            {
                id: 2,
                text: 'faire un formulaire '
            }
        ]
    }
})

new Vue({
    el: '#check',
    data: {
        checkedNames: []
    }
})

new Vue({
    el: 'selected',
    data: {
        selected: ''
    }
})

Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

new Vue({
    el: '#components-demo'
})