const customText = new BarItem('javascript');
new SettingsCategory('custom_text', 'JavascriptEvaluator',
    new SettingsInput('text', 'Javascript Evaluator', 'alert(1)', 'alert(1)'),
);

var button = document.createElement('button');
button.setAttribute('onclick','eval((config.settings.get("custom_text").text))');
