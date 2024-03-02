import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const screen = (value) => {
  const e = document.getElementById(value);
  return e.getBoundingClientRect().height;
};

export const handleScroll = (scrollY) => {
  const jump = window.innerHeight * scrollY;
  gsap.to(window, {
    scrollTo: {
      y: jump,
    },
    duration: 1.2,
  });
};

export const panels = () => {
  //   ScrollTrigger.create({
  //     trigger: '#home',
  //     start: 'top top',
  //     end: 'bottom bottom',
  //     pin: true,
  //     pinSpacing: false,
  //   });
  // ScrollTrigger.create({
  //   trigger: '#tech',
  //   start: 'top top',
  //   pin: true,
  //   pinSpacing: false,
  // });
  // ScrollTrigger.create({
  //   trigger: '#proj',
  //   start: 'top top',
  //   pin: true,
  //   pinSpacing: false,
  // });
  // ScrollTrigger.create({
  //   trigger: '#cont',
  //   start: 'top top',
  //   pin: true,
  //   pinSpacing: false,
  // });
};

export const home = () => {
  const ratio = window.innerWidth / window.innerHeight;

  if (ratio >= 1) {
    const tl = gsap.timeline();
    tl.from('#contxl', { opacity: 0, width: '0%' }, '+=0.5');
    tl.from('#phxl', { opacity: 0, x: -200 });
    tl.from('#txxl1', { opacity: 0, x: 400 });
    tl.from('#txxl2', { opacity: 0, x: 100 });
    tl.from('#navLine', { width: '0%' });
    tl.from('#nav', { yPercent: -100 });

    gsap.to('#heroxl', {
      scrollTrigger: {
        trigger: '#heroxl',
        scrub: 1,
        start: 'top top',
        end: 'bottom 85%',
      },
      height: screen('heroxl') * 0.5,
    });
    gsap.from('#abcont', {
      scrollTrigger: {
        trigger: '#heroxl',
        scrub: 1,
        start: 'top top',
        end: 'bottom 85%',
      },
      opacity: 0,
    });
  } else {
    const tl = gsap.timeline();
    tl.from('#contxs', { opacity: 0, width: '0%' }, '+=0.5');
    tl.from('#txxs1', { opacity: 0, x: -500 });
    tl.from('#txxs2', { opacity: 0, x: 300 });
    tl.from('#phxs', { opacity: 0, y: 100 });
    tl.from('#navLine', { width: '0%' });
    tl.from('#nav', { yPercent: -100 });

    gsap.to('#heroxs', {
      scrollTrigger: {
        trigger: '#heroxs',
        scrub: 1,
        start: 'top top',
        end: 'bottom 85%',
      },
      height: screen('heroxs') * 0.5,
    });
    gsap.from('#abcont', {
      scrollTrigger: {
        trigger: '#heroxs',
        scrub: 1,
        start: 'top top',
        end: 'bottom 85%',
      },
      opacity: 0,
    });
  }

  gsap.to('#home', {
    scrollTrigger: {
      trigger: '#home',
      scrub: 1,
      pin: true,
      pinSpacing: false,
      start: 'top top',
      end: 'bottom bottom',
    },
  });
};

export const tech = () => {
  gsap.to('#teti', {
    scrollTrigger: {
      trigger: '#teti',
      scrub: 1,
      start: 'top bottom',
    },
    x: -1000,
  });
  gsap.from('#laic', {
    scrollTrigger: {
      trigger: '#laic',
      scrub: 1,
      start: 'top 90%',
      end: 'bottom 80%',
    },
    opacity: 0,
    x: -500,
  });
  gsap.from('#latx', {
    scrollTrigger: {
      trigger: '#latx',
      scrub: 1,
      start: 'top 70%',
      end: 'bottom 60%',
    },
    opacity: 0,
    x: 300,
  });
  gsap.from('#fric', {
    scrollTrigger: {
      trigger: '#fric',
      scrub: 1,
      start: 'top 90%',
      end: 'bottom 80%',
    },
    opacity: 0,
    x: 500,
  });
  gsap.from('#frtx', {
    scrollTrigger: {
      trigger: '#frtx',
      scrub: 1,
      start: 'top 70%',
      end: 'bottom 60%',
    },
    opacity: 0,
    x: -300,
  });
  gsap.from('#stic', {
    scrollTrigger: {
      trigger: '#stic',
      scrub: 1,
      start: 'top 90%',
      end: 'bottom 80%',
    },
    opacity: 0,
    x: -500,
  });
  gsap.from('#sttx', {
    scrollTrigger: {
      trigger: '#sttx',
      scrub: 1,
      start: 'top 70%',
      end: 'bottom 60%',
    },
    opacity: 0,
    x: 300,
  });
  gsap.from('#baic', {
    scrollTrigger: {
      trigger: '#baic',
      scrub: 1,
      start: 'top 90%',
      end: 'bottom 80%',
    },
    opacity: 0,
    x: 500,
  });
  gsap.from('#batx', {
    scrollTrigger: {
      trigger: '#batx',
      scrub: 1,
      start: 'top 70%',
      end: 'bottom 60%',
    },
    opacity: 0,
    x: -300,
  });
  gsap.from('#daic', {
    scrollTrigger: {
      trigger: '#daic',
      scrub: 1,
      start: 'top 90%',
      end: 'bottom 80%',
    },
    opacity: 0,
    x: -500,
  });
  gsap.from('#datx', {
    scrollTrigger: {
      trigger: '#datx',
      scrub: 1,
      start: 'top 70%',
      end: 'bottom 60%',
    },
    opacity: 0,
    x: 300,
  });
  gsap.from('#toic', {
    scrollTrigger: {
      trigger: '#toic',
      scrub: 1,
      start: 'top 90%',
      end: 'bottom 80%',
    },
    opacity: 0,
    x: 500,
  });
  gsap.from('#totx', {
    scrollTrigger: {
      trigger: '#totx',
      scrub: 1,
      start: 'top 70%',
      end: 'bottom 60%',
    },
    opacity: 0,
    x: -300,
  });
};

export const proj = () => {
  gsap.to('#prti', {
    scrollTrigger: {
      trigger: '#prti',
      scrub: 1,
      start: 'top bottom',
    },
    x: 1000,
  });

  const rmtl = gsap.timeline({
    scrollTrigger: {
      trigger: '#rmcont',
      scrub: 2,
      start: 'top 70%',
      end: 'bottom 90%',
    },
  });
  rmtl.from('#rmcont', { opacity: 0, x: 50 });
  rmtl.from('#rmtx', { opacity: 0, y: -100, duration: 2 }, '+=3');
  rmtl.from('#rmph', { opacity: 0, y: -100, duration: 2 });
  const rmth = gsap.utils.toArray('.rmth');
  rmth.map((th) => {
    rmtl.from(th, { opacity: 0, y: 50 });
  });

  const fptl = gsap.timeline({
    scrollTrigger: {
      trigger: '#fpcont',
      scrub: 2,
      start: 'top 70%',
      end: 'bottom 90%',
    },
  });
  fptl.from('#fpcont', { opacity: 0, x: -50 });
  fptl.from('#fptx', { opacity: 0, y: -100, duration: 2 }, '+=3');
  fptl.from('#fpph', { opacity: 0, y: -100, duration: 2 });
  const fpth = gsap.utils.toArray('.fpth');
  fpth.map((th) => {
    fptl.from(th, { opacity: 0, y: 50 });
  });

  const hktl = gsap.timeline({
    scrollTrigger: {
      trigger: '#hkcont',
      scrub: 2,
      start: 'top 70%',
      end: 'bottom 90%',
    },
  });
  hktl.from('#hkcont', { opacity: 0, x: 50 });
  hktl.from('#hktx', { opacity: 0, y: -100, duration: 5 }, '+=3');
  hktl.from('#hkph', { opacity: 0, y: -100, duration: 5 });
  const hkth = gsap.utils.toArray('.hkth');
  hkth.map((th) => {
    hktl.from(th, { opacity: 0, y: 50 });
  });
};

export const cont = () => {
  gsap.to('#coti', {
    scrollTrigger: {
      trigger: '#coti',
      scrub: 1,
      start: 'top bottom',
    },
    x: -1000,
  });
};
