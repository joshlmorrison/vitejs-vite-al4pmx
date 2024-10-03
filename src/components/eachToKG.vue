<template>
    <div class="card">
        <h4 class="card-header text-bg-primary">Each to KG</h4>
        <div class="card-body">
            <div class="mb-3">
                <label for="weightPerCapsule" class="form-label">Weight Per Capsule:</label>
                <input type="number" class="form-control" id="weightPerCapsule" v-model="weightPerCapsule" />
            </div>
            <div class="mb-3">
                <label for="startingValue" class="form-label">Weight in kg:</label>
                <input type="number" class="form-control" id="startingValue" v-model="startingValueInKG" />
            </div>
            <div class="alert" :class="alertClass">
                <p>Converted Value: {{ valueInEach }} ea</p>
                <p>Converted Back: {{ valueConvertedBackToKG }} kg</p>
                <strong>{{ summary }}</strong>
            </div>
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
            startingValueInKG: 0.094,
            weightPerCapsule: 94,
        };
    },
    computed: {
        valueInEach() {
            return converterInstance.convertBack(this.startingValueInKG, {
                CP_WeightPerCapsuleShell: this.weightPerCapsule,
            });
        },
        valueConvertedBackToKG() {
            return converterInstance.convert(this.valueInEach, {
                CP_WeightPerCapsuleShell: this.weightPerCapsule,
            });
        },
        alertClass() {
            if (this.startingValueInKG == this.valueConvertedBackToKG) {
                return 'alert-success';
            }
            return 'alert-danger';
        },
        summary() {
            if (this.startingValueInKG == this.valueConvertedBackToKG) {
                return `Conversion is successful. ${this.startingValueInKG} = ${this.valueConvertedBackToKG}.`;
            }
            return `Conversion is not successful. ${this.startingValueInKG} is not the same as ${this.valueConvertedBackToKG}.`;
        },
    },
});
</script>