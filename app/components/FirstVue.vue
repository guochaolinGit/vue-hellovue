<template>
	<div>{{chinesename}}<input type="range" min="0" max="255" v-model="color[colorname]"/>{{color[colorname]}}<input type="text" v-model="color[colorname]"/> </div>
</template>

<script>
	export default{
		props:['color','colorname','chinesename']
	}
	
</script>

<style>
</style>