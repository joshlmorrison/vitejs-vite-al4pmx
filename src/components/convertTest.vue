<template>
    <div class="card">
        <h4 class="card-header text-bg-primary">Convert back and forth</h4>
        <div class="card-body">
            <div class="mb-3">
                <label for="weightPerCapsule" class="form-label">Weight Per Capsule:</label>
                <input type="number" class="form-control" id="weightPerCapsule" v-model="weightPerCapsule" />
            </div>
            <div class="mb-3">
                <label for="valueInKG" class="form-label">Weight in kg:</label>
                <input type="number" class="form-control" id="valueInKG" v-model="valueInKG" />
            </div>
            <div class="mb-3">
                <label for="valueInEach" class="form-label">Each:</label>
                <input type="number" class="form-control" id="valueInEach" v-model="valueInEach" />
            </div>
        </div>
        <div class="card-footer">
            <button type="button" class="btn btn-primary" @click="convertToKG">Convert each to KG</button>
            <button type="button" class="ms-1 btn btn-primary" @click="convertToEach">Convert KG to each</button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import converter from '../helpers/converter.ts';
const converterInstance = new converter();
export default defineComponent({
    data() {
        return {
            valueInKG: 0.094,
            weightPerCapsule: 94,
            valueInEach: 0
        };
    },
    methods: {
        convertToEach() {
            this.valueInEach = converterInstance.convertBack(this.valueInKG, {
                CP_WeightPerCapsuleShell: this.weightPerCapsule,
            });
        },
        convertToKG() {
            this.valueInKG = converterInstance.convert(this.valueInEach, {
                CP_WeightPerCapsuleShell: this.weightPerCapsule,
            });
        }
    },
});
</script>
