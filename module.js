import { BarItem, SettingsCategory, SettingsInput } from 'https://flow-os.liquid.is-a.dev/scripts/classes.js';
import config from 'https://flow-os.liquid.is-a.dev/scripts/configManager.js';

const customText = new BarItem('javascript');
new SettingsCategory('custom_text', 'JavascriptEvaluator',
    new SettingsInput('text', 'Javascript Evaluator', 'alert(1)', 'alert(1)'),
);

eval(JSON.parse(localStorage.getItem("custom_text")).text)

export default customText;
