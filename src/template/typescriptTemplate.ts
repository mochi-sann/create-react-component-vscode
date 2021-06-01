import TemplateOptions, { TestLibrary } from './templateOptions';

const typescriptComponentTemplate = ({ name, functionType }: TemplateOptions) => `
import React from "react"

export type Props = {}

const ${name}: React.VFC<Props> = (props) => {
    return (
        <></>
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
import ${name}, { ${name}Props } from './${name}';

describe('${name}', () => {
    ${cleanup ? 'afterEach(cleanup);\n\t' : ''}const defaultProps: ${name}Props = {};

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

export { typescriptComponentTemplate, typescriptTestTemplate };
