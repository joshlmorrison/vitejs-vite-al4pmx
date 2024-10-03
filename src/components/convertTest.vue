<template>
    <div class="card">
        <h4 class="card-header text-bg-primary">Convert back and forth</h4>
        <div class="card-body">
            <table class="table table-striped table-hover table-sm">
                <thead>
                    <tr>
                        <td>Weight Per Capsule</td>
                        <td>KG</td>
                        <td></td>
                        <td></td>
                        <td>Each</td>
                    </tr>
                </thead>
                <tbody>
                    <convertTestRow v-for="(row, index) in rows" :default-k-g="row.defaultKG" :default-weight-per-cap="row.defaultWeightPerCap" :default-each="row.defaultEach" :id="index"></convertTestRow>
                </tbody>
            </table>
        </div>
        <div class="card-footer">
            <button type="button" class="btn btn-primary" @click="addRow">Add Row</button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import convertTestRow from './convertTestRow.vue';
export default defineComponent({
    components: {
        convertTestRow
    },
    data() {
        return {
            rows: [
                {defaultKG: .094, defaultWeightPerCap: 94, defaultEach: 0}
            ]
        };
    },
    methods: {
        addRow() {
            if (this.rows.length) {
                let topRow = this.rows[this.rows.length - 1];
                this.rows.push({
                    defaultKG: topRow.defaultKG,
                    defaultWeightPerCap: topRow.defaultWeightPerCap,
                    defaultEach: topRow.defaultEach
                });
            }
        }
    },
});
</script>
