// Write a message to the console once the DOM is ready.
$(function documentReady() {
    console.log("The DOM Is Ready!");
});

// Animate the timeline, if the viewport is large enough.
$(function animateTimeline() {
    if ($(window).width() >= 760) {

        // Move timeline panels to the edges of the viewport and make them transparent.
        $("div.timeline-panel-left").css({
            "transform": "translate(-280px, 0px)",
            "opacity": "0.15"
        });

        $("div.timeline-panel-right").css({
            "transform": "translate(280px, 0px)",
            "opacity": "0.15"
        });

        // Initialize the ScrollMagic controller.
        var scrollMagicController = new ScrollMagic.Controller();

        // Create GSAP animations for the badges and the left/righ panels.
        var tweenBadge = TweenMax.staggerTo("div.timeline-badge", 0.75, {
            scale: 2,
            rotation: 360
        }, 1);

        var tweenPanelLeft = TweenMax.staggerTo("div.timeline-panel-left", 0.75, {
            opacity: 1,
            left: 250
        }, 1.75);

        var tweenPanelRight = TweenMax.staggerTo("div.timeline-panel-right", 0.75, {
            opacity: 1,
            right: 250
        }, 1.75);

        // Create a GSAP timeline and add the animations to it, while specifying the delay from the start point for each animation.
        var timeline = new TimelineMax();
        timeline.add(tweenBadge, 0);
        timeline.add(tweenPanelLeft, 0);
        timeline.add(tweenPanelRight, 0.5);

        // Create the ScrollMagic scene, specify which GSAP animation to execute, and add the scene to the ScrollMagic controller.
        var scene = new ScrollMagic.Scene({
                triggerElement: "ul.timeline",
                duration: $("ul.timeline").height()
            })
            .setTween(timeline)
            .addTo(scrollMagicController);

        // Add ScrollMagic debug indicators, fixed on the right side.
        // scene.addIndicators();
    }
});