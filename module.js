const customText = new BarItem('custom_text');
new SettingsCategory('custom_text', 'JavaScript Evaluator',
    new SettingsInput('text', 'Text', 'alert(1)', 'alert(1)'),
);

var button = document.createElement('button');
button.setAttribute('onclick','eval((config.settings.get("custom_text").text))');
