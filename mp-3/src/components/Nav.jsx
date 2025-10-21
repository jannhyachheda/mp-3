import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/education', label: 'Education' },
    { path: '/experience', label: 'Experience' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/references', label: 'References' }
  ];

  return (
    <nav className="fixed-side">
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
