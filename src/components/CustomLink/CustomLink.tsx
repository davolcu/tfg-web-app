import { forwardRef, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string | { href: string; as: string }; // Allow both static and dynamic routes
  children: React.ReactNode;
  className?: string;
}
const CustomLink = forwardRef(
  (
    { to, children, className, ...props }: CustomLinkProps,
    ref: any
  ): JSX.Element => {
    // When we just have a normal url, we just use it
    if (typeof to === 'string') {
      return (
        <Link href={to}>
          <a className={className} ref={ref} {...props}>
            {children}
          </a>
        </Link>
      );
    }

    // Otherwise pass both "href" / "as"
    return (
      <Link href={to.href} as={to.as}>
        <a className={className} ref={ref} {...props}>
          {children}
        </a>
      </Link>
    );
  }
);

export default CustomLink;
