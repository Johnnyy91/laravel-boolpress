<template>
  <div>

    <router-view></router-view>
  </div>
</template>

<script>



export default {
    name:'App',
    components: {

    },
    data(){
        return{
            NavbarLinks: [
                {
                    path:'/',
                    name:'Home'
                },
                {
                    path: '/posts',
                    name: 'Blog'
                },

            ]

        }
    }


}
</script>

<style>

</style>
