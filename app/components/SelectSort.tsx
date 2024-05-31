import { Select } from '@radix-ui/themes';
import { Children } from 'react';

interface SortProps {
  className: string;
  onSortChange: (value: string) => void;
  sortOptions: string[];
}

const SelectSort: React.FC<SortProps> = ({
  className,
  onSortChange,
  sortOptions = [],
}) => {
  return (
    <div className={className}>
      <Select.Root defaultValue='oldest' onValueChange={onSortChange}>
        <Select.Trigger />
        <Select.Content position='popper'>
          <Select.Group>
            <Select.Label>Sort by:</Select.Label>
            {sortOptions.map((option) => (
              <Select.Item key={option} value={option}>
                {option}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default SelectSort;
