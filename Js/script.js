let box = new gsap.timeline() ;

box.from(".container", { width: "0%", stagger: 0.4, duration: 1.5 });
box.from(".form__title", { opacity: 0, y: -30 });
box.from(".form__input-group input", { opacity: 0, stagger: 0.3 })
box.from(".form__button", { opacity: 0, y:20 })