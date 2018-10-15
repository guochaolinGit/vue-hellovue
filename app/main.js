import Vue from "vue";
import FirstVue from "./components/FirstVue.vue";
new Vue({
	el:"#myDiv",
	data:{
		color : {
			r : 100,
			g : 100,
			b : 100
		}
	},
	components:{
		FirstVue
	}
})
