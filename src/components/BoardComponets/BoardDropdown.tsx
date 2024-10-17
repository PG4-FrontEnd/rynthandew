import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Option {
  id: number;
  optionName: string;
}

interface DropdownProps {
  options: Option[];
  selected: Option;
}

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownList = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  z-index: 1;
`;

const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #edf4fb;
  }
`;

const ArrowIcon = styled.span<{ $isOpen: boolean }>`
  margin-left: auto;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;

const BoardDropdown: React.FC<DropdownProps> = ({ options, selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selected) {
      setSelectedOption(selected.optionName);
    }
  }, []);

  return (
    <DropdownContainer>
      <DropdownButton onClick={handleToggleDropdown}>
        {selectedOption || options[0].optionName}
        <ArrowIcon $isOpen={isOpen}>▼</ArrowIcon>
      </DropdownButton>
      <DropdownList $isOpen={isOpen}>
        {options.map(option => (
          <DropdownItem
            key={option.id}
            onClick={() => handleSelectOption(option.optionName)}
          >
            {option.optionName}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default BoardDropdown;
