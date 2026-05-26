import { useIntersectionObserver } from '@vueuse/core'

export default defineNuxtPlugin((nuxtApp) => {
  // 画面に入ったら下からフワッと現れる (v-reveal)
  // 使い方:
  //   v-reveal
  //   v-reveal="200"          → 200ms 遅延
  //   v-reveal:fast           → 600ms duration
  //   v-reveal:slow="300"     → 1600ms duration + 300ms delay
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps() {
      return {
        class: 'opacity-0 translate-y-8 transition-all duration-[1200ms] ease-out-quart will-change-transform'
      }
    },
    mounted(el, binding) {
      const delay = typeof binding.value === 'number' ? binding.value : 0
      const speed = binding.arg
      const durationMs =
        speed === 'fast' ? 600 : speed === 'slow' ? 1600 : 1200

      el.style.transitionProperty = 'opacity, transform'
      el.style.transitionDuration = `${durationMs}ms`
      el.style.transitionTimingFunction = 'cubic-bezier(0.25, 1, 0.5, 1)'
      el.style.transitionDelay = `${delay}ms`
      el.style.opacity = '0'
      el.style.transform = 'translateY(2rem)'
      el.style.willChange = 'opacity, transform'

      const { stop } = useIntersectionObserver(
        el,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            stop()
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
      )
    }
  })

  // 数字が 0 からパラパラ増える (v-count-up)
  nuxtApp.vueApp.directive('count-up', {
    getSSRProps() {
      return {}
    },
    mounted(el, binding) {
      const targetNumber = parseFloat(binding.value)
      if (isNaN(targetNumber)) return

      el.innerText = '0'
      const duration = 2200
      const frameRate = 1000 / 60
      const totalFrames = Math.round(duration / frameRate)
      const isDecimal = targetNumber % 1 !== 0

      const { stop } = useIntersectionObserver(
        el,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            let frame = 0
            const counter = setInterval(() => {
              frame++
              const progress = frame / totalFrames
              const easeOut = 1 - Math.pow(1 - progress, 3)
              const current = (targetNumber * easeOut).toFixed(isDecimal ? 1 : 0)

              el.innerText = Number(current).toLocaleString('ja-JP')

              if (frame === totalFrames) {
                clearInterval(counter)
                el.innerText = targetNumber.toLocaleString('ja-JP')
              }
            }, frameRate)
            stop()
          }
        },
        { threshold: 0.5 }
      )
    }
  })
})
