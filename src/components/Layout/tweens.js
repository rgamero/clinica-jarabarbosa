import gsap from 'gsap';

export const MenuOpenTimeline = (
  tlOpenMenu,
  setMenuOpenAnim,
  menuRef,
  link1,
  link2,
  link3,
  link4,
  iconMenu,
  iconBarTop,
  iconBarBottom,
  iconBarMidL,
  iconBarMidR
) => {
  return setMenuOpenAnim(
    tlOpenMenu
      .add(
        gsap.fromTo(
          menuRef,
          {
            autoAlpha: 0
          },
          {
            duration: 0.01,
            autoAlpha: 1
          }
        )
      )
      .add(
        gsap.fromTo(
          menuRef,
          {
            yPercent: -100,
            backgroundPosition: '50% 50%'
          },
          {
            duration: 0.5,
            yPercent: 0,
            backgroundPosition: '0% 0%',
            force3D: false,
            ease: 'power4.easeOut'
          }
        )
      )
      .add(
        gsap.to([link1, link2, link3, link4], {
          duration: 0.5,
          y: 5,
          autoAlpha: 1,
          stagger: {
            each: 0.125,
            ease: 'power4.easeOut'
          }
        }),
        0.2
      )
      .add(
        gsap.to(iconBarTop, {
          duration: 0.2,
          y: 5
        }),
        -0.2
      )
      .add(
        gsap.to(iconBarBottom, {
          duration: 0.2,
          y: -5
        }),
        -0.2
      )
      .add(
        gsap.to(iconBarTop, {
          duration: 0.3,
          rotation: 45,
          y: 0,
          x: 10,
          transformOrigin: 'left top'
        }),
        0.1
      )
      .add(
        gsap.to(iconBarBottom, {
          duration: 0.3,
          rotation: -45,
          y: 0,
          x: 10,
          transformOrigin: 'left bottom'
        }),
        0.15
      )
      .add(
        gsap.to(iconBarMidL, {
          duration: 0.4,
          opacity: 0,
          scaleX: 0,
          transformOrigin: 'left'
        }),
        0
      )
      .add(
        gsap.to(iconBarMidR, {
          duration: 0.4,
          opacity: 0,
          scaleX: 0,
          transformOrigin: 'right'
        }),
        0
      )
      .add(
        gsap.to(iconMenu, {
          duration: 0.6,
          rotation: 180
        }),
        0
      )
  );
};

export const MenuCloseTimeline = (
  tlCloseMenu,
  setMenuCloseAnim,
  menuRef,
  link1,
  link2,
  link3,
  link4,
  iconMenu,
  iconBarTop,
  iconBarBottom,
  iconBarMidL,
  iconBarMidR
) => {
  return setMenuCloseAnim(
    tlCloseMenu
      .add(
        gsap.to(iconMenu, {
          duration: 0.6,
          rotation: 0
        }),
        0
      )
      .add(
        gsap.to(iconBarMidR, {
          duration: 0.4,
          opacity: 1,
          scaleX: 1,
          transformOrigin: 'right'
        }),
        0
      )
      .add(
        gsap.to(iconBarMidL, {
          duration: 0.4,
          opacity: 1,
          scaleX: 1,
          transformOrigin: 'left'
        }),
        0
      )
      .add(
        gsap.to(iconBarBottom, {
          duration: 0.3,
          rotation: 0,
          y: -5,
          x: 0,
          transformOrigin: 'left bottom'
        }),
        0.15
      )
      .add(
        gsap.to(iconBarTop, {
          duration: 0.3,
          rotation: 0,
          y: 5,
          x: 0,
          transformOrigin: 'left top'
        }),
        0.1
      )
      .add(
        gsap.to(iconBarBottom, {
          duration: 0.2,
          y: 0
        }),
        0.6
      )
      .add(
        gsap.to(iconBarTop, {
          duration: 0.2,
          y: 0
        }),
        0.6
      )
      .add(
        gsap.to([link4, link3, link2, link1], {
          duration: 0.5,
          y: -15,
          autoAlpha: 0,
          stagger: {
            each: 0.125,
            ease: 'power4.easeOut'
          }
        }),
        0.2
      )
      .add(
        gsap.to(menuRef, {
          duration: 0.5,
          yPercent: -100,
          backgroundPosition: '50% 50%',
          force3D: false,
          ease: 'power4.easeOut'
        })
      )
      .add(
        gsap.fromTo(
          menuRef,
          {
            autoAlpha: 1
          },
          {
            duration: 0.01,
            autoAlpha: 0
          }
        )
      )
  );
};
