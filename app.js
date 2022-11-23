const app = Vue.createApp({
    data(){
        return {
            url: 'https://hafijur.vercel.app',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: "assets/1.jpg", isFav: true},
                { title: 'the way of kings', author: 'brandon sanderson', img: "assets/2.jpg", isFav: false},
                { title: 'the final empire', author: 'brandon sanderson', img: "assets/3.jpg", isFav: true}
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type);
            if(data){
                console.log(data);
            }
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
        // handleMousemove(e){
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        // }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')