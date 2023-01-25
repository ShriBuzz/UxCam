export interface TButton extends React.HTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium' | 'large';
  variant?: 'solid' | 'outline';
  title: string;
}
