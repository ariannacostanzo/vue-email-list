
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
                this.emails.push(email)
            })
        }
    },
    created() {
        for (let i = 0; i < 10; i++) {
            this.getEmail()
            
        }
        
    }


})


app.mount('#root')
