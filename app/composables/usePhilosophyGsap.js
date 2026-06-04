/**
 * Philosophy ページ GSAP（本家 philosophy.js の DOM 相当）
 * - Hero 球体：入場・浮遊・マウスパララックス・スクロール縮小
 * - Circular Design：回転リング・テキスト出現
 * - valueProgress：縦線ドロー・3球体の順次表示
 * - 記事：画像パララックス・テキストリビール連携
 * - Value Design Map：ピン + 同心円展開
 * - photoSet：散在ブロックのパララックス
 */
export const usePhilosophyGsap = () => {
  let ctx = null

  const initHero = (gsap, ScrollTrigger, refs) => {
    const { heroSection, heroBallWraps, heroBalls } = refs
    if (!heroSection) return

    const wraps = heroBallWraps?.filter(Boolean) ?? []
    const balls = heroBalls?.filter(Boolean) ?? []

    balls.forEach((el, i) => {
      gsap.set(el, { scale: 0, opacity: 0, transformOrigin: '50% 50%' })
      gsap.to(el, {
        scale: 1,
        opacity: i === 0 ? 1 : 0.75,
        duration: 1.2,
        delay: 0.15 + i * 0.12,
        ease: 'power3.out'
      })
    })

    balls.forEach((el, i) => {
      if (!el) return
      gsap.to(el, {
        x: () => gsap.utils.random(-28, 28),
        y: () => gsap.utils.random(-36, 36),
        duration: gsap.utils.random(8, 14),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.4
      })
    })

    const onMove = (e) => {
      const rect = heroSection.getBoundingClientRect()
      const nx = (e.clientX - rect.left) / rect.width - 0.5
      const ny = (e.clientY - rect.top) / rect.height - 0.5
      wraps.forEach((el, i) => {
        if (!el) return
        gsap.to(el, {
          x: nx * (18 + i * 14),
          y: ny * (14 + i * 10),
          duration: 0.85,
          ease: 'power2.out',
          overwrite: 'auto'
        })
      })
    }
    heroSection.addEventListener('mousemove', onMove)

    const mainWrap = wraps[0]
    const subs = wraps.slice(1)
    if (mainWrap) {
      gsap.to(mainWrap, {
        y: -80,
        scale: 0.55,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6
        }
      })
    }
    subs.forEach((el) => {
      gsap.to(el, {
        y: -120,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: '60% top',
          scrub: 0.5
        }
      })
    })

    if (refs.heroContent) {
      gsap.from(refs.heroContent.children, {
        y: 48,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        delay: 0.35,
        ease: 'power3.out'
      })
    }

    return () => heroSection.removeEventListener('mousemove', onMove)
  }

  const initFloatingBalls = (gsap, elements) => {
    elements?.filter(Boolean).forEach((el, i) => {
      gsap.set(el, { x: 0, y: 0, force3D: true })
      gsap.to(el, {
        x: gsap.utils.random(-20, 20),
        y: gsap.utils.random(-28, 28),
        duration: gsap.utils.random(6, 11),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.25
      })
    })
  }

  const initConcept = (gsap, ScrollTrigger, refs) => {
    const { conceptSection, conceptRing, conceptTextLines } = refs
    if (!conceptSection) return

    const ringSvg = conceptRing?.matches?.('svg') ? conceptRing : conceptRing?.closest?.('svg')
    const ringCircle = ringSvg?.querySelector?.('circle') ?? (conceptRing?.tagName === 'circle' ? conceptRing : null)

    if (ringSvg) {
      gsap.to(ringSvg, {
        rotation: 360,
        duration: 48,
        repeat: -1,
        ease: 'none',
        transformOrigin: '50% 50%'
      })
    }
    if (ringCircle) {
      gsap.fromTo(
        ringCircle,
        { strokeDashoffset: 1000, opacity: 0 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: conceptSection,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    const lines = conceptTextLines?.filter(Boolean) ?? []
    if (lines.length) {
      gsap.from(lines, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: conceptSection,
          start: 'top 72%',
          toggleActions: 'play none none reverse'
        }
      })
    }

    initFloatingBalls(gsap, refs.conceptBalls)
  }

  const initPillars = (gsap, ScrollTrigger, refs) => {
    const { pillarsSection, pillarLine, pillarItems, pillarSpheres } = refs
    if (!pillarsSection) return

    const lineEl = pillarLine?.querySelector?.('img') ?? pillarLine
    if (lineEl) {
      gsap.set(lineEl, { clipPath: 'inset(0 100% 0 0)' })
      gsap.to(lineEl, {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.6,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: pillarsSection,
          start: 'top 70%',
          end: 'center 45%',
          scrub: 0.8
        }
      })
    }

    pillarItems?.filter(Boolean).forEach((el, i) => {
      gsap.from(el, {
        x: -32,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none reverse'
        },
        delay: i * 0.08
      })
    })

    pillarSpheres?.filter(Boolean).forEach((el, i) => {
      gsap.from(el, {
        scale: 0,
        opacity: 0,
        duration: 0.75,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        delay: i * 0.12
      })
      initFloatingBalls(gsap, [el])
    })
  }

  const initArticles = (gsap, ScrollTrigger, refs) => {
    refs.articleSections?.filter(Boolean).forEach((section) => {
      const img = section.querySelector('.phil-article__img img, .phil-article__img--pc img')
      const body = section.querySelector('.phil-article__body')

      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.08 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6
            }
          }
        )
      }

      if (body) {
        gsap.from(body.children, {
          y: 28,
          opacity: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            toggleActions: 'play none none reverse'
          }
        })
      }
    })
  }

  const initVduBlocks = (gsap, ScrollTrigger, refs) => {
    refs.vduSections?.filter(Boolean).forEach((section) => {
      const title = section.querySelector('picture img, img[alt]')
      const sphere = section.querySelector('.philosophy-sphere')

      if (sphere) initFloatingBalls(gsap, [sphere])

      if (title) {
        gsap.from(title, {
          scale: 0.92,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        })
      }
    })
  }

  const initValueDesignMap = (gsap, ScrollTrigger, refs) => {
    const { vdmSection, vdmMapArea, vdmRings, vdmSide, vdmDecorate } = refs
    if (!vdmSection || !vdmMapArea || !vdmRings?.length) return

    const ringOrder = [4, 3, 2, 1, 0]

    gsap.set(vdmRings, { scale: 0.12, opacity: 0, transformOrigin: '50% 50%' })

    const buildRingTimeline = (pinTarget, endValue) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: vdmSection,
          start: 'top 15%',
          end: endValue,
          pin: pinTarget,
          scrub: 0.85,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      })
      ringOrder.forEach((ringIndex, orderIndex) => {
        const el = vdmRings[ringIndex]
        if (!el) return
        tl.to(el, { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }, orderIndex * 0.85)
      })
    }

    ScrollTrigger.matchMedia({
      '(min-width: 1024px)': () => buildRingTimeline(vdmMapArea, '+=130%'),
      '(max-width: 1023px)': () => {
        ScrollTrigger.create({
          trigger: vdmSection,
          start: 'top 70%',
          end: 'bottom 25%',
          scrub: 0.8,
          onUpdate: (self) => {
            const p = self.progress
            ringOrder.forEach((ringIndex, orderIndex) => {
              const el = vdmRings[ringIndex]
              if (!el) return
              const start = orderIndex * 0.2
              const local = gsap.utils.clamp(0, 1, (p - start) / 0.22)
              const eased = gsap.parseEase('power2.out')(local)
              gsap.set(el, {
                scale: gsap.utils.interpolate(0.12, 1, eased),
                opacity: eased
              })
            })
          }
        })
      }
    })

    if (vdmSide) {
      gsap.from(vdmSide.querySelectorAll('.vdm-side-item'), {
        x: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: vdmSection,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      })
    }

    if (vdmDecorate) {
      gsap.to(vdmDecorate.children, {
        rotation: 360,
        duration: 24,
        repeat: -1,
        ease: 'none',
        stagger: 0.4,
        transformOrigin: '50% 50%'
      })
    }
  }

  const initPhotoSet = (gsap, ScrollTrigger, refs) => {
    const { photoSetRoot, photoItems } = refs
    if (!photoSetRoot) return

    photoItems?.filter(Boolean).forEach((el, i) => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          toggleActions: 'play none none reverse'
        },
        delay: (i % 3) * 0.06
      })

      const imgWrap = el.querySelector('.photo-set-eyecatch')
      if (imgWrap) {
        gsap.to(imgWrap, {
          y: gsap.utils.random(-24, -12),
          ease: 'none',
          scrollTrigger: {
            trigger: photoSetRoot,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8 + i * 0.05
          }
        })
      }
    })
  }

  const init = async (refs) => {
    const { loadGsap, getScrollTrigger } = useGsap()
    const gsap = await loadGsap()
    const ScrollTrigger = getScrollTrigger()
    if (!gsap || !ScrollTrigger) return

    const cleanups = []

    ctx = gsap.context(() => {
      const heroCleanup = initHero(gsap, ScrollTrigger, refs)
      if (heroCleanup) cleanups.push(heroCleanup)

      initConcept(gsap, ScrollTrigger, refs)
      initPillars(gsap, ScrollTrigger, refs)
      initArticles(gsap, ScrollTrigger, refs)
      initVduBlocks(gsap, ScrollTrigger, refs)
      initValueDesignMap(gsap, ScrollTrigger, refs)
      initPhotoSet(gsap, ScrollTrigger, refs)

      initFloatingBalls(gsap, [
        ...(refs.vduExtraBalls?.filter(Boolean) ?? [])
      ])
    }, refs.pageRoot ?? undefined)

    ctx._cleanups = cleanups
    ScrollTrigger.refresh()
  }

  const cleanup = () => {
    ctx?._cleanups?.forEach((fn) => fn())
    ctx?.revert()
    ctx = null
  }

  return { init, cleanup }
}
