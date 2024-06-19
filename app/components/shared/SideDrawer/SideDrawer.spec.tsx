import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';
import { customRender } from '@utils/intlWrapper/IntlWrapper';
import { SideDrawer } from './SideDrawer';

describe('SideDrawer component', () => {
  test('renders with or without a title', () => {
    const { queryAllByTestId } = customRender(
      <SideDrawer visible={true} drawerClose={() => {}}>
        Content
      </SideDrawer>,
    );
    const elements = queryAllByTestId('side-drawer');
    expect(elements.length).toBeGreaterThan(0);
  });

  test('calls onDrawerClose when close button is clicked', () => {
    const onDrawerCloseMock = jest.fn();
    const { getByTestId } = customRender(
      <SideDrawer visible={true} drawerClose={onDrawerCloseMock}>
        Content
      </SideDrawer>,
    );

    fireEvent.click(getByTestId('close-button'));

    expect(onDrawerCloseMock).toHaveBeenCalledTimes(1);
  });

  test('calls drawerClose when onDrawerClose is triggered', () => {
    const drawerCloseMock = jest.fn();
    const { getByTestId } = customRender(
      <SideDrawer visible={true} drawerClose={drawerCloseMock}>
        Content
      </SideDrawer>,
    );

    fireEvent.click(getByTestId('close-button'));

    expect(drawerCloseMock).toHaveBeenCalledWith(false);
  });
});
