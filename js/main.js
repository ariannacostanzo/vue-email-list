
const {createApp} = Vue;

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

const app = createApp({
    data() {
        return {
            emails: [],
        }
    },
    methods: {
        getEmail() {
            axios.get(endpoint).then((res) => {this.emails.push(res.data.response)})
        }
    },
    created() {
        for (let i = 0; i < 10; i++) {
            this.getEmail()
        }
    }
})

app.mount('#root')


