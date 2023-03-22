// import { userEvent } from '@testing-library/user-event/dist/types/setup';
import { render, screen } from 'test/utilities';
import PackingList from '.';

it('renders the Packing List application', () => {
  render(<PackingList />);
});

it('has the correct title', async () => {
  render(<PackingList />);
  screen.getByText('Packing List');
});

it('has an input field for a new item', () => {
  expect.hasAssertions();
  render(<PackingList />);
  const newItemInput = screen.getByLabelText("New Item Name");
  expect(newItemInput).toBeDefined();
});

it(
  'has a "Add New Item" button that is disabled when the input is empty',
  () => {
    render(<PackingList />);
    const newItemInput = screen.getByLabelText("New Item Name");
    const addNewItemButton = screen.getByRole('button', { name: 'Add New Item'});

    expect(newItemInput).toHaveValue('');
    expect(addNewItemButton).toBeDisabled();
  },
);

it(
  'enables the "Add New Item" button when there is text in the input field',
  async () => {
    const {user} = render(<PackingList />);
    const newItemInput = screen.getByLabelText("New Item Name");
    const addNewItemButton = screen.getByRole('button', { name: 'Add New Item'});

    await user.type(newItemInput, 'MackBoock Prokc');

    expect(newItemInput).not.toHaveValue('');
    expect(addNewItemButton).toBeEnabled();
  },
);

it(
  'adds a new item to the unpacked item list when the clicking "Add New Item"',
  async () => {
    const {user} = render(<PackingList />);
    const newItemInput = screen.getByLabelText("New Item Name");
    const addNewItemButton = screen.getByRole('button', { name: 'Add New Item'});

    await user.type(newItemInput, 'hglsiuhalsgMackBoock Prokc');

    // expect(screen.getByLabelText('hglsiuhalsgMackBoock Prokc')).toBeChecked();

    await user.click(addNewItemButton);

    expect(screen.getByLabelText('hglsiuhalsgMackBoock Prokc')).not.toBeChecked();
  },
);
