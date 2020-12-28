<template>
<div class="page">
    <div class="progress-bar-con">
        <div class="progress-bar"></div>
    </div>
    <div class="world">
        <div class="stage">
            <div class="house">
                <section class="wall wall-left"></section>
                <section class="wall wall-right"></section>
                <section class="wall wall-front wall-front-a">
                    <div class="wall-content">
                        <h2 class="wall-title">개표 시작</h2>
                    </div>
                </section>
                <section class="wall wall-front wall-front-b">
                    <div class="wall-content">
                        <h2 class="wall-title">1표</h2>
                    </div>
                </section>
                <section class="wall wall-front wall-front-c">
                    <div class="wall-content">
                        <h2 class="wall-title">2표</h2>
                    </div>
                </section>
                <section class="wall wall-front wall-front-d">
                    <div class="wall-content">
                        <h2 class="wall-title">3표</h2>
                    </div>
                </section>

            </div>
            <!--// house -->

            <!-- 캐릭터 놓이는 곳 -->

        </div>
        <!--// stage -->
    </div>

    <nuxt />
</div>

</template>


<script>
//import Character from '@/assets/js/Character.js';
//import Wall3d from '@/assets/js/wall3d.js';


export default {

}

</script>

<style scoped>
@import '~/assets/counting-page.css';
</style>