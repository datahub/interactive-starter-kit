import $ from 'jquery';
import _ from 'lodash';

import './styles.scss';

import Template from './components/template';
import data from './data/data.json';

const hello = _.upperCase(data.hello);
const template = new Template(hello);
$('#app').append(template.render());

