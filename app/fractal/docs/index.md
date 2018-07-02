# TripRiff Component Library

This pattern library is built using [Fractal](http://fractal.build). The underlying concepts are based on [SMACSS](https://smacss.com).

## Base Rules

The entire compiled base rules can be found in `styles.scss`. These are applied globally to the entire project. Additionally, variables that are used throughout the project can be found in `_base.scss` and are outlined below.

## Layout Rules

Layout rules are individual patterns that wrap module roles and determine how pages are laid out.

## Module Rules

Module rules are the individual patterns (components, modules, etc.) that make up the aesthetic portions of the user interface.

<hr>

# Base Rules

Below are the base values (variables) that are used through the user interface.

## Colors

Variable Name | Value
------------- | -----
`$color-interactive1` | <p style="background-color: #63bcb6; padding: 1em; border: 1px solid #63bcb6; color: #fff; border-radius: 3px">`#63bcb6`</p>
`$color-interactive2` | <p style="background-color: #3d4a7c; padding: 1em; border: 1px solid #3d4a7c; color: #fff; border-radius: 3px">`#3d4a7c`</p>
`$color-dark` | <p style="background-color: #25302f; padding: 1em; border: 1px solid #25302f; color: #fff; border-radius: 3px">`#25302f`</p>
`$color-dark1` | <p style="background-color: #bdbdbd; padding: 1em; border: 1px solid #bdbdbd; color: #fff; border-radius: 3px">`#bdbdbd`</p>
`$color-light` | <p style="background-color: #fff; padding: 1em; border: 1px solid #fff; color: #25302f; border-radius: 3px">`#fff`</p>

## Font Families

The font-stack determines a preferred set of fonts to display to the user.

Variable Name | Value
------------- | -----
`$font-family` | `'Lato', sans-serif`

## Font Sizes

Default values for all text appearing within modules.

Variable Name | Value
------------- | -----
`$font-size-small` | <p style="font-size: 10px;">10px</p>
`$font-size` | <p style="font-size: 15px;">15px</p>
`$font-size-large` | <p style="font-size: 20px;">20px</p>
`$font-size-large2` | <p style="font-size: 25px;">25px</p>
`$font-size-large3` | <p style="font-size: 35px;">35px</p>
`$font-size-large4` | <p style="font-size: 40px;">40px</p>

## Line Heights

Used alongside font sizes within modules.

Variable Name | Value
------------- | -----
`$line-height` | 30px
`$line-height-large` | 40px


## Grid Spacing

Defines the default value used for margins, padding, etc.

Variable Name | Value
------------- | -----
`$gridspacing` | 8px

## Break Points

All modules start for the smallest screen size, then set overrides as needed for each of these breakpoints.

Variable Name | Value
------------- | -----
`$media-phone` | 320px
`$media-tablet` | 768px
`$media-laptop` | 1024px
`$media-hd` | 1366px

## Animation (Transitions)

Default values for duration and easing of all animations.

Variable Name | Value
------------- | -----
`$transition-duration` | `.25s`
`$transition-easing` | `ease-in-out`

## Border Radius

Variable Name | Value
------------- | -----
`$border-radius` | 4px

## Z-index

Variable Name | Value
------------- | -----
`$z-index-low` | 1
`$z-index-medium` | 2
`$z-index-high` | 3
`$z-index-highest` | 4
