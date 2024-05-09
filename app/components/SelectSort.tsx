import { Select } from '@radix-ui/themes';
import { Children } from 'react';

interface Props {
  className: string;
  children: React.ReactNode;
}

const SelectSort: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={className}>
      <Select.Root defaultValue='newest'>
        <Select.Trigger />
        <Select.Content position='popper'>
          <Select.Group>
            <Select.Label>Sort by:</Select.Label>
            {children}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default SelectSort;
