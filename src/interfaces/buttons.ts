interface ButtonProps {
  type: string;
  handler: () => void;
  label: string;
  children: React.ReactNode;
}

export default ButtonProps;