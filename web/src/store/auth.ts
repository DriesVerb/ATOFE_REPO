import { createStore, withProps } from '@ngneat/elf';

interface AuthProps {
  loggedIn: boolean;
}

export const authStore = createStore(
  { name: 'auth' },
  withProps<AuthProps>({ loggedIn: false })
);
