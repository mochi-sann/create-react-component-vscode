import TemplateOptions, { TestLibrary } from './templateOptions';

const typescriptComponentTemplate = ({ name, functionType }: TemplateOptions) => `import React from "react"

export type Props = {}

const ${name}: React.VFC<Props> = (props) => {
  return (
    <div>${name}</div>
  )
}

export default ${name}
`;

const typescriptTestTemplate = (templateOptions: TemplateOptions) => {
  const { testLibrary } = templateOptions;
  return testLibrary === TestLibrary.Enzyme
    ? enzymeTemplate(templateOptions)
    : reactTestingLibraryTemplate(templateOptions);
};

const reactTestingLibraryTemplate = ({ name, cleanup }: TemplateOptions) => `import { ${
  cleanup ? 'cleanup, ' : ''
}render } from '@testing-library/react';
import React from 'react';
import ${name}, { Props } from './${name}';

describe('${name}', () => {
  ${cleanup ? 'afterEach(cleanup);\n\t' : ''}const defaultProps: Props = {};

  it('should render', () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<${name} {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText('${name}')).toBeTruthy();
  });
});
`;

const enzymeTemplate = ({ name }: TemplateOptions) => `import { shallow } from 'enzyme';
import React from 'react';
import ${name}, { ${name}Props } from './${name}';

describe('${name}', () => {
  const defaultProps: ${name}Props = {};

  it('should render', () => {
    const props = {...defaultProps};
    const wrapper = shallow(<${name} {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
`;

const StoryBookTSTemplate = ({ name, functionType }: TemplateOptions) => `
import { Meta, Story } from "@storybook/react"
import React from "react"

import ${name.substring(0, 1).toUpperCase() + name.substring(1)}, { Props } from "./${name}"

export default {
  title: "coponent/${name.substring(0, 1).toUpperCase() + name.substring(1)}",
  component: ${name.substring(0, 1).toUpperCase() + name.substring(1)},
  argTypes: {
    
  }
} as Meta

const Template: Story<Props> = (args) => <${name.substring(0, 1).toUpperCase() + name.substring(1)} {...args} />

export const Default = Template.bind({})
Default.args = {
}

`;

const IndexTsTemplate = ({ name, functionType }: TemplateOptions) => `
import ${name} , {Props} from "./${name}"
import React from "React"

export default name; 
`;

export { typescriptComponentTemplate, typescriptTestTemplate, StoryBookTSTemplate, IndexTsTemplate };
