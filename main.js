const {createApp} = Vue

let mouse1="photos/mouseover1.jpg";
let mouse2="photos/mouseover2.jpg";
const mouseoverPhotos=[mouse1,mouse2];

createApp({
    data(){
        return{
            mouseoverPhotos,
            photo:mouseoverPhotos[id],
        } 
    },
    methods:{
        updatePhoto(id){
            this.photo=this.mouseoverPhotos[id];
        },

        loadData(){
            fetch('files/places.json')
            .then( res => res.json())
            .then( data => this.places = data)
        },
    },
}).mount('#app')