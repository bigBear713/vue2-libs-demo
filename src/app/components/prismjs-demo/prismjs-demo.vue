<template>
  <div>
    <span v-prismjs="{'vLanguage':'javascript'}">var data = 1;</span>
    <h3>普通样式</h3>var data = 1;
    <h3>以javascript高亮显示</h3>
    <span vPrismjs="{'vLanguage':'javascript'}">var data = 1;</span>
    <code v-prismjs="{'vLanguage':'javascript'}">var data = 1;</code>
    <pre v-prismjs="{'vLanguage':'javascript'}">var data = 1;</pre>
    <pre><code v-prismjs="{'vLanguage':'javascript'}">var data = 1;</code></pre>
    <h3>以css高亮显示</h3>
    <div v-prismjs="{'vLanguage':'css'}">{{ cssContent }}</div>
    <pre v-prismjs="{'vLanguage':'css'}"><code>{{ cssContent }}</code></pre>
    <h3>以scss高亮显示</h3>
    <pre>
    <code v-prismjs="{'vLanguage':'scss'}">
    {{ scssContent }}
    </code>
    </pre>
    <h3>以haml高亮显示</h3>
    <code v-prismjs="{'vLanguage':'haml'}">{{ hamlContent }}</code>
    <h3>以typescript高亮显示</h3>
    <pre>
        <code v-prismjs="{'vLanguage':'typescript'}">
            {{ typescriptContent }}
        </code>
    </pre>
  </div>
</template>
<script>
export default {
  name: "prismjs-demo",
  data() {
    return {
      hamlContent: `= ['hi', 'there', 'reader!'].join " "`,

      cssContent: `
            .ui-datatable table {
            border-collapse:collapse;
            width: 100% !important;
            table-layout: fixed;
            }
        `,

      scssContent: `
            $height:30px;
            .ui-datatable table {
                border-collapse:collapse;
                width: 100% !important;
                table-layout: fixed;
            }
        `,

      typescriptContent: `
            import { MenuItem } from './models';
            import { Component, OnInit } from '@angular/core';
            import { ActivatedRoute } from '@angular/router';

            @Component({
            selector: 'app-docs',
            templateUrl: './docs.component.html',
            styleUrls: ['./docs.component.scss']
            })
            export class DocsComponent implements OnInit {

            menuList = new Array<MenuItem>();

            constructor(
                private activatedRoute: ActivatedRoute,
            ) { }

            ngOnInit() {
                this.activatedRoute.data.subscribe(data => {
                this.menuList = data.config;
                });
            }

            }
        `
    };
  }
};
</script>
<style lang="scss" scoped>
</style>

