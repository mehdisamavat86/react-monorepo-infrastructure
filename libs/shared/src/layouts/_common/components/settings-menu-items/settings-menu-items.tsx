import { Icon } from '@myapp/shared/components';
import { useRedirect } from '@myapp/shared/router';
import { classnames, searchText } from '@myapp/shared/utils';
import { Box, Divider, TextFieldProps } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './styles';
import * as SX from './sx';
import {
  AccountMenuItemType,
  type SettingsMenuItemsProps as Props,
} from './types';

export const SettingsMenuItems = ({
  className,
  items,
  onClickItem,
  searchEnabled,
}: Props) => {
  const redirect = useRedirect();
  const location = useLocation();

  const [filteredItems, setFilteredItems] = useState(items);

  const handleClick = (path: string) => {
    redirect(path);
    if (onClickItem) onClickItem();
  };

  const handleSearchChange: TextFieldProps['onChange'] = (e) => {
    const search = e.target.value;
    if (!search.length) setFilteredItems(items);
    else
      setFilteredItems(
        items?.filter(
          (item) => item.linkTo && searchText(item.label, search) > -1
        )
      );
  };

  const activeItem = items
    ?.filter((item) => !!item.linkTo)
    .find((item) => location.pathname.includes(item.linkTo ?? ''));

  return (
    <>
      {searchEnabled && (
        <Box sx={SX.inputWrapper}>
          <Styled.SearchInput
            variant="outlined"
            size="small"
            placeholder="Search for settings..."
            onChange={handleSearchChange}
          />
        </Box>
      )}
      {!!filteredItems?.length &&
        filteredItems?.map((option, index) => {
          if (option.type === AccountMenuItemType.DIVIDER)
            return <Divider key={index} sx={SX.divider} />;
          if (option.blank && option.linkTo)
            return (
              <Styled.MenuLink to={option.linkTo} target="_blank">
                {!!option.icon && <Icon name={option.icon} color="primary" />}{' '}
                {option.label}
              </Styled.MenuLink>
            );
          const active = activeItem?.linkTo === option.linkTo;

          return option.type === AccountMenuItemType.LINK ? (
            <Styled.MenuItem
              className={classnames({ active })}
              key={index}
              onClick={() => handleClick(option.linkTo ?? '#')}
              disabled={option.disabled}
            >
              {!!option.icon && (
                <Icon
                  name={option.icon}
                  color={active ? 'common.white' : 'primary'}
                />
              )}
              {option.label}
            </Styled.MenuItem>
          ) : (
            <Styled.MenuItemTitle key={index} variant="button">
              {option.label}
            </Styled.MenuItemTitle>
          );
        })}
    </>
  );
};

SettingsMenuItems.displayName = 'SettingsMenuItems';
