import { navItems } from '@/core/constants';
import Link from 'next/link';

export default function NavItems() {
  return (
    <nav>
      <ul className="flex">
        {navItems.map((nav) => (
          <li className="ml-3">
            <Link href={nav.path}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
