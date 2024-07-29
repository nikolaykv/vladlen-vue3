const appOptObj = {
    data() {
        return {
            title: "Список дел",
            placeholderBind: "Введите название заметки",
            inputValue: "",
            notes: [
                'Заметка 1'
            ]
        }
    },

    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value;
        }
    },

}

Vue.createApp(appOptObj).mount('#app')