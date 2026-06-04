/**
 * GSAP + ScrollTrigger をクライアントのみで遅延ロード
 */
let gsapInstance = null
let scrollTriggerInstance = null

export const useGsap = () => {
  const loadGsap = async () => {
    if (import.meta.server) return null

    if (!gsapInstance) {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      gsapInstance = gsap
      scrollTriggerInstance = ScrollTrigger
    }

    return gsapInstance
  }

  const getScrollTrigger = () => scrollTriggerInstance

  return { loadGsap, getScrollTrigger }
}
