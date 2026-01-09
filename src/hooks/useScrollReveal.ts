import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = () => {
    const revealRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            if (!self.selector) return;

            // Fade Up Animation
            // Targets elements with class 'reveal-fade-up'
            const fadeUpElements = self.selector('.reveal-fade-up');
            fadeUpElements.forEach((el: Element) => {
                gsap.fromTo(el,
                    {
                        y: 50,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // Fade In Animation (No movement)
            // Targets elements with class 'reveal-fade'
            const fadeInElements = self.selector('.reveal-fade');
            fadeInElements.forEach((el: Element) => {
                gsap.fromTo(el,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 1.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // Staggered Children Animation
            // Container should have 'reveal-stagger' class
            // Children should have 'reveal-child' class
            const staggerContainers = self.selector('.reveal-stagger');
            staggerContainers.forEach((container: Element) => {
                const children = container.querySelectorAll('.reveal-child');
                if (children.length > 0) {
                    gsap.fromTo(children,
                        { y: 30, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            stagger: 0.1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: container,
                                start: "top 80%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }
            });

            // Slide In From Left (Careful with overflow)
            const slideRightElements = self.selector('.reveal-slide-right');
            slideRightElements.forEach((el: Element) => {
                gsap.fromTo(el,
                    { x: -50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // Slide In From Right (Careful with overflow)
            const slideLeftElements = self.selector('.reveal-slide-left');
            slideLeftElements.forEach((el: Element) => {
                gsap.fromTo(el,
                    { x: 50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });


        }, revealRef);

        return () => ctx.revert();
    }, []);

    return revealRef;
};
