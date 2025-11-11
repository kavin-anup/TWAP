
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  disabled = false
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-[#f25a1a] hover:bg-[#d14815] text-white focus:ring-[#f25a1a]',
    secondary: 'bg-[#1F2853] hover:bg-[#162041] text-white focus:ring-[#1F2853]',
    outline: 'border-2 border-[#1F2853] text-[#1F2853] hover:bg-[#1F2853] hover:text-white focus:ring-[#1F2853]'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {children}
    </button>
  );
}