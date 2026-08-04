
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema } from "@/lib/structured-data";

interface CollectionLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const CollectionLayout = ({ title, description, children }: CollectionLayoutProps) => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <StructuredData
        schema={breadcrumbSchema([
          { name: "Collections", path: "/#collections" },
          { name: title, path: pathname },
        ])}
      />
      <div className="container-custom py-32">
        <Link 
          to="/" 
          className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">{title}</h1>
        <p className="text-muted-foreground max-w-2xl mb-16">{description}</p>
        
        {children}
      </div>
    </div>
  );
};

export default CollectionLayout;
