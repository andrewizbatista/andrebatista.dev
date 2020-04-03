/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const componentsPath = path.resolve(__dirname, '../../../components');
const templateFiles = ['index.tsx', 'styles.ts'];

const componentGenerator = {
  description: 'Create a new <Component />',
  prompts: [
    {
      type: 'input',
      name: 'componentName',
      message: 'What should be the name of the Component?',
      default: 'UnnamedComponent',
      validate: (userInput) => {
        const existingComponents = fs.readdirSync(componentsPath);

        if (!/.+/.test(userInput)) {
          return 'You must provide a component name.';
        }

        if (existingComponents.indexOf(userInput) >= 0) {
          return 'That component name already exists.';
        }

        return true;
      },
    },
  ],
  actions: () => {
    const newPath = path.join(componentsPath, '{{pascalCase componentName}}');

    const actions = [];

    templateFiles.forEach((filename) => {
      actions.push({
        type: 'add',
        path: path.join(newPath, filename),
        templateFile: `./component/${filename}.hbs`,
        abortOnFail: true,
      });
    });

    return actions;
  },
};

module.exports = componentGenerator;
