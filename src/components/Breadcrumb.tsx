import { useNavigate, useLocation } from 'react-router-dom';
import { House, CaretRight } from 'phosphor-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (url: string) => {
    if (url === '/') {
      navigate('/');
    } else {
      navigate(url);
    }
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <button
            onClick={() => handleClick('/')}
            className="flex items-center hover:text-foreground transition-colors"
            aria-label="Home"
          >
            <House size={16} weight="light" />
          </button>
        </li>
        {items.map((item, index) => (
          <li key={item.url} className="flex items-center">
            <CaretRight size={12} weight="light" className="mx-2 text-muted-foreground/50" />
            {index === items.length - 1 ? (
              <span className="text-foreground font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <button
                onClick={() => handleClick(item.url)}
                className="hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

