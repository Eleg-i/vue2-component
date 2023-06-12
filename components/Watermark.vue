<template>
  <div class="watermark" :class="{ [className]: className }">
    <slot />
  </div>
</template>

<script>
import Watermark from '@cailiao/watermark'

export default {
  name: 'Watermark',
  props: {
    className: {
      default: undefined,
      type: String
    },
    content: {
      default: undefined,
      type: [String, Array]
    },
    font: {
      default: undefined,
      type: Object
    },
    gap: {
      default: undefined,
      type: Number
    },
    image: {
      default: undefined,
      type: [String, Object]
    },
    lineHeight: {
      default: undefined,
      type: Number
    },
    offset: {
      default: undefined,
      type: Array
    },
    rotate: {
      default: undefined,
      type: Number
    },
    zIndex: {
      default: undefined,
      type: Number
    }
  },
  data() {
    this._targetDestroyMtds = []

    return {
      destroy: null,
      watermark: null
    }
  },
  computed: {
    config() {
      const { $props: props } = this,
            config = {}

      for (const key in props) {
        const value = props[key]

        if ((value ?? null) !== null) config[key] = value
      }

      return config
    }
  },
  watch: {
    config() {
      clearTimeout(this._timer)
      this._timer = setTimeout(() => {
        this.init()
        this._blockUpdate = true

        setTimeout(() => {
          this._blockUpdate = false
        }, 140)
      }, 17)
    }
  },
  mounted() {
    this.init()
  },
  async updated() {
    if (this._blockUpdate) {
      await this.$nextTick()
      this._blockUpdate = false
    } else this.mountWatermark()
  },
  beforeDestroy() {
    this.destroy?.()
  },
  methods: {
    async init() {
      this.watermark = new Watermark(this.config)
      await this.mountWatermark()
      this.$emit('inited')
    },
    async mountWatermark() {
      const { destroy, $el: rootEl, watermark, _targetDestroyMtds: targetDestroyMtds } = this,
            { children: defaultSlot } = rootEl

      if (destroy) {
        destroy()
        this.destroy = null
      }

      if (defaultSlot)
        for (const elm of defaultSlot) {
          targetDestroyMtds.push(await watermark.mount(elm))
        }

      this.destroy = () => {
        targetDestroyMtds.forEach(callback => callback())
        targetDestroyMtds.length = 0
      }
    }
  }
}
</script>

<style scoped>
.watermark {
  position: relative;
}
</style>
