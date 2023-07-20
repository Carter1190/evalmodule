import { BarItem, SettingsCategory, SettingsInput } from 'https://flow-os.liquid.is-a.dev/scripts/classes.js';
import config from 'https://flow-os.liquid.is-a.dev/scripts/configManager.js';

const customText = new BarItem('javascript');
new SettingsCategory('custom_text', 'JavascriptEvaluator',
    new SettingsInput('text', 'Javascript Evaluator', 'alert(1)', 'alert(1)'),
);

var button = document.createElement('button');
button.setAttribute('onclick','eval((config.settings.get("custom_text").text))');

export default customText;
