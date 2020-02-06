import { text, select, boolean, button } from '@storybook/addon-knobs';

export default { title: 'Button' };

const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'link', 'none'];
const sizes = [ 'xs', 'sm', 'md', 'lg', 'xl' ];

export const playground = () => {
    return (`<cwg-button>This is a test</cwg-button>`)
}