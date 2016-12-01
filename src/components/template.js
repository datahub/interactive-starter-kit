import Mustache from 'mustache';
import template from './template.html';

export default class Button {

  constructor(text) {
    this.text = text;
  }

  render(text = this.text) {
    return Mustache.render(template, { text });
  }

}
