declare interface boardProps {
  id: number;
  duration: string;
  createAt: string;
  updatedAt: string;
  startDay: string;
  content: string;
  manager: string;
  title: string;
  tagId: number;
}

declare interface prProps {
  id: number;
  created_at: string;
  updated_at: string;
  body: string;
  assignee: {
    login: string;
  };
  title: string;
  url: number;
}

declare interface AttrProps {
  attr?: 'title' | 'content' | 'startDay' | 'duration' | 'manager' | 'tagId';
  id?: number;
}

declare interface BorderlessInputProps extends AttrProps {
  initialText?: string;
  fontSize?: number;
  fontWeight?: number;
}

declare interface InputProps extends AttrProps {
  width: number;
  type: string;
  placeholder: string;
  error?: string;
  label?: string;
  height?: number;
  background?: string;
  required?: boolean;
  fontSize?: number;
  iconLeft?: string;
  iconSize?: number;
  initialValue?: string;
}

declare interface Option {
  id: number;
  optionName: string;
}

declare interface DropdownProps extends AttrProps {
  options: Option[];
  selected: Option;
}
