popup-card
==========

Replace the more-info dialog of one entity with a custom lovelace card

This card requires [card-tools](https://github.com/thomasloven/lovelace-card-tools) to be installed.

For installation instructions [see this guide](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins).


## Options

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| type | string | **Required** | `custom:popup-card`
| entity | string | **Required** | Entity id to follow
| card | object | **Required** | The card to display
| title | string | entity id | The title to display on dialog

## Example
```yaml
resources:
  - url: /local/popup-card.js
    type: js
views:
  - title: ...
    cards:
      - type: custom:popup-card
        entity: light.bed_light
        title: Bedside lamp settings
        card:
          type: entities
          entities:
            - light.bed_light
            - type: custom:time-input-row
              entity: input_datetime.on_time
            - type: custom:time-input-row
              entity: input_datetime.off_time
            - input_boolean.weekdays_only
      - type: entities
        entities:
          - light.bed_light
          - light.ceiling_lights
          - light.kitchen_lights
```

![popup-card](https://user-images.githubusercontent.com/1299821/48152470-4b530700-e2c4-11e8-8a4d-d6a2121fc4c5.png)

### Panel mode

If your view is in panel mode, only the first card of the view will be loaded. If you wish to use popup-card for entities on that card, put both your card and popup-card in a stack.

