import { memo } from 'react'

interface AccordionBirdsProps {
  className: string;
  classActive: string;
  active: boolean;
}

const AccordionBirds = memo(({
  className,
  classActive,
  active,
}: AccordionBirdsProps) => {
  return (
    <svg
      className={active ? `${className} ${classActive}` : className}
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.42708 1.1L4.66042 4.33333L7.89375 1.1C8.21875 0.775 8.74375 0.775 9.06875 1.1C9.39375 1.425 9.39375 1.95 9.06875 2.275L5.24375 6.1C4.91875 6.425 4.39375 6.425 4.06875 6.1L0.24375 2.275C-0.08125 1.95 -0.08125 1.425 0.24375 1.1C0.56875 0.783333 1.10208 0.775 1.42708 1.1Z"
        fill="#373745"
      />
    </svg>
  );
});

export { AccordionBirds };
