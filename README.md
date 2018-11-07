popup-card
==========

Replace the more-info dialog of one entity with a custom lovelace card


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
  - url /local/popup-card.js
    type: js
views:
  - title: ...
    cards:
      - type: custom:popup-card
        entity: light.bed_light
        card:
          type: entities
          title: Bedside lamp settings
          show_header_toggle: false
          entities:
            - type: section
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

![popup-card](https://user-images.githubusercontent.com/1299821/48073399-f8535400-e1de-11e8-9b07-687337295217.jpg)

