<template>
    <div class="container">
        <h1>Example Vue.js, jQuery & Bootstrap Application</h1>
        <h5>
            <i>A VSIX template for quick-start development with Vue.js, jQuery and Bootstrap.</i>
        </h5>
        <p>Click <router-link to="/home">here</router-link> to view the "readme" content.</p>
        <p>Click <router-link to="/other">here</router-link> to view the example form.</p>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>Router Output Panel</h4>
            </div>
            <div class="panel-body">
                <div class="router-output">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>