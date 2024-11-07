---
layout: ../../layouts/post.astro
title: Creating a Smooth Toggle Switch in React; A Step-by-Step Guide
description: How to create a Smooth Toggle Switch in React
date: 2024-07-15
tags: ["react", "toggle switch", "tutorial"]
cover: "/src/assets/images/posts/smooth_toogle_switch.jpg"
---

👋 Today, we're doing a bit of css with a cool little project: building a toggle switch with a smooth transition using React and TypeScript. The full code is available on [CodeSandbox](https://codesandbox.io/p/sandbox/toggle-button-m8nhdm?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clyn48z5i00063b6m12gyu69z%2522%252C%2522sizes%2522%253A%255B100%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clyn48z5i00023b6mwuykj2hk%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clyn48z5i00033b6mvf513r8n%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clyn48z5i00053b6mlv32oyfy%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clyn48z5i00023b6mwuykj2hk%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyn48z5h00013b6mixqqbhba%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clyn4plbo00023b6m0yax1h2m%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A1%252C%2522startColumn%2522%253A62%252C%2522endLineNumber%2522%253A1%252C%2522endColumn%2522%253A62%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FToggle.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clyn48z5i00023b6mwuykj2hk%2522%252C%2522activeTabId%2522%253A%2522clyn4plbo00023b6m0yax1h2m%2522%257D%252C%2522clyn48z5i00053b6mlv32oyfy%2522%253A%257B%2522id%2522%253A%2522clyn48z5i00053b6mlv32oyfy%2522%252C%2522activeTabId%2522%253A%2522clyn5575k002t3b6m9tkm5p29%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyn48z5i00043b6mhgdbtuoc%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%252C%257B%2522type%2522%253A%2522DOCS%2522%252C%2522path%2522%253A%2522%252Feditors%252Fweb%252Fvscode-web%2522%252C%2522id%2522%253A%2522clyn4plhd00093b6m9kxp3ell%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522id%2522%253A%2522clyn4qlp500123b6m90nc40b3%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522CHANGELOG%2522%252C%2522id%2522%253A%2522clyn5575k002t3b6m9tkm5p29%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clyn48z5i00033b6mvf513r8n%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clyn48z5i00033b6mvf513r8n%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D). Let's get started!

## The Goal

We're going to create a toggle switch that allows users to switch between gallery and list views. The switch will have a smooth sliding animation and change colors to indicate the active state. Here's what we're aiming for:

![toggle gif](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/995ll7289ki01bf0w5vg.gif)

## Setting Up

First, let's break down the components we'll be using:

- A container for our toggle
- A sliding background element
- Two clickable areas for each view option containing the SVG Icon

### The Container

Our main container sets up the overall shape and style of the toggle:

```tsx
<div
  style={{
    display: "flex",
    borderRadius: "100px",
    backgroundColor: "#0036FF80",
    position: "relative",
    width: "140px",
    height: "32px",
  }}
>
  {/* Icons and clickable areas will go here */}
  {/_ ... _/}
</div>
```

We're using inline styles here, but feel free to use tailwinds or styled-components.

### The Sliding Background

Here's where the magic happens:

```tsx
<div
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "50%",
    height: "100%",
    backgroundColor: "#0036FF",
    borderRadius: "40px",
    transition: "transform 0.3s ease",
    transform: view === "gallery" ? "translateX(0)" : "translateX(100%)",
  }}
/>
```

This div acts as our sliding background. The key properties are:

- `position`: _absolute_ to take it out of the normal flow
- `width`: _50%_ to cover half of the toggle
- `transition`: _transform 0.3s ease_ for smooth animation
- `transform` to move the background based on the current view

### The Clickable Areas

For each view option, we have a clickable area:

```tsx
<div
  style={{
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    cursor: "pointer",
  }}
  onClick={() => setView("gallery")}
>
  <GalleryViewIcon
    style={{ color: view === "gallery" ? "white" : `#FFFFFF80` }}
  />
</div>
```

The `onClick handler` updates the view state, and we change the icon color based on whether it's active or not.

## Wrapping Up

And there you have it! A smooth, animated toggle switch built with React and TypeScript.

Remember, the key to the smooth transition is in the CSS transition property and the dynamic transform based on the current state. Play around with these values to customize the feel of your toggle! The full code is available on [CodeSandbox](https://codesandbox.io/p/sandbox/toggle-button-m8nhdm?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clyn48z5i00063b6m12gyu69z%2522%252C%2522sizes%2522%253A%255B100%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clyn48z5i00023b6mwuykj2hk%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clyn48z5i00033b6mvf513r8n%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clyn48z5i00053b6mlv32oyfy%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clyn48z5i00023b6mwuykj2hk%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyn48z5h00013b6mixqqbhba%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clyn4plbo00023b6m0yax1h2m%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A1%252C%2522startColumn%2522%253A62%252C%2522endLineNumber%2522%253A1%252C%2522endColumn%2522%253A62%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FToggle.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clyn48z5i00023b6mwuykj2hk%2522%252C%2522activeTabId%2522%253A%2522clyn4plbo00023b6m0yax1h2m%2522%257D%252C%2522clyn48z5i00053b6mlv32oyfy%2522%253A%257B%2522id%2522%253A%2522clyn48z5i00053b6mlv32oyfy%2522%252C%2522activeTabId%2522%253A%2522clyn5575k002t3b6m9tkm5p29%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyn48z5i00043b6mhgdbtuoc%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%252C%257B%2522type%2522%253A%2522DOCS%2522%252C%2522path%2522%253A%2522%252Feditors%252Fweb%252Fvscode-web%2522%252C%2522id%2522%253A%2522clyn4plhd00093b6m9kxp3ell%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522id%2522%253A%2522clyn4qlp500123b6m90nc40b3%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522CHANGELOG%2522%252C%2522id%2522%253A%2522clyn5575k002t3b6m9tkm5p29%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clyn48z5i00033b6mvf513r8n%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clyn48z5i00033b6mvf513r8n%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D).

Happy coding 👨‍💻👩‍💻
