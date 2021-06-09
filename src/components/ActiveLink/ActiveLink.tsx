import { AnchorHTMLAttributes } from 'react';
import { useRouter } from 'next/router';
/** Components */
import CustomLink from '@components/CustomLink';

interface ActiveLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string | { href: string; as: string }; // Allow both static and dynamic routes
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

const ActiveLink = ({
  to,
  children,
  className = '',
  activeClassName = '',
  ...props
}: ActiveLinkProps): JSX.Element => {
  const { pathname } = useRouter();

  const isActive =
    typeof to === 'string'
      ? to === pathname
      : pathname === to.href || pathname === to.as;

  const activeLinkClassName = isActive
    ? `${className} ${activeClassName}`.trim()
    : className;

  return (
    <CustomLink to={to} className={activeLinkClassName} {...props}>
      {children}
    </CustomLink>
  );
};

export default ActiveLink;
