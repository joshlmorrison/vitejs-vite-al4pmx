<template>
    <tr>
        <td>
            <input type="number" class="form-control" v-model="weightPerCapsule" />
        </td>
        <td>
            <input type="number" class="form-control" v-model="valueInKG" />
        </td>
        <td>
            <button type="button" class="btn btn-primary btn-sm" @click="convertToEach">KG to each</button>
            <button type="button" class="ms-1 btn btn-primary btn-sm" @click="convertToKG">each to KG</button>
        </td>
        <td>
            <input type="number" class="form-control" v-model="valueInEach" />
        </td>
    </tr>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import converter from '../helpers/converter.ts';
const converterInstance = new converter();
export default defineComponent({
    props: {
        defaultKG: Number,
        defaultWeightPerCap: Number,
        defaultEach: Number
    },
    data() {
        return {
            valueInKG: this.defaultKG,
            weightPerCapsule: this.defaultWeightPerCap,
            valueInEach: this.defaultEach
        };
    },
    methods: {
        convertToEach() {
            if (this.valueInKG && this.weightPerCapsule) {
                this.valueInEach = converterInstance.convertBack(this.valueInKG, {
                    CP_WeightPerCapsuleShell: this.weightPerCapsule,
                });
            }
        },
        convertToKG() {
            if (this.valueInEach && this.weightPerCapsule) {
                this.valueInKG = converterInstance.convert(this.valueInEach, {
                    CP_WeightPerCapsuleShell: this.weightPerCapsule,
                });
            }
        }
    },
});
</script>
