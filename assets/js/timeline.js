// Write a message to the console once the DOM is ready.
// $(function documentReady() {
//     console.log("The DOM Is Ready!");
// });

// Fade in/out the timeline on the About page, if the viewport is large enough.
$(function fadeTimeline() {
    // Initialize the ScrollMagic controller.
    var scrollMagicControllerTimeline = new ScrollMagic.Controller();

    // Create GSAP animations for the timeline.
    var tweenTimeline = TweenMax.staggerTo("#timeline-container", 0.01, {
        opacity: "1",
    });

    // Create a GSAP timeline and add the animations to it, while specifying the delay from the start point for each animation.
    var timelineContainer = new TimelineMax();
    timelineContainer.add(tweenTimeline, 0);

    // Create the ScrollMagic scene, specify which GSAP animation to execute, and add the scene to the ScrollMagic controller.
    var sceneTimeline = new ScrollMagic.Scene({
            triggerElement: ".container .jumbotron",
            duration: $(".container .jumbotron").height() / 2
        })
        .setTween(timelineContainer)
        .addTo(scrollMagicControllerTimeline)
        .triggerHook(0.075);

    // Add ScrollMagic debug indicators, fixed on the right side.
    // sceneTimeline.addIndicators();
});

// Animate the timeline on the About page, if the viewport is large enough.
$(function animateTimeline() {
    if ($("body").attr("id") === "about" && $(window).width() >= 760) {

        // Set up elements to be in initial state. This is not done in the CSS so that it's skipped if the viewport is narrower than 760px.
        $("div.timeline-badge").css({
            "filter": "blur(2px)"
        });

        $("div.timeline-panel-left").css({
            "transform": "translate(-280px, 0px)",
            "opacity": "0.75",
            "filter": "blur(5px)"
        });

        $("div.timeline-panel-right").css({
            "transform": "translate(280px, 0px)",
            "opacity": "0.75",
            "filter": "blur(5px)"
        });

        // Initialize the ScrollMagic controller.
        var scrollMagicController = new ScrollMagic.Controller();

        // Create GSAP animations for the badges and the left/righ panels.
        var tweenBadge = TweenMax.staggerTo("div.timeline-badge", 0.75, {
            filter: "blur(0px)",
            scale: 2,
            rotation: 360
        }, 0.9);

        var tweenPanelLeft = TweenMax.staggerTo("div.timeline-panel-left", 0.75, {
            opacity: 1,
            filter: "blur(0px)",
            left: 250
        }, 1.75);

        var tweenPanelRight = TweenMax.staggerTo("div.timeline-panel-right", 0.75, {
            opacity: 1,
            filter: "blur(0px)",
            right: 250
        }, 1.75);

        // Create a GSAP timeline and add the animations to it, while specifying the delay from the start point for each animation.
        var timeline = new TimelineMax();
        timeline.add(tweenBadge, 0);
        timeline.add(tweenPanelLeft, 0);
        timeline.add(tweenPanelRight, 0.95);

        // Create the ScrollMagic scene, specify which GSAP animation to execute, and add the scene to the ScrollMagic controller.
        var scene = new ScrollMagic.Scene({
                triggerElement: "ul.timeline",
                offset: -100,
                duration: $("ul.timeline").height() - 100
            })
            .setTween(timeline)
            .addTo(scrollMagicController);

        // Add ScrollMagic debug indicators, fixed on the right side.
        // scene.addIndicators();
    }
});