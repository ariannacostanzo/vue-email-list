
const {createApp} = Vue;

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

const app = createApp({
    data() {
        return {
            emails: [],
            isLoading: false,
        }
    },
    computed: {
        checkLoadingState() {
            if(this.emails.length === 10) {
                this.isLoading = false
            }
            return this.isLoading
        } 
    },
    methods: {
        getEmail() {
            axios.get(endpoint).then((res) => {this.emails.push(res.data.response)})
        }
    },
    created() {
        this.isLoading = true;
        for (let i = 0; i < 10; i++) {this.getEmail()}
        
    }

})


app.mount('#root')
