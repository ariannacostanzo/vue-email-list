
const {createApp} = Vue;

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

const app = createApp({
    data() {
        return {
            emails: []
        }
    },
    methods: {
        getEmail() {
            axios.get(endpoint).then((res) => {
                const email = res.data.response
                console.log(email)
            })
        }
    },
    created() {
        this.getEmail()
    }


})


app.mount('#root')
