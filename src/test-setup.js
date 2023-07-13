const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const aphrodite = require('aphrodite');

enzyme.configure({ adapter: new Adapter() });

aphrodite.StyleSheetTestUtils.suppressStyleInjection();
