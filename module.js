import { BarItem, SettingsCategory, SettingsTextarea } from 'https://flow-os.liquid.is-a.dev/scripts/classes.js';
import config from 'https://flow-os.liquid.is-a.dev/scripts/configManager.js';

const customText = new BarItem('javascript');
new SettingsCategory('custom_text', 'JavascriptEvaluator',
    new SettingsTextarea('text', 'Javascript Evaluator', 'alert(1)\n', 'alert(1)\n'),
);

eval(JSON.parse(localStorage.getItem("custom_text")).text)

export default customText;
