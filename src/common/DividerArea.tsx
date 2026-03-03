

interface DividerAreaProps {
  className?: string;
  dividerClass?: string;
}

export default function DividerArea({ className, dividerClass = 'divider3' }: DividerAreaProps) {
  return (
    <div className={`container ${className || ''}`}>
      <div className={dividerClass}></div>
    </div>
  )
}
