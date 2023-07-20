const customText = new BarItem('custom_text');
new SettingsCategory('custom_text', 'Custom Text',
    new SettingsInput('text', 'Text', 'Hello World!', 'Hello World!'),
);

var button = document.createElement('button');
button.setAttribute('onclick','eval((config.settings.get("custom_text").text))');
