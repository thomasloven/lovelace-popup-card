class PopupCard extends HTMLElement {

  makeCard(config) {
    let tag = config.type;
    if(tag.startsWith("custom:"))
      tag = tag.substr(7);
    else
      tag = `hui-${tag}-card`;
    let card = document.createElement(tag);
    card.setConfig(config);
    return card;
  }

  setConfig(config) {
    this.config = config;
    document.querySelector("home-assistant").addEventListener("hass-more-info", (e) => this._handleMoreInfo(e));

    this.card = this.makeCard(config.card);
  }

  _handleMoreInfo(e) {
    if(this.card.parentNode)
      this.card.parentNode.removeChild(this.card);
    if(e.detail && e.detail.entityId && e.detail.entityId == this.config.entity && this.offsetWidth) {
      let moreInfo = document.querySelector("home-assistant").__moreInfoEl;
      moreInfo._page = "none";
      moreInfo.shadowRoot.appendChild(this.card);
    }
  }

  set hass(hass) {
    if(this.card)
      this.card.hass = hass;
  }

  getCardSize() {
    return 0;
  }

}

customElements.define("popup-card", PopupCard);
